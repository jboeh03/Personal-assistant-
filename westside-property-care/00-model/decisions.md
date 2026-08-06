# Decisions — what changed, and why

**Owner:** `wpc-strategist` · **Status:** traceability log

This file exists so that every difference between the original 4-Client Model draft
(`_source/brother-draft-4-client-model.md`), the owner's signed decisions
(`_source/2026-08-05-owner-decisions.md`), and the model in this directory can be read,
checked, and argued with. Each entry says **what it said**, **what it says now**, and **why**.

**Nothing is deleted from this file.** When a decision reverses, the original entry stays,
gets a **REVERSED** banner, and points at the entry that replaced it. A traceability log that
edits its own history is not a traceability log.

---

## How to read this file

| Entry range | What it covers |
|---|---|
| **D-1 – D-17** | The original refinement of the brother's draft (2026, pre-August 5) |
| **D-18** | **The memo to the owner** — what his decisions cost, what needs attention, what he got right |
| **D-19 – D-24** | The six locked facts he changed on 2026-08-05 |
| **D-25 – D-26** | What had to be re-derived downstream of those six |
| **D-27** | **The Founding Member eligibility ruling, 2026-08-06** — a date, not a count |
| **R-1 – R-9** | Recommendations — open and closed |

### Status board

| # | Subject | Status |
|---|---|---|
| D-1 | Membership as the lead engine | ✅ **Stands — and is now arithmetic, not strategy** |
| D-2 | Route-hour cap, launch 4 / cap 6 | 🔄 **Revised** — cap re-derived to 25 route hrs/month (D-25) |
| **D-3** | **Attribute-based pricing, four configurations** | ❌ **REVERSED by D-19** |
| D-4 | Member projects 2.5 @ $275 | 🔄 **Revised** — now 2.0 @ $275 (D-20) |
| D-5 | Card on file, agreement, insurance, LLC | ✅ **Stands, extended** — seasonal billing terms |
| D-6 | Non-member project work counted | 🔄 **Revised** — $10,000 → $8,500 |
| **D-7** | **Green / Dormant seasons at one flat year-round price** | ❌ **REVERSED by D-20** |
| **D-8** | **The blanket ban on minutes per visit** | ❌ **REVERSED (narrowed) by D-21** |
| D-9 | Narrow qualified geography | ✅ **Stands** |
| D-10 | Three go-to-market tracks | ✅ **Stands** |
| D-11 | Exclusions in contract-clause language | 🔄 **Revised** — §4.1 rebuilt, §4.6 re-reasoned, snow clause deleted (D-22) |
| D-12 | Membership standards 4 and 5 reconstructed | 🔶 **Stands — still unconfirmed** |
| D-13 | Three route tests | 🔄 **Revised** — 5-hour test → route-day test |
| D-14 | The quoting formula | ✅ **Stands** |
| D-15 | Materials at cost + 25% | ✅ **Stands** |
| D-16 | What was preserved from the draft | ✅ **Stands** |
| D-17 | Three arithmetic corrections | ✅ **Historical record** |
| **D-18** | **Memo to the owner** | 🆕 **New** |
| D-19 | $279 flat | 🆕 **Locked** |
| D-20 | March–October season | 🆕 **Locked** |
| D-21 | 2 × up to 2 hours, no rollover | 🆕 **Locked** |
| D-22 | Heavier pool scope + the disclaimer | 🆕 **Locked** |
| D-23 | Westside Property Care 513 / WPC513 | 🆕 **Locked** |
| D-24 | Attributes select clients, not prices | 🆕 **Derived** |
| D-25 | Route structure re-derived | 🆕 **Derived** |
| D-26 | Metrics recalibrated | 🆕 **Derived** |
| **D-27** | **Founding rate: "first 4 clients" → signed on or before Feb 28, 2027** | 🆕 **Ruled 2026-08-06** |

---

## Part 1 — the original refinement (D-1 to D-17)

Two things worth saying up front, and they still hold:

**The draft was good.** Its instincts were right in almost every place that counts — cap the
book on purpose, consolidate the visits, protect the middle of the week, pick clients for
route compactness, and above all write down what is *not* included.

**The draft had one real error, and it was an accounting error, not a strategy error.** It
described a business where project work was the income, then built every financial table as
though the memberships were.

---

### D-1 · Membership as revenue → membership as the lead engine

✅ **Stands. Strengthened by the seasonal model rather than weakened.**

**The draft said:** "Recurring-client cap: 4 properties. Membership: $229/month." Its financial
baseline listed recurring revenue as *the* target. Project work appeared in §9 as an upside and
in §10 as a strategy, but never in a financial table.

**It now says:** the membership is not the revenue, it is the lead engine. Its job is to put a
trusted operator on a property **16 times a season**, where every visit is also an inspection
that surfaces quotable work.

**Why it matters more now:** at six clients, project work is **46.8% of gross revenue**, up
from 40.7% under the year-round model. And `unit-economics.md` §7.1 runs the case where the
project engine does not fire: six members, membership only, pays **$33.25/hour** — against
$45.41 under the old model. **This stopped being a strategic claim and became arithmetic.**

*Locked in `CANON.md` §2. Implemented in `operating-model.md` §1, `unit-economics.md` §5.1.*

---

### D-2 · A 4-client cap → a route-hour cap, launch at 4, hard cap at 6

🔄 **Revised.** The cap holds at 6 clients. The *hours* moved — see D-25.

**The draft said:** "Four memberships is the target AND the cap."

**It now says:** launch at 4, hard cap at 6, expressed as **25 route hours per month in
season** (was 20, under the dead 1.5-hour constant).

**Why it's route hours and not clients:** two clients are not the same size. Under a flat price
that is *more* true, not less — a pool-and-kitchen property consumes 120 minutes and a
kitchen-only property 90, for the identical $279 (D-24).

**Why the cap holds at 6 — and the case got stronger.** Under the year-round model, eight
clients earned about $3,500 more a year at a *better* marginal rate, so the cap was a pure
risk trade. Under the seasonal model eight clients earn **$2,127 more** but the marginal hours
pay **$36.99** — below his blended $43.23 and below the $40 floor, in the base case, with no
assumption stressed. And the worst-case route day is **9.25 hours**, which is not runnable.
See **R-2**.

*Locked in `CANON.md` §3. Implemented in `operating-model.md` §2, `unit-economics.md` §6.*

---

### ❌ D-3 · A flat $229 → attribute-based pricing, four configurations

> ## REVERSED — 2026-08-05. Replaced by **D-19**.
>
> **This decision is dead. None of the prices below may appear as a live number anywhere in
> this project.** They are preserved here only because the reasoning trail is what this file
> is for.

**What D-3 said** *(superseded — quoted verbatim from the previous version of this file)*:

> **The draft said:** "$229/month per property," one price for every property, regardless of
> whether it had a pool, an outdoor kitchen, both, or neither.
>
> **It now says:** one membership, priced by what the property has — a $229 base, **+$60 for a
> pool, +$40 for an outdoor kitchen, the two add-ons independent of each other.**
>
> | Property has | Price |
> |---|---|
> | Neither | $229/month |
> | Outdoor kitchen only | $269/month |
> | Pool only | $289/month |
> | Pool and outdoor kitchen | $329/month |
>
> **Why:** A flat price charges the same for two properties that cost very different amounts
> to serve and are worth very different amounts to the owner. […] **What it's worth: $4,080 a
> year** at six clients — 18.8% of the total improvement over the draft.
>
> **Second-order effect:** attribute pricing changes the targeting. Once price is tied to pool
> and outdoor kitchen, the ideal client is defined by those attributes.

**What replaced it.** **$279 per month, flat.** The four configurations are withdrawn. Full
entry at **D-19**.

**Why the owner reversed it.** He did not give a written reason and did not need to. The
reasons visible in his documents are:

1. **His own standard, from the work-block plan:** *"A homeowner understands in 10 seconds:
   what you do → who it's for → price → how to contact you."* Four attribute-derived
   configurations cannot be understood in ten seconds. One number can.
2. **He replaced price discrimination with a time cap.** The two-hour ceiling does the job the
   $60 and $40 modules were doing — it bounds his exposure on a big property without asking
   the customer to follow arithmetic. **That is a better mechanism, and it is his** (D-21).
3. **He is selling this himself, one walkthrough at a time, to six people.** A price he can say
   in four words beats a price he has to build.

**What the reversal cost, stated honestly:** **$7,176 of membership revenue at six clients**
and **$8,549 of net** against the superseded model — though most of that is the season change
(D-20), not the price change. `unit-economics.md` §9.1 separates them. **D-18(a)** is the memo.

**What the reversal fixed, and D-3 had genuinely got wrong:** D-3's second-order claim was that
attribute pricing "defines the ideal client by those attributes." It did — and it defined them
*backwards*. It pushed him toward the properties that consume the most of his time, because
those were the ones that paid most. Under a flat price with a hard cap, the arithmetic points
the other way and the targeting improves. See **D-24**.

*Superseded in `CANON.md` §3. See **D-19** and **R-1**.*

---

### D-4 · Project assumptions: 2 per client at $249 → 2.5 at $275 → **2.0 at $275**

