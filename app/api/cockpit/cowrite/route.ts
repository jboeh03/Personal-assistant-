import { NextResponse, type NextRequest } from "next/server";
import { getUser } from "@/lib/cockpit/auth";
import { runPipeline } from "@/lib/cockpit/orchestrator";
import {
  SONGWRITING_TEMPLATE,
  VOICE_PROFILE,
  CRAFT_PRINCIPLES,
  WRITER_PROCESSES,
} from "@/lib/cockpit/prompts";
import examples from "@/lib/cockpit/data/examples.json";

export const runtime = "nodejs";
export const maxDuration = 300;

const MODEL = process.env.COCKPIT_COWRITER_MODEL || undefined;

// Optional: generate a first-draft lyric from a seed via the ported 8-step pipeline.
export async function POST(request: NextRequest) {
  const auth = await getUser();
  if ("error" in auth) return auth.error;

  let body: { seed?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const seed = body.seed?.trim();
  if (!seed) return NextResponse.json({ error: "seed required" }, { status: 400 });

  let state: Record<string, string>;
  try {
    state = await runPipeline(
      SONGWRITING_TEMPLATE,
      {
        seed,
        voice_profile: VOICE_PROFILE,
        craft_principles: CRAFT_PRINCIPLES,
        writer_menu: WRITER_PROCESSES,
        craft_examples: JSON.stringify(examples, null, 2),
      },
      { model: MODEL },
    );
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "cowrite failed" }, { status: 502 });
  }

  return NextResponse.json({
    lyrics: state.revise ?? state.draft ?? "",
    chords: state.chords ?? "",
    steps: state,
  });
}
