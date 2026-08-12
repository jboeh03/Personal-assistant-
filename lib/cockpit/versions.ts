// Server helper: create an immutable version snapshot + its parsed sections,
// and point the song's current_version_id at it.

import type { SupabaseClient } from "@supabase/supabase-js";
import { parseSections } from "@/lib/cockpit/sections";
import type { Controls, Version } from "@/lib/cockpit/types";

export async function snapshotVersion(
  supabase: SupabaseClient,
  userId: string,
  params: {
    songId: string;
    lyrics: string;
    controls?: Controls;
    parentId?: string | null;
    label?: string | null;
  },
): Promise<Version> {
  const { data: version, error } = await supabase
    .from("cockpit_versions")
    .insert({
      song_id: params.songId,
      user_id: userId,
      parent_id: params.parentId ?? null,
      label: params.label ?? null,
      lyrics: params.lyrics ?? "",
      controls: params.controls ?? {},
    })
    .select()
    .single();
  if (error || !version) throw new Error(error?.message ?? "version insert failed");

  const secs = parseSections(params.lyrics ?? "").map((s) => ({
    version_id: version.id,
    user_id: userId,
    idx: s.idx,
    kind: s.kind,
    label: s.label,
    text: s.text,
  }));
  if (secs.length) {
    const { error: se } = await supabase.from("cockpit_sections").insert(secs);
    if (se) throw new Error(se.message);
  }

  await supabase
    .from("cockpit_songs")
    .update({ current_version_id: version.id, updated_at: new Date().toISOString() })
    .eq("id", params.songId);

  return version as Version;
}
