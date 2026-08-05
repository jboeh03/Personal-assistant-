# Decisions — what changed from the draft, and why

**Owner:** `wpc-strategist` · **Status:** traceability log

This file exists so that every difference between the original 4-Client Model draft
(`_source/brother-draft-4-client-model.md`) and the model in this directory can be read,
checked, and argued with. Each entry says **what the draft said**, **what it says now**, and
**why**.

Two things to say up front, because they matter more than any individual edit:

**The draft was good.** Its instincts were right in almost every place that counts — cap the
book on purpose, consolidate the visits, protect the middle of the week, pick clients for
route compactness, and above all write down what is *not* included. Most of what follows
sharpens those instincts rather than replacing them. The exclusions list in §3 of the draft
is the single best piece of thinking in the whole document and it is the foundation of
`service-catalog.md`.

**The draft had one real error, and it was an accounting error, not a strategy error.** It
described a business where project work was the income, then built every financial table as
though the memberships were. That single inversion is what D-1 and D-6 fix, and it is worth
about $14,000 a year.

---

## D-1 · Membership as revenue → membership as the lead engine

**The draft said:** "Recurring-client cap: 4 properties. Membership: $229/month." The
financial baseline table listed recurring revenue of $916/month and $10,992/year as *the*
target. Project work appeared in §9 as an upside — "This is where WPC can make substantially
more money" — and then in §10 as a strategy, but never in a financial table.

**It now says:** The membership is not the revenue. The membership is the lead engine. Its
job is to put a trusted operator on a property 24 times a year, where every visit is also an
inspection that surfaces quotable work. Membership revenue covers itself; project revenue is
the actual income.

**Why:** The draft's own §9 and §10 already contained this idea. It just never made it into
the numbers. Once you count the project work the draft described but didn't measure, the
picture inverts: at six clients, memberships bring in $20,808 and project work brings in
$14,125 — **40% of gross revenue, and the higher-margin 40%.**

This is the change everything else follows from. It changes what the service report is for
(a sales document, not a receipt), what the metrics measure (attach rate, not visit time),
who the ideal client is (someone with a property that *generates* projects), and what the
website's job is.

*Locked in `CANON.md` §2. Implemented in `operating-model.md` §1, `unit-economics.md` §3.*

---

## D-2 · A 4-client cap → a 20-route-hour cap, launch at 4, hard cap at 6

**The draft said:** "Four memberships is the target AND the cap. Don't get four customers and
immediately think 'I could probably squeeze in another six.'"

**It now says:** Launch at 4. Hard cap at 6. And the cap is expressed as **20 route hours per
month**, not as a client count.

**Why the number went from 4 to 6:** Four clients at the corrected pricing and with project
work counted produce $24,122 gross and $18,836 net on about one day a week. That is a real
business, but it leaves most of the constraint unused — 14 route hours a month against a
schedule that comfortably holds 20. Six clients uses the constraint without breaking it:
$34,933 gross, $28,669 net, on roughly 1.35 days a week. Still inside `CANON.md`'s "1.5–2
working days per week."

