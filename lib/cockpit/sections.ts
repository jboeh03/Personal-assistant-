// Parse a labeled lyric ("[Verse 1]\n...\n[Chorus]\n...") into ordered sections,
// and serialize sections back into a single lyric string.

export type ParsedSection = {
  idx: number;
  kind: string;
  label: string | null;
  text: string;
};

const HEADER = /^\s*\[([^\]]+)\]\s*$/;

function kindFromLabel(label: string): string {
  const l = label.toLowerCase();
  if (l.includes("chorus")) return "chorus";
  if (l.includes("bridge")) return "bridge";
  if (l.includes("intro")) return "intro";
  if (l.includes("outro")) return "outro";
  if (l.includes("verse")) return "verse";
  if (l.includes("hook")) return "chorus";
  if (l.includes("pre")) return "prechorus";
  return "other";
}

export function parseSections(lyrics: string): ParsedSection[] {
  const lines = (lyrics ?? "").replace(/\r\n/g, "\n").split("\n");
  const out: ParsedSection[] = [];
  let cur: ParsedSection | null = null;
  let buf: string[] = [];

  const flush = () => {
    if (cur) {
      cur.text = buf.join("\n").replace(/^\n+|\n+$/g, "");
      out.push(cur);
    }
    buf = [];
  };

  for (const line of lines) {
    const m = line.match(HEADER);
    if (m) {
      flush();
      cur = { idx: out.length, kind: kindFromLabel(m[1]), label: m[1].trim(), text: "" };
    } else {
      if (!cur) cur = { idx: 0, kind: "verse", label: null, text: "" };
      buf.push(line);
    }
  }
  flush();

  // Re-index after possible leading unlabeled block.
  return out
    .filter((s, i) => s.text.trim().length > 0 || i < out.length)
    .map((s, i) => ({ ...s, idx: i }));
}

export function sectionsToLyrics(
  sections: { label?: string | null; kind?: string; text: string }[],
): string {
  return sections
    .map((s) => {
      const header = s.label ? `[${s.label}]` : s.kind ? `[${s.kind}]` : "";
      return header ? `${header}\n${s.text}` : s.text;
    })
    .join("\n\n")
    .trim();
}