🔄 **Revised 2026-08-05.**

**The draft said:** "If each household purchases just two $249 projects per year: 8 × $249 =
$1,992."

**D-4 originally said:** 2.5 member projects per client per year at $275, across 24 visits — a
10.4% attach rate.

**It now says:** **2.0 member projects per client per season at $275**, across 16 visits — a
**12.5%** attach rate.

**Why the count fell but the rate rose:** the visit count fell by a third (24 → 16), so holding
2.5 would have implied a 15.6% attach rate. But all 16 remaining visits are **in-season**
visits, when the owner is outside using the space and the property is visibly in use. The ten
winter visits that disappeared were the lowest-converting ones in the old model, and the
March spring-prep report that D-7 leaned on is now simply the first visit of the season.
**Assumption A3** in `unit-economics.md`, with a sensitivity at 1.5 in §7.4 (−$756 of net).

*Implemented in `unit-economics.md` A3, §5.1, §7.4.*

---

### D-5 · No money mechanics → card on file, signed agreement, insurance, LLC

✅ **Stands, extended for the seasonal model.**

**The draft said:** nothing. It had a service model, a price, and a reporting format, and no
mechanism for collecting the money, no agreement binding the exclusions, no insurance, and no
legal entity.

**It now says** all four are required **before the first paid visit**, with three seasonal
additions:

| Mechanism | Rule | Seasonal change |
|---|---|---|
| **Card on file** | Collected before the first visit, auto-charged the 1st | **8 charges a season, none Nov–Feb.** The card stays on file, unused, for four months — see D-18(b). |
| **Signed service agreement** | Before the first visit | **The owner has now written one.** `04-operations/service-agreement.md`. |
| **General liability insurance** | In force before the first paid visit | **Carried year-round** — the policy doesn't take the winter off. **And the insurer must be told about the new pool scope** (D-22, `CANON.md` §10.3). |
| **LLC** | Filed before the first paid visit | Ohio Articles of Organization: $99 one time, no annual fee. |

**What was preserved:** the draft's §11 financial rules — track membership, project, and
material revenue separately, and close each month with a report ending in the effective hourly
rate. Kept verbatim in substance, plus one addition: **reserve $60 a month during the season
for the winter fixed costs** (`operating-model.md` §9).

*Implemented in `operating-model.md` §9, `pricing.md` §4.*

---

### D-6 · Non-member project work: a strategy with no number → a counted revenue line

🔄 **Revised 2026-08-05: $10,000 → $8,500.**

**The draft said,** in §10: "You can still accept non-members. I'd use Tuesday–Thursday
primarily for these jobs." Then it never appeared in a financial table. The draft's total was
$12,984 — memberships plus member projects only.

**It now says:** **30 in-season jobs + 4 off-season jobs × $250 = $8,500 a year**, counted as a
first-class revenue line. The old figure assumed 40 jobs across a 12-month working year; the
season is now 8 months with 30 working weeks in it, plus a deliberately small off-season line.

**This is still the largest single correction to the draft**, and under the seasonal model it
matters *more*: project work is now **46.8% of gross** and the membership book alone pays
$33.25/hour. **A7 is the load-bearing assumption in the whole model** — more so than A3.

*Implemented in `unit-economics.md` A7, A8, A9.*

---

### ❌ D-7 · No seasonality → Green and Dormant scopes at one flat year-round price

> ## REVERSED — 2026-08-05. Replaced by **D-20**.
>
> **The Dormant Season does not exist. The year-round argument is dead and must not survive
> anywhere — including page footers, where it appeared on nine of ten pages.**

**What D-7 said** *(superseded — quoted verbatim)*:

> **It now says:** two scopes, one price.
>
> - **Green Season, April–October:** pool skimming and baskets, patio and furniture, outdoor
>   kitchen surfaces, debris, watering, light weed treatment, blowing hard surfaces.
> - **Dormant Season, November–March:** gutter and downspout check, storm debris, freeze
>   protection (hose bibs, disconnects, drain-downs), furniture covering and storage, hardscape
>   ice and salt management, full exterior inspection with photo report, spring-prep planning.
>
> **The price does not change.**
>
> **Why the gap had to be filled:** a member who signs in June and finds themselves paying $289
> in January for a scope that was written entirely around a pool will cancel. […]
>
> **Why the price stays flat:** because flat year-round pricing is what makes this a membership
> instead of a seasonal service. A winter discount invites the member to ask why they're paying
> anything in January. `unit-economics.md` §6 has the arithmetic: the swing between a good
> month and a slow month is only **$565** *because* the $1,714 membership floor holds it
> steady.
>
> **The retention metric changed to match:** membership retention is measured on **April 1**,
> not January 1.

**What replaced it.** **March 1 – October 31. Eight months, 16 visits. No winter service in
the membership, and no charge.** Full entry at **D-20**.

**Why the owner reversed it, and D-7's own weakest point.** D-7 was an *invented* scope. The
draft contained no winter work at all — the word "winter" does not appear in it — and D-7 built
a Dormant Season to justify collecting money in January. The owner, who actually has to stand
in a Cincinnati backyard in January, decided he would rather not collect it. **He removed the
part of the model he would have had to defend, rather than defending it.** That is a better
instinct than the one D-7 had.

**What the reversal cost:** the flat membership floor that held the seasonal swing to $565 is
gone for four months a year. **The swing is now $2,774 — 4.9× larger**
(`unit-economics.md` §8). The answer is a $60/month reserve, not a price change.

**What it exposed:** D-7 argued the winter risk was *revenue*. It is not. **It is retention.**
See **D-18(b)**.

*Superseded in `CANON.md` §3. See **D-20**.*

---

### ❌ D-8 · The ~80-minute visit target → five real metrics

> ## REVERSED (narrowed) — 2026-08-05. Replaced by **D-21**.
>
> **The blanket ban is lifted. The performance-target ban is not.** Read both halves.

**What D-8 said** *(superseded — quoted verbatim)*:

> **The draft said:** "Target average visit: ~80 minutes." And then, six sections later, in its
> own membership standards: "**Never rush a property because another client is waiting.**"
>
> **It now says:** minutes per visit does not exist in this business, internal or external.
>
> **Why:** those two statements cannot both be true. The moment a time target exists, it
> becomes the thing he measures himself against on a day a property needs more than the target
> allows. The rule is better than the metric, so the metric goes.
>
> **The distinction that survives:** `operating-model.md` §2 keeps a **planning allowance** of
> 1.5 hours per stop door-to-door, used to build a calendar and size the route-hour cap.

**What replaced it.** The owner's signed agreement sells **up to two hours of on-site service
per visit**, and his field checklist budgets those two hours across eight named blocks. **Time
is now a contractual term of the product.** D-8's blanket statement — *"minutes per visit does
not exist in this business, internal or external"* — was overreach and is withdrawn.

**The narrowed rule, which is now `CANON.md` §3 and `operating-model.md` §7:**

| | Status |
|---|---|
| "Up to two hours of on-site service per visit" — a **scope boundary** | ✅ **Legitimate.** It limits what was sold. |
| His eight-block checklist budgeting those two hours — a **work aid** | ✅ **Legitimate.** His own document. |
| The 1:45 planning allowance — a **calendar input** | ✅ **Legitimate.** Never recorded, never compared to actuals. |
| "Average visit length" as a tracked number | ❌ **Still banned.** |
| Minutes per visit as a KPI | ❌ **Still banned.** |
| Copy implying he aims to finish quickly | ❌ **Still banned.** |

**The test, in one line:** *does this number limit what was sold, or does it grade how fast he
worked?* One is a ceiling on the customer's entitlement. The other is a stopwatch on his work.

**What D-8 got right and keeps:** the draft's ~80-minute *target* is still gone, and membership
standard 1 (*never rush a property*) is unchanged and now **served** by the cap rather than
threatened by it — because the cap bounds what the customer is owed, so he is never choosing
between finishing this property and reaching the next one.

**D-8's five replacement metrics survive with two recalibrated** — see **D-26**.

*Superseded in `CANON.md` §3. See **D-21** and **D-26**.*

---

### D-9 · No targeting → a narrow qualified geography with explicit exclusions

✅ **Stands.** Qualified: Green Township subdivisions, Oak Hills, upper Delhi, Covedale.
Bridgetown conditional on attributes. **Excluded: Westwood, Price Hill, Cheviot** — no copy, no
ads, no yard signs, no targeting.

**One honest update.** D-9 argued the exclusion from annual cost: a membership costing
"$2,748–$3,948 a year" addresses a narrow slice of a ~$175k-median market. **At $2,232 a season
the membership is about a third cheaper per year**, so that argument is weaker than it was. The
exclusion still stands, but the reasoning is now **attribute density**, not price: built outdoor
kitchens and in-ground pools are rare in that housing stock, and households already paying
three vendors are rarer still. `ideal-client.md` §3 states it that way.

*Locked in `CANON.md` §5. Implemented in `ideal-client.md` §3.*

---

### D-10 · No go-to-market → three tracks

