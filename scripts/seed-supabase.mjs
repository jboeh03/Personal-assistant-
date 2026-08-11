#!/usr/bin/env node
// Seed Supabase from the deal-room files (one-time, idempotent).
//
//   NEXT_PUBLIC_SUPABASE_URL=... NEXT_PUBLIC_SUPABASE_ANON_KEY=... \
//     node scripts/seed-supabase.mjs
//
// Run AFTER applying supabase/migration.sql. Safe to re-run: deal_state rows
// are upserted by key; the journal is only seeded when empty.

import { readFile } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!URL || !KEY) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY",
  );
  process.exit(1);
}

const sb = createClient(URL, KEY, { auth: { persistSession: false } });
const DATA = path.join(process.cwd(), "deal-room", "data");

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(path.join(DATA, file), "utf8"));
  } catch {
    return fallback;
  }
}

async function put(key, value) {
  const { error } = await sb
    .from("deal_state")
    .upsert({ key, value }, { onConflict: "key" });
  if (error) throw new Error(`${key}: ${error.message}`);
  console.log(`  deal_state[${key}] ok`);
}

// Parse the markdown journal into rows.
const EVENT_RE =
  /^-\s+(\d{4}-\d{2}-\d{2})(?:\s+([\d:]+)\s*\w*)?\s+—\s+\[([^\]]+)\]\s+(.*)$/;

async function seedJournal() {
  const { count } = await sb
    .from("deal_journal")
    .select("id", { count: "exact", head: true });
  if (count && count > 0) {
    console.log(`  deal_journal already has ${count} rows — skipping`);
    return;
  }
  let text = "";
  try {
    text = await readFile(
      path.join(process.cwd(), "deal-room", "log", "JOURNAL.md"),
      "utf8",
    );
  } catch {
    return;
  }
  const rows = [];
  for (const line of text.split("\n")) {
    const m = line.match(EVENT_RE);
    if (!m) continue;
    const [, date, time, source, body] = m;
    rows.push({
      at: new Date(`${date}T${time ?? "12:00"}:00-04:00`).toISOString(),
      source: source.trim(),
      body: body.trim(),
    });
  }
  if (!rows.length) return;
  const { error } = await sb.from("deal_journal").insert(rows);
  if (error) throw new Error(`journal: ${error.message}`);
  console.log(`  deal_journal seeded ${rows.length} rows`);
}

async function seedMedia() {
  const items = await readJson("media-index.json", []);
  if (!items.length) return;
  const rows = items.map((m) => ({
    id: m.id,
    kind: m.kind,
    finding_id: m.findingId ?? null,
    label: m.label ?? null,
    filename: m.filename,
    url: m.url,
    mime: m.mime ?? null,
    size: m.size ?? null,
    uploaded_at: m.uploadedAt,
  }));
  const { error } = await sb.from("deal_media").upsert(rows, { onConflict: "id" });
  if (error) throw new Error(`media: ${error.message}`);
  console.log(`  deal_media seeded ${rows.length} rows`);
}

console.log(`Seeding ${URL} from deal-room/…`);
await put("deal", await readJson("deal.json", {}));
await put("findings", await readJson("findings.json", { findings: [] }));
await put("milestones", await readJson("milestones.json", { milestones: [] }));
await put("todos", await readJson("todos.json", []));
await seedJournal();
await seedMedia();
console.log("Done. Set DEALS_BACKEND=supabase on Vercel to enable editing.");
