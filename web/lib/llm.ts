import Anthropic from "@anthropic-ai/sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";

export type Provider = "claude" | "gemini";

export type ChatTurn = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT =
  "You are a helpful, concise personal assistant. Be direct and practical.";

const CLAUDE_MODEL = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-6";
const GEMINI_MODEL = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";

/**
 * Run one assistant turn against the selected provider.
 * `history` is the prior conversation (oldest first); `prompt` is the new user message.
 */
export async function runChat(
  provider: Provider,
  history: ChatTurn[],
  prompt: string,
): Promise<string> {
  if (provider === "gemini") return runGemini(history, prompt);
  return runClaude(history, prompt);
}

async function runClaude(history: ChatTurn[], prompt: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not set");

  const anthropic = new Anthropic({ apiKey });
  const message = await anthropic.messages.create({
    model: CLAUDE_MODEL,
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [...history, { role: "user", content: prompt }],
  });

  return message.content
    .filter((block) => block.type === "text")
    .map((block) => (block as { text: string }).text)
    .join("\n")
    .trim();
}

async function runGemini(history: ChatTurn[], prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not set");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: GEMINI_MODEL,
    systemInstruction: SYSTEM_PROMPT,
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