✅ **Stands.** (1) The Tri-State Grill Cleaning warm list — **CONDITIONAL**, access unconfirmed
(`CANON.md` §10.5). (2) Neighbourhood proximity — yard signs and door hangers where a member
already lives, which does double duty on route compactness. (3) Google Business Profile plus
the site as a closer, not a lead engine.

**Seasonal note:** the calendar now matters to all three. **A yard sign in September is
advertising a season that ends in seven weeks.** Marketing spend and effort belong in
**January–March**, aimed at the March 1 start, not spread evenly. Detailed execution belongs to
`03-marketing/`.

*Implemented in `ideal-client.md` §4 and handed to `03-marketing/`.*

---

### D-11 · The exclusions list → contract-clause language

🔄 **Revised 2026-08-05.** The mechanism stands; three clauses changed.

**The draft said,** in §3 — the best section in the document: "Routine membership does not
include: deep grill cleaning, pressure washing, major storm cleanup, landscaping projects,
drainage installation, repairs, replacement parts, large-volume debris removal, extensive
weeding, gutter cleaning, window-well cleanouts, heavy hauling or anything requiring
specialized materials/equipment."

**It now says** the same things, in numbered clauses precise enough to sign
(`service-catalog.md` §4), with **bright lines instead of adjectives**:

| Draft's word | The bright line it became |
|---|---|
| "large-volume debris removal" | up to the capacity of the homeowner's own containers **— and within the two-hour visit** |
| "extensive weeding" | hardscape joints, walkway cracks, and bed *edges* — never inside beds |
| "major storm cleanup" | anything requiring a saw, a trailer, or more than one trip |
| "gutter cleaning" | ground-level visual inspection only; **no work from a ladder or above roof line** |
| "specialized equipment" | pressure washer, ladder, chainsaw, powered digging equipment, trailer |
| "deep grill cleaning" | burners, grates, flavorizer bars, interiors, hoods — vs. grease trap and exterior wipe-down |

**Three changes on 2026-08-05:**

1. **§4.1 Pool was rebuilt.** It excluded vacuuming, brushing, and backwashing — all of which
   he now does. See **D-22**.
2. **§4.8 Snow and ice was deleted** and replaced with **§4.8 The off-season**. There is no
   winter scope to bound. See **D-20**.
3. **§4.6 debris limits were re-reasoned, not changed.** The original justification was that a
   container-capacity limit avoided putting a stopwatch in the business. **There is now a
   stopwatch, in the agreement, in his words** — so the justification was dead even though the
   clause was still right. Both limits now stand with a new reason: **they fail in different
   directions.** Container capacity answers *how much can leave the property*; the two-hour cap
   answers *how long is he here*. A post-storm visit fills the can in twenty minutes; a heavy
   pool day runs out of time with the can half empty. **Whichever binds first, binds.**

**What was preserved verbatim in substance:** *"Your recurring service should find additional
work, not absorb additional work."* And it is now joined by the owner's own line, which is
better: **"Maintain everything. Deep-clean nothing unless specifically scheduled."**

*Implemented in `service-catalog.md` §4, §5.*

---

### 🔶 D-12 · Membership standards — rules 4 and 5 reconstructed

🔶 **Stands. Still unconfirmed.** See **R-3**.

**The draft said:** "I'd establish five internal rules," listed three, and **cut off
mid-sentence in rule 4**: *"Recommend additional work; don't quietly absorb projects into the"*
— and the document ends. Rule 5 is missing entirely.

**It now says** (`operating-model.md` §8):

