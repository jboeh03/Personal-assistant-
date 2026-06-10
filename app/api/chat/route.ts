import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { runChat, type ChatTurn, type Provider } from "@/lib/llm";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  let body: { conversationId?: string; content?: string; model?: Provider };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const content = body.content?.trim();
  const provider: Provider = body.model === "gemini" ? "gemini" : "claude";
  if (!content) {
    return NextResponse.json({ error: "Empty message" }, { status: 400 });
  }

  // Resolve (or create) the conversation, scoped to this user via RLS.
  let conversationId = body.conversationId;
  if (!conversationId) {
    const { data, error } = await supabase
      .from("conversations")
      .insert({
        user_id: user.id,
        title: content.slice(0, 60),
        model: provider,
      })
      .select("id")
      .single();
    if (error || !data) {
      return NextResponse.json(
        { error: error?.message ?? "Could not create conversation" },
        { status: 500 },
      );
    }
    conversationId = data.id;
  }

  // Load prior turns for context (RLS ensures only this user's rows).
  const { data: history } = await supabase
    .from("messages")
    .select("role, content")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true });

  const priorTurns: ChatTurn[] = (history ?? [])
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ role: m.role as ChatTurn["role"], content: m.content }));

  // Persist the user's message.
  await supabase.from("messages").insert({
    conversation_id: conversationId,
    user_id: user.id,
    role: "user",
    content,
  });

  // Call the selected model.
  let answer: string;
  try {
    answer = await runChat(provider, priorTurns, content);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "LLM request failed";
    return NextResponse.json({ error: msg, conversationId }, { status: 502 });
  }

  // Persist the assistant's reply.
  await supabase.from("messages").insert({
    conversation_id: conversationId,
    user_id: user.id,
    role: "assistant",
    content: answer,
    model: provider,
  });

  return NextResponse.json({ conversationId, answer, model: provider });
}
