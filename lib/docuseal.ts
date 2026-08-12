// Server-only DocuSeal API client (self-hosted instance).
//
// Env:
//   DOCUSEAL_URL        — base URL of the Railway instance (no trailing slash)
//   DOCUSEAL_API_TOKEN  — X-Auth-Token from DocuSeal → Settings → API
//
// The cockpit degrades gracefully when these are unset: `isConfigured()` is
// false, the UI shows a "signing service offline" banner, and creation fails
// with a clear message. Never import this from client components.

export class DocuSealUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DocuSealUnavailableError";
  }
}

export interface DocuSealFieldArea {
  /** Fractions of page width/height, origin top-left. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** 0-based page index within the uploaded document. */
  page: number;
}

export interface DocuSealField {
  name: string;
  role: string;
  type: "signature" | "date" | "text";
  required?: boolean;
  areas: DocuSealFieldArea[];
}

export interface DocuSealSubmitterState {
  id: number;
  submission_id: number;
  role: string;
  email: string;
  status: string; // pending | opened | completed | declined | ...
  completed_at: string | null;
  /** Signing-page slug → `${base}/s/${slug}` */
  slug: string;
}

export interface DocuSealSubmissionState {
  id: number;
  status: string; // pending | completed | declined | expired
  completed_at: string | null;
  submitters: DocuSealSubmitterState[];
  documents: { name: string; url: string }[];
  audit_log_url: string | null;
}

function config(): { base: string; token: string } | null {
  const base = process.env.DOCUSEAL_URL?.replace(/\/+$/, "");
  const token = process.env.DOCUSEAL_API_TOKEN;
  if (!base || !token) return null;
  return { base, token };
}

export function isConfigured(): boolean {
  return config() !== null;
}

export function signingUrl(slug: string): string {
  const cfg = config();
  return cfg ? `${cfg.base}/s/${slug}` : "";
}

async function api<T>(
  path: string,
  init: { method?: string; body?: unknown } = {},
): Promise<T> {
  const cfg = config();
  if (!cfg) {
    throw new DocuSealUnavailableError(
      "DocuSeal is not configured (set DOCUSEAL_URL and DOCUSEAL_API_TOKEN).",
    );
  }
  let res: Response;
  try {
    res = await fetch(`${cfg.base}/api${path}`, {
      method: init.method ?? "GET",
      headers: {
        "X-Auth-Token": cfg.token,
        "Content-Type": "application/json",
      },
      body: init.body === undefined ? undefined : JSON.stringify(init.body),
      cache: "no-store",
    });
  } catch (error: unknown) {
    throw new DocuSealUnavailableError(
      `DocuSeal unreachable at ${cfg.base}: ${error instanceof Error ? error.message : "connection failed"}`,
    );
  }
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`DocuSeal ${init.method ?? "GET"} ${path} → ${res.status}: ${detail.slice(0, 300)}`);
  }
  return (await res.json()) as T;
}

/** Create a template from a PDF with explicit field placements. */
export async function createTemplateFromPdf(
  name: string,
  pdf: Buffer,
  fields: DocuSealField[],
): Promise<{ id: number }> {
  return api<{ id: number }>("/templates/pdf", {
    method: "POST",
    body: {
      name,
      documents: [
        {
          name,
          file: pdf.toString("base64"),
          fields,
        },
      ],
    },
  });
}

/**
 * Create an ordered submission (signers sign in array order).
 * `send_email: true` — DocuSeal emails each signer when it becomes their turn
 * (requires SMTP configured on the instance).
 */
export async function createSubmission(
  templateId: number,
  submitters: { role: string; name: string; email: string }[],
): Promise<DocuSealSubmitterState[]> {
  return api<DocuSealSubmitterState[]>("/submissions", {
    method: "POST",
    body: {
      template_id: templateId,
      send_email: true,
      order: "preserved",
      submitters,
    },
  });
}

export async function getSubmission(
  id: number,
): Promise<DocuSealSubmissionState> {
  return api<DocuSealSubmissionState>(`/submissions/${id}`);
}

/** Re-send the signature-request email to a submitter. */
export async function remindSubmitter(submitterId: number): Promise<void> {
  await api(`/submitters/${submitterId}`, {
    method: "PUT",
    body: { send_email: true },
  });
}

/** Download a completed document (signed PDF / audit log) from DocuSeal. */
export async function downloadDocument(url: string): Promise<Buffer> {
  const cfg = config();
  if (!cfg) {
    throw new DocuSealUnavailableError("DocuSeal is not configured.");
  }
  const res = await fetch(url, {
    headers: { "X-Auth-Token": cfg.token },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`DocuSeal document download failed: ${res.status}`);
  }
  return Buffer.from(await res.arrayBuffer());
}
