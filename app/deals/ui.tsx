// Small presentational kit for the Deal Cockpit. Server-safe (no hooks).
// Palette echoes the seller reports: pine ink, warm ochre accent, sand neutrals.

import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-xl border border-[#e7e1d5] bg-white/90 shadow-sm dark:border-[#2b3234] dark:bg-[#1b2022] " +
        className
      }
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  hint,
}: {
  children: ReactNode;
  hint?: string;
}) {
  return (
    <div className="mb-3 flex items-baseline justify-between gap-3">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-[#1f3a3d] dark:text-[#cfe0d6]">
        {children}
      </h2>
      {hint ? (
        <span className="text-xs text-neutral-400 dark:text-neutral-500">
          {hint}
        </span>
      ) : null}
    </div>
  );
}

export function Pill({
  children,
  cls = "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
}: {
  children: ReactNode;
  cls?: string;
}) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium " +
        cls
      }
    >
      {children}
    </span>
  );
}

export function Stat({
  label,
  value,
  sub,
  accent = false,
  danger = false,
}: {
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  accent?: boolean;
  danger?: boolean;
}) {
  const valueCls = danger
    ? "text-rose-600 dark:text-rose-400"
    : accent
      ? "text-[#8a5a2b] dark:text-[#d1a06a]"
      : "text-[#1f3a3d] dark:text-[#e8eae4]";
  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        {label}
      </div>
      <div className={"mt-1 text-2xl font-semibold tabular-nums " + valueCls}>
        {value}
      </div>
      {sub ? (
        <div className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
          {sub}
        </div>
      ) : null}
    </div>
  );
}

export function ProgressBar({
  done,
  total,
}: {
  done: number;
  total: number;
}) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
        <div
          className="h-full rounded-full bg-[#3f7d63] transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs tabular-nums text-neutral-500 dark:text-neutral-400">
        {done}/{total}
      </span>
    </div>
  );
}