**Why it's route hours and not clients:** because two clients are not the same size. A client
three minutes from another client and a client twenty-five minutes off the route both pay
$289, and they cost completely different amounts. Counting clients hides that; counting route
hours makes it visible on the day he's deciding whether to take the sixth one. `operating-
model.md` §4 prices an off-route client at **17.6% of their own gross revenue** in unpaid
drive time.

**Why the cap holds at 6 and not 8 — stated honestly:** it does not hold because 8 earns
less. Eight clients earn about **$3,700 a year more net**. The cap is a decision to trade
that $3,700 for schedule integrity: a five-hour route day instead of a six-and-a-half-hour
one, a float day for weather, room to take a vacation, and the ability to keep membership
standard rule 1 (*never rush a property*). The full arithmetic, including a sensitivity where
the eighth client actually pays **$45/hour marginal — below his blended rate** — is in
`unit-economics.md` §5. **He should make that trade knowing the price of it.** See R-2.

**What was preserved:** the draft's core insight in §12 — that the excess capacity is part of
the product, not slack he failed to sell — is kept intact and expanded in
`operating-model.md` §5.

*Locked in `CANON.md` §3. Implemented in `operating-model.md` §2, `unit-economics.md` §5.*

---

## D-3 · A flat $229 → three attribute-based tiers

**The draft said:** "$229/month per property," one price for every property, regardless of
whether it had a pool, an outdoor kitchen, both, or neither.

**It now says:**

| Tier | Price |
|---|---|
| Property Care | $229/month |
| Property + Pool Care | $289/month |
| Property + Pool + Outdoor Kitchen Care | $329/month |

Built from a $229 base, +$60 for pool, +$40 for outdoor kitchen.

**Why:** A flat price charges the same for two properties that cost very different amounts to
serve and are worth very different amounts to the owner. A pool means skimming, two baskets,
a deck, and pool furniture on every visit. An outdoor kitchen means counters, stainless, a
grease trap. A property with both is materially more work than a property with neither, and
the owner of that property has already demonstrated — by building it — that they spend money
on their outdoor space.

**Grounding:** a $60/month pool module is defensible next to full weekly pool service in
Cincinnati at **$121–142/month for four visits including chemicals** — it's half the price
for a quarter of the visits and none of the chemistry, which is exactly what
`service-catalog.md` §4.1 says it is. And a $289–329/month membership sits inside the
**$150–400/month** range that comparable home-watch and property-concierge memberships
charge for materially less physical work; one Denver operator charges $400/month *plus* $155
an hour for coordination *plus* a 25% vendor markup.

**What it's worth:** $4,320 a year at six clients — 19.7% of the total improvement over the
draft (`unit-economics.md` §8). It comes from pricing the same properties correctly, not from
finding more of them.

**Second-order effect:** the tiers change the targeting. Once price is tied to pool and
outdoor kitchen, the ideal client is defined by those attributes, which is what makes the
narrow geography in D-9 possible.

### 🔶 Open question inside this decision — the fourth configuration

A property with an outdoor kitchen and **no pool** computes to $229 + $40 = **$269**, which
would be a fourth customer-facing price. `CANON.md` locks the list at three.

**The operating rule written into `pricing.md` §1:** Outdoor Kitchen Care is sold on top of
Pool Care, not on its own. A qualified property with an outdoor kitchen and no pool is
written at **$229**, and its outdoor kitchen is serviced within that visit.

**This may be the wrong answer and it needs his decision.** If the first members come off the
Tri-State Grill Cleaning customer list — which is exactly where they're most likely to come
from — then *outdoor kitchen without a pool* may be the **common** configuration, not the
edge case. Three such members forgo **$40 × 3 × 12 = $1,440 a year.**

Two ways out, both his call, neither taken here because the three-price rule is locked:

- **(a)** Accept the $229 and treat it as the cost of a price card with three numbers on it.
- **(b)** Add **$269** as a fourth configuration and accept four prices instead of three.

See **R-1**.

*Locked in `CANON.md` §3. Implemented in `pricing.md` §1.*

---

## D-4 · Project assumptions: 2 per client at $249 → 2.5 per client at $275

**The draft said:** "If each household purchases just two $249 projects per year: 8 × $249 =
$1,992."

**It now says:** 2.5 member projects per client per year at an average of $275.
At six clients: 6 × 2.5 × $275 = **$4,125**.

**Why 2.5 instead of 2:** Twenty-four visits a year is twenty-four inspections. The draft's
own §7 shows the mechanism — the service report that says "I noticed debris in the window
wells, I can add that for $49." At two projects a year, only one visit in twelve produces a
sale. Two and a half is one in ten (`operating-model.md` §6.2), which is still a modest
conversion rate for a trusted vendor who is standing in the backyard looking at the problem.
The Dormant Season spring-prep report in March is a dedicated selling moment the draft didn't
have at all (see D-7), and on its own it should carry a meaningful share of the increase.

**Why $275 instead of $249:** $249 is the grill deep clean, which is the *entry-level*
project. The quoting anchors in `pricing.md` §5.3 put pressure washing at $249–449 and
gutters at $179–249. A blend of $275 across a mix that includes some pressure washing and
some seasonal cleanup is conservative.

**Both are labeled as assumptions** in `unit-economics.md` §1 (A2, A3). Together they account
for $1,137 a year — 5.2% of the improvement. If he thinks they're optimistic, dial them back;
the model does not depend on them. `unit-economics.md` §7.1 runs the case where project
revenue is **zero**, and the membership book alone still pays $46/hour net.

*Implemented in `unit-economics.md` §1, §3.*

---

## D-5 · No money mechanics → card on file, signed agreement, insurance, LLC

**The draft said:** nothing. It had a service model, a pricing number, and a monthly reporting
format, and no mechanism for collecting the money, no agreement binding the exclusions, no
insurance, and no legal entity. §11 tells him to track revenue but never says how it arrives.

**It now says** all four are required **before the first paid visit**:

| Mechanism | Rule |
|---|---|
| **Card on file** | Collected before the first visit. Auto-charged the 1st of each month, in advance. No exceptions. |
| **Signed service agreement** | Before the first visit. Carries the exclusions from `service-catalog.md` §4. |
| **General liability insurance** | In force before the first paid visit. Budgeted at $55/month. |
| **LLC** | Filed before the first paid visit. Ohio Articles of Organization: **$99 one time**, no annual report fee, no franchise tax. |

**Why each one:**

- **Card on file** is what makes it a membership rather than a monthly invoice he has to
  chase. Six clients is small enough that a week spent chasing $289 is a meaningful fraction
  of the month. It is also a qualification signal — `ideal-client.md` §5.5 treats "won't put
  a card on file" as a disqualifier, because the objection is almost never about the card.
- **The signed agreement** is what makes the exclusions real. `service-catalog.md` §4 is
  written in contract-clause language for exactly this reason. An exclusion that was
  mentioned once on a walkthrough is worth nothing in month four.
- **Insurance** because he is working around pools, gas appliances, and other people's
  property. 2026 market for lawn/landscaping general liability is $45–85/month; a solo
  operator with no crew and no tree work sits at the low end.
- **The LLC** because $99 once is a small price to put his household behind a wall. Ohio is
  unusually cheap here — there is no recurring fee.

**Note:** the drafting of the actual agreement belongs to `04-operations/`, and it should be
read by a real attorney before anyone signs it. Nothing in `00-model/` is legal drafting.

**What was preserved:** the draft's §11 financial rules — track membership revenue, project
revenue, and materials separately, and close each month with a report ending in the effective
hourly rate. That was good and it is kept verbatim in substance.

*Implemented in `operating-model.md` §8, `pricing.md` §4.*

---

## D-6 · Non-member project work: a strategy with no number → a $10,000 line

**The draft said,** in §10: "You can still accept non-members. I'd use Tuesday–Thursday
primarily for these jobs. If someone wants a $249 grill cleaning, do the grill cleaning."
Then it never appeared in a financial table. The draft's total was $12,984 — memberships plus
member projects only.

**It now says:** 1 job per week × 40 weeks × $250 = **$10,000 per year**, counted as a
first-class revenue line.

**Why:** Tuesday through Thursday is roughly 150 days a year of protected, deliberately
unbooked capacity. `CANON.md` §3 calls it out explicitly: "that is where the money is." One
job a week uses a small fraction of it. Not counting that revenue made a $35k business look
like a $13k one, which in turn made the whole model look like it wasn't worth the effort.

**This is the largest single change in the document.** $10,000 is **45.6% of the entire
$21,949 improvement** over the draft (`unit-economics.md` §8). It required no new clients, no
price change, and no new strategy — only counting what the draft had already decided to do.

**Second-order effect:** it changes what a non-member inquiry is worth. In the draft, a
non-member grill cleaning was a nice extra. Here it is the primary revenue channel *and* the
membership pipeline — which is why `ideal-client.md` §4 tells him to offer project work to
every waitlisted prospect rather than declining them.

**Assumptions labeled:** A4 (1 job/week, 40 weeks) and A5 ($250 average) in
`unit-economics.md` §1. The 4-client case discounts this to 0.75/week because the referral
engine hasn't spun up yet.

*Implemented in `unit-economics.md` §2, §3, §8.*

---

## D-7 · No seasonality → Green and Dormant scopes at one flat price

**The draft said:** one scope, listed in §2, describing warm-weather work — pool skimming,
patio furniture, watering flower pots, blowing hard surfaces. Nothing about November through
March. The word "winter" does not appear in the document.

**It now says:** two scopes, one price.

- **Green Season, April–October:** pool skimming and baskets, patio and furniture, outdoor
  kitchen surfaces, debris, watering, light weed treatment, blowing hard surfaces.
- **Dormant Season, November–March:** gutter and downspout check, storm debris, freeze
  protection (hose bibs, disconnects, drain-downs), furniture covering and storage, hardscape
  ice and salt management, full exterior inspection with photo report, spring-prep planning.

**The price does not change.**

**Why the gap had to be filled:** a member who signs in June and finds themselves paying $289
in January for a scope that was written entirely around a pool will cancel. The Dormant
Season scope exists so that January's visit has obvious, statable value — and it genuinely
does. Freeze protection on hose bibs and outdoor kitchen water lines is the highest-value
work of the year measured in avoided damage. It just doesn't *look* like much, which is why
the report matters more in winter than in summer.

**Why the price stays flat:** because flat year-round pricing is what makes this a membership
instead of a seasonal service. A winter discount invites the member to ask why they're paying
anything in January. `unit-economics.md` §6 has the arithmetic: the swing between a good
month and a slow month is only **$565** *because* the $1,734 membership floor holds it
steady. Remove the floor and February goes from slow to bad — and a member who cancels in
February takes the entire Green Season with them.

**The retention metric changed to match:** membership retention is measured on **April 1**,
not January 1 (`operating-model.md` §6.3). A January number tells him nothing.

**One more thing the Dormant Season buys:** the March spring-prep report is the highest-
converting document of the year. Leaves are down, everything is visible, and the client is
already thinking about opening the pool. The draft had no equivalent moment.

*Locked in `CANON.md` §3. Implemented in `service-catalog.md` §2, §3; `pricing.md` §3.*

---

## D-8 · The ~80-minute visit target → five real metrics

**The draft said:** "Target average visit: ~80 minutes." And then, six sections later, in its
own membership standards: "**Never rush a property because another client is waiting.**"

**It now says:** minutes per visit does not exist in this business, internal or external.

**Why:** those two statements cannot both be true. The moment a time target exists, it becomes
the thing he measures himself against on a day a property needs more than the target allows.
The rule is better than the metric, so the metric goes.

**The distinction that survives:** `operating-model.md` §2 keeps a **planning allowance** of
1.5 hours per stop door-to-door, used to build a calendar and size the route-hour cap. That is
an input to a schedule, not an output he is graded on. It never appears in customer-facing
material and it is never compared to what a visit actually took. The document says so
explicitly, in both places it appears.

**What replaced it** — four from `CANON.md`, plus one from the draft:

| Metric | Formula | Target |
|---|---|---|
| **Revenue per route day** | membership revenue ÷ route days worked | ≥ $400 *(model: $433.50)* |
| **Project attach rate** | projects sold to members ÷ member visits | ~10%, or 2.5/member/year |
| **Membership retention** | members active on **April 1** | 6 of 6 |
| **Referrals** | inquiries naming a member or a specific job | ≥ 1 per quarter |
| **Effective hourly rate** | (gross − expenses) ÷ all hours | ≥ $45/hr *(model: $51)* |

**Note on the fifth one:** effective hourly rate is the draft's own metric. §11 ended with
"That last number matters," and it was right. It is kept, given a formula and a floor, and
expanded to include admin hours, which the draft's version did not.

**Why these five and not others:** each one changes a decision. Revenue per route day is the
referee for accepting an off-route client. Attach rate tells him whether the service report is
being written as an inspection or as a receipt. April retention tests the Dormant Season
scope. Referrals test whether the work is distinctive. Effective hourly rate tests everything
at once. Minutes per visit changed nothing except how he felt at 4pm.

*Locked in `CANON.md` §3. Implemented in `operating-model.md` §6.*

---

## D-9 · No targeting → a narrow qualified geography with explicit exclusions

**The draft said:** nothing about who the customer is or where they live. §5 discussed route
compactness — clients A and B close together, C and D close together — but never which
neighborhoods, which price points, or which attributes.

**It now says:**

- **Qualified:** Green Township subdivisions, Oak Hills, the upper end of Delhi, and
  Covedale. Bridgetown is conditional — it qualifies on property attributes, never on the
  address alone.
- **Explicitly excluded:** Westwood, Price Hill, Cheviot. No copy, no ads, no yard signs, no
  targeting.
- **Qualifying attributes:** a real pool or outdoor kitchen; an owner who already pays other
  people to maintain things; and a location that passes the route tests.

**Why:** west-side Cincinnati home values are modest — Delhi $180–350k, Bridgetown ~$240k,
Green Township $250–450k, Westwood/Price Hill/Cheviot ~$175k. A $3,468-a-year membership
addresses a narrow slice of that. Pretending otherwise wastes the only scarce resource he has,
which is his own time. The excluded areas are not a judgment about the neighborhoods; at a
~$175k median, the qualifying households are rare enough that finding them costs more than
they return when he only needs six.

**Why the narrowness is a feature:** Green Township, Oak Hills, upper Delhi, and Covedale hold
a few hundred homes with a real pool or built outdoor kitchen and an owner who already
outsources. **He needs six.** That is roughly a 2% conversion of a list he could physically
walk in a few weekends — which is what makes this achievable with no advertising budget.

**Disqualifiers were added too,** because the draft had none: too far off route, wants
unlimited scope, haggles the price, expects on-demand response — plus four quieter ones in
`ideal-client.md` §5.5.

*Locked in `CANON.md` §4. Implemented in `ideal-client.md` §2, §3, §5.*

---

## D-10 · No go-to-market → three tracks

**The draft said:** §10 came closest — non-member customers "become a potential membership
lead," and once the slots are full the website can say MEMBERSHIP FULL. That is a *positioning*
observation, not a plan for getting the first four clients.

**It now says** there are three channels, and only three, because six clients does not justify
a fourth:

1. **The Tri-State Grill Cleaning warm list.** People who have already had him on their
   property, already paid him, and already trust him. These prospects skip the entire
   trust-building problem. **CONDITIONAL — access to that list is unconfirmed** (`CANON.md`
   §9.2), and every plan that depends on it must say so in those words.
2. **Neighborhood proximity.** Yard signs and door hangers on the streets where a member
   already lives, and on the qualified subdivisions in `ideal-client.md` §3. This channel does
   double duty: it directly serves the route-compactness requirement, because every lead it
   produces is by definition near an existing client. A waitlisted prospect who recruits two
   neighbors converts all three.
3. **Google Business Profile plus the site as a closer.** `CANON.md` §5 is clear that the site
   is not a lead-generation engine — it is what closes someone who already heard his name from
   a neighbor, a yard sign, or a grill-cleaning job. GBP catches the people searching his name
   or the category locally. Neither one needs a service-area page farm.

**Why only three:** a six-client business with no advertising budget cannot run more than
three channels well, and two of the three (warm list, neighbor referral) are essentially free.
The third is a Google listing and a static site.

**Ownership:** the detailed execution of all three belongs to `03-marketing/`. This entry
records only that the draft had no plan and that these are the three tracks the model implies.

*Implemented in `ideal-client.md` §4 and handed to `03-marketing/`.*

---

## D-11 · The exclusions list → contract-clause language

**The draft said,** in §3 — and this was the best section in the document: "Routine membership
does not include: deep grill cleaning, pressure washing, major storm cleanup, landscaping
projects, drainage installation, repairs, replacement parts, large-volume debris removal,
extensive weeding, gutter cleaning, window-well cleanouts, heavy hauling or anything requiring
specialized materials/equipment."

**It now says** the same things, in twelve numbered clauses precise enough to sign
(`service-catalog.md` §4), with **bright lines instead of adjectives**.

**Why:** "extensive weeding" and "major storm cleanup" are the right ideas with no way to
settle a disagreement. Every clause was rewritten so both parties can point at the same
boundary:

| Draft's word | The bright line it became |
|---|---|
| "large-volume debris removal" | up to the capacity of the homeowner's own containers |
| "extensive weeding" | hardscape joints, walkway cracks, and bed *edges* — never inside beds |
| "major storm cleanup" | anything requiring a saw, a trailer, or more than one trip |
| "gutter cleaning" | ground-level visual inspection only; **no work from a ladder or above roof line** |
| "specialized equipment" | pressure washer, ladder, chainsaw, powered digging equipment, trailer |
| "deep grill cleaning" | burners, grates, flavorizer bars, interiors, hoods — vs. grease trap and exterior wipe-down |

**Five clauses were added that the draft did not have,** each one covering a real way this
business gets damaged:

- **§4.1 Pool.** The most important clause in the document. It states in plain words that WPC
  does not test, balance, or add chemicals; does not vacuum, brush, or service the filter;
  does not open or close the pool; and **is not responsible for water condition or
  chemistry.** Without it, a homeowner seeing "pool" on an invoice twice a month will hold him
  responsible for green water in July. The market comparison makes the case: full weekly pool
  service in Cincinnati is $121–142/month for four visits *with* chemicals. A $60/month,
  two-visit skim-and-baskets module is a different product and the agreement must say so.
- **§4.2 Lawn and landscape.** "Property Care" sounds like lawn care to most people. Mowing,
  trimming, edging, fertilizing, pruning, mulching, and planting are excluded by name.
- **§4.8 Snow and ice.** `CANON.md`'s Dormant scope includes hardscape ice management, which
  without a boundary converts the membership into a free snow contract on the first heavy
  Tuesday. Included: salting the outdoor living hardscape on scheduled visits. Not included:
  driveways, sidewalks, plowing, or anything between visits.
- **§4.7 and §4.11 Response times.** No guaranteed response window, no on-demand visits, no
  guaranteed arrival times. Clients are told their route day, not their hour — because
  promising an hour is the fastest way to break membership standard rule 1.
- **§4.3 The boundary of the property.** The serviced area is identified at the walkthrough and
  recorded in the property file. No interiors, no garages, no lawn, no wooded lot.

**What was preserved verbatim in substance:** the draft's closing principle, which is the
whole point of the section — *"Your recurring service should find additional work, not absorb
additional work."*

*Implemented in `service-catalog.md` §4, §5.*

---

## D-12 · Membership standards — rules 4 and 5 reconstructed

**The draft said:** "I'd establish five internal rules," then listed three, and **cut off
mid-sentence in rule 4**: *"Recommend additional work; don't quietly absorb projects into the"*
— and the document ends. Rule 5 is missing entirely.

**It now says** (`operating-model.md` §7), with rules 4 and 5 clearly flagged:

1. Never rush a property because another client is waiting. *(draft's)*
2. Communicate anything unusual. *(draft's)*
3. Leave the property visibly better than you found it. *(draft's)*
4. 🔶 **Recommend additional work; never quietly absorb a project into the membership.**
5. 🔶 **Every visit ends in writing, the same day.**

**Basis for rule 4:** the sentence is nearly complete. The only sensible completions are "the
membership" or "the routine visit," and both mean the same thing. It is also exactly the
principle stated in the draft's own §3 ("find additional work, not absorb additional work") and
in `CANON.md` §2. **Confidence: high.**

**Basis for rule 5:** nothing survives of it. The reconstruction comes from what the draft
itself argued hardest for — §7 (the post-visit communication) and §8 (the property record) were
the two things it said a four-client operation could beat a large company on. A written-report
discipline is the natural fifth rule, and it is the rule that makes the project attach rate in
D-8 mechanically possible: a finding that isn't written down can't be quoted or followed up.
**Confidence: moderate. This is a reconstruction, not a recovery.**

**Both are marked 🔶 RECONSTRUCTED — CONFIRM WITH OWNER** in `operating-model.md` §7 and must
stay marked until he confirms. If he remembers a different rule 5, use his — but the written-
report discipline needs to live somewhere regardless, so move it rather than delete it.

See **R-3**.

*Flagged in `CANON.md` §9.1. Implemented in `operating-model.md` §7.*

---

## D-13 · "Don't take a client 40 minutes away" → three testable rules

**The draft said:** "Don't accept a $229 customer who requires 40 minutes of driving each way
unless there's a strategic reason."

**It now says:** three tests every prospect passes before price is discussed —

- **15-minute test:** within 15 minutes of at least one existing member.
- **25-minute test:** within 25 minutes of home base.
- **5-hour test:** the route day still finishes under five hours after adding this property.

**Why:** the draft's version is the right instinct with no enforcement mechanism, and it would
lose every time it collided with a live prospect holding a checkbook. Three numeric tests can
be applied on the spot.

**And it was priced,** so the trade-off is visible rather than intuitive
(`operating-model.md` §4): a client 15 minutes off the cluster costs 12 unpaid drive hours a
year — **$612, or 17.6% of that client's entire gross revenue** — before he picks up a tool.

**The rule that follows from it:** the empty slot is worth more than the wrong client. An
empty slot keeps all its hours. A wrong client consumes route hours permanently and can't be
removed without an awkward conversation.

**What to do instead of declining:** `ideal-client.md` §4 turns the failure into a pipeline —
waitlist them in writing, ask who else on their street has a pool, and sell them project work
in the meantime. The waitlist is a project pipeline, not a rejection queue.

*Implemented in `operating-model.md` §4, `ideal-client.md` §4.*

---

## D-14 · A price list with "quoted" on it → a quoting formula

**The draft said:** §9 listed two prices — grill/outdoor kitchen deep cleaning $249+, window
wells $49+ — and then "quoted" for pressure washing, storm cleanup, drainage, repairs,
seasonal cleanup, and special projects.

**It now says** the same list, plus a rule of thumb so he isn't building a number from scratch
with a customer standing next to him (`pricing.md` §7):

```
  estimated on-site hours × $100
