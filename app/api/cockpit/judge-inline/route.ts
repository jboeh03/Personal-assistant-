import { NextResponse, type NextRequest } from "next/server";
import { getUser } from "@/lib/cockpit/auth";
import { runLLM } from "@/lib/llm";
import { inlineJudgePrompt } from "@/lib/cockpit/prompts";
import { tasteSummary } from "@/lib/cockpit/taste";
import type { Section, SuggestionKind } from "@/lib/cockpit/types";

export const runtime = "nodejs";
export const maxDuration = 60;

const JUDGE_MODEL = process.env.COCKPIT_JUDGE_MODEL || undefined;

type RawNote = {
  sectionIdx?: number;
  lineStart?: number | null;
  lineEnd?: number | null;
  kind?: string;
  comment?: string;
  replacement?: string | null;
};

export async function POST(request: NextRequest) {
  const auth = await getUser();
  if ("error" in auth) return auth.error;
  const { supabase, user } = auth;

  let body: { versionId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!body.versionId) return NextResponse.json({ error: "versionId required" }, { status: 400 });

  const { data: sectionsData } = await supabase
    .from("cockpit_sections")
    .select("*")
    .eq("version_id", body.versionId)
    .order("idx", { ascending: true });
  const sections = (sectionsData ?? []) as Section[];
  if (sections.length === 0) return NextResponse.json({ suggestions: [] });

  const taste = await tasteSummary(supabase, user.id);
  const prompt = inlineJudgePrompt(
    sections.map((s) => ({ idx: s.idx, label: s.label, kind: s.kind, text: s.text })),
    taste,
  );

  let raw: string;
  try {
    raw = await runLLM(prompt, { model: JUDGE_MODEL, maxTokens: 1600, system: "You are a meticulous inline songwriting judge. Return only the requested JSON." });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "judge failed" }, { status: 502 });
  }

  // Extract + parse the JSON array; degrade gracefully on malformed output.
  let notes: RawNote[] = [];
  const match = raw.match(/\[[\s\S]*\]/);
  if (match) {
    try {
      const parsed = JSON.parse(match[0]);
      if (Array.isArray(parsed)) notes = parsed as RawNote[];
    } catch {
      notes = [];
    }
  }

  const byIdx = new Map<number, Section>(sections.map((s) => [s.idx, s]));
  const validKinds: SuggestionKind[] = ["suggestion", "praise", "warning"];
  const rows = notes
    .map((n) => {
      const sec = typeof n.sectionIdx === "number" ? byIdx.get(n.sectionIdx) : undefined;
      if (!sec || !n.comment) return null;
      const nLines = sec.text.split("\n").length;
      const clamp = (v: number | null | undefined) =>
        typeof v === "number" ? Math.max(0, Math.min(nLines - 1, v)) : null;
      const kind = validKinds.includes(n.kind as SuggestionKind) ? (n.kind as SuggestionKind) : "suggestion";
      return {
        version_id: body.versionId,
        user_id: user.id,
        section_id: sec.id,
        line_start: clamp(n.lineStart),
        line_end: clamp(n.lineEnd),
        judge: "inline",
        kind,
        comment: String(n.comment).slice(0, 800),
        replacement: n.replacement ? String(n.replacement).slice(0, 2000) : null,
        status: "open",
      };
    })
    .filter(Boolean) as Record<string, unknown>[];

  if (rows.length === 0) return NextResponse.json({ suggestions: [] });

  const { data: inserted, error } = await supabase
    .from("cockpit_suggestions")
    .insert(rows)
    .select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ suggestions: inserted ?? [] });
}
