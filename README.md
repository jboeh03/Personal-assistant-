# Personal Assistant

A project scaffolded with the **[Everything Claude Code (ECC)](https://github.com/affaan-m/everything-claude-code)**
configuration suite — the Anthropic hackathon-winning collection of Claude Code
agents, skills, commands, rules, hooks, and MCP configs.

## What's here

The Claude Code configuration is vendored under `.claude/`, where Claude Code
loads it automatically at **project scope**:

| Path | Contents |
|------|----------|
| `.claude/agents/` | 64 subagents for delegated tasks |
| `.claude/skills/` | 261 workflow & domain skills |
| `.claude/commands/` | 84 slash commands (`/plan`, `/tdd`, `/code-review`, …) |
| `.claude/rules/` | Language-specific & universal coding guidelines |
| `.claude/mcp-configs/` | MCP server configuration reference |
| `.claude/hooks/` | Event-automation templates (opt-in — see below) |
| `.claude/settings.json` | Project Claude Code settings (minimal by default) |

The upstream ECC tooling is preserved at the repo root so you can also install
the suite as a plugin or to your user directory:

- `.claude-plugin/` — plugin & marketplace manifests
- `scripts/` — cross-platform Node.js hook/install utilities
- `install.sh` / `install.ps1` — ECC installers
- `package.json` / `package-lock.json` — Node dependencies for the tooling

## Getting started

Open this repo with Claude Code — the agents, skills, and slash commands under
`.claude/` are available immediately. Try `/plan` or `/code-review`.

To use the hook automations or the installer tooling, install the Node deps:

```bash
npm install
```

## Web app (`web/`)

A Next.js (App Router, TypeScript, Tailwind) personal-assistant **chat app** lives
in [`web/`](./web), kept separate from the ECC tooling at the repo root.

- **Auth:** Supabase email/password (`@supabase/ssr`, session via middleware)
- **Chat:** talk to **Claude** with a **Gemini** toggle; conversations & messages
  are persisted in Supabase Postgres with per-user Row Level Security
- **Backend:** Supabase project `personal-assistant` (ref `ugrguxqdhsjflygkndkv`,
  region `us-east-2`) — schema in `conversations` + `messages` tables
- **LLM keys** are read from the environment server-side only (never `NEXT_PUBLIC_`)

### Run locally

```bash
cd web
cp .env.local.example .env.local   # Supabase values pre-filled; add your LLM keys
npm install
npm run dev                        # http://localhost:3000
```

`ANTHROPIC_API_KEY` and `GEMINI_API_KEY` are the only blanks to fill — set them in
`web/.env.local` (gitignored) or your environment's secret config. Without them
the UI and auth work, but a chat send returns a "key not set" error.

### Deploy (Vercel)

Set the Vercel project **Root Directory** to `web/`, add the four env vars
(`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `ANTHROPIC_API_KEY`,
`GEMINI_API_KEY`) in Project Settings, and deploy. See `web/.env.local.example`
for the full list.

## MCP connectors

A curated, project-scoped set of MCP servers is wired in [`.mcp.json`](./.mcp.json)
(Claude Code prompts to approve project MCP servers on first use). The set is kept
small on purpose — ECC's own guidance is to keep under ~10 enabled to preserve the
context window. The full ~30-server catalog to pick more from lives in
`.claude/mcp-configs/mcp-servers.json`.

| Server | Needs a key? | Purpose |
|--------|--------------|---------|
| `sequential-thinking` | no | structured chain-of-thought reasoning |
| `memory` | no | persistent memory across sessions |
| `context7` | no | live library/framework docs lookup |
| `parallel-search` | no (anon) | citation-backed web search |
| `playwright` | no | browser automation |
| `github` | `GITHUB_PERSONAL_ACCESS_TOKEN` | PRs, issues, repos |
| `vercel` | OAuth (in-editor) | deployments & projects |
| `supabase` | `SUPABASE_PROJECT_REF`, `SUPABASE_ACCESS_TOKEN` | database operations |

### Secrets — set them in env, never in chat or git

Keys go in a local `.env` (gitignored) or your hosting/web-environment secret
config — **never pasted into chat and never committed**. Copy the template:

```bash
cp .env.example .env   # then fill in real values
```

`.mcp.json` references secrets as `${ENV_VAR}` placeholders, so no credential is
ever hardcoded. See [`.env.example`](./.env.example) for the full list and where
to obtain each value.

> **Gemini / Anthropic** are LLM APIs, not MCP connectors — they belong in app
> code / env vars (`GEMINI_API_KEY`, `ANTHROPIC_API_KEY`), not in `.mcp.json`.

## Enabling hooks (opt-in)

Hooks are **intentionally not enabled** in `.claude/settings.json`. The upstream
ECC hook defaults are aggressive — e.g. GateGuard denies the first `Bash`
command of a session until you state the task, and other hooks gate `Write` and
`git push`. That is great for disciplined solo workflows but surprising as a
silent project default.

To opt in, copy the hook definitions from `.claude/hooks/hooks.json` into
`.claude/settings.json` (run `npm install` first so the hook scripts resolve).
Escape hatches if a hook blocks you:

- `ECC_GATEGUARD=off` — disable the fact-forcing Bash gate
- `ECC_DISABLED_HOOKS=pre:bash:gateguard-fact-force,...` — disable specific hooks

A lighter, non-blocking option is the session memory-persistence hooks in
`.claude/hooks/memory-persistence/hooks.json`.

## Updating ECC

Re-clone [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)
and re-copy the `agents/`, `skills/`, `commands/`, `rules/`, `mcp-configs/`, and
`hooks/` directories into `.claude/`, plus `scripts/` and `.claude-plugin/` at
the root.

## Attribution & license

The ECC content in this repository is sourced from
[affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)
and is **MIT-licensed** — see [`LICENSE`](./LICENSE).
