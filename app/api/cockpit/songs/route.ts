import { NextResponse, type NextRequest } from "next/server";
import { getUser } from "@/lib/cockpit/auth";
import { snapshotVersion } from "@/lib/cockpit/versions";
import { recordTaste } from "@/lib/cockpit/taste";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const auth = await getUser();
  if ("error" in auth) return auth.error;
  const { supabase, user } = auth;

  const id = new URL(request.url).searchParams.get("id");
  if (!id) {
    const { data: songs } = await supabase
      .from("cockpit_songs")
      .select("id, title, status, current_version_id, updated_at")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false });
    return NextResponse.json({ songs: songs ?? [] });
  }

  const { data: song } = await supabase
    .from("cockpit_songs")
    .select("*")
    .eq("id", id)
    .single();
  if (!song) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { data: versions } = await supabase
    .from("cockpit_versions")
    .select("*")
    .eq("song_id", id)
    .order("created_at", { ascending: true });

  const currentId: string | null = song.current_version_id;
  let sections: unknown[] = [];
  let suggestions: unknown[] = [];
  if (currentId) {
    const [s, g] = await Promise.all([
      supabase.from("cockpit_sections").select("*").eq("version_id", currentId).order("idx", { ascending: true }),
      supabase.from("cockpit_suggestions").select("*").eq("version_id", currentId).order("created_at", { ascending: true }),
    ]);
    sections = s.data ?? [];
    suggestions = g.data ?? [];
  }

  return NextResponse.json({ song, versions: versions ?? [], sections, suggestions });
}

export async function POST(request: NextRequest) {
  const auth = await getUser();
  if ("error" in auth) return auth.error;
  const { supabase, user } = auth;

  let body: {
    action?: string;
    id?: string;
    title?: string;
    seed?: string;
    lyrics?: string;
    controls?: Record<string, unknown>;
    patch?: Record<string, unknown>;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const action = body.action ?? "create";

  if (action === "create") {
    const { data: song, error } = await supabase
      .from("cockpit_songs")
      .insert({
        user_id: user.id,
        title: body.title?.trim() || "Untitled",
        seed: body.seed ?? null,
      })
      .select()
      .single();
    if (error || !song) {
      return NextResponse.json({ error: error?.message ?? "create failed" }, { status: 500 });
    }
    let version = null;
    if (body.lyrics && body.lyrics.trim()) {
      try {
        version = await snapshotVersion(supabase, user.id, {
          songId: song.id,
          lyrics: body.lyrics,
          controls: body.controls ?? {},
          label: "v1",
        });
      } catch (e) {
        return NextResponse.json({ error: e instanceof Error ? e.message : "snapshot failed" }, { status: 500 });
      }
    }
    return NextResponse.json({ song, version });
  }

  if (action === "patch") {
    if (!body.id) return NextResponse.json({ error: "id required" }, { status: 400 });
    const patch = { ...(body.patch ?? {}), updated_at: new Date().toISOString() };
    const { data: song, error } = await supabase
      .from("cockpit_songs")
      .update(patch)
      .eq("id", body.id)
      .select()
      .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    // Choosing a "current" version is a taste signal.
    if (body.patch && "current_version_id" in body.patch && body.patch.current_version_id) {
      await recordTaste(supabase, user.id, {
        kind: "pick",
        song_id: body.id,
        version_id: body.patch.current_version_id as string,
      });
    }
    return NextResponse.json({ song });
  }

  if (action === "delete") {
    if (!body.id) return NextResponse.json({ error: "id required" }, { status: 400 });
    const { error } = await supabase.from("cockpit_songs").delete().eq("id", body.id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
