// Ports agents.py::TemplateOrchestrator.run_pipeline — run a JSON-defined
// multi-step LLM pipeline (used for the 5-judge panel and the co-writer),
// threading each step's output into later steps by name.

import { runLLM, type Provider } from "@/lib/llm";

export type PipelineStep = { name: string; prompt: string; max_tokens?: number };
export type PipelineTemplate = { name?: string; description?: string; pipeline: PipelineStep[] };

const NEUTRAL_SYSTEM =
  "You are an expert songwriting collaborator. Follow the instructions in the message exactly and return only what is asked — no preamble.";

/** Replace {key} tokens with values from ctx; leave unknown tokens untouched. */
function format(template: string, ctx: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => (k in ctx ? ctx[k] : `{${k}}`));
}

/**
 * Run every step in order. `ctx` seeds the initial variables (e.g. voice_profile,
 * song, context). Each step's text output is added to the context under its name
 * so later steps can reference it. Returns the full state map.
 */
export async function runPipeline(
  template: PipelineTemplate,
  ctx: Record<string, string>,
  opts: { provider?: Provider; model?: string } = {},
): Promise<Record<string, string>> {
  const state: Record<string, string> = { ...ctx };
  for (const step of template.pipeline) {
    const prompt = format(step.prompt, state);
    state[step.name] = await runLLM(prompt, {
      provider: opts.provider,
      model: opts.model,
      maxTokens: step.max_tokens ?? 1000,
      system: NEUTRAL_SYSTEM,
    });
  }
  return state;
}
