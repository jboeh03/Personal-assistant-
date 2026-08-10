"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Finding, MediaItem, WorkStatus, Assignee } from "@/lib/deals/types";
import {
  ASSIGNEES,
  WORK_STATUSES,
  confidenceBadge,
  fmtBand,
  fmtUsd,
  findingName,
  workStatusBadge,
} from "@/lib/deals/format";
import { UploadButton } from "../UploadButton";

const selectCls =
  "rounded-md border border-[#e5e9ec] bg-white px-2 py-1 text-xs text-neutral-800 dark:border-[#2a3a48] dark:bg-[#0f1720] dark:text-neutral-200";

export function RepairCard({
  finding,
  media,
}: {
  finding: Finding;
  media: MediaItem[];
}) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [note, setNote] = useState("");
  const [actual, setActual] = useState(
    finding.actual_cost_usd != null ? String(finding.actual_cost_usd) : "",
  );

  const badge = workStatusBadge(finding.work_status);
  const conf = confidenceBadge(finding.cost_confidence);

  const photos = media.filter((m) => m.kind === "before" || m.kind === "after");
  const receipts = media.filter(
    (m) => m.kind === "receipt" || m.kind === "warranty",
  );

  function patch(body: Record<string, unknown>) {
    start(async () => {
      await fetch("/api/deals/findings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: finding.id, ...body }),
      });
      router.refresh();
    });
  }

  return (
    <div className="rounded-xl border border-[#e5e9ec] bg-white p-4 shadow-sm dark:border-[#22303c] dark:bg-[#111a24]">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-[#f4f6f8] px-1.5 py-0.5 text-[11px] font-semibold text-[#003a70] dark:bg-[#182530] dark:text-[#c6dae7]">
              {finding.id}
            </span>
            <h3 className="text-sm font-semibold text-[#101820] dark:text-[#eef4f8]">
              {findingName(finding.id)}
            </h3>
          </div>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
            {finding.description}
          </p>
        </div>
        <span
          className={
            "shrink-0 rounded-full px-2 py-0.5 text-xs font-medium " + badge.cls
          }
        >
          {badge.label}
        </span>
      </div>

      {/* Cost */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <span className="text-neutral-700 dark:text-neutral-300">
          Estimate{" "}
          <span className="font-semibold tabular-nums">
            {fmtBand(finding.cost_low_usd, finding.cost_high_usd)}
          </span>
        </span>
        {conf ? (
          <span
            className={"rounded px-1.5 py-0.5 text-[11px] " + conf.cls}
          >
            {conf.label}
          </span>
        ) : null}
        {finding.actual_quote_usd ? (
          <span className="font-medium text-[#003a70] dark:text-[#c6dae7]">
            Quote {fmtUsd(finding.actual_quote_usd)}
          </span>
        ) : null}
        {finding.surprise_ceiling_usd ? (
          <span
            className="text-xs text-neutral-400"
            title={finding.ceiling_trigger ?? ""}
          >
            ceiling {fmtUsd(finding.surprise_ceiling_usd)}
          </span>
        ) : null}
      </div>

      {finding.diy_progress ? (
        <p className="mt-2 rounded-md border-l-2 border-[#5e8ab4] bg-[#eef4f8] px-2 py-1 text-xs text-[#326295] dark:bg-[#16283a] dark:text-[#c6dae7]">
          {finding.diy_progress}
        </p>
      ) : null}

      {/* Controls */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <select
          className={selectCls}
          value={finding.work_status ?? "not_started"}
          disabled={pending}
          onChange={(e) => patch({ work_status: e.target.value as WorkStatus })}
        >
          {WORK_STATUSES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        <select
          className={selectCls}
          value={finding.assignee ?? "unassigned"}
          disabled={pending}
          onChange={(e) => patch({ assignee: e.target.value as Assignee })}
        >
          {ASSIGNEES.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-1">
          <span className="text-xs text-neutral-400">actual $</span>
          <input
            className={selectCls + " w-20 tabular-nums"}
            inputMode="numeric"
            value={actual}
            placeholder="—"
            disabled={pending}
            onChange={(e) => setActual(e.target.value.replace(/[^0-9]/g, ""))}
            onBlur={() =>
              patch({
                actual_cost_usd: actual === "" ? null : Number(actual),
              })
            }
          />
        </div>
      </div>

      {/* Media */}
      <div className="mt-3 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-400">
            Photos
          </span>
          <UploadButton kind="before" findingId={finding.id} label="Before" accept="image/*" />
          <UploadButton kind="after" findingId={finding.id} label="After" accept="image/*" />
        </div>
        {photos.length ? (
          <div className="flex flex-wrap gap-2">
            {photos.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group relative block h-16 w-16 overflow-hidden rounded-md border border-[#e5e9ec] dark:border-[#22303c]"
                title={`${p.kind} · ${p.label ?? ""}`}
              >
                <Image
                  src={p.url}
                  alt={p.label ?? p.kind}
                  fill
                  sizes="64px"
                  className="object-cover"
                  unoptimized
                />
                <span className="absolute bottom-0 left-0 bg-black/60 px-1 text-[9px] uppercase text-white">
                  {p.kind}
                </span>
              </a>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-400">
            Paperwork
          </span>
          <UploadButton kind="receipt" findingId={finding.id} label="Receipt" />
          <UploadButton kind="warranty" findingId={finding.id} label="Warranty" />
        </div>
        {receipts.length ? (
          <ul className="space-y-1">
            {receipts.map((r) => (
              <li key={r.id} className="text-xs">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#003a70] hover:underline dark:text-[#c6dae7]"
                >
                  <span className="mr-1 rounded bg-[#f4f6f8] px-1 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#5b6770] dark:bg-[#182530] dark:text-[#98a4ae]">
                    {r.kind === "warranty" ? "Warranty" : "Receipt"}
                  </span>
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* Activity */}
      {finding.activity && finding.activity.length ? (
        <ul className="mt-3 space-y-1 border-t border-[#f4f6f8] pt-2 dark:border-[#182530]">
          {finding.activity.map((a, i) => (
            <li key={i} className="text-xs text-neutral-500 dark:text-neutral-400">
              <span className="tabular-nums">
                {new Date(a.at).toLocaleDateString()}
              </span>{" "}
              — {a.text}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-2 flex gap-2">
        <input
          className={selectCls + " flex-1"}
          placeholder="Add a note…"
          value={note}
          disabled={pending}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && note.trim()) {
              patch({ note: note.trim() });
              setNote("");
            }
          }}
        />
      </div>
    </div>
  );
}
