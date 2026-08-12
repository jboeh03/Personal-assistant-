import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Cockpit from "./Cockpit";
import type { Section, Suggestion, Version } from "@/lib/cockpit/types";

export const dynamic = "force-dynamic";

export default async function SongPage({
  params,
}: {
  params: Promise<{ songId: string }>;
}) {
  const { songId } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: song } = await supabase
    .from("cockpit_songs")
    .select("*")
    .eq("id", songId)
    .single();
  if (!song) redirect("/cockpit");

  const { data: versions } = await supabase
    .from("cockpit_versions")
    .select("*")
    .eq("song_id", songId)
    .order("created_at", { ascending: true });

  const currentId: string | null = song.current_version_id;
  let sections: Section[] = [];
  let suggestions: Suggestion[] = [];
  if (currentId) {
    const [s, g] = await Promise.all([
      supabase.from("cockpit_sections").select("*").eq("version_id", currentId).order("idx", { ascending: true }),
      supabase.from("cockpit_suggestions").select("*").eq("version_id", currentId).order("created_at", { ascending: true }),
    ]);
    sections = (s.data ?? []) as Section[];
    suggestions = (g.data ?? []) as Suggestion[];
  }

  return (
    <Cockpit
      song={song}
      versions={(versions ?? []) as Version[]}
      initialSections={sections}
      initialSuggestions={suggestions}
    />
  );
}
