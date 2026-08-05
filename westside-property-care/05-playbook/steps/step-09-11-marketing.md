# Steps 09–11 — Go-to-market

**Agent:** `wpc-marketing` · **Depends on:** Step 04 · **Parallel with:** Steps 05–08, Steps 12–14

The source draft had no customer acquisition plan at all — it assumed four clients simply
appear. Getting the first four premium clients is the hard part of this business.

## Brief — paste this to the subagent

> You are acting as `wpc-marketing`. Read `.claude/agents/wpc-marketing.md` and follow it as
> your system prompt. Working directory: the repository root.
>
> Read `westside-property-care/CANON.md` (especially §4, who the customer actually is), then
> all of `westside-property-care/00-model/` and `westside-property-care/01-brand/`. Every word
> you write must pass the checklist in `01-brand/voice.md`. Invoke the `marketing-campaign` and
> `content-engine` skills.
>
> **Step 09 — `03-marketing/gtm-plan.md`.** The three tracks in priority order, the sequence,
> and a measurable target for filling slots 1–4 and then 5–6. Be explicit that the goal is
> **six clients, ever** — this is not a demand-generation problem, it is a
> find-six-right-people problem, and the plan should read that way. State what "done" looks
> like and when to stop marketing.
>
> **Step 10 — `03-marketing/neighborhood-campaign.md` and `03-marketing/assets/`.**
> Street-level targeting inside the qualified subdivisions from `00-model/ideal-client.md`
> only — Green Township, Oak Hills, upper Delhi and Covedale. **Not** Westwood, Price Hill,
> or Cheviot; do not write copy aimed at them. Route compactness is the profit lever, so
> target streets adjacent to existing clients. Produce real copy for: a door hanger, a yard
> sign, a one-page leave-behind, and a follow-up card — each in `assets/` with dimensions,
> production notes, and the call to action. Include the referral mechanic: an existing client
> introducing a neighbor is the highest-converting and most route-efficient lead there is.
>
> **Step 11 — `03-marketing/google-business-profile.md` and
> `03-marketing/warm-list-campaign.md`.** GBP: primary and secondary categories, services
> list, the business description, the photo plan (tied to the shot list in
> `05-playbook/human-checklist.md`), posting cadence, and the review-request mechanic — when
> to ask, how to ask, and what to do with a bad one. Set the service area to the qualified
> geography, not all of Cincinnati.
> The warm-list campaign is **CONDITIONAL** — put an unmissable banner at the top stating that
> Tri-State Grill Cleaning customer-list access is unconfirmed and what must be true before it
> runs (permission to use the list, and a lawful consent basis for email/SMS with a working
> opt-out). Write it anyway: anyone who paid ~$249 for a grill cleaning demonstrably has an
> outdoor kitchen, a maintained yard, and disposable income, which makes it the single
> highest-leverage channel available. Segment by west-side geography, then produce the
> founding-member sequence.
>
> Constraints: write ONLY inside `westside-property-care/03-marketing/`. Prices come from
> `00-model/pricing.md` verbatim — lead with $289/$329, not $229. **Never fabricate social
> proof** — no invented testimonials, review counts, "trusted by N families," or
> years-in-business claims. He is brand new; specificity and a standing offer to come look at
> the property beat fake proof. Never write a campaign that generates more demand than six
> slots can absorb, and never imply unlimited availability — when full, the offer is the
> waitlist, which is a genuinely stronger offer. Mark every `[PHONE]` / `[EMAIL]` / `[URL]`
> slot clearly and list them in one place. WebSearch works; **WebFetch and curl are blocked
> (403) — do not attempt a URL fetch.**

## Inputs
`CANON.md`, `00-model/*`, `01-brand/*`

## Outputs
`03-marketing/gtm-plan.md`, `neighborhood-campaign.md`, `google-business-profile.md`,
`warm-list-campaign.md`, `assets/`

## Acceptance
- [ ] All four documents plus the assets exist, no placeholder text beyond marked slots
- [ ] `warm-list-campaign.md` opens with an unmissable CONDITIONAL banner
- [ ] Every asset has copy, dimensions, production notes, and a real call to action
- [ ] Targeting names only the qualified geography
- [ ] `gtm-plan.md` states a concrete sequence, a measurable target, and a stop condition
- [ ] Every price traces to `00-model/pricing.md`
- [ ] No fabricated social proof anywhere

## Human action required
Confirm TSGC list access — this gates Track A entirely. Supply the real phone number before
anything prints.
