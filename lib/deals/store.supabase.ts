// Supabase-backed store — used on Vercel (serverless, read-only FS) so the
// cockpit is editable from anywhere. Mirrors the store.file API exactly.
//
// Data model (see supabase/migration.sql):
//   deal_state(key text pk, value jsonb)   — 'deal' | 'findings' | 'milestones'
//   deal_media(id, kind, finding_id, ...)
//   deal_journal(id, at, source, body)
//   storage bucket: deal-uploads (public)

import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabase/config";
import type {
  Bundle,
  DealEvent,
  DealMeta,
  Finding,
  MediaItem,
  Milestone,
  Todo,
} from "./types";

const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false },
});

const BUCKET = "deal-uploads";

async function stateDoc<T>(key: string, fallback: T): Promise<T> {
  const { data } = await sb
    .from("deal_state")
    .select("value")
    .eq("key", key)
    .maybeSingle();
  return (data?.value as T) ?? fallback;
}

async function putStateDoc(key: string, value: unknown): Promise<void> {
  await sb.from("deal_state").upsert({ key, value }, { onConflict: "key" });
}

// ---- Deal meta ----

export async function getDeal(): Promise<DealMeta> {
  return stateDoc<DealMeta>("deal", {
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

interface FindingsDoc {
  findings: Finding[];
  bundle?: Bundle;
}

function withDefaults(f: Finding): Finding {
  return {
    work_status: f.work_status ?? "not_started",
    assignee: f.assignee ?? "unassigned",
    actual_cost_usd: f.actual_cost_usd ?? null,
    activity: f.activity ?? [],
    ...f,
  };
}

export async function getFindings(): Promise<Finding[]> {
  const doc = await stateDoc<FindingsDoc>("findings", { findings: [] });
  return doc.findings.map(withDefaults);
}

export async function getBundle(): Promise<Bundle | undefined> {
  const doc = await stateDoc<FindingsDoc>("findings", { findings: [] });
  return doc.bundle;
}

export async function updateFinding(
  id: string,
  patch: Partial<Finding>,
): Promise<Finding | null> {
  const doc = await stateDoc<FindingsDoc>("findings", { findings: [] });
  const idx = doc.findings.findIndex((f) => f.id === id);
  if (idx === -1) return null;
  const activity = doc.findings[idx].activity ?? [];
  doc.findings[idx] = { ...doc.findings[idx], ...patch, activity };
  await putStateDoc("findings", doc);
  return withDefaults(doc.findings[idx]);
}

export async function addFindingActivity(
  id: string,
  text: string,
): Promise<Finding | null> {
  const doc = await stateDoc<FindingsDoc>("findings", { findings: [] });
  const idx = doc.findings.findIndex((f) => f.id === id);
  if (idx === -1) return null;
  const activity = doc.findings[idx].activity ?? [];
  activity.push({ at: new Date().toISOString(), text });
  doc.findings[idx].activity = activity;
  await putStateDoc("findings", doc);
  return withDefaults(doc.findings[idx]);
}

// ---- Milestones ----

export async function getMilestones(): Promise<Milestone[]> {
  const doc = await stateDoc<{ milestones: Milestone[] }>("milestones", {
    milestones: [],
  });
  return doc.milestones;
}

// ---- Journal ----

export async function getEvents(limit?: number): Promise<DealEvent[]> {
  let q = sb
    .from("deal_journal")
    .select("at, source, body")
    .order("at", { ascending: false });
  if (typeof limit === "number") q = q.limit(limit);
  const { data } = await q;
  return (data ?? []).map((r) => ({
    date: new Date(r.at as string).toLocaleDateString("en-CA", {
      timeZone: "America/New_York",
    }),
    source: r.source as string,
    text: r.body as string,
  }));
}

export async function addEvent(text: string, source = "human"): Promise<void> {
  await sb.from("deal_journal").insert({ source, body: text });
}

// ---- Media ----

export async function getMedia(): Promise<MediaItem[]> {
  const { data } = await sb
    .from("deal_media")
    .select("*")
    .order("uploaded_at", { ascending: true });
  return (data ?? []).map((r) => ({
    id: r.id as string,
    kind: r.kind,
    findingId: r.finding_id,
    label: r.label,
    filename: r.filename,
    url: r.url,
    mime: r.mime,
    size: r.size,
    uploadedAt: r.uploaded_at,
  }));
}

export async function addMedia(item: MediaItem): Promise<void> {
  await sb.from("deal_media").insert({
    id: item.id,
    kind: item.kind,
    finding_id: item.findingId ?? null,
    label: item.label ?? null,
    filename: item.filename,
    url: item.url,
    mime: item.mime ?? null,
    size: item.size ?? null,
    uploaded_at: item.uploadedAt,
  });
}

export async function saveUpload(
  bytes: Buffer,
  subdir: string,
  filename: string,
): Promise<{ url: string; abspath: string }> {
  const objectPath = `${subdir}/${filename}`;
  await sb.storage.from(BUCKET).upload(objectPath, bytes, { upsert: true });
  const { data } = sb.storage.from(BUCKET).getPublicUrl(objectPath);
  return { url: data.publicUrl, abspath: objectPath };
}

export async function getReports(): Promise<
  { name: string; label: string; url: string }[]
> {
  // On Vercel the deliverable PDFs live in Storage as media (kind=document);
  // surface them from the documents view instead.
  return [];
}

// ---- To-dos (deal_state key 'todos') ----

export async function getTodos(): Promise<Todo[]> {
  return stateDoc<Todo[]>("todos", []);
}

export async function addTodo(todo: Todo): Promise<Todo> {
  const items = await getTodos();
  items.push(todo);
  await putStateDoc("todos", items);
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
  await putStateDoc("todos", items);
  return items[idx];
}
