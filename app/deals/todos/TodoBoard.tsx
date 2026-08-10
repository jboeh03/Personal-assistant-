"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Todo, TodoStatus } from "@/lib/deals/types";

const STATUS: { value: TodoStatus; label: string; cls: string }[] = [
  { value: "open", label: "Open", cls: "bg-[#f4f6f8] text-[#5b6770] dark:bg-[#182530] dark:text-[#98a4ae]" },
  { value: "in_progress", label: "In progress", cls: "bg-[#c6dae7] text-[#003a70] dark:bg-[#16283a] dark:text-[#c6dae7]" },
  { value: "blocked", label: "Blocked", cls: "bg-[#f6e5e5] text-[#b91c1c] dark:bg-[#2a1616] dark:text-[#e79a9a]" },
  { value: "done", label: "Done", cls: "bg-[#003a70] text-white dark:text-[#c6dae7]" },
];

const input =
  "rounded-md border border-[#e5e9ec] bg-white px-2 py-1 text-sm outline-none focus:border-[#003a70] dark:border-[#2a3a48] dark:bg-[#0f1720]";

function statusMeta(s: TodoStatus) {
  return STATUS.find((x) => x.value === s) ?? STATUS[0];
}

export function TodoBoard({ initial }: { initial: Todo[] }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [assigneeEmail, setAssigneeEmail] = useState("");
  const [due, setDue] = useState("");

  const active = initial.filter((t) => t.status !== "done");
  const done = initial.filter((t) => t.status === "done");

  function add() {
    if (!title.trim()) return;
    start(async () => {
      await fetch("/api/deals/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          assignee: assignee || undefined,
          assigneeEmail: assigneeEmail || undefined,
          due: due || undefined,
        }),
      });
      setTitle("");
      setAssignee("");
      setAssigneeEmail("");
      setDue("");
      router.refresh();
    });
  }

  function patch(id: string, body: Partial<Todo>) {
    start(async () => {
      await fetch("/api/deals/todos", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...body }),
      });
      router.refresh();
    });
  }

  function emailHref(t: Todo): string {
    const subject = encodeURIComponent(`Stonington sale — ${t.title}`);
    const body = encodeURIComponent(
      `Hi ${t.assignee ?? ""},\n\nFollowing up on the Stonington Rd sale:\n\n${t.title}${t.detail ? "\n" + t.detail : ""}${t.due ? "\n\nNeeded by: " + t.due : ""}\n\nThanks,\nJeff`,
    );
    return `mailto:${t.assigneeEmail ?? ""}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="space-y-5">
      {/* Add */}
      <div className="rounded-xl border border-[#e5e9ec] bg-white p-4 shadow-sm dark:border-[#22303c] dark:bg-[#111a24]">
        <div className="grid gap-2 sm:grid-cols-[1fr_auto_auto_auto]">
          <input
            className={input}
            placeholder="New task (e.g. 'Send response to Zach for signature')"
            value={title}
            disabled={pending}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
          />
          <input
            className={input + " w-32"}
            placeholder="Assignee"
            value={assignee}
            disabled={pending}
            onChange={(e) => setAssignee(e.target.value)}
          />
          <input
            className={input + " w-44"}
            placeholder="email (optional)"
            value={assigneeEmail}
            disabled={pending}
            onChange={(e) => setAssigneeEmail(e.target.value)}
          />
          <input
            className={input + " w-32"}
            type="date"
            value={due}
            disabled={pending}
            onChange={(e) => setDue(e.target.value)}
          />
        </div>
        <button
          onClick={add}
          disabled={pending || !title.trim()}
          className="mt-2 rounded-lg bg-[#003a70] px-4 py-1.5 text-sm font-medium text-white disabled:opacity-50"
        >
          Add task
        </button>
      </div>

      {/* Active */}
      <ul className="space-y-2">
        {active.map((t) => {
          const m = statusMeta(t.status);
          return (
            <li
              key={t.id}
              className="flex flex-wrap items-center gap-3 rounded-lg border border-[#e5e9ec] bg-white px-4 py-3 dark:border-[#22303c] dark:bg-[#111a24]"
            >
              <span
                className={"rounded-full px-2 py-0.5 text-xs font-medium " + m.cls}
              >
                {m.label}
              </span>
              <span className="flex-1 text-sm text-[#101820] dark:text-[#eef4f8]">
                {t.title}
                {t.due ? (
                  <span className="ml-2 text-xs text-[#98a4ae]">due {t.due}</span>
                ) : null}
              </span>
              {t.assignee ? (
                <span className="text-xs text-[#5b6770] dark:text-[#98a4ae]">
                  {t.assignee}
                </span>
              ) : null}
              <select
                className={input}
                value={t.status}
                disabled={pending}
                onChange={(e) =>
                  patch(t.id, { status: e.target.value as TodoStatus })
                }
              >
                {STATUS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              {t.assigneeEmail ? (
                <a
                  href={emailHref(t)}
                  className="rounded-md border border-[#003a70] px-2 py-1 text-xs font-medium text-[#003a70] transition hover:bg-[#eef4f8] dark:border-[#c6dae7] dark:text-[#c6dae7] dark:hover:bg-[#16283a]"
                >
                  Email
                </a>
              ) : null}
            </li>
          );
        })}
        {active.length === 0 ? (
          <li className="rounded-lg border border-dashed border-[#e5e9ec] px-4 py-6 text-center text-sm text-[#98a4ae] dark:border-[#22303c]">
            No open tasks. Add one above.
          </li>
        ) : null}
      </ul>

      {/* Done */}
      {done.length ? (
        <details className="group">
          <summary className="cursor-pointer list-none text-sm font-medium text-[#5b6770] dark:text-[#98a4ae]">
            <span className="mr-1 inline-block text-[#98a4ae] transition group-open:rotate-90">
              &rsaquo;
            </span>
            {done.length} completed
          </summary>
          <ul className="mt-2 space-y-1">
            {done.map((t) => (
              <li
                key={t.id}
                className="flex items-center gap-2 px-4 py-1.5 text-sm text-[#98a4ae] line-through"
              >
                {t.title}
                <button
                  onClick={() => patch(t.id, { status: "open" })}
                  disabled={pending}
                  className="ml-auto text-xs text-[#003a70] no-underline hover:underline dark:text-[#c6dae7]"
                >
                  reopen
                </button>
              </li>
            ))}
          </ul>
        </details>
      ) : null}

      <p className="text-xs text-[#98a4ae]">
        The Email button opens a pre-filled draft in your mail app. Automated
        Gmail drafts and comms monitoring are the next phase.
      </p>
    </div>
  );
}
