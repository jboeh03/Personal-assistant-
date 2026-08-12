// Thin Replicate client (raw fetch — no extra dep). Ports produce.py::build_input
// for minimax/music-2.6 and exposes non-blocking create + poll for the job loop.

const DEFAULT_MODEL = process.env.MUSIC_MODEL ?? "minimax/music-2.6";

function token(): string {
  const t = process.env.REPLICATE_API_TOKEN;
  if (!t) throw new Error("REPLICATE_API_TOKEN is not set");
  return t;
}

export function buildMusicInput(
  lyrics: string,
  style: string,
  model: string,
): Record<string, unknown> {
  const m = model.toLowerCase();
  if (m.includes("ace-step") || m.includes("ace_step") || m.includes("acestep")) {
    return { lyrics, tags: style, duration: 150 };
  }
  // minimax/music-2.6 (default) and generic fallback
  return { lyrics, prompt: style };
}

export type Prediction = {
  id: string;
  status: string; // starting | processing | succeeded | failed | canceled
  output?: unknown;
  error?: unknown;
};

/** Create a prediction using an official model's latest version. Returns immediately. */
export async function createMusicPrediction(
  lyrics: string,
  style: string,
  model?: string,
): Promise<Prediction> {
  const mdl = model || DEFAULT_MODEL;
  const [owner, name] = mdl.split("/");
  const input = buildMusicInput(lyrics, style, mdl);
  const res = await fetch(
    `https://api.replicate.com/v1/models/${owner}/${name}/predictions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    },
  );
  if (!res.ok) {
    throw new Error(`Replicate create failed: ${res.status} ${await res.text()}`);
  }
  const j = await res.json();
  return { id: j.id, status: j.status, output: j.output, error: j.error };
}

export async function getPrediction(id: string): Promise<Prediction> {
  const res = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
    headers: { Authorization: `Bearer ${token()}` },
  });
  if (!res.ok) throw new Error(`Replicate get failed: ${res.status}`);
  const j = await res.json();
  return { id: j.id, status: j.status, output: j.output, error: j.error };
}

/** Normalize a prediction output (string | string[] | {url}) into a single URL. */
export function outputUrl(output: unknown): string | null {
  if (!output) return null;
  if (typeof output === "string") return output;
  if (Array.isArray(output)) {
    const first = output[0];
    return typeof first === "string" ? first : null;
  }
  if (typeof output === "object" && output !== null && "url" in output) {
    const u = (output as { url: unknown }).url;
    return typeof u === "string" ? u : null;
  }
  return null;
}