+ materials at cost × 1.25
= subtotal, rounded UP to the nearest $25
```

**Floor: no standalone trip below $149.** The floor does **not** apply to work done during a
scheduled membership visit, because the trip is already paid for.

**Why $100/hour:** Cincinnati handyman labor runs **$40–80/hour**. He is not selling handyman
hours — he is selling a flat price for a finished result, with his own equipment, from someone
the client already trusts and already lets through the gate. That prices above hourly labor,
not at it.

**The formula reproduces the draft's own published prices**, which is the test that it's
calibrated right:

- Grill deep clean, 2.5 hrs × $100 = $250 → the published **$249+** ✓
- Window well during a visit, 0.5 hrs × $100 = $50 → the published **$49+** ✓

**And it explains why $49 works at all**, which the draft never did: a $49 job would be
absurd as a standalone trip and is perfectly good as an add-on found during a visit he was
already making. That is the membership-as-lead-engine principle showing up in the price list.

**Internal quoting anchors** for the "quoted" categories are in `pricing.md` §5.3, clearly
marked NOT customer-facing so nobody publishes them as fixed prices.

*Implemented in `pricing.md` §5, §7.*

---

## D-15 · "Bill materials separately" → cost + 25%, itemized

**The draft said:** "Materials and replacement parts should also be billed separately," and in
§11, "If a project requires $75 worth of materials, track the $75 separately so you can see
your actual margin."

**It now says:** materials, parts, and disposal are billed at **cost + 25%**, itemized on the
estimate before the work and on the invoice after.

**Why a markup and not just pass-through:** the draft's version tracks materials but gives away
the sourcing time, the supply run, and the cost of carrying the money until the invoice clears.
25% is the established figure in this category — a Denver home-watch operator charges a 25%
vendor markup on top of $400/month and $155/hour coordination. It does not need to be
apologized for and it should not be hidden.

**Why itemized rather than folded in:** it preserves exactly what the draft wanted — visible
margin — and it makes the labor price defensible, because the client can see that the $93.75 of
materials isn't padding the $250 of work.

**Boundary added:** routine consumables used on a membership visit — surface cleaner, bags,
spot weed treatment, ice melt — are **not** materials. They're covered by the membership and
budgeted as an operating expense ($65/month in `unit-economics.md` A14). Without that line, the
first client to be handed a $6 charge for trash bags will remember it for a year.

*Implemented in `pricing.md` §6, `service-catalog.md` §4.6, §4.9.*

---

## D-16 · What was preserved deliberately, and not touched

Listed explicitly so it's clear these were considered and kept, not overlooked:

| From the draft | Status |
|---|---|
| **Excess capacity is part of the product** (§12) | Kept and expanded — `operating-model.md` §5. One of the best ideas in the draft. |
| **Consolidate visits into weeks 1 and 3** (§4) | Kept exactly. Locked in `CANON.md`. |
| **Tuesday–Thursday protected for projects** (§1, §10) | Kept and given a much stronger reason — D-6. |
| **No regularly scheduled weekend work** (§1) | Kept exactly. |
| **The per-visit SOP shape** (§6): before arrival, walk on arrival, work the priorities, walk before leaving | Kept. Its structure runs through `service-catalog.md` §2 and belongs to `04-operations/` to expand. |
| **"What will make the biggest difference today?" over "how many boxes can I check?"** (§6) | Kept — it's the reason `service-catalog.md` §1 exists. |
| **The post-visit service report** (§7), including the "I noticed the window wells, I can add that for $49" pattern | Kept, and promoted: it is now the primary sales mechanism of the business (D-1) and the subject of membership standard rule 5 (D-12). |
| **The property record and service history** (§8) | Kept. Belongs to `04-operations/`. |
| **"Not every task has to be performed every visit"** (§2) | Kept, and moved to the top of `service-catalog.md` as §1, because it governs everything below it. |
| **Track membership, project, and material revenue separately** (§11) | Kept — `operating-model.md` §8. |
| **The monthly report ending in effective hourly rate** (§11) | Kept, and the metric was promoted into the permanent set — D-8. |
| **MEMBERSHIP FULL and the waitlist** (§10) | Kept, and made a genuine constraint rather than a positioning device — `operating-model.md` §5. |
| **"You need four excellent ones"** (§10) | Kept in spirit at six. The insight — that the answer to more revenue is not more clients — is exactly what D-6 proves. |

---

## Open recommendations

These are recommendations, not changes. Nothing locked in `CANON.md` was altered.

### R-1 · Decide the outdoor-kitchen-without-pool configuration before the first sale

**The issue:** `CANON.md` locks the customer-facing price list at three numbers, and a
property with an outdoor kitchen but no pool computes to a fourth ($269). `pricing.md` §1
resolves it by writing those properties at $229 and not charging the $40 module.

**Why it may need revisiting:** the most likely source of the first four members is the
Tri-State Grill Cleaning customer list — people who have an outdoor kitchen and may well not
have a pool. If that configuration is common rather than rare, the current rule gives away
**$40 × the number of such members × 12** a year. Three of them is **$1,440**.

**Recommendation:** ask him directly — *of the homes you've cleaned grills at, how many have
pools?* If the answer is "most," the current rule is fine. If the answer is "hardly any," take
option (b): add **$269** as a fourth configuration. **A fourth price is a smaller problem than
$1,440 a year.**

**Not changed here** because the three-price rule is locked in `CANON.md` §3.

### R-2 · The cap costs about $3,700 a year — hold it, but hold it knowingly

**The issue:** `unit-economics.md` §5 shows that eight clients net about **$3,712 more** than
six, at a marginal rate of $57/hour — better than his blended rate.

**Recommendation: hold the cap at six.** The reason is risk, not revenue. The 8-client case
depends entirely on non-member project flow holding up at a fuller route load, and if it
slips even modestly the marginal client pays **$45/hour — below his own blended rate**, and by
then he can't un-sell them. The cap also buys the float day, the vacation, the real waitlist,
and the ability to keep membership standard rule 1.

**But the number should be visible.** He is buying schedule integrity for about $3,700 a year,
and he should decide that on purpose rather than inherit it. If he ever revisits the cap, the
place to start is `unit-economics.md` §5.3.

**Not changed here** because the cap is locked in `CANON.md` §3.

### R-3 · Confirm membership standards 4 and 5

Rule 4 is a high-confidence completion of a truncated sentence. **Rule 5 is a reconstruction
from context — there is no surviving text.** Both are marked 🔶 in `operating-model.md` §7 and
should stay marked until he confirms.

**Ask him:** *"Your rule 4 got cut off at 'don't quietly absorb projects into the' — was that
'the membership'? And do you remember what rule 5 was?"*

If his rule 5 is different, use his. But the same-day written report needs to live somewhere
regardless, because the project attach rate in `operating-model.md` §6.2 depends on it
mechanically.

### R-4 · Consider whether the Founding Member rate should cover 4 or 6

`CANON.md` sets the Founding Member 12-month price lock at the **first 4 clients**, and
`pricing.md` §2 says it disappears after that — members 5 and 6 pay standard rates on standard
terms.

**This is probably right**, and it is implemented as written. Worth noting only because
members 5 and 6 will be the hardest to place under the route-compactness tests (D-13), and
there will be a temptation to extend the lock to close them. **Don't.** Filling slot 6 on
Founding terms permanently lowers the reference price for every referral that member sends.
If a closing concession is needed for slot 6, give **scheduling priority or a free first
project**, not a price.

### R-5 · Two numbers to verify with real quotes before launch

Both are labeled assumptions and both are large enough to matter:

- **General liability insurance at $55/month** (A15). The $45–85/month range is a national
  average for lawn/landscaping general liability. **Get two real Ohio quotes.** Also ask
  whether commercial auto is required if the vehicle is titled to the LLC — that is not
  modeled and could add meaningfully to the expense line.
- **Vehicle cost at $0.74/mile** (A11). This is the IRS full-cost rate. It's the right number
  for judging the business, but out-of-pocket fuel is only about **$532 a year**
  (`unit-economics.md` §4.1). He should know both, and not be surprised when the truck needs
  tires.

---

## Related files

- `operating-model.md` — D-1, D-2, D-5, D-8, D-12, D-13
- `pricing.md` — D-3, D-5, D-7, D-14, D-15
- `service-catalog.md` — D-7, D-11, D-15
- `ideal-client.md` — D-9, D-10, D-13
- `unit-economics.md` — D-2, D-4, D-6, and the bridge from the draft's $12,984
- `_source/brother-draft-4-client-model.md` — the document all of this refines
