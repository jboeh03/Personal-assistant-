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

# Steps 12–14 — Field operations

**Agent:** `wpc-ops` · **Depends on:** Step 03 · **Parallel with:** Steps 05–08, Steps 09–11

These documents get used on a phone, in a driveway, in the rain. Short, scannable,
unambiguous. The exclusions get written like they will one day be argued over, because they
will.

## Brief — paste this to the subagent

> You are acting as `wpc-ops`. Read `.claude/agents/wpc-ops.md` and follow it as your system
> prompt. Working directory: the repository root.
>
> Read `westside-property-care/CANON.md`, then all of `westside-property-care/00-model/` —
> `service-catalog.md` especially, since its included/excluded lists are the basis of the
> agreement's scope language. Read `westside-property-care/01-brand/voice.md`; even a contract
> sounds like the brand.
>
> **Step 12 — `04-operations/service-agreement.md`.** The one-page membership agreement:
> parties, scope by reference to the service catalog, **exclusions as binding language**, term
> and month-to-month renewal, the three prices, billing (card on file, auto-charged the 1st,
> flat year-round), the Founding Member 12-month price lock, 30-day cancellation either way,
> property access and gate/key handling, liability and what happens if something breaks,
> photo consent for marketing use, materials and parts billed separately at cost plus markup,
> weather rescheduling, and what happens when a visit finds work that isn't included. Plain
> language, one page. Add an explicit note that a local attorney or his insurance carrier
> should review it before use and that it is not legal advice.
>
> **Step 13 — `04-operations/visit-sop.md` and `04-operations/service-report-templates.md`.**
> The SOP needs **two distinct season variants** — Green (Apr–Oct) and Dormant (Nov–Mar) —
> each with before-arrival, arrival walkaround, the work itself, and the before-leaving
> checklist. The Dormant SOP is what keeps winter revenue alive; give it equal care, not a
> footnote. Never use a minutes-per-visit target — CANON §3 forbids it and it contradicts the
> rule "never rush a property." The service report is the **single most important document in
> this business**: it is the only proof the customer gets that the membership is worth $289.
> Write at least five templates — routine Green, routine Dormant, something-found (with the
> project recommendation and price), nothing-found, and weather-rescheduled. Every one ends
> with either a specific recommendation or an explicit "nothing needed this visit." Never
> silence. Keep the source draft's "WPC SERVICE COMPLETE ✓" pattern; it works.
>
> **Step 14 — `04-operations/property-record-template.md`, `estimate-templates.md`,
> `tooling.md`.** The property record: access, pool details, outdoor kitchen details, trash
> and water and electrical, pets, special instructions, known issues, recommended future
> projects, plus the running service-history table. Estimate templates for the add-on catalog
> in `00-model/pricing.md`, with a structure that makes scope and exclusions explicit so a
> quoted project doesn't grow. `tooling.md`: LLC, EIN, insurance, bank, Stripe vs
> Jobber/Housecall Pro with the actual tradeoff, phone, and how the three ledgers
> (membership / project / materials) get kept — **ordered by lead time, longest first**, with
> every blocker to the first paid visit flagged.
>
> Constraints: write ONLY inside `westside-property-care/04-operations/`. Every exclusion in
> `00-model/service-catalog.md` must appear in the agreement. Never invent credentials, license
> numbers, insurance policy numbers, or an entity name that doesn't exist yet — use clearly
> marked fill-in slots. You are not a lawyer; write clearly and say so.

## Inputs
`CANON.md`, `00-model/*`, `01-brand/voice.md`

## Outputs
`04-operations/service-agreement.md`, `visit-sop.md`, `service-report-templates.md`,
`property-record-template.md`, `estimate-templates.md`, `tooling.md`

## Acceptance
- [ ] All six files exist, no placeholder text beyond marked fill-in slots
- [ ] Every exclusion in `00-model/service-catalog.md` appears in the agreement
- [ ] Both SOP season variants complete and genuinely distinct
- [ ] ≥5 service-report templates, each ending in a recommendation or an explicit "nothing needed"
- [ ] `tooling.md` ordered by lead time with blockers flagged
- [ ] The agreement carries the attorney/insurer review note
- [ ] No minutes-per-visit target anywhere

## Human action required
Have an attorney or the insurance carrier review the agreement before the first signature.
