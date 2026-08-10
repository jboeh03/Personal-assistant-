// File-backed store for the Deal Cockpit (server-only).
//
// Reads and writes the shared `deal-room/` files so the web app and the
// assistant operate on one source of truth. Swap this module for a Supabase
// implementation later without touching the UI — the exported functions are the
// contract.

import { promises as fs } from "node:fs";
import path from "node:path";
import type {
  Bundle,
  DealEvent,
  DealMeta,
  Finding,
  MediaItem,
  Milestone,
  WorkStatus,
} from "./types";

const ROOT = process.cwd();
const DEAL_ROOM = path.join(ROOT, "deal-room");
const DATA = path.join(DEAL_ROOM, "data");
const FINDINGS = path.join(DATA, "findings.json");
const MILESTONES = path.join(DATA, "milestones.json");
const DEAL = path.join(DATA, "deal.json");
const MEDIA = path.join(DATA, "media-index.json");
const TODOS = path.join(DATA, "todos.json");
const JOURNAL = path.join(DEAL_ROOM, "log", "JOURNAL.md");
const UPLOAD_DIR = path.join(ROOT, "public", "deal-uploads");

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    return JSON.parse(await fs.readFile(file, "utf8")) as T;
  } catch {
    return fallback;
  }
}

async function writeJson(file: string, value: unknown): Promise<void> {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(value, null, 2) + "\n", "utf8");
}

// ---- Deal meta ----

export async function getDeal(): Promise<DealMeta> {
  return readJson<DealMeta>(DEAL, {
    address: "6840 Stonington Rd",
    city: "Cincinnati",
    state: "OH",
    zip: "45230",
    price: 585000,
    closingDate: "2026-08-28",
    timezone: "America/New_York",
    dealState: "AWAITING_SELLER_RESPONSE",
    sellers: "Jeffrey & Olivia Boeh",
    buyers: "Robert & Catherine Sipniewski",
    listingAgent: "Zach West (AMP Realty)",
    buyersAgent: "Amy Broghamer (eXp Realty)",
  });
}

// ---- Findings ----

interface FindingsFile {
  as_of?: string;
  notes?: string;
  findings: Finding[];
  bundle?: Bundle;
}

function withDefaults(f: Finding): Finding {
  return {
    work_status: (f.work_status ?? "not_started") as WorkStatus,
    assignee: f.assignee ?? "unassigned",
    actual_cost_usd: f.actual_cost_usd ?? null,
    activity: f.activity ?? [],
    ...f,
  };
}

export async function getFindings(): Promise<Finding[]> {
  const file = await readJson<FindingsFile>(FINDINGS, { findings: [] });
  return file.findings.map(withDefaults);
}

export async function getBundle(): Promise<Bundle | undefined> {
  const file = await readJson<FindingsFile>(FINDINGS, { findings: [] });
  return file.bundle;
}

export async function updateFinding(
  id: string,
  patch: Partial<Finding>,
): Promise<Finding | null> {
  const file = await readJson<FindingsFile>(FINDINGS, { findings: [] });
  const idx = file.findings.findIndex((f) => f.id === id);
  if (idx === -1) return null;
  const current = file.findings[idx];
  const activity = current.activity ?? [];
  file.findings[idx] = { ...current, ...patch, activity };
  await writeJson(FINDINGS, file);
  return withDefaults(file.findings[idx]);
}

export async function addFindingActivity(
  id: string,
  text: string,
): Promise<Finding | null> {
  const file = await readJson<FindingsFile>(FINDINGS, { findings: [] });
  const idx = file.findings.findIndex((f) => f.id === id);
  if (idx === -1) return null;
  const activity = file.findings[idx].activity ?? [];
  activity.push({ at: new Date().toISOString(), text });
  file.findings[idx].activity = activity;
  await writeJson(FINDINGS, file);
  return withDefaults(file.findings[idx]);
}

// ---- Milestones ----

export async function getMilestones(): Promise<Milestone[]> {
  const file = await readJson<{ milestones: Milestone[] }>(MILESTONES, {
    milestones: [],
  });
  return file.milestones;
}

// ---- Journal / events ----

const EVENT_RE = /^-\s+(\d{4}-\d{2}-\d{2}(?:\s+[\d:]+\s*\w*)?)\s+—\s+\[([^\]]+)\]\s+(.*)$/;

export async function getEvents(limit?: number): Promise<DealEvent[]> {
  let text = "";
  try {
    text = await fs.readFile(JOURNAL, "utf8");
  } catch {
    return [];
  }
  const events: DealEvent[] = [];
  for (const line of text.split("\n")) {
    const m = line.match(EVENT_RE);
    if (m) events.push({ date: m[1].trim(), source: m[2].trim(), text: m[3].trim() });
  }
  events.reverse(); // newest first
  return typeof limit === "number" ? events.slice(0, limit) : events;
}

export async function addEvent(text: string, source = "human"): Promise<void> {
  const stamp = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  // Render as YYYY-MM-DD HH:MM ET to match the journal convention.
  const [d, t] = stamp.split(", ");
  const [mm, dd, yyyy] = d.split("/");
  const line = `- ${yyyy}-${mm}-${dd} ${t} ET — [${source}] ${text}\n`;
  await fs.mkdir(path.dirname(JOURNAL), { recursive: true });
  await fs.appendFile(JOURNAL, line, "utf8");
}

// ---- Media (photos, receipts, warranties, documents) ----

export async function getMedia(): Promise<MediaItem[]> {
  return readJson<MediaItem[]>(MEDIA, []);
}

export async function addMedia(item: MediaItem): Promise<void> {
  const items = await getMedia();
  items.push(item);
  await writeJson(MEDIA, items);
}

export async function saveUpload(
  bytes: Buffer,
  subdir: string,
  filename: string,
): Promise<{ url: string; abspath: string }> {
  const dir = path.join(UPLOAD_DIR, subdir);
  await fs.mkdir(dir, { recursive: true });
  const abspath = path.join(dir, filename);
  await fs.writeFile(abspath, bytes);
  return { url: `/deal-uploads/${subdir}/${filename}`, abspath };
}

/** Generated report PDFs available for download from the deliverables folder. */
export async function getReports(): Promise<
  { name: string; label: string; url: string }[]
> {
  const dir = path.join(DEAL_ROOM, "deliverables");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }
  const labels: Record<string, string> = {
    "Stonington-Full-Review.pdf": "Full Review (for Olivia)",
    "Stonington-Sale-Plain-English.pdf": "Plain-English Walkthrough",
  };
  return files
    .filter((f) => f.endsWith(".pdf"))
    .map((f) => ({
      name: f,
      label: labels[f] ?? f.replace(/\.pdf$/, ""),
      url: `/api/deals/report/${encodeURIComponent(f)}`,
    }));
}

// ---- To-dos ----

export async function getTodos(): Promise<Todo[]> {
  return readJson<Todo[]>(TODOS, []);
}

export async function addTodo(todo: Todo): Promise<Todo> {
  const items = await getTodos();
  items.push(todo);
  await writeJson(TODOS, items);
  return todo;
}

export async function updateTodo(
  id: string,
  patch: Partial<Todo>,
): Promise<Todo | null> {
  const items = await getTodos();
  const idx = items.findIndex((t) => t.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...patch };
  await writeJson(TODOS, items);
  return items[idx];
}
