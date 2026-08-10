import { NextResponse } from "next/server";
import { READ_ONLY_MESSAGE, canEdit } from "@/lib/deals/mode";
import { addFindingActivity, updateFinding } from "@/lib/deals/store";
import type { Assignee, WorkStatus } from "@/lib/deals/types";

interface PatchBody {
  id: string;
  work_status?: WorkStatus;
  assignee?: Assignee;
  actual_cost_usd?: number | null;
  note?: string;
}

export async function PATCH(request: Request) {
  if (!canEdit) {
    return NextResponse.json({ error: READ_ONLY_MESSAGE }, { status: 503 });
  }
  let body: PatchBody;
  try {
    body = (await request.json()) as PatchBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!body.id) {
    return NextResponse.json({ error: "Missing finding id" }, { status: 400 });
  }

  const patch: Record<string, unknown> = {};
  if (body.work_status) patch.work_status = body.work_status;
  if (body.assignee) patch.assignee = body.assignee;
  if (body.actual_cost_usd !== undefined)
    patch.actual_cost_usd = body.actual_cost_usd;

  const updated = await updateFinding(body.id, patch);
  if (!updated) {
    return NextResponse.json({ error: "Finding not found" }, { status: 404 });
  }
  if (body.note && body.note.trim()) {
    await addFindingActivity(body.id, body.note.trim());
  }
  return NextResponse.json({ ok: true, finding: updated });
}
