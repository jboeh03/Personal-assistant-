// Taste memory: the app records which versions Jeff picks and which suggestions
// he accepts/rejects, and summarizes that so the judges are grounded in HIS taste.

import type { SupabaseClient } from "@supabase/supabase-js";

export async function tasteSummary(
  supabase: SupabaseClient,
  userId: string,
): Promise<string> {
  const { data } = await supabase
    .from("cockpit_taste")
    .select("kind, note, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(40);

  if (!data || data.length === 0) return "";

  const counts: Record<string, number> = {};
  const notes: string[] = [];
  for (const r of data as { kind: string; note: string | null }[]) {
    counts[r.kind] = (counts[r.kind] ?? 0) + 1;
    if (r.note) notes.push(`- ${r.kind}: ${r.note}`);
  }
  const head = Object.entries(counts)
    .map(([k, v]) => `${v} ${k}${v > 1 ? "s" : ""}`)
    .join(", ");
  const body = notes.slice(0, 12).join("\n");
  return `Recent taste signals (${head}).${body ? `\n${body}` : ""}`;
}

export async function recordTaste(
  supabase: SupabaseClient,
  userId: string,
  row: {
    kind: "pick" | "accept" | "reject";
    song_id?: string | null;
    version_id?: string | null;
    suggestion_id?: string | null;
    note?: string | null;
  },
): Promise<void> {
  await supabase.from("cockpit_taste").insert({
    user_id: userId,
    kind: row.kind,
    song_id: row.song_id ?? null,
    version_id: row.version_id ?? null,
    suggestion_id: row.suggestion_id ?? null,
    note: row.note ?? null,
  });
}
