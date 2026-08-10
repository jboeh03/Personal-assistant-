"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export function AddEvent() {
  const [text, setText] = useState("");
  const [pending, start] = useTransition();
  const router = useRouter();

  function submit() {
    const t = text.trim();
    if (!t) return;
    start(async () => {
      await fetch("/api/deals/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: t, source: "human" }),
      });
      setText("");
      router.refresh();
    });
  }

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 rounded-lg border border-[#d9d1c1] bg-white px-3 py-2 text-sm outline-none focus:border-[#8a5a2b] dark:border-[#333c3e] dark:bg-[#161b1d]"
        placeholder="Log an update… (e.g. 'roofer quote in — $4,200')"
        value={text}
        disabled={pending}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button
        onClick={submit}
        disabled={pending || !text.trim()}
        className="rounded-lg bg-[#1f3a3d] px-4 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-[#cfe0d6] dark:text-[#14181a]"
      >
        {pending ? "Saving…" : "Log"}
      </button>
    </div>
  );
}
