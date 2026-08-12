// The async render loop, driven by the user's poll (RLS-scoped, no service role).
// pumpUserJobs(): finalize any succeeded/failed running job, then promote the
// oldest queued job — enforcing at most one Replicate prediction in flight.

import type { SupabaseClient } from "@supabase/supabase-js";
import {
  createMusicPrediction,
  getPrediction,
  outputUrl,
} from "@/lib/cockpit/replicate";
import type { Controls } from "@/lib/cockpit/types";

const AUDIO_BUCKET = "cockpit-audio";
const DEFAULT_STYLE =
  "intimate folk / Americana, fingerpicked acoustic guitar, ~64 BPM, warm and nocturnal, sparse, plainspoken male vocal just behind the beat";

type JobRow = {
  id: string;
  user_id: string;
  version_id: string | null;
  status: string;
  provider_ref: string | null;
};

async function finalizeRunning(
  supabase: SupabaseClient,
  userId: string,
): Promise<void> {
  const { data: running } = await supabase
    .from("cockpit_jobs")
    .select("id, user_id, version_id, status, provider_ref")
    .eq("user_id", userId)
    .eq("status", "running");

  for (const job of (running ?? []) as JobRow[]) {
    if (!job.provider_ref) continue;
    let pred;
    try {
      pred = await getPrediction(job.provider_ref);
    } catch (e) {
      continue; // transient; try again next poll
    }

    if (pred.status === "succeeded") {
      const url = outputUrl(pred.output);
      if (!url || !job.version_id) {
        await supabase
          .from("cockpit_jobs")
          .update({ status: "error", error: "no output url", updated_at: new Date().toISOString() })
          .eq("id", job.id);
        continue;
      }
      try {
        const bytes = await (await fetch(url)).arrayBuffer();
        const path = `${userId}/${job.version_id}.mp3`;
        const up = await supabase.storage
          .from(AUDIO_BUCKET)
          .upload(path, bytes, { contentType: "audio/mpeg", upsert: true });
        if (up.error) throw up.error;
        const publicUrl = supabase.storage.from(AUDIO_BUCKET).getPublicUrl(path).data.publicUrl;
        await supabase
          .from("cockpit_versions")
          .update({ audio_url: publicUrl, audio_path: path })
          .eq("id", job.version_id);
        await supabase
          .from("cockpit_jobs")
          .update({
            status: "done",
            result_version_id: job.version_id,
            updated_at: new Date().toISOString(),
          })
          .eq("id", job.id);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "finalize failed";
        await supabase
          .from("cockpit_jobs")
          .update({ status: "error", error: msg, updated_at: new Date().toISOString() })
          .eq("id", job.id);
      }
    } else if (pred.status === "failed" || pred.status === "canceled") {
      const msg = typeof pred.error === "string" ? pred.error : `render ${pred.status}`;
      await supabase
        .from("cockpit_jobs")
        .update({ status: "error", error: msg, updated_at: new Date().toISOString() })
        .eq("id", job.id);
    }
    // starting|processing → leave running
  }
}

async function promoteQueued(
  supabase: SupabaseClient,
  userId: string,
): Promise<void> {
  // Respect ≤1 in flight.
  const { count } = await supabase
    .from("cockpit_jobs")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("status", "running");
  if ((count ?? 0) > 0) return;

  const { data: queued } = await supabase
    .from("cockpit_jobs")
    .select("id, user_id, version_id, status, provider_ref")
    .eq("user_id", userId)
    .eq("status", "queued")
    .order("created_at", { ascending: true })
    .limit(1);

  const job = (queued ?? [])[0] as JobRow | undefined;
  if (!job || !job.version_id) return;

  const { data: version } = await supabase
    .from("cockpit_versions")
    .select("lyrics, controls")
    .eq("id", job.version_id)
    .single();
  if (!version) {
    await supabase
      .from("cockpit_jobs")
      .update({ status: "error", error: "version missing", updated_at: new Date().toISOString() })
      .eq("id", job.id);
    return;
  }

  const controls = (version.controls ?? {}) as Controls;
  const style = controls.style || DEFAULT_STYLE;
  try {
    const pred = await createMusicPrediction(version.lyrics ?? "", style, controls.model);
    await supabase
      .from("cockpit_jobs")
      .update({
        status: "running",
        provider_ref: pred.id,
        updated_at: new Date().toISOString(),
      })
      .eq("id", job.id);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "replicate create failed";
    await supabase
      .from("cockpit_jobs")
      .update({ status: "error", error: msg, updated_at: new Date().toISOString() })
      .eq("id", job.id);
  }
}

export async function pumpUserJobs(
  supabase: SupabaseClient,
  userId: string,
): Promise<void> {
  await finalizeRunning(supabase, userId);
  await promoteQueued(supabase, userId);
}

/** Position of a queued job in the user's queue (1-based), else 0. */
export async function queuePosition(
  supabase: SupabaseClient,
  userId: string,
  jobId: string,
): Promise<number> {
  const { data } = await supabase
    .from("cockpit_jobs")
    .select("id")
    .eq("user_id", userId)
    .eq("status", "queued")
    .order("created_at", { ascending: true });
  const idx = (data ?? []).findIndex((j: { id: string }) => j.id === jobId);
  return idx < 0 ? 0 : idx + 1;
}
