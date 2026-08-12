import Anthropic from "@anthropic-ai/sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";

export type Provider = "claude" | "gemini";

export type ChatTurn = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT =
  "You are a helpful, concise personal assistant. Be direct and practical.";

const CLAUDE_MODEL = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-6";
const GEMINI_MODEL = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";

/** Per-call overrides for a single LLM turn. */
export type LLMOptions = {
  provider?: Provider;
  /** System prompt for this call (defaults to the generic assistant prompt). */
  system?: string;
  /** Model id override (defaults to the provider's env-configured model). */
  model?: string;
  /** Max output tokens (defaults to 1024). */
  maxTokens?: number;
  /** Prior conversation turns, oldest first. */
  history?: ChatTurn[];
};

/**
 * Flexible single-turn call used by the Song Cockpit (judges, co-writer).
 * `runChat` below is the back-compatible wrapper the chat route uses.
 */
export async function runLLM(prompt: string, opts: LLMOptions = {}): Promise<string> {
  const provider = opts.provider ?? "claude";
  const history = opts.history ?? [];
  const system = opts.system ?? SYSTEM_PROMPT;
  const maxTokens = opts.maxTokens ?? 1024;
  if (provider === "gemini") {
    return runGemini(history, prompt, { system, model: opts.model, maxTokens });
  }
  return runClaude(history, prompt, { system, model: opts.model, maxTokens });
}

/**
 * Run one assistant turn against the selected provider.
 * `history` is the prior conversation (oldest first); `prompt` is the new user message.
 */
export async function runChat(
  provider: Provider,
  history: ChatTurn[],
  prompt: string,
): Promise<string> {
  return runLLM(prompt, { provider, history });
}

type TurnOpts = { system: string; model?: string; maxTokens: number };

async function runClaude(
  history: ChatTurn[],
  prompt: string,
  opts: TurnOpts,
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not set");

  const anthropic = new Anthropic({ apiKey });
  const message = await anthropic.messages.create({
    model: opts.model ?? CLAUDE_MODEL,
    max_tokens: opts.maxTokens,
    system: opts.system,
    messages: [...history, { role: "user", content: prompt }],
  });

  return message.content
    .filter((block) => block.type === "text")
    .map((block) => (block as { text: string }).text)
    .join("\n")
    .trim();
}

async function runGemini(
  history: ChatTurn[],
  prompt: string,
  opts: TurnOpts,
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not set");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: opts.model ?? GEMINI_MODEL,
    systemInstruction: opts.system,
    generationConfig: { maxOutputTokens: opts.maxTokens },
  });

  const chat = model.startChat({
    history: history.map((turn) => ({
      role: turn.role === "assistant" ? "model" : "user",
      parts: [{ text: turn.content }],
    })),
  });

  const result = await chat.sendMessage(prompt);
  return result.response.text().trim();
}
