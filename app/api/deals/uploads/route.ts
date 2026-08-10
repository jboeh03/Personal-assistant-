import { NextResponse } from "next/server";
import { READ_ONLY_MESSAGE, canEdit } from "@/lib/deals/mode";
import { randomUUID } from "node:crypto";
import { addMedia, saveUpload } from "@/lib/deals/store";
import type { MediaItem, MediaKind } from "@/lib/deals/types";

const VALID_KINDS: MediaKind[] = [
  "before",
  "after",
  "receipt",
  "warranty",
  "document",
];

function safeName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-80);
}

export async function POST(request: Request) {
  if (!canEdit) {
    return NextResponse.json({ error: READ_ONLY_MESSAGE }, { status: 503 });
  }
  const form = await request.formData();
  const file = form.get("file");
  const kind = String(form.get("kind") ?? "") as MediaKind;
  const findingId = form.get("findingId")
    ? String(form.get("findingId"))
    : null;
  const label = form.get("label") ? String(form.get("label")) : undefined;

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }
  if (!VALID_KINDS.includes(kind)) {
    return NextResponse.json({ error: "Invalid kind" }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const id = randomUUID();
  const ext = file.name.includes(".") ? file.name.split(".").pop() : "bin";
  const subdir =
    kind === "document" ? "documents" : `repairs/${findingId ?? "misc"}`;
  const filename = `${kind}-${Date.now()}-${safeName(file.name)}`;

  const { url } = await saveUpload(bytes, subdir, filename);

  const item: MediaItem = {
    id,
    kind,
    findingId,
    label: label ?? file.name,
    filename,
    url,
    mime: file.type || `application/${ext}`,
    size: bytes.length,
    uploadedAt: new Date().toISOString(),
  };
  await addMedia(item);
  return NextResponse.json({ ok: true, item });
}
