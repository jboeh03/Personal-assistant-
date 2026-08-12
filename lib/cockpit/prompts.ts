// Grounding + prompt assembly for the cockpit judges/co-writer. The judge/co-writer
// TEMPLATE CONTENT is copied verbatim from factory (data/*.json); this file wires
// the grounding text and builds the one-shot inline-judge prompt.

import grounding from "@/lib/cockpit/data/grounding.json";
import judgesTemplate from "@/lib/cockpit/data/song_judges_template.json";
import songwritingTemplate from "@/lib/cockpit/data/songwriting_template.json";
import type { Controls } from "@/lib/cockpit/types";
import type { PipelineTemplate } from "@/lib/cockpit/orchestrator";

export const VOICE_PROFILE = grounding.voiceProfile as string;
export const CRAFT_PRINCIPLES = grounding.craftPrinciples as string;
export const WRITER_PROCESSES = grounding.writerProcesses as string;

export const JUDGES_TEMPLATE = judgesTemplate as unknown as PipelineTemplate;
export const SONGWRITING_TEMPLATE = songwritingTemplate as unknown as PipelineTemplate;

export function controlsLine(c: Controls): string {
  const parts: string[] = [];
  if (c.key) parts.push(`key ${c.key}`);
  if (c.tempo) parts.push(`~${c.tempo} BPM`);
  if (c.style) parts.push(`style: ${c.style}`);
  return parts.length ? `(${parts.join(" · ")})` : "";
}

/** Assemble the "song" text the judge panel evaluates (lyrics + a controls line). */
export function songText(lyrics: string, controls: Controls): string {
  const cl = controlsLine(controls);
  return cl ? `${lyrics}\n\n${cl}` : lyrics;
}

/** One-shot inline judge: returns anchored margin notes as a JSON array. */
export function inlineJudgePrompt(
  sections: { idx: number; label: string | null; kind: string; text: string }[],
  taste: string,
): string {
  const rendered = sections
    .map((s) => {
      const numbered = s.text
        .split("\n")
        .map((ln, i) => `  ${i}: ${ln}`)
        .join("\n");
      return `SECTION ${s.idx} [${s.label ?? s.kind}]\n${numbered}`;
    })
    .join("\n\n");

  return `You are an inline songwriting judge for the folk artist Theo Archer. Leave a FEW high-value, anchored notes on the lyric below — the kind a trusted co-writer scribbles in the margin.

VOICE PROFILE:
${VOICE_PROFILE}

CRAFT PRINCIPLES (apply, never name):
${CRAFT_PRINCIPLES}
${taste ? `\nWHAT JEFF TENDS TO PICK / REJECT — weight this heavily; his taste is the arbiter:\n${taste}\n` : ""}
THE LYRIC (sections with 0-based line numbers):
${rendered}

Return ONLY a JSON array (no prose, no code fence) of 3-6 of the most valuable notes. Each item:
{"sectionIdx": <number>, "lineStart": <number|null>, "lineEnd": <number|null>, "kind": "suggestion"|"praise"|"warning", "comment": "<short, specific>", "replacement": "<exact rewrite of lineStart..lineEnd, or null>"}
Rules: anchor to a real sectionIdx and the line numbers shown; null lineStart/lineEnd means the whole section; "replacement" is the exact new text for those lines (null for praise/warning). Prefer concrete, singable fixes in his plainspoken, de-rushed voice. No clichés.`;
}
