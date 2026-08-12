import { NextResponse } from "next/server";
import { READ_ONLY_MESSAGE, canEdit } from "@/lib/deals/mode";
import { DocuSealUnavailableError, remindSubmitter } from "@/lib/docuseal";
import { getSignatures } from "@/lib/deals/store";

/** Re-send the signature-request email to the next signer who hasn't signed. */
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!canEdit) {
    return NextResponse.json({ error: READ_ONLY_MESSAGE }, { status: 503 });
  }
  const { id } = await params;
  const rows = await getSignatures();
  const row = rows.find((r) => r.id === id);
  if (!row) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const next = row.signers.find(
    (s) => s.status !== "completed" && s.docusealSubmitterId,
  );
  if (!next?.docusealSubmitterId) {
    return NextResponse.json(
      { error: "No pending signer to remind" },
      { status: 400 },
    );
  }
  try {
    await remindSubmitter(next.docusealSubmitterId);
    return NextResponse.json({ ok: true, reminded: next.name });
  } catch (error: unknown) {
    const message =
      error instanceof DocuSealUnavailableError
        ? error.message
        : "Could not send the reminder";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
