import { NextResponse, type NextRequest } from "next/server";
import { getUser } from "@/lib/cockpit/auth";
import { snapshotVersion } from "@/lib/cockpit/versions";
import { pumpUserJobs } from "@/lib/cockpit/jobs";
import type { Controls } from "@/lib/cockpit/types";

export const runtime = "nodejs";
export const maxDuration = 60;

// Snapshot the current editable state as a new version, enqueue a render job,
// and pump the queue (create the Replicate prediction if nothing is in flight).
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

  let versionId: string;
  try {
    const version = await snapshotVersion(supabase, user.id, {
      songId: body.songId,
      lyrics: body.lyrics ?? "",
      controls: body.controls ?? {},
      parentId: body.parentId ?? null,
      label: body.label ?? null,
    });
    versionId = version.id;
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "snapshot failed" }, { status: 500 });
  }

  const { data: job, error } = await supabase
    .from("cockpit_jobs")
    .insert({
      user_id: user.id,
      song_id: body.songId,
      version_id: versionId,
      kind: "generate",
      status: "queued",
    })
    .select()
    .single();
  if (error || !job) {
    return NextResponse.json({ error: error?.message ?? "job insert failed" }, { status: 500 });
  }

  await pumpUserJobs(supabase, user.id);

  const { data: fresh } = await supabase
    .from("cockpit_jobs")
    .select("status")
    .eq("id", job.id)
    .single();

  return NextResponse.json({ jobId: job.id, versionId, status: fresh?.status ?? "queued" });
}
