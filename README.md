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
