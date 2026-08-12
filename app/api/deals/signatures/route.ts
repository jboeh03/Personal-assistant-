import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { READ_ONLY_MESSAGE, canEdit } from "@/lib/deals/mode";
import {
  DocuSealUnavailableError,
  createSubmission,
  createTemplateFromPdf,
  isConfigured,
  signingUrl,
} from "@/lib/docuseal";
import { appendSignaturePage } from "@/lib/deals/signature-page";
import { syncSignature } from "@/lib/deals/signature-sync";
import { getConfiguredSigners } from "@/lib/deals/signers";
import {
  addSignature,
  getMedia,
  getSignatures,
  saveUpload,
} from "@/lib/deals/store";
import type { SignatureRequest } from "@/lib/deals/types";

const MAX_PDF_BYTES = 15 * 1024 * 1024;

/** List requests; live-sync the pending ones against DocuSeal. */
export async function GET() {
  const rows = await getSignatures();
  let syncError: string | null = null;

  let items = rows;
  if (isConfigured()) {
    items = await Promise.all(
      rows.map(async (row) => {
        try {
          return await syncSignature(row);
        } catch (error: unknown) {
          syncError =
            error instanceof DocuSealUnavailableError
              ? "Signing service unreachable — statuses may be stale."
              : "Some signature statuses could not be refreshed.";
          return row;
        }
      }),
    );
  }

  // Attach the vault URL of each filed signed PDF for direct linking.
  const media = await getMedia();
  const withUrls = items.map((item) => ({
    ...item,
    signedUrl: item.signedMediaId
      ? (media.find((m) => m.id === item.signedMediaId)?.url ?? null)
      : null,
  }));

  return NextResponse.json({
    items: withUrls,
    docusealConfigured: isConfigured(),
    syncError,
  });
}

/** Create a signature request: append signature page → template → submission. */
export async function POST(request: Request) {
  if (!canEdit) {
    return NextResponse.json({ error: READ_ONLY_MESSAGE }, { status: 503 });
  }
  if (!isConfigured()) {
    return NextResponse.json(
      { error: "Signing service is not configured yet (DOCUSEAL_URL / DOCUSEAL_API_TOKEN)." },
      { status: 503 },
    );
  }
  const signers = getConfiguredSigners();
  if (!signers) {
    return NextResponse.json(
      { error: "Signers are not configured (SIGNER1_/SIGNER2_ NAME and EMAIL env vars)." },
      { status: 503 },
    );
  }

  const form = await request.formData();
  const file = form.get("file");
  const title = String(form.get("title") ?? "").trim();

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }
  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }
  if (file.size > MAX_PDF_BYTES) {
    return NextResponse.json({ error: "PDF too large (15 MB max)" }, { status: 400 });
  }
  const bytes = Buffer.from(await file.arrayBuffer());
  if (bytes.subarray(0, 5).toString("latin1") !== "%PDF-") {
    return NextResponse.json({ error: "Only PDF files can be sent for signature" }, { status: 400 });
  }

  const id = randomUUID();

  try {
    const { pdf, fields } = await appendSignaturePage(bytes, title, signers);
    const template = await createTemplateFromPdf(title, pdf, fields);
    const submitters = await createSubmission(template.id, signers);

    // Keep the original upload for reference (storage only, not a vault row).
    const { url: sourceUrl } = await saveUpload(
      bytes,
      `signatures/${id}`,
      `original-${Date.now()}.pdf`,
    );

    const item: SignatureRequest = {
      id,
      title,
      status: "pending",
      docusealTemplateId: template.id,
      docusealSubmissionId: submitters[0]?.submission_id ?? null,
      signers: signers.map((s) => {
        const remote = submitters.find((r) => r.role === s.role);
        return {
          role: s.role,
          name: s.name,
          email: s.email,
          status: "awaiting" as const,
          docusealSubmitterId: remote?.id ?? null,
          signUrl: remote?.slug ? signingUrl(remote.slug) : null,
          signedAt: null,
        };
      }),
      sourceUrl,
      signedMediaId: null,
      createdAt: new Date().toISOString(),
      completedAt: null,
    };
    await addSignature(item);
    return NextResponse.json({ ok: true, item });
  } catch (error: unknown) {
    const message =
      error instanceof DocuSealUnavailableError
        ? error.message
        : error instanceof Error
          ? error.message
          : "Failed to create the signature request";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
