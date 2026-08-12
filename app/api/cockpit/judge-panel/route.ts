import { NextResponse, type NextRequest } from "next/server";
import { getUser } from "@/lib/cockpit/auth";
import { runPipeline } from "@/lib/cockpit/orchestrator";
import { JUDGES_TEMPLATE, VOICE_PROFILE, songText } from "@/lib/cockpit/prompts";
import { tasteSummary } from "@/lib/cockpit/taste";
import type { Controls, JudgeKey } from "@/lib/cockpit/types";

export const runtime = "nodejs";
export const maxDuration = 300;

const JUDGE_MODEL = process.env.COCKPIT_JUDGE_MODEL || undefined;

export async function POST(request: NextRequest) {
  const auth = await getUser();
  if ("error" in auth) return auth.error;
  const { supabase, user } = auth;

  let body: { versionId?: string; context?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!body.versionId) return NextResponse.json({ error: "versionId required" }, { status: 400 });

  const { data: version } = await supabase
    .from("cockpit_versions")
    .select("lyrics, controls")
    .eq("id", body.versionId)
    .single();
  if (!version) return NextResponse.json({ error: "version not found" }, { status: 404 });

  const taste = await tasteSummary(supabase, user.id);
  const context = [body.context?.trim(), taste ? `JEFF'S TASTE:\n${taste}` : ""]
    .filter(Boolean)
    .join("\n\n");

  const song = songText(version.lyrics ?? "", (version.controls ?? {}) as Controls);

  let state: Record<string, string>;
  try {
    state = await runPipeline(
      JUDGES_TEMPLATE,
      { voice_profile: VOICE_PROFILE, song, context },
      { model: JUDGE_MODEL },
    );
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "panel failed" }, { status: 502 });
  }

  const keys: JudgeKey[] = ["hardtruth", "craft", "vocal", "aandr", "verdict"];
  const output: Partial<Record<JudgeKey, string>> = {};
  for (const k of keys) if (state[k]) output[k] = state[k];

  const { data: review } = await supabase
    .from("cockpit_panel_reviews")
    .insert({ version_id: body.versionId, user_id: user.id, context: body.context ?? null, output })
    .select()
    .single();

  return NextResponse.json({ review: output, id: review?.id });
}
