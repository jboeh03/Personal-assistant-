> ## ⚠️ SUPERSEDED FACTS — READ CANON FIRST
>
> **Re-baselined 2026-08-05.** This brief was written for the original build and still
> quotes the model as it stood then. The owner has since shipped decisions that changed the
> price, the season, the visit structure, the name, the pool scope, and the identity.
>
> **The method in this file is still good. The facts in it are not.**
> Take the sequence, the acceptance criteria, and the constraints; take every business fact
> from [`../../CANON.md`](../../CANON.md) and `00-model/`, which are authoritative. Reversals
> and their reasoning are in `00-model/decisions.md` from D-18 onward.

# Step 04 — Brand, voice, and visual direction

**Agent:** `wpc-brand` · **Depends on:** Step 03 · **Parallel with:** nothing —
still the critical path

Positioning follows the model. The website and every marketing asset reads `voice.md` and
`visual-direction.md`, so this has to be right before the fan-out starts.

## Brief — paste this to the subagent

> You are acting as `wpc-brand`. Read `.claude/agents/wpc-brand.md` and follow it as your
> system prompt. Working directory: the repository root.
>
> Read `westside-property-care/CANON.md` in full — especially §7, the voice guardrails — then
> all of `westside-property-care/00-model/`. Invoke the `brand-voice` skill for the
> voice-profile methodology. Also read `.claude/rules/web/design-quality.md`, whose
> anti-template policy is binding on `visual-direction.md`.
>
> Write all four files in `westside-property-care/01-brand/`:
>
> - `brand-brief.md` — the naming decision (Westside Property Care vs WPC513 — pick one as
>   the customer-facing name and say why, and say where the other one is still used), the
>   positioning statement, the promise, the proof points he can actually make as a brand-new
>   one-person business, and an explicit "what we are not" list.
> - `voice.md` — the voice profile. This must be **auditable**: other agents check their copy
>   against it. At least 10 concrete do/don't pairs drawn from real WPC situations (service
>   reports, the pricing page, a door hanger, a "membership full" notice), each with a
>   before/after rewrite. Extend CANON §7's banned-phrase list and give replacements. End with
>   a checklist another agent can run down.
> - `messaging.md` — the message hierarchy (the one thing, the three supports, the proof for
>   each), and an objection-handling table covering at least: "why not just hire a lawn guy,"
>   "$289 a month is a lot," "what do I actually get for two visits," "what happens in
>   winter," "why is there a waitlist," "what if I need something that isn't included."
> - `visual-direction.md` — one committed design direction with real values: palette in
>   hex/oklch with semantic roles, a specific type pairing with fallbacks, texture and
>   atmosphere, layout posture, motion posture, and a short reference list. The product is
>   outdoor, physical, seasonal, Midwestern, premium-but-not-fussy. `design-quality.md` bans
>   default card grids, stock centered heroes with gradient blobs, unmodified library
>   defaults, and safe gray-on-white with one accent — name which of its ten required
>   qualities this direction delivers and how.
>
> Constraints: write ONLY inside `westside-property-care/01-brand/`. Never contradict CANON or
> `00-model/`. Never invent testimonials, review counts, credentials, crews, or years in
> business — he is new, and specificity is the substitute for social proof. The six-client
> scarcity is real; write it plainly and never manufacture urgency beyond the truth.
> WebSearch works; **WebFetch and curl are blocked (403) — do not attempt a URL fetch.**

## Inputs
`CANON.md`, `00-model/*`, `.claude/rules/web/design-quality.md`

## Outputs
All four files in `01-brand/`

## Acceptance
- [ ] All four files exist, no placeholder text
- [ ] `voice.md` has ≥10 do/don't pairs with before/after rewrites and a runnable checklist
- [ ] `visual-direction.md` gives real colour values and a real type pairing, not adjectives
- [ ] The naming question is decided, not deferred
- [ ] Nothing contradicts `00-model/` or CANON

## Human action required
Approve the customer-facing name before anything prints or ships.