1. Never rush a property because another client is waiting. *(draft's)*
2. Communicate anything unusual. *(draft's)*
3. Leave the property visibly better than you found it. *(draft's)*
4. 🔶 **Recommend additional work; never quietly absorb a project into the membership.**
5. 🔶 **Every visit ends in writing, the same day.**

**Basis for rule 4 — confidence: high.** The sentence is nearly complete and the only sensible
completions mean the same thing. It is also the principle in the draft's own §3, in
`CANON.md` §2, and now in **agreement §6** (*work beyond the scheduled service time requires
client approval before additional billable work is performed*), which is the owner's own
language and corroborates the reconstruction independently.

**Basis for rule 5 — confidence: moderate.** Nothing survives of it. The reconstruction came
from what the draft argued hardest for (§7 communication, §8 property record) and is now
**corroborated by the owner's checklist block 8**: *record completed services · note repairs /
additional-service recommendations · send short service summary to customer.* That is
materially stronger evidence than existed before, but it is still a reconstruction, not a
recovery.

**Both stay marked 🔶 RECONSTRUCTED — CONFIRM WITH OWNER** in `operating-model.md` §8 until he
confirms. If he remembers a different rule 5, use his — but the written-report discipline has
to live somewhere regardless, because the project attach rate depends on it mechanically.

*Flagged in `CANON.md` §10.4. Implemented in `operating-model.md` §8.*

---

### D-13 · "Don't take a client 40 minutes away" → three testable rules

🔄 **Revised:** the third test was recalibrated.

**The draft said:** "Don't accept a $229 customer who requires 40 minutes of driving each way
unless there's a strategic reason."

**It now says:** three tests every prospect passes before price is discussed — the **15-minute
test**, the **25-minute test**, and the **route-day test** (was: the 5-hour test).

**Why the third test changed:** the 5-hour figure came from the dead 1.5-hour planning
constant. A three-stop route day at the current allowance is **6.25 hours**, and **7.0 hours at
the two-hour ceiling on every stop**. The test is now: *does the route day still finish under
6.5 hours at the allowance, and stay runnable under 7 at the ceiling?*

**And it is still priced,** so the trade-off is visible rather than intuitive: a client 15
minutes off the cluster costs **8 unpaid drive hours a season — $346, or 15.5% of that client's
entire membership revenue** — before he picks up a tool. **Under a flat price that 15.5% is the
same for every client**, which makes the rule simpler to apply and no less severe.

**The rule that follows:** the empty slot is worth more than the wrong client.

*Implemented in `operating-model.md` §4, `ideal-client.md` §4.*

---

### D-14 · A price list with "quoted" on it → a quoting formula

✅ **Stands**, with one addition.

**It says:** `(on-site hours × $100) + (materials at cost × 1.25)`, rounded up to the nearest
$25. **Floor: no standalone trip below $149**, and the floor does not apply to work done during
a scheduled membership visit.

**The addition, forced by the two-hour cap:** work performed during a visit must be *additional
to* the two hours, not carved out of them. If a $49 window well is done inside the two hours,
the membership paid for it and the project revenue is fictional. `pricing.md` §7.

**The formula still reproduces the published prices** — 2.5 hrs × $100 = $250 → **$249+**;
0.5 hrs × $100 = $50 → **$49+**. That is the test that it is calibrated right.

*Implemented in `pricing.md` §5, §7.*

---

### D-15 · "Bill materials separately" → cost + 25%, itemised

✅ **Stands**, with one addition.

**It says:** materials, parts, and disposal at **cost + 25%**, itemised on the estimate before
the work and on the invoice after. Routine consumables used on a membership visit are **not**
materials — they are covered and budgeted as an operating expense.

**The addition:** **pool chemicals, salt, filters, and cartridges are materials, not membership
items.** Agreement §7 says so explicitly, and now that the pool scope is heavy (D-22) the
boundary needs stating in the price list as well as in the exclusions. `pricing.md` §6.

*Implemented in `pricing.md` §6, `service-catalog.md` §4.1, §4.9.*

---

### D-16 · What was preserved deliberately, and not touched

✅ **Stands.** Listed explicitly so it's clear these were considered and kept, not overlooked.

| From the draft | Status |
|---|---|
| **Excess capacity is part of the product** (§12) | Kept and expanded — `operating-model.md` §5. One of the best ideas in the draft. |
| **Consolidate visits into weeks 1 and 3** (§4) | Kept exactly. Locked in `CANON.md`. |
| **Tuesday–Thursday protected for projects** (§1, §10) | Kept, and now the primary argument for the 3-stop route day (D-25). |
| **No regularly scheduled weekend work** (§1) | Kept exactly. |
| **The per-visit SOP shape** (§6): before arrival, walk on arrival, work the priorities, walk before leaving | **Kept — and independently confirmed.** The owner's own checklist has exactly this shape: block 1 is the arrival walk, blocks 2–7 are the priorities, block 8 is the closing walk. |
| **"What will make the biggest difference today?" over "how many boxes can I check?"** (§6) | Kept — it is why `service-catalog.md` §1 exists, and it is now reinforced by agreement §5. |
| **The post-visit service report** (§7), including "I noticed the window wells, I can add that for $49" | Kept and promoted: the primary sales mechanism of the business (D-1), membership standard 5 (D-12), and block 8 of his own checklist. |
| **The property record and service history** (§8) | Kept. Belongs to `04-operations/`. |
| **"Not every task has to be performed every visit"** (§2) | Kept at the top of `service-catalog.md`. |
| **Track membership, project, and material revenue separately** (§11) | Kept — `operating-model.md` §9. |
| **The monthly report ending in effective hourly rate** (§11) | Kept, and promoted into the permanent metric set. |
| **MEMBERSHIP FULL and the waitlist** (§10) | Kept, and a genuine constraint rather than a positioning device. |
| **"You need four excellent ones"** (§10) | Kept in spirit at six. |

---

### D-17 · Three corrections found while re-deriving the model on 2026-08-05 (morning)

✅ **Historical record.** These were errors in the pre-August-5 `unit-economics.md`, found when
every line was recomputed for the four-configuration resolution. They are recorded so the edits
aren't mistaken for drift. **All three sections they touched have since been rewritten**, but
the corrections themselves were real:

1. **"Above the top of the Cincinnati handyman range"** compared a net, after-tax, per-hour
   figure to the **$40–80/hour** handyman *billing* range and called it "at the top." Wrong
   twice. The comparison is now stated honestly in `unit-economics.md` §9.3.
2. **"−10% of membership gross"** for losing one of six clients. It is −16.7%.
3. **The 8-client sensitivity expense line was unshown** — a total with no derivation. Every
   expense line in the current version is derived.

---

## Part 2 — the owner's decisions, 2026-08-05

---

## 🆕 D-18 · Memo to the owner — what your decisions cost, and what they fixed

**You wrote *"PRICING & SCOPE ARE DONE. DON'T CHANGE IT AGAIN."* Nothing below reopens them.**
The model in this directory is built to your numbers. This memo exists because you should know
what they cost and where the two real risks are, and because two of the things you sent are
better than what the build had.

### (a) The money: $2,232 a client instead of $3,468 — a $7,176 gap at six

```
Now         $279 × 8 months               =  $2,232 per client per year
Superseded  a pool-configuration property × 12 months
                                          =  $3,468 per client per year   (dead)
                                             -------
Per client                                     −$1,236   ( −35.6% )

At the book level, on the mix the old model actually assumed:
$20,568 − $13,392                         =  −$7,176 of membership revenue
                                             ( −34.9% )
```

*(Six identical pool properties would give 6 × $1,236 = $7,416. The old book was a mix, so
$7,176 is the right number. `unit-economics.md` §9.1.)*

**Carried all the way down:** gross falls from $34,693 to **$25,192**; net from $28,436 to
**$19,887**; net per hour from $50.69 to **$43.23**. That is **−$8,549 of net a year at the
cap.**

**Three things to say about that number, because it is not as bad as it looks and it is not as
good as it looks either.**

- **Most of it is the season, not the price.** Eight months instead of twelve is the bulk of
  the $7,176. The flat price on its own is a much smaller effect.
- **You bought something real with it.** 101 fewer hours a year, all of them in the worst
  weather, and no obligation to invent value for a January visit. That was the weakest joint in
  the old model and you removed it instead of defending it.
- **The project engine now has to work.** Six members with no project work pays **$33.25 an
  hour** (it was $45.41). The membership was always the lead engine on paper. **It is now the
  lead engine in fact — it cannot pay you on its own.** Protect Tuesday–Thursday accordingly.

### (b) The real winter risk is retention, not revenue

**The four months don't cost much money. They cost the relationship.**

The revenue side is fine:

```
Nov 2026 – Feb 2027    revenue  $1,000  (four project jobs)
                       expenses   $595  (insurance, software, phone, a little driving)
                       net        $405
Fixed cost that doesn't stop:  $119/month, $476 total
Reserve $60 a month during the season and every winter bill is pre-paid.
```

**That is a solved problem. This is the unsolved one:**

> **A client who signs in mid-August 2026 gets three visits, and then you disappear for four
> months.**

Three visits is not enough to build a habit. Four months of silence is long enough to break
one. And a seasonal membership requires an **active decision to come back**, where an annual
one requires an active decision to leave. The industry evidence on that difference is blunt:
landscape operators on **annual contracts retain 10–20% more customers** than operators on
seasonal billing, and the two commonest causes of churn are customers who feel undervalued and
customers who **simply forget to renew between seasons**.

**You have chosen seasonal billing. Here is what buys it back, and none of it costs money:**

1. **Tell them the gap exists before they sign.** In the driveway, in your own words. A
   prospect who reacts badly has disqualified themselves for free instead of in November.
   `ideal-client.md` §5.
2. **Two written touches across the gap.** A season-end property report in late November — what
   was done, what you found, what next season needs, with prices. One note in mid-January. A
   person wrote it, not software.
3. **Confirm re-enrolment in February, in writing, before March 1.** Not on the first route
   day. By the first route day it is too late to replace anyone.
4. **The Founding lock is your best tool here and it isn't primarily a discount.** It gives the
   August signer a written reason to come back on March 1. Use it that way.

**This is now the most important metric in the business** — `operating-model.md` §7.3 replaced
the old April-1 retention number with **season re-enrolment, measured before March 1, target 6
of 6.** The at-risk cohort is named: anyone who signs after August 1.

### (c) The heavier pool scope turned a deflection into a competitor

**This one is a direct consequence of two good decisions colliding.**

The old scope was skim-and-baskets. Dedicated pool service in Cincinnati runs **$121–142 a
month for four visits including chemicals** — and that comparison was easy to wave off, because
the two products barely overlapped.

**Your new scope vacuums, brushes, backwashes, empties both baskets and the auto-vac canister,
and reads the salt cell.** That overlaps a pool company substantially. And at a flat $279:

```
A dedicated pool service is 43–51% of your membership price
  $121 ÷ $279 = 43.4%      $142 ÷ $279 = 50.9%
…at twice your visit frequency (4 visits/month vs 2)
…and it brings chemicals.
```

**A prospect with a pool will make that comparison, and on the surface they win it.** You are
now roughly twice the price for half the visits.

**Your own disclaimer is the answer, and it is why it has to be said out loud rather than
buried in the agreement:**

> **"WPC513 does not guarantee water chemistry, water clarity, equipment performance, or
> pool-system operation unless separately contracted."**

Said plainly on the walkthrough, before the price:

> *"I vacuum it, I brush it, I empty the baskets, I'll backwash it and I'll tell you if the
> cell throws a code. I don't do your chemistry and I don't guarantee your water. I maintain
> the pool as part of the whole outdoor space. If you want somebody responsible for the water,
> you want a pool company — and I'll tell you who I'd call."*

**Two operational consequences, and neither is optional:**

- **Never lead with the pool.** The pool is one of eight blocks. Lead with the whole outdoor
  living space, which no pool company touches.
- **Tell your insurer what you actually do.** Vacuuming, backwashing, and salt-cell checks are
  **pool-system operation**. The old exclusion said you did none of it. This is a coverage
  question, not a scope question, and it is open — `CANON.md` §10.3.

### (d) $279 ÷ 4 hours = $69.75, and it is fixable in copy alone

```
$279 per month ÷ (2 visits × 2 hours) = $69.75 per hour of entitlement
```

That number is correct, it is the first calculation a price-sensitive prospect will do, and it
lands squarely inside the **$40–80/hour** Cincinnati handyman band. It reframes a maintenance
membership from someone who knows the property as **four hours of general labour**.

**This costs nothing to fix, because it is entirely a copy problem:**

- **Never put the price and the hours in the same sentence**, on any surface.
- **Lead with what stays maintained.** State the cap where a boundary belongs — the agreement,
  the what's-included page, the walkthrough after the price has landed.
- The cap is a **scope boundary**, not the thing being sold. `CANON.md` §3 makes this a rule and
  `operating-model.md` §6 implements it.

### What you got right, and it beat what we had

**1. The two-hour cap is the best mechanism in the model.** It is what makes a flat price
survivable across uneven properties, and it does it better than four price tiers did. At $279
for everything, a pool-and-kitchen house consumes 120 minutes and a kitchen-only house 90 — the
same fee buying between **$69.75 and $93.00 an hour** of your time. Without a ceiling, one price
would be a promise to work until the biggest property was finished, at the price the smallest
one pays. **The cap bounds your exposure without asking the customer to follow arithmetic**,
and it does something the tiers never did: it makes membership standard 1 keepable, because you
are never choosing between finishing this property and reaching the next one.

It also improved the targeting, which we had backwards. Attribute pricing pushed toward the
properties that eat the most of your day, because they paid the most. A flat price with a cap
points the other way. `ideal-client.md` was rewritten around it.

**2. Your motto beats a page of exclusions.**

> **Maintain everything. Deep-clean nothing unless specifically scheduled.**

Six words that settle nearly every scope argument before it starts. It is now the opening line
of `service-catalog.md` and it belongs on the checklist, in the agreement, and on the site.

**3. Your pool disclaimer is better than the clause it replaced.** The old §4.1 protected the
business by excluding the work. Yours protects it by **disclaiming the outcome while keeping
the work** — which is the harder and more valuable version, because it lets you do more for the
client without taking on what you can't control. It is adopted verbatim and it is the one
sentence in this whole build that must never be paraphrased.

---

## 🆕 D-19 · Four configurations → **$279 per month, flat**

**Reverses D-3.**

**What it said:** four attribute-derived membership prices, a base plus a pool module plus an
outdoor-kitchen module, presented as one membership built out loud rather than a menu.

**What it says now:** **$279 per month. One number. Billed March through October — eight
charges a season, $2,232 a year.** A property with a pool and an outdoor kitchen pays exactly
what a property with neither pays.

**Source:** the owner's signed service agreement, §1 and §11. His work-block plan and flyer
spec said $249; the agreement said $279. **Resolved to $279 — the agreement is the document a
customer signs**, and $249 collides with the published $249+ grill deep-clean project price.

**$249 is withdrawn as a membership price.** It remains a **project** price (`pricing.md`
§5.1). **`CANON.md` §10.1 tracks the open item: confirm nothing already went out at $249 as a
membership number.**

**Pro-ration is by visit — $279 ÷ 2 = $139.50.** That rule is `wpc-strategist`'s, not the
owner's. See **R-7**.

**Founding Member rate**, adapted to the season: the first 4 clients lock **$279 through
October 31, 2027** — the remainder of 2026 plus a full 2027. Its real job in a seasonal
business is **re-enrolment**, not discount. `pricing.md` §2.

> ⚠ **The words "the first 4 clients" in the paragraph above are superseded by D-27
> (2026-08-06).** Eligibility is now a date — signed on or before **February 28, 2027** — with
> **no member-count cap**. Everything else in that sentence stands: $279, through October 31,
> 2027, re-enrolment rather than discount. **The rest of D-19 is untouched.** This is a
> partial supersession of one clause, not a reversal of the decision.

*Locked in `CANON.md` §3. Implemented in `pricing.md` §1. Costed in **D-18(a)**.*

---

## 🆕 D-20 · Year-round with two scopes → **March 1 – October 31, 16 visits**

**Reverses D-7.**

**What it said:** Green Season April–October, Dormant Season November–March, one price all
twelve months, retention measured April 1.

**What it says now:**

- **Season: March 1 – October 31.** Eight months, two visits a month, **16 visits a season**.
- **Off season: November 1 – end of February.** No scheduled visits, no property checks, no
  freeze protection, no snow or ice service, **and no charge.**
- **The Dormant Season section of `service-catalog.md` is deleted**, and the snow-and-ice
  clause with it.
- The **separate optional winter offering** (`03-marketing/winter-service.md`) is not part of
  this agreement and must never be described as included.
- **The 2026 season is underway.** Clients signing now get a pro-rated remainder of 2026 plus a
  locked founding rate for a full 2027.

**Source:** agreement §8 and the Service Season field on the signed form.

**What must not survive:** the argument *"the same price in January as in July."* It was on
nine of ten page footers. **It is false now and it is the single most likely thing to leak
through into a downstream document.** What replaced it is `CANON.md` §4: *sixteen visits, six
properties, the same person every time, who writes down what he saw.*

**Downstream arithmetic:** every membership figure that was `× 12` is now `× 8`. Insurance,
software, phone, web, and accounting remain twelve-month costs. Supplies are eight-month costs.
`unit-economics.md` §11 states the rule; `verify-unit-economics.py` enforces it.

*Locked in `CANON.md` §3. Implemented in `service-catalog.md`, `pricing.md` §3,
`operating-model.md` §3. Risk analysed in **D-18(b)**.*

---

## 🆕 D-21 · A planning allowance and a blanket ban → **2 visits × up to 2 hours, no rollover**

**Reverses D-8 in part.**

**What it says now**, from agreement §1 and §5:

> **$279 per month includes two scheduled property-care visits each month, with up to two hours
> of on-site service per visit. Unused service time does not roll over.**
>
> **Because each visit is limited to approximately two hours, WPC513 will use reasonable
> judgment to address the highest-priority maintenance items first. Completion of every
> possible task during every visit is not guaranteed.**

**Those two clauses travel together everywhere.** A cap without the judgment clause is a
promise to finish; the judgment clause without the cap is an excuse. Neither works alone.

**What it replaces:** the 1.5-hour planning constant (dead — see D-25) and D-8's overreaching
claim that minutes per visit do not exist in this business at all. **Time is now a contractual
term of the product.**

**What is still banned:** average visit length as a tracked number, minutes per visit as a KPI,
and any copy implying he aims to finish quickly. The full table is in D-8's REVERSED banner and
in `operating-model.md` §7.

**The one thing to watch:** $279 ÷ 4 hours = $69.75. See **D-18(d)**.

*Locked in `CANON.md` §3. Implemented in `operating-model.md` §6, §7, `service-catalog.md`
§4.11.*

---

## 🆕 D-22 · Skim-and-baskets → **vacuum, brush, backwash, salt cell, both baskets, auto-vac**

**What it said:** `service-catalog.md` §4.1 was headed *"the most important exclusion in the
business"* and excluded **water chemistry, chemicals, vacuuming the pool, brushing walls or
steps, cleaning or backwashing the filter, equipment repair, opening and closing, and any work
below the water surface.**

**What it says now.** Included, per agreement §3 and checklist block 2, up to approximately
**30 minutes of pool time per visit**:

- surface skimming
- **brushing steps, corners, and selected areas**
- **vacuuming, stopping at approximately 30 minutes of total pool time**
- emptying the **skimmer basket** and the **pump basket**
- emptying the **automatic pool-vacuum debris container**
- **checking displayed salt levels and system indicators**, including Inspect Cell / No Flow
- **backwashing when appropriate and compatible with the system**
- visual equipment checks and notification of visible warnings

**What is still excluded, and this is the rebuilt clause:** **water chemistry, chemicals of any
kind, filter servicing beyond backwashing, equipment repair or adjustment, seasonal open and
close, cover work, leak detection and below-surface repair — and any guarantee.**

> **WPC513 does not guarantee water chemistry, water clarity, equipment performance, or
> pool-system operation unless separately contracted.**

**Adopted verbatim. Never paraphrase it.**

**Why the old clause had to go rather than be edited:** it excluded three things he now does.
Leaving it would have put the signed agreement in direct contradiction with the laminated
checklist in the client's own backyard — the worst possible place for a scope disagreement to
surface.

**Two consequences that are not scope questions:**

1. **Competitive.** See **D-18(c)**. This is the change that made the $121–142 pool-service
   comparison live.
2. **Insurance.** Vacuuming, backwashing, and salt-cell checks are **pool-system operation**.
   The insurer was, in effect, told he did none of it. **`CANON.md` §10.3 — open, and it
   blocks the first paid visit.**

*Implemented in `service-catalog.md` §3.2, §4.1. Priced in `pricing.md` §6 (chemicals are
materials).*

---

## 🆕 D-23 · "WPC513, 513 as a short mark" → **Westside Property Care 513 / WPC513**

**What it said:** the name was Westside Property Care, with 513 demoted to a short mark, and
the visual direction was a "Field Ledger" palette with the explicit note *"there is no icon and
there will not be one."*

**What it says now**, from his finished logo and agreement letterhead:

- **Full customer-facing name: WESTSIDE PROPERTY CARE 513.** In full on first reference.
- **WPC513** thereafter and as the mark. **"WPC" alone never appears in customer-facing copy.**
- **Tagline: Seasonal Outdoor Living & Property Care.**
- **Navy and orange**, with a **house-and-tree line mark** above the wordmark, a rule beneath,
  and WESTSIDE PROPERTY CARE in small caps below.
- **There is an icon.** It exists, it is finished, and it is his.

**Also new and usable, from his Trust/About note:** *local, **military roots**, service,
honesty, integrity, dependability.* `CANON.md` §8: state the military roots plainly; **never
quantify them** into ranks, years, or units that have not been confirmed.

**This entry is recorded here for traceability only.** Identity and visual direction belong to
`01-brand/`, which owns the implementation. `00-model/` uses the name correctly and otherwise
stays out of it.

*Locked in `CANON.md` §8. Owned by `01-brand/`.*

---

## 🆕 D-24 · Property attributes: price modifiers → **client-selection criteria**

**Derived from D-19. This is the largest downstream consequence of the flat price and it is
the one most likely to be missed.**

**What it said:** a pool added $60 and an outdoor kitchen added $40. `ideal-client.md` §2
ranked prospects by revenue: *"Both a pool and an outdoor kitchen. $329, and the best client in
the book."*

**What it says now:** every property pays **$279** and gets **16 visits of up to two hours**.
What differs is how much of those two hours the property consumes — which, at a flat price, is
the same thing as what he is paid per hour.

From his own checklist blocks (`unit-economics.md` §7.3):

| Property shape | On-site min | On-site hrs/season | **$ per on-site hour** |
|---|---|---|---|
| Neither attribute | 70 | 18.67 | **$119.57** |
| **Outdoor kitchen, no pool** | 90 | 24.00 | **$93.00** |
| **Pool, no outdoor kitchen** | 100 | 26.67 | **$83.70** |
| Pool **and** outdoor kitchen | 120 | 32.00 | **$69.75** |

**The same fee buys a third more of his on-site time on a maximal property than on a
one-attribute one.** ($93.00 ÷ $69.75 = 1.333.)

**The rule that comes out of it, and it is not the obvious one.** The naive reading is *take
the emptiest backyards.* That is wrong: a plain-patio owner will not pay $279, and their
property surfaces nothing to quote — and project work is 46.8% of gross. **The target property
has one attribute, not zero and not two.**

**Three hard limits, now in `ideal-client.md` §2.3:**

1. **At most 2 of 6 properties may have both a pool and an outdoor kitchen.**
2. **Never two maximal properties on the same route day** — three 120-minute stops plus drive
   is a 7-hour day at the ceiling with zero slack.
3. **At most 1 of 6 with neither attribute**, and only if exceptionally well placed.

**Plus a new qualification test:** the **time-fit test** — run the eight checklist blocks in
your head on the walkthrough and ask whether block 7 (the flexible priority block) has anything
left in it. If not, the property does not fit inside the membership and the prospect is a
project client. `ideal-client.md` §2.2.

*Implemented in `ideal-client.md` §1, §2. Arithmetic in `unit-economics.md` §7.3.*

---

## 🆕 D-25 · The 1.5-hour planning constant → **1:45 allowance, 3 stops, 4 route days**

**Derived from D-21 and D-22. `CANON.md` §3 explicitly asks `operating-model.md` to derive
this.**

**What it said:** *"Plan one and a half hours per stop, door-to-door, including the drive
between properties, plus half an hour of round trip."* That produced a 5-hour route day and a
20-route-hour monthly cap.

**Why it's dead:** it predates both the two-hour cap and the heavier pool scope. Thirty minutes
of vacuuming did not exist when it was written.

**What it says now**, derived in `unit-economics.md` §2 from his own checklist blocks:

```
Property shapes from the checklist:   120 / 100 / 90 minutes
Assumed six-client composition (2 of each):  620 min ÷ 6  =  103.3 min
Planning allowance, rounded up:                            =  1.75 hrs (1:45)
Contractual ceiling:                                       =  2.00 hrs
Drive: 0.5 hr round trip per route day + 0.25 hr between stops
```

| | 4 clients | **6 clients** | 8 clients |
|---|---|---|---|
| Stops per route day | 2 | **3** | 4 |
| Hours per route day | 4.25 | **6.25** | 8.25 |
| **Route hrs/month** | 17.0 | **25.0** | 33.0 |
| Route hrs/season | 136 | **200** | 264 |
| **Worst case at the ceiling** | 4.75 | **7.00** | **9.25** |

**The structural decision: 3 stops per route day across 4 route days, not 2 stops across 6.**
Both fit twelve visits into Mondays and Fridays. Five reasons for the first, in order:

1. **It protects Tuesday–Thursday absolutely.** Four route days uses half the available
   Monday/Friday slots and leaves four as weather valve. Six route days leaves two, and a
   two-rain-out month then pushes routine work into the project block — where the money is.
2. **"Never rush a property" is about the property, not the length of the day.** Each property
   still gets its full two-hour entitlement; the day simply ends when it ends. There is no
   property 4 to hurry toward.
3. **Fewer dead-head round trips** — 4 instead of 6 is one unpaid hour a month, eight a season.
4. **Four real workdays beats six half-days** for someone protecting contiguous project time.
5. **Revenue per route day proves it**: $418.50 under the chosen structure, $279.00 under the
   alternative (D-26).

**The honest cost, and the rule that handles it:** three maximal properties on one day would be
a 7-hour ceiling day with no slack. That is exactly why **D-24** forbids two
pool-and-outdoor-kitchen properties on the same route day.

*Implemented in `operating-model.md` §2, `unit-economics.md` §2.*

---

## 🆕 D-26 · Metrics recalibrated — two of the five moved

**Derived from D-19, D-20 and D-21. D-8's five-metric structure survives; two of the five had
their meaning or their threshold changed.**

| Metric | Before | Now | Change |
|---|---|---|---|
| **Revenue per route day** | ≥ $400 *(model $428.50)* | **≥ $400 *(model $418.50)*** | **Meaning changed** — see below |
| **Project attach rate** | ~10%, 2.5/member/year | **12.5%, 2 per member per season** | Rebased on 16 visits |
| **Membership retention** | Members active **April 1** | **Season re-enrolment, confirmed in writing before March 1** | **Replaced** |
| **Referrals** | ≥ 1 per quarter | ≥ 1 per quarter | Unchanged |
| **Effective hourly rate** | ≥ **$45**/hr *(model $50.69)* | ≥ **$40**/hr *(model $43.23)* | **Floor lowered** |

**1. Revenue per route day changed job.** It used to detect a badly *priced* client. It cannot
any more — every client is $279. What it detects now is **route density**: at a flat price,
clearing $400 means exactly one thing, **at least three properties on every route day.** It
still catches the most expensive mistake available (adding a route day for one awkward client),
so it stays.

**2. The retention metric was replaced, not adjusted.** April 1 measured whether the Dormant
Season scope was doing its job. There is no Dormant Season. What matters now is whether people
**come back**, and that is measured **before March 1**, in writing — because by the first route
day it is too late to replace anyone. **This is now the most important number in the business.**
See **D-18(b)**.

**3. The hourly floor moved from $45 to $40, and this is a change the owner should see.** The
$45 figure was set against a twelve-month, attribute-priced model producing $50.69/hour. That
model is gone. Under the seasonal flat price:

| Case | Net per hour | vs a $45 floor | vs the $40 floor |
|---|---|---|---|
| 6 clients, full season | **$43.23** | fails | clears by $3.23 |
| 4 clients, full season | $38.09 | fails | under |
| 6 clients, zero project revenue | $33.25 | fails | well under |
| The 7th and 8th client, marginal | $36.99 | fails | under |

**A $45 floor would flag the business as failing on the day it opened, which makes it a useless
instrument.** $40 is set below the target case and above the point at which the work stops being
worth doing. **Three of those four cases are still under it** — that is the honest shape of this
business: **it works at six clients with the project engine running, and not otherwise.**

*Implemented in `operating-model.md` §7. See **R-8**.*

---

## 🆕 D-27 · The Founding rate: **"the first 4 clients" → anyone signing before the 2027 season opens**

**Ruled 2026-08-06 by `wpc-strategist`.** Supersedes the "first 4 clients" clause inside
**D-19**. **No price, no date, and no duration changed — only the eligibility test.**

### What it said

`pricing.md` §2, and every document downstream of it:

> **The first 4 clients lock $279 for the remainder of the 2026 season and all of the 2027
> season.** […] **After four members, the Founding rate is gone.** Members 5 and 6 pay the
> standard rate on standard terms.

By 2026-08-06 that assertion had propagated into a **signed instrument**
(`04-operations/service-agreement.md` §2, as a checkbox reading *"This Member is one of the
first four members"*), five send-ready templates in `03-marketing/warm-list-campaign.md`, a
printed leave-behind, and an entire phase-gate structure in `03-marketing/gtm-plan.md` §3.
`01-brand/messaging.md` §4 and `01-brand/brand-brief.md` §4.2 had already flagged it as stale
and instructed copy to say *"clients signing now"* pending this ruling.

### What it says now

> **Any member who signs a service agreement on or before February 28, 2027 holds $279
> through October 31, 2027. There is no cap on how many members hold it — up to the whole
> book of six.**

- **The test is the signature date on the agreement.** Not the effective date, not the first
  visit. A member signing February 20, 2027 for a March 1 start qualifies.
- **After February 28, 2027 there is no Founding rate.** The window closes the day the season
  opens.
- **Everything else is unchanged:** $279, membership price only, through October 31, 2027, not
  into 2028, a price guarantee and not a term commitment.
- **Any agreement already executed under the "first four" clause is honoured as written.**

*Implemented in `pricing.md` §2. Costed in `unit-economics.md` §7.6 and A31.*

### Why the question was genuinely open, and not a drafting slip

The cap was set when the model was **year-round with four attribute-based prices**, and the
lock ran **twelve months**. Under the shipped model it is a different instrument in four ways,
and each one weakens the count:

| | When "first 4" was written | Under the shipped model |
|---|---|---|
| What the lock protects | a **tier** — the property's own configuration | **one flat number**, $279, against a future increase |
| How long | 12 months | **~14 calendar months** across a four-month gap — but only **8 billed months**, all of them in 2027 |
| Who it competes with | members on other tiers, whose prices differ for a visible reason | **members on the identical price**, whose only difference would be arrival order |
| Whether the cap binds | plausible under a year-round sell | **`unit-economics.md` §4.2 forecasts two members in 2026** |

### The reasoning, in the order it decided the question

**1. A count pays for arrival order; the concession is compensating risk, and risk is a date.**
The founding rate exists because someone is signing a business with no completed season behind
it. Under a count, a client signing in **June 2027** — walking past a property he has visibly
maintained all spring — still collects the lock if they happen to be number four.
`03-marketing/gtm-plan.md` §3 had already noticed this and written it down as a feature: *"a
prospect signed in April 2027 as client 3 still gets the founding rate."* **That is the count
mechanism failing, not the count mechanism working.** It decouples from the thing it is paying
for the moment signing is slow — and the honest forecast says signing will be slow.

**2. Four is not scarcity when the forecast is two.** `CANON.md` §3: *the scarcity is real,
never fake it, never soften it.* A cap that will not bind in 2026 is not a constraint; it is a
sentence in an email implying competitive pressure that does not exist. **The real scarcity is
six slots, forever** — it is already the product (`CANON.md` §4), it is already load-bearing in
the copy, and it does not need a second, softer number standing in front of it. Worse, the two
numbers actively interfere: a prospect told *"six slots ever, and only four at this rate"* has
been handed two ceilings and will believe neither.

**3. "First four" is not defensible to members five and six, and they will meet.** Six premium
properties on the west side of one township is a small enough world that the members will run
into each other. The single strongest thing this business says about price is **one number,
same for every property** (`pricing.md` §1, agreement §1 and §3). A count-based lock
reintroduces a two-price book through the back door and defends it with *"you were slower"* —
which is not about the property, not about the work, and not about anything the later member
could have known or done. The grandfathered-pricing literature names this failure exactly: the
passenger who paid more, eating the same peanuts, on the same flight
([Tier](https://blog.tier.run/pros-and-cons-of-grandfathering-a-users-pricing)); and legacy
price tiers are widely described as operational debt that compounds quietly inside contracts
and billing ([Paddle](https://www.paddle.com/blog/legacy-pricing)). A date at least gives him a
true sentence to say out loud: *"the rate was locked for anyone on the books before the season
opened."*

**4. A signed instrument should not contain a term the counterparty cannot verify.** The
agreement's checkbox — *"This Member is one of the first four members"* — asserts a fact about
**other people's contracts**. The member cannot check it; they have to take his word. It can
also be wrong at signing, through a miscount, two closes in the same week, or a member who
cancels in month one and vacates a founding slot nobody can reassign cleanly. **A date is
checkable on the face of the document by the person signing it.** For a solo operator with no
back office, that difference is the whole argument on its own.

**5. A date costs nothing to administer; a count costs a running tally in five places.** The
count needs a live number in the agreement, in the `{{founding_spots_filled}}` send-time token
(`warm-list-campaign.md` §5), in a printed leave-behind with a pre- and post-founding variant,
in the intake sheet's `FOUNDING` flag, and in the gtm phase gate. Every one of those can go
stale between Monday and Thursday, and the printed one cannot be corrected at all once it is at
a kitchen table. **The date can be printed and forgotten.**

**Supporting evidence that the date is the ordinary mechanism in this trade**, rather than a
clever exception: retention writing for lawn and landscape operators describes
early-confirmation incentives tied to **a date by which the client confirms**, not to a
headcount ([Arborgold](https://arborgold.com/blog/build-your-business/how-to-keep-lawn-care-customers-happy/)).

### Why February 28, 2027 specifically

Three candidate lines were considered.

| Candidate | Why not / why yes |
|---|---|
| **October 31, 2026** — "founding = you were a member in 2026" | **Rejected.** Tighter and more romantic, but it kills the winter signing window. D-10 puts marketing effort in **January–March**, aimed at the March 1 start. A window that closed in October tells every prospect in that push they already missed it — the opposite of what the push needs. |
| **February 28, 2027** — the day before the season opens | **Chosen.** It separates exactly the two populations that differ: people who committed before there was a completed season to look at, and people who signed into a season already visibly running. It also gives the January–March campaign an honest deadline that reinforces the correct marketing calendar instead of fighting it. |
| **Mid-2027 or "the founding cohort," undefined** | **Rejected.** An undefined cohort in a signed contract is worse than either rule: it lets him decide after the fact who counts. Eligibility in an instrument has to be objectively determinable at signing. |

**The line it produces, and it needs no embellishment:**

> **The founding rate closes the day the season opens.**

### What settled it, once the arithmetic was in

The lock's entire economic content is **$279 for the eight billed months of the 2027 season.**
The 2026 half of the "founding terms" is not a concession at all — pro-rating a partial month
(`pricing.md` §3.2) is just correct billing, and the 2026 rate is $279 for everybody.

So **the benefit is identical for every member inside the window.** A September 2026 signer and
a February 2027 signer get the same eight protected months and the same October 31, 2027 end
date. It does not decay with time. **A count cannot even be justified as a rough proxy for
"who waited longest," because nobody is waiting for anything that shrinks.** Rationing an
identical benefit by arrival order is arbitrary. Rationing it by whether you committed before
the protected season began is not.

### What it costs — the arithmetic, in full

`unit-economics.md` **§7.6** carries this with the checks; the short version:

**Nothing, today.** Scenario B prices all six members at $279 in 2027 (now stated explicitly as
assumption **A31**, which was previously implicit and made the lock look free by accident). The
modelled cost of the Founding lock is **$0** — under this rule and under the old one.

**If the 2027 rate were ever raised by Δ per month**, only two members can ever be treated
differently by the two rules — the fifth and the sixth, and only if they sign inside the
window:

```
Stretch case, all six inside the window:   2 × Δ × 8 months
   Δ = $20  →  $320    ← the most D-27 can ever cost
   $320 ÷ $19,887 net  =  1.6%      $320 ÷ $250 per job  =  1.28 non-member jobs

Honest forecast (2 members by Oct 2026; members 3-6 sign during the 2027 season):
   "first 4" locks members 3 and 4 as well, who signed with nothing left to risk
   2 × Δ × 6 billed months,  Δ = $20  →  $240  in D-27's favour
```

**On the forecast the model actually carries, the date rule is the cheaper of the two.** The
maximum it can cost is smaller than a single step in **A7**, the load-bearing assumption on the
page. **D-27 is therefore not a financial decision** — it was made on fairness, contract
quality, and honest scarcity, and the arithmetic only confirms nothing was traded to get them.

**One operating consequence follows, and it is the only one:** if the membership price is ever
going to rise for 2027, **that decision has to be made before February 28, 2027.** A rate rise
decided in April 2027 applies to almost nobody. That is not an argument for raising the price;
it is an argument for deciding on purpose rather than by default.

### What this ruling does *not* do

- **It does not touch the price.** $279, unchanged, everywhere.
- **It does not touch the cap.** Six is still six. The window governs price, not capacity.
- **It does not create a discount.** Everyone pays $279. `pricing.md` §8 is intact, including
  the ban on a last-slot price — a member who fills slot 6 in January 2027 gets the lock by
  rule and still pays the same number as everyone else.
- **It does not create an exception path.** A prospect who signs March 5, 2027 does not get the
  lock for nearly making it.
- **It does not move a single figure in `unit-economics.md`.** Two additions (A31 and §7.6),
  no revisions.

### What has to change downstream — for the owning agents, not for `00-model/`

| File | What it says | What it needs |
|---|---|---|
| `04-operations/service-agreement.md` §2 | Checkbox: *"This Member is one of the first four members"* | **Replace the checkbox with a standing clause** stating the date test. It should read as a term of the agreement, not a fact the member has to accept on trust. §2's second paragraph (the lock's scope and end date) is correct as written and should survive verbatim. Same for the §11 sentence referencing the Founding Member price. |
| `03-marketing/warm-list-campaign.md` §5 | Five templates asserting "the first four" | Replace with the date. **`{{founding_spots_filled}}` becomes unnecessary** — the token, its zero-count deletion rule, and Step 5's "close-out once the founding four are filled" all have nothing left to count. The close-out step is now dated, not triggered. |
| `03-marketing/assets/leave-behind.md` | "The first four members get…" plus a two-variant print plan | One variant, with a date. **The pre/post-founding reprint problem disappears** — that was the count's cost showing up in a print order. |
| `03-marketing/gtm-plan.md` §3 | Phase gate: "Phase 1 — the founding four (slots 1–4)" and "no deadline on the founding rate other than the first four clients" | The phase gate is now **February 28, 2027**, not slot 4. The line *"a prospect signed in April 2027 as client 3 still gets the founding rate"* is now false. §5's `{{founding_spots_filled}}` token definition goes with it. |
| `03-marketing/intake-sheet.md` | `FOUNDING` flag "one of the first four founding slots" | The flag now means *signed inside the window*, and no longer needs manual retirement when a fourth slot fills. |
| `01-brand/messaging.md` §4 · `01-brand/brand-brief.md` §4.2 | 🔶 flagged unresolved; copy says "clients signing now" | **"Clients signing now" was the right call and stays correct** — under D-27 anyone signing now is eligible. The flag can be cleared and the deadline stated as a fact, never as a countdown (`voice.md`'s ban on promotional framing is unaffected). |
| `02-website/copy-deck.md` §3.7 · `site-spec.md` open item 7 | Interim "clients signing now"; open item asks for this ruling | Item 7 is answered. The MEMBERSHIP-FULL state's replacement paragraph is unaffected. |
| `05-playbook/human-checklist.md` | "Decide who the first four Founding Members are" | Now: decide the route-compatible book. Founding status follows from the signing date automatically. |

**`00-model/` cannot fix any of these — they are outside this lane.** Flagged for the
orchestrator alongside **R-9**.

---

## Recommendations

### Closed

#### ⛔ R-1 · The outdoor-kitchen-without-pool configuration — **MOOT**

Resolved 2026-08-05 in the morning in favour of a fourth configuration at $269; **superseded
the same day** by the owner's flat $279 (**D-19**). The question no longer exists: there are no
configurations. Kept on the board so the sequence is legible — this project resolved a pricing
question and had it overtaken by a better decision within hours, and the record should show
that rather than hide it.

**One thing from R-1 is still worth asking him**, because it now calibrates a *time* assumption
rather than a price: ***of the homes you've cleaned grills at, how many have pools?*** The
answer moves the book composition in `unit-economics.md` A6, which drives route hours and the
selection limits in `ideal-client.md` §2.3.

---

### Open

#### 🔶 R-2 · The cap costs about $2,100 a season — hold it, and the case is now easy

**The issue:** eight clients net **$2,127 more** than six (`unit-economics.md` §6.3).
*(This was $3,478 under the superseded model. The price tag fell and the argument got stronger.)*

**Recommendation: hold the cap at six, and this time it barely needs arguing.** Under the
year-round model the eighth client paid a *better* marginal rate than the blended one, so the
cap was a pure risk trade. Under the seasonal model the marginal hours pay **$36.99** — below
his blended $43.23 and below the $40 floor — **in the base case, with nothing stressed.** Net
per hour goes *down*. And the worst-case route day is **9.25 hours**, which cannot be run
without rushing a property or breaking the Monday/Friday rule.

**Not changed here** because the cap is locked in `CANON.md` §3.

#### 🔶 R-3 · Confirm membership standards 4 and 5 — **STILL OPEN**

Rule 4 is a high-confidence completion of a truncated sentence, now independently corroborated
by agreement §6. **Rule 5 is a reconstruction — there is no surviving text**, though checklist
block 8 corroborates it more strongly than anything did before. Both stay marked 🔶 in
`operating-model.md` §8 until he confirms.

**Ask him:** *"Your rule 4 got cut off at 'don't quietly absorb projects into the' — was that
'the membership'? And do you remember what rule 5 was?"*

#### ✅ R-4 · The Founding rate now has a second job — **RESOLVED by D-27, 2026-08-06**

> **Resolved.** The eligibility question this recommendation was circling — *"how do we stop
> the lock being used as a closing discount for slots 5 and 6?"* — was answered by removing the
> premise. Under **D-27** the lock is not rationed by slot at all. It is date-bounded, it is not
> a discount, and there is nothing left to extend quietly. The original text is kept below.

**What R-4 said** *(text at the time of the ruling)*:

> `pricing.md` §2 locks $279 for the first 4 clients through **October 31, 2027**, and it
> disappears after that.
>
> **The recommendation has changed.** Previously this was a note about not extending the lock to
> close slots 5 and 6 — **that still stands**; a discount to fill the last slot permanently
> lowers the reference price for every referral that member sends. If a concession is needed for
> slot 6, give **scheduling priority, a free first project, or an extra visit** — never a lower
> number.
>
> **What is new:** in a seasonal business the lock is primarily a **re-enrolment device**, not a
> discount. It gives the August-2026 signer a written reason to come back on March 1, 2027.
> **Make sure it is presented that way** — "your price is locked through next season" is a
> returning-customer argument, and it is the cheapest one available against the risk in D-18(b).

**What survives, unchanged and still binding:**

1. **The membership price is never discounted, and the last slot least of all.** `pricing.md`
   §8. D-27 does not weaken this by one word — a member who fills slot 6 inside the window pays
   **$279**, the same number as everyone else. A guarantee against a future increase is not a
   lower price.
2. **The three allowed closing concessions** — scheduling priority, a free first project, an
   extra visit in the first month. Never a lower monthly number.
3. **Present the lock as a re-enrolment device, not a promotion.** This is now *more* true, not
   less: under D-27 it does that job for the entire winter cohort rather than the first four of
   them, and the winter cohort is precisely the group carrying the D-18(b) risk.

**What changed:** the worry that the lock would be *stretched* to close slots 5 and 6 is gone,
because there is nothing to stretch. The replacement worry is smaller, dated, and named in
`unit-economics.md` §7.6: **if the 2027 price is ever going to move, decide it before February
28, 2027.**

#### 🔶 R-5 · Numbers to verify with real quotes before launch — **STILL OPEN AND NOW LARGER**

- **General liability insurance at $55/month** (A22). $45–85/month is the 2026 national range
  for lawn/landscaping general liability; basic lawn care averages about $46. **Get two real
  Ohio quotes** — and see R-6, because the scope change may move this number. Also ask whether
  commercial auto is required if the vehicle is titled to the LLC; that is not modelled.
- **Vehicle cost at $0.74/mile** (A18). The 2026 IRS business rate is 72.5¢ Jan–Jun and 76¢
  Jul–Dec, blending to 74.25¢; the 2027 rate is unpublished. It is the right number for judging
  the business, but out-of-pocket fuel is only about **$425 a year**. He should know both, and
  not be surprised when the truck needs tyres.
- **Startup equipment at $1,200** (A27). New. The heavier pool scope needs a vacuum head, hose,
  and brush the old scope did not. **Price the actual list before the first walkthrough.**

#### 🔴 R-6 · Tell the insurer what he actually touches — **BLOCKS THE FIRST PAID VISIT**

**The highest-priority open item in this file.** Vacuuming, backwashing, emptying pump baskets,
and reading salt-cell indicators are **pool-system operation**. The superseded scope excluded
all of it. **A general liability policy written against the old description may not respond to
a claim arising from the new work.**

**Do this before the first paid visit, not before the first pool.** Describe the work in the
words of `service-catalog.md` §3.2, ask specifically about pool-equipment operation, and get
the answer in writing. `CANON.md` §10.3.

#### 🔶 R-7 · Confirm the 2026 start date and the pro-ration rule

Two things in this build are `wpc-strategist`'s inference, not the owner's decision:

1. **The agreement is headed *2027* Seasonal Property Care Service Agreement**, Service Season
   March 1 – October 31, **2027**. He is launching **now**. The build re-dates it to a 2026
   start with a partial-season pro-ration clause. **Confirm.** `CANON.md` §10.2.
2. **Pro-ration by visit at $139.50** ($279 ÷ 2). Clean, fair in both directions, and needs no
   calendar arithmetic — but it is not his rule. **Confirm before the first agreement is
   signed.**

The 2026 model also assumes a **mid-August first visit** (A1). If it slips to September, the
season is worth **$558 a client instead of $697.50** — $837 less at six clients
(`unit-economics.md` §4.4).

#### 🔶 R-8 · Watch the hourly floor for one season, then decide whether $40 is right

**D-26** lowered the effective-hourly floor from $45 to $40 because the old figure was set
against a model that no longer exists. **That is a judgment, not a measurement.** Three of four
modelled cases sit under it.

**Recommendation: run the 2027 season, track the real number monthly, and revisit the floor in
November 2027 with actuals instead of assumptions.** If the project engine performs at A7 the
floor is comfortable. If it does not, the floor is not the thing that needs adjusting — the
book or the route is.

#### 🔶 R-9 · Downstream documents still describe the superseded model

**Not a recommendation about the business — a warning about the repository.** `00-model/` is
now consistent with `CANON.md`. Several documents outside this directory are not, and they are
owned by other agents:

| What to look for | Why it's wrong now |
|---|---|
| **Any of $229 / $249 / $269 / $289 / $329 as a membership price** | All withdrawn. **D-19** |
| **"The same price in January as in July"** — it was on nine of ten page footers | The season ends October 31. **D-20** |
| **"Year-round," "Dormant Season," "24 visits a year," "twelve months"** | Eight months, 16 visits. **D-20** |
| **"Roughly $35k/year"** — including in `README.md` | The target case is **$25,192 gross, $19,887 net**. **D-18(a)** |
| **A pool scope of "skim and baskets," or an exclusion of vacuuming/brushing/backwashing** | He does all three. **D-22** |
| **"There is no icon and there will not be one"** | There is one, and it is finished. **D-23** |
| **"WPC" alone in customer-facing copy** | **WPC513**, or the full name. **D-23** |
| **Any snow, ice, or freeze-protection service inside the membership** | Deleted. **D-20** |
| **"The first four," "the founding four," "four founding spots," or any member count attached to the Founding rate** — including the `{{founding_spots_filled}}` token, the leave-behind's two print variants, the gtm-plan slot-4 phase gate, and the checkbox in the signed agreement | Eligibility is a **date**: signed on or before **February 28, 2027**, no count. **D-27**, with the full downstream list in that entry |

**`00-model/` cannot fix these — they are outside this lane.** Flagged for the orchestrator.

---

## Related files

- `operating-model.md` — D-1, D-2, D-5, D-12, D-13, D-21, D-25, D-26
- `pricing.md` — D-14, D-15, D-19, D-20, **D-27**
- `service-catalog.md` — D-11, D-20, D-22
- `ideal-client.md` — D-9, D-10, D-13, D-24
- `unit-economics.md` — D-4, D-6, D-17, D-18, D-24, D-25, D-26, **D-27** (A31 and §7.6)
- `verify-unit-economics.py` — mechanical check of every figure in `unit-economics.md`
- `CANON.md` — carries the 2026-08-05 re-baseline note and the open items in §10
- `_source/brother-draft-4-client-model.md` — the original draft
- `_source/2026-08-05-owner-decisions.md` — the signed agreement, checklist, work-block plan,
  and logo that supersede it
