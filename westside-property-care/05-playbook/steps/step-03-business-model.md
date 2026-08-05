# Step 03 — The refined business model

**Agent:** `wpc-strategist` · **Depends on:** Step 02 · **Parallel with:** nothing —
this is the critical path

Everything downstream reads `00-model/`. Do not start any other workstream until this is done.

## Brief — paste this to the subagent

> You are acting as `wpc-strategist`. Read `.claude/agents/wpc-strategist.md` and follow it
> as your system prompt. Working directory: the repository root.
>
> Read in this order: `westside-property-care/CANON.md` (non-negotiable — every number in it
> is locked), `.claude/agents/wpc-strategist.md`, then
> `westside-property-care/_source/brother-draft-4-client-model.md` (the draft you are refining).
>
> Write all six files in `westside-property-care/00-model/`:
>
> - `operating-model.md` — the route-hour cap and why it replaces a client-count cap; the
>   route schedule (Mon/Fri of weeks 1 and 3); the membership-as-lead-engine principle; the
>   protected Tue–Thu project block; the route-compactness rule; capacity-as-product; the five
>   internal membership standards — reconstruct the draft's truncated rules 4 and 5 and flag
>   them clearly as needing the owner's confirmation; the metrics that replace minutes-per-visit.
> - `pricing.md` — the three tiers, the Founding Member 12-month price lock, billing terms
>   (card on file, auto-charged the 1st, flat year-round), the project/add-on price list,
>   materials billed separately at cost plus markup, and a "how to quote a project" rule of
>   thumb so he isn't guessing in a driveway.
> - `service-catalog.md` — Green Season (Apr–Oct) scope, Dormant Season (Nov–Mar) scope, and
>   the exclusions. The exclusions are the most valuable part of the source draft — sharpen
>   them into language precise enough to become contract clauses. Make clear that not every
>   task happens every visit; work is prioritized to what the property needs.
> - `ideal-client.md` — target segment and qualifying attributes, the qualified geography and
>   the explicitly excluded geography, route compactness as a selection criterion, and
>   disqualifiers.
> - `unit-economics.md` — 4/6/8-client scenarios with arithmetic fully shown and every
>   assumption labeled as an assumption. Include route hours per month per scenario, a
>   realistic expense line (fuel, supplies, insurance, software, phone) so net is visible, and
>   a comparison against the source draft's ~$12,984.
> - `decisions.md` — a traceability log: for every change from the draft, what it said, what
>   it says now, and why. Written so his brother can read it and accept every edit.
>
> Market grounding you may cite without re-searching: Cincinnati weekly pool service is
> $121–142/month for four visits including chemicals; Cincinnati handyman labor is $40–80/hr;
> comparable home-watch/concierge memberships run $150–400/month for less physical work; west-side
> home values are Delhi $180–350k, Bridgetown ~$240k, Green Township $250–450k,
> Westwood/Price Hill/Cheviot ~$175k.
>
> Constraints: write ONLY inside `westside-property-care/00-model/`. Do not contradict CANON —
> if analysis says a locked number should change, write it as a recommendation in
> `decisions.md` rather than changing it. No placeholder text. No invented testimonials,
> client counts, or credentials. Show your arithmetic. WebSearch works; **WebFetch and curl
> are blocked (403 on every host) — do not attempt a URL fetch.**

## Inputs
`CANON.md`, `.claude/agents/wpc-strategist.md`, `_source/brother-draft-4-client-model.md`

## Outputs
All six files in `00-model/`

## Acceptance
- [ ] All six files exist, no placeholder text
- [ ] `unit-economics.md` arithmetic is correct and independently checkable
- [ ] Every price in every file matches `pricing.md`
- [ ] `decisions.md` accounts for every meaningful departure from the draft
- [ ] Truncated rules 4–5 reconstructed and flagged for confirmation
- [ ] Nothing contradicts CANON

## Human action required
Confirm the reconstructed membership standards, and confirm the pricing tiers before they
go on the website.
