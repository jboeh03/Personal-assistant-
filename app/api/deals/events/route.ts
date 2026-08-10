import { NextResponse } from "next/server";
import { READ_ONLY_MESSAGE, canEdit } from "@/lib/deals/mode";
import { addEvent } from "@/lib/deals/store";

export async function POST(request: Request) {
  if (!canEdit) {
    return NextResponse.json({ error: READ_ONLY_MESSAGE }, { status: 503 });
  }
  let body: { text?: string; source?: string };
  try {
    body = (await request.json()) as { text?: string; source?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const text = (body.text ?? "").trim();
  if (!text) {
    return NextResponse.json({ error: "Empty event" }, { status: 400 });
  }
  await addEvent(text, body.source?.trim() || "human");
  return NextResponse.json({ ok: true });
}
