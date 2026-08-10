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

// Deepening-blue progression, on the Codex Homes palette.
export function workStatusBadge(s: WorkStatus | undefined): Badge {
  switch (s) {
    case "done":
      return { label: "Done", cls: "bg-[#003a70] text-white dark:bg-[#003a70] dark:text-[#c6dae7]" };
    case "in_progress":
      return { label: "In progress", cls: "bg-[#5e8ab4] text-white" };
    case "scheduled":
      return { label: "Scheduled", cls: "bg-[#326295] text-white" };
    case "agreed":
      return { label: "Agreed", cls: "bg-[#dbe7f1] text-[#326295] dark:bg-[#1c3145] dark:text-[#9dc0dd]" };
    case "quoted":
      return { label: "Quoted", cls: "bg-[#c6dae7] text-[#003a70] dark:bg-[#16283a] dark:text-[#c6dae7]" };
    default:
      return { label: "Not started", cls: "bg-[#f4f6f8] text-[#5b6770] dark:bg-[#182530] dark:text-[#98a4ae]" };
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
      return { label: "cited", cls: "bg-[#eef4f8] text-[#003a70] dark:bg-[#16283a] dark:text-[#c6dae7]" };
    case "inferred":
      return { label: "inferred", cls: "bg-[#f4f6f8] text-[#5b6770] dark:bg-[#182530] dark:text-[#98a4ae]" };
    default:
      return { label: "unverified", cls: "bg-[#f4f6f8] text-[#98a4ae] dark:bg-[#182530] dark:text-[#98a4ae]" };
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
