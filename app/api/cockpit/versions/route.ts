import { NextResponse, type NextRequest } from "next/server";
import { getUser } from "@/lib/cockpit/auth";
import { snapshotVersion } from "@/lib/cockpit/versions";
import type { Controls } from "@/lib/cockpit/types";

export const runtime = "nodejs";

// Fetch one version with its sections + suggestions (for loading/A-B a version).
export async function GET(request: NextRequest) {
  const auth = await getUser();
  if ("error" in auth) return auth.error;
  const { supabase } = auth;

  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  const { data: version } = await supabase
    .from("cockpit_versions")
    .select("*")
    .eq("id", id)
    .single();
  if (!version) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const [s, g] = await Promise.all([
    supabase.from("cockpit_sections").select("*").eq("version_id", id).order("idx", { ascending: true }),
    supabase.from("cockpit_suggestions").select("*").eq("version_id", id).order("created_at", { ascending: true }),
  ]);
  return NextResponse.json({ version, sections: s.data ?? [], suggestions: g.data ?? [] });
}

// Create a new immutable version snapshot (lyrics + controls + parsed sections).
export async function POST(request: NextRequest) {
  const auth = await getUser();
  if ("error" in auth) return auth.error;
  const { supabase, user } = auth;

  let body: {
    songId?: string;
    lyrics?: string;
    controls?: Controls;
    parentId?: string | null;
    label?: string | null;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!body.songId) return NextResponse.json({ error: "songId required" }, { status: 400 });

  try {
    const version = await snapshotVersion(supabase, user.id, {
      songId: body.songId,
      lyrics: body.lyrics ?? "",
      controls: body.controls ?? {},
      parentId: body.parentId ?? null,
      label: body.label ?? null,
    });
    const { data: sections } = await supabase
      .from("cockpit_sections")
      .select("*")
      .eq("version_id", version.id)
      .order("idx", { ascending: true });
    return NextResponse.json({ version, sections: sections ?? [] });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "snapshot failed" }, { status: 500 });
  }
}
