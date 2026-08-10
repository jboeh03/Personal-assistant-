import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { addTodo, updateTodo } from "@/lib/deals/store";
import type { Todo, TodoStatus } from "@/lib/deals/types";

export async function POST(request: Request) {
  let body: Partial<Todo>;
  try {
    body = (await request.json()) as Partial<Todo>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const title = (body.title ?? "").trim();
  if (!title) {
    return NextResponse.json({ error: "Title required" }, { status: 400 });
  }
  const todo: Todo = {
    id: randomUUID(),
    title,
    detail: body.detail?.trim() || undefined,
    assignee: body.assignee?.trim() || undefined,
    assigneeEmail: body.assigneeEmail?.trim() || undefined,
    status: (body.status as TodoStatus) ?? "open",
    due: body.due || undefined,
    findingId: body.findingId ?? null,
    createdAt: new Date().toISOString(),
    createdBy: body.createdBy?.trim() || "Jeff",
  };
  await addTodo(todo);
  return NextResponse.json({ ok: true, todo });
}

export async function PATCH(request: Request) {
  let body: { id?: string } & Partial<Todo>;
  try {
    body = (await request.json()) as { id?: string } & Partial<Todo>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!body.id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const { id, ...patch } = body;
  const updated = await updateTodo(id, patch);
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true, todo: updated });
}
