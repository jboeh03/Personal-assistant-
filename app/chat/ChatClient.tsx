"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Provider } from "@/lib/llm";

type ConversationRow = { id: string; title: string; updated_at: string };
type Msg = { role: "user" | "assistant"; content: string };

export default function ChatClient({
  email,
  conversations,
}: {
  email: string;
  conversations: ConversationRow[];
}) {
  const supabase = createClient();
  const [convos, setConvos] = useState<ConversationRow[]>(conversations);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [model, setModel] = useState<Provider>("claude");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function openConversation(id: string) {
    setActiveId(id);
    setError(null);
    const { data } = await supabase
      .from("messages")
      .select("role, content")
      .eq("conversation_id", id)
      .order("created_at", { ascending: true });
    setMessages(
      (data ?? []).filter(
        (m): m is Msg => m.role === "user" || m.role === "assistant",
      ),
    );
  }

  function newChat() {
    setActiveId(null);
    setMessages([]);
    setError(null);
  }

  async function send() {
    const content = input.trim();
    if (!content || sending) return;

    setSending(true);
    setError(null);
    setInput("");
    setMessages((m) => [...m, { role: "user", content }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId: activeId, content, model }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Request failed");

      setMessages((m) => [...m, { role: "assistant", content: data.answer }]);

      if (!activeId && data.conversationId) {
        setActiveId(data.conversationId);
        setConvos((c) => [
          {
            id: data.conversationId,
            title: content.slice(0, 60),
            updated_at: new Date().toISOString(),
          },
          ...c,
        ]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-neutral-200 p-3 sm:flex dark:border-neutral-800">
        <button
          onClick={newChat}
          className="mb-3 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white dark:bg-white dark:text-neutral-900"
        >
          + New chat
        </button>
        <div className="flex-1 space-y-1 overflow-y-auto">
          {convos.map((c) => (
            <button
              key={c.id}
              onClick={() => openConversation(c.id)}
              className={`block w-full truncate rounded-md px-2 py-1.5 text-left text-sm ${
                c.id === activeId
                  ? "bg-neutral-200 dark:bg-neutral-800"
                  : "hover:bg-neutral-100 dark:hover:bg-neutral-900"
              }`}
            >
              {c.title || "Untitled"}
            </button>
          ))}
        </div>
        <form action="/auth/signout" method="post" className="pt-2">
          <p className="truncate px-2 text-xs text-neutral-500">{email}</p>
          <button className="mt-1 w-full rounded-md px-2 py-1.5 text-left text-sm text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900">
            Sign out
          </button>
        </form>
      </aside>

      {/* Main */}
      <main className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
          <h1 className="text-sm font-semibold">Personal Assistant</h1>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-neutral-500">Model</span>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value as Provider)}
              className="rounded-md border border-neutral-300 bg-white px-2 py-1 dark:border-neutral-700 dark:bg-neutral-900"
            >
              <option value="claude">Claude</option>
              <option value="gemini">Gemini</option>
            </select>
          </label>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <p className="mt-20 text-center text-sm text-neutral-400">
              Ask me anything to get started.
            </p>
          ) : (
            messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm ${
                    m.role === "user"
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "bg-neutral-100 dark:bg-neutral-800"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))
          )}
          {sending ? (
            <p className="text-sm text-neutral-400">Thinking…</p>
          ) : null}
          {error ? (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          ) : null}
          <div ref={endRef} />
        </div>

        <div className="border-t border-neutral-200 p-3 dark:border-neutral-800">
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              rows={1}
              placeholder="Message…"
              className="flex-1 resize-none rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900"
            />
            <button
              onClick={send}
              disabled={sending || !input.trim()}
              className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-white dark:text-neutral-900"
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
