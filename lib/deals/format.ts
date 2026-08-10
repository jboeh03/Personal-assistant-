// Presentation helpers for the Deal Cockpit. Framework-agnostic; safe on
// client and server.

import type { Assignee, CostConfidence, WorkStatus } from "./types";

export function fmtUsd(n: number | null | undefined): string {
  if (n === null || n === undefined) return "—";
  return "$" + Math.round(n).toLocaleString("en-US");
}

/** "$800–$1,500", or a single value, or "—". */
export function fmtBand(
  low: number | null | undefined,
  high: number | null | undefined,
): string {
  if ((low === null || low === undefined) && (high === null || high === undefined))
    return "—";
  if (low === high || high === null || high === undefined) return fmtUsd(low);
  if (low === null || low === undefined) return fmtUsd(high);
  return `${fmtUsd(low)}–${fmtUsd(high)}`;
}

/** Whole days from now until a YYYY-MM-DD date, evaluated in a timezone. */
export function daysUntil(dateStr: string, tz = "America/New_York"): number {
  const now = new Date();
  const todayStr = now.toLocaleDateString("en-CA", { timeZone: tz }); // YYYY-MM-DD
  const today = new Date(todayStr + "T00:00:00");
  const target = new Date(dateStr + "T00:00:00");
  return Math.round((target.getTime() - today.getTime()) / 86_400_000);
}

export function fmtDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function relativeDays(days: number): string {
  if (days === 0) return "today";
  if (days === 1) return "tomorrow";
  if (days === -1) return "yesterday";
  if (days < 0) return `${Math.abs(days)} days ago`;
  return `in ${days} days`;
}

// ---- Status styling (Tailwind class tokens) ----

export interface Badge {
  label: string;
  cls: string; // background + text classes
}

export function workStatusBadge(s: WorkStatus | undefined): Badge {
  switch (s) {
    case "done":
      return { label: "Done", cls: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" };
    case "in_progress":
      return { label: "In progress", cls: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300" };
    case "scheduled":
      return { label: "Scheduled", cls: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300" };
    case "agreed":
      return { label: "Agreed", cls: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300" };
    case "quoted":
      return { label: "Quoted", cls: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300" };
    default:
      return { label: "Not started", cls: "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300" };
  }
}

export const WORK_STATUSES: { value: WorkStatus; label: string }[] = [
  { value: "not_started", label: "Not started" },
  { value: "quoted", label: "Quoted" },
  { value: "agreed", label: "Agreed" },
  { value: "scheduled", label: "Scheduled" },
  { value: "in_progress", label: "In progress" },
  { value: "done", label: "Done" },
];

export function assigneeLabel(a: Assignee | undefined): string {
  switch (a) {
    case "contractor":
      return "Licensed contractor";
    case "agent_contractor":
      return "Agent-contractor (Zach)";
    case "diy":
      return "DIY (self)";
    case "credit":
      return "Credit to buyers";
    default:
      return "Unassigned";
  }
}

export const ASSIGNEES: { value: Assignee; label: string }[] = [
  { value: "unassigned", label: "Unassigned" },
  { value: "contractor", label: "Licensed contractor" },
  { value: "agent_contractor", label: "Agent-contractor (Zach)" },
  { value: "diy", label: "DIY (self)" },
  { value: "credit", label: "Credit to buyers" },
];

export function confidenceBadge(c: CostConfidence): Badge | null {
  if (!c) return null;
  switch (c) {
    case "cited":
      return { label: "cited", cls: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400" };
    case "inferred":
      return { label: "inferred", cls: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400" };
    default:
      return { label: "unverified", cls: "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400" };
  }
}

/** Friendly display names for the finding IDs. */
export const FINDING_NAMES: Record<string, string> = {
  "RS-1": "Wind-bent shingles",
  "RS-2": "Buckled roof sheathing",
  "RS-3": "Kick-out flashing",
  "RS-4": "Gutters — clean & re-secure",
  "RS-5": "Gutters — re-slope",
  "RS-6": "Chimney crown & flashing",
  "EG-2": "Loose siding",
  RADON: "Radon mitigation system",
  "SS-1": "Foundation cracks (waived)",
  "SS-2": "Basement water signs (waived)",
  "ES-1": "Electric panel (waived)",
  "HCSFA-1": "Furnace age (waived)",
  "ECNI-1": "Rodent signs (waived)",
};

export function findingName(id: string): string {
  return FINDING_NAMES[id] ?? id;
}
