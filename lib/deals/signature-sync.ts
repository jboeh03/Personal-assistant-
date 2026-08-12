// Poll-on-load completion sync for signature requests.
//
// Idempotent by design: a request only transitions pending → completed once,
// the vault row is inserted before the request row is stamped, and re-stamping
// is guarded by `signedMediaId == null`. Safe to call from every page load and
// from the deal monitor.

import { randomUUID } from "node:crypto";
import {
  downloadDocument,
  getSubmission,
  signingUrl,
  type DocuSealSubmissionState,
} from "@/lib/docuseal";
import { addMedia, saveUpload, updateSignature } from "./store";
import type {
  MediaItem,
  SignatureRequest,
  SignatureSigner,
  SignerStatus,
} from "./types";

function mapSignerStatus(docusealStatus: string): SignerStatus {
  switch (docusealStatus) {
    case "completed":
      return "completed";
    case "declined":
      return "declined";
    case "opened":
      return "opened";
    default:
      return "awaiting";
  }
}

function mergedSigners(
  row: SignatureRequest,
  sub: DocuSealSubmissionState,
): SignatureSigner[] {
  return row.signers.map((s) => {
    const remote = sub.submitters.find(
      (r) => r.id === s.docusealSubmitterId || r.role === s.role,
    );
    if (!remote) return s;
    return {
      ...s,
      status: mapSignerStatus(remote.status),
      signedAt: remote.completed_at ?? s.signedAt ?? null,
      signUrl: remote.slug ? signingUrl(remote.slug) : s.signUrl ?? null,
      docusealSubmitterId: remote.id,
    };
  });
}

async function fileSignedPdf(
  row: SignatureRequest,
  sub: DocuSealSubmissionState,
): Promise<string | null> {
  const doc = sub.documents[0];
  if (!doc) return null;
  const bytes = await downloadDocument(doc.url);
  const filename = `signed-${Date.now()}-${row.id.slice(0, 8)}.pdf`;
  const { url } = await saveUpload(bytes, "documents", filename);
  const media: MediaItem = {
    id: randomUUID(),
    kind: "document",
    findingId: null,
    label: `${row.title} (signed)`,
    filename,
    url,
    mime: "application/pdf",
    size: bytes.length,
    uploadedAt: new Date().toISOString(),
  };
  await addMedia(media);
  return media.id;
}

/**
 * Refresh one pending request against DocuSeal. Returns the updated row (or
 * the original when nothing changed). Throws DocuSealUnavailableError when the
 * service is unreachable — callers decide how loudly to surface that.
 */
export async function syncSignature(
  row: SignatureRequest,
): Promise<SignatureRequest> {
  if (row.status !== "pending" || !row.docusealSubmissionId) return row;

  const sub = await getSubmission(row.docusealSubmissionId);
  const signers = mergedSigners(row, sub);
  const patch: Partial<SignatureRequest> = {};

  if (JSON.stringify(signers) !== JSON.stringify(row.signers)) {
    patch.signers = signers;
  }

  if (sub.status === "completed" && !row.signedMediaId) {
    // Vault insert first; stamping the row last keeps the transition safe to
    // retry if anything in between fails.
    const mediaId = await fileSignedPdf(row, sub);
    patch.signedMediaId = mediaId;
    patch.status = "completed";
    patch.completedAt = sub.completed_at ?? new Date().toISOString();
  } else if (sub.status === "declined" || sub.status === "expired") {
    patch.status = "declined";
  }

  if (Object.keys(patch).length === 0) return row;
  return (await updateSignature(row.id, patch)) ?? { ...row, ...patch };
}
