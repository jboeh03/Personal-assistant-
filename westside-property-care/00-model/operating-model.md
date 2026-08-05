# Operating Model

**Owner:** `wpc-strategist` · **Status:** source of truth for capacity, schedule, and operating rules
**Reads from:** `CANON.md` and `_source/2026-08-05-owner-decisions.md`

Every number here traces to `CANON.md` or to `unit-economics.md`. Every price traces to
`pricing.md`. Nothing in this file may contradict either.

> **Rewritten 2026-08-05.** The season is **eight months**, not twelve. The route structure was
> re-derived from the owner's two-hour cap and his heavier pool scope — **the old
> `1.5 hours per property` planning constant is dead.** The metrics rule was narrowed rather
> than lifted. See `decisions.md` **D-20**, **D-21**, **D-25**, **D-26**.

---

## 1. The one idea

**The membership is not the revenue. The membership is the lead engine.**

Its job is to put a trusted operator on a property **16 times a season**. Every one of those
16 visits is also an inspection, and every inspection is a chance to find work worth quoting.
Membership revenue covers its own cost and buys standing permission to be on the property.
**Project revenue is the actual income.**

**This matters more under the seasonal model than it did before, and the arithmetic says so
bluntly.** At six clients on a full season, memberships bring in $13,392 and project work
brings in $11,800 — **46.8% of gross revenue**, up from 40.7% under the superseded year-round
model. And `unit-economics.md` §7.1 runs the case where the project engine does not fire at
all: six members, membership only, pays **$33.25 an hour**. Under the old model that same case
paid $45.41.

> **The membership book can no longer carry the business on its own. That is not a warning
> about the future — it is the current arithmetic.**

Practical consequence, and it applies to every document in this project: **nothing treats the
membership as the finish line.** The service report at the end of each visit is not a receipt.
Block 8 of his own checklist — `NOTES / ITEMS TO QUOTE / FOLLOW-UP` — is where the next job
gets found, named, and priced.

---

## 2. Capacity — derived from the two-hour cap, not assumed

`CANON.md` §3 asks this file to derive route hours from the client count and the cap. Here is
the derivation. The full working, including the checklist blocks it comes from, is
`unit-economics.md` §2.

### 2.1 The planning allowance

The owner's field checklist budgets two hours across eight blocks, two of which only exist if
the property has a pool (30 min) or an outdoor kitchen (20 min). That produces three property
shapes in a qualified book — 120, 100, and 90 minutes — averaging 103 minutes across the
assumed composition.

**Planning allowance: 1.75 hours (1:45) of on-site time per property.**
**Contractual ceiling: 2.0 hours per visit, no rollover.**

> **This is a calendar input, not a target, and the distinction is the whole of `CANON.md`
> §3's narrowed rule.** 1:45 is used exactly twice — to lay out a route day, and to compute
> hours in `unit-economics.md`. It is **never** recorded, never reported, never quoted to a
> customer, and never compared against what a visit actually took. **If a real visit is ever
> measured against 1:45, a planning input has become the banned metric. Stop.**

Drive allowance, from the route tests in §4: **0.5 hr round trip per route day, plus 0.25 hr
between consecutive stops.**

### 2.2 Route-day structure — 3 stops, 4 route days a month

Twelve visits a month at six clients, Mondays and Fridays only. **Three stops per route day,
four route days a month.** The alternative — two stops across six route days — was considered
and rejected; the reasoning is in `unit-economics.md` §2.3 and summarised in
`decisions.md` **D-25**.

The short version: **three-stop days protect Tuesday–Thursday absolutely.** Four route days
uses half the available Monday/Friday slots and leaves four as weather valve. Six route days
leaves two, and a two-rain-out month then pushes routine work into the project block, which is
where the income is.

### 2.3 The cap

| Constraint | Value |
|---|---|
| **Hard cap** | **25 route hours per month, in season** |
| Season total | **200 route hours** across 8 months |
| Scheduled route days | **4 per month** (Mon + Fri, weeks 1 and 3) · **32 per season** |
| Stops per route day at the cap | **3** |
| Float capacity | Mon + Fri of weeks 2 and 4 — **4 unused slots a month** |
| Client equivalent at cap | **6 properties** (12 visits/month, 96 visits/season) |
| Launch target | **4 properties** (17 route hours/month) |

### 2.4 Route hours by book size

| Properties | Visits/mo | Stops/day | Drive/day | **Hrs/route day** | **Hrs/month** | **Hrs/season** | **Ceiling day** |
|---|---|---|---|---|---|---|---|
| 4 | 8 | 2 | 0.75 | **4.25** | 17.0 | 136 | 4.75 |
| **6 (cap)** | **12** | **3** | **1.00** | **6.25** | **25.0** | **200** | **7.00** |
| 8 (over cap) | 16 | 4 | 1.25 | 8.25 | 33.0 | 264 | **9.25** |

### 2.5 Why the cap holds at six

Eight clients earn more gross and more net than six — about **$2,127 a year**
(`unit-economics.md` §6.3). Anyone who tells him the cap is free is not being straight with
him. **But under the seasonal flat-price model the case for the cap is much stronger than it
was, and it no longer needs a stressed assumption to make it:**

1. **The marginal hours pay $36.99** — below his own blended $43.23 and **below the $40 floor
   in §7.5**, in the base case.
2. **Net per hour goes *down*, from $43.23 to $42.54.** The seventh and eighth clients earn
   him less per hour than the six he already has, and he cannot un-sell them.
3. **The worst-case route day is 9.25 hours.** That is not a long day, it is an impossible
   one — it starts before the dew is off the furniture and finishes after dark for half the
   season. It cannot be run without either rushing a property or breaking the
   Monday/Friday-only rule.
4. **The float disappears.** At six clients a rained-out Monday moves to week 2. At eight it
   moves to Tuesday, which was the profitable day.
5. **Membership standard 1 stops being keepable.** *Never rush a property because another
   client is waiting* is a promise the six-client schedule can keep and the eight-client
   schedule cannot.

**He is buying schedule integrity for about $2,100 a year, and the schedule he is buying is
the only one that physically works.** That is the trade, stated plainly. `decisions.md` R-2
carries the number.

---

## 3. The route schedule — an eight-month calendar

**Season: March 1 – October 31. Routine visits happen only on Monday and Friday.**

| | Monday | Tue–Thu | Friday | Sat/Sun |
|---|---|---|---|---|
| **Week 1** | **Route A** (up to 3 stops) | Projects · estimates · emergencies | **Route B** (up to 3 stops) | — |
| **Week 2** | Open — weather makeup, projects | Projects · estimates · emergencies | Open — weather makeup, projects | — |
| **Week 3** | **Route A** (up to 3 stops) | Projects · estimates · emergencies | **Route B** (up to 3 stops) | — |
| **Week 4** | Open — weather makeup, projects | Projects · estimates · emergencies | Open — weather makeup, projects | — |

**Route A and Route B are geographic, not alphabetical.** Route A is one cluster; Route B is
the other. A client belongs to whichever route their neighbours are on, and stays there.
**Clients are told their route day, not their arrival time.**

In practice: **Route A runs the 1st and 3rd Monday. Route B runs the 1st and 3rd Friday.** In
some months the 1st Friday falls before the 1st Monday. That does not matter — the two routes
are independent clusters and neither depends on the other.

### Four rules attached to this schedule

1. **Tuesday through Thursday is protected.** It is project, estimate, and emergency time. It
   is not overflow for routine service. If routine work bleeds into Tuesday more than once a
   season, the book is too big or the route is too spread out — fix the cause, not the week.
2. **No regularly scheduled weekend work.** A one-off project on a Saturday because a client
   is hosting on Sunday is a judgment call. A standing Saturday route is not.
3. **Weeks 2 and 4 Mondays and Fridays are the weather valve.** They exist so a rained-out
   route day never touches Tue–Thu. Keeping them genuinely open is what makes the schedule
   real. **A weather-moved visit is performed within the same calendar month where possible**
   (agreement §8).
4. **A holiday Monday shifts, it does not vanish.** Move that route to the next Monday and
   push the month's second round to the following one, preserving the roughly fourteen-day
   cadence between a client's two visits.

### 3.1 The 2026 partial season, concretely

He is launching mid-season. **Ten route days remain in 2026:**

| Month | Route A (Monday) | Route B (Friday) | Route days |
|---|---|---|---|
| **August 2026** | Aug 17 | Aug 21 | 2 — one round only |
| **September 2026** | **Sept 14 and Sept 28** | Sept 4 and Sept 18 | 4 |
| **October 2026** | Oct 5 and Oct 19 | Oct 2 and Oct 16 | 4 |
| | | | **10** |

> **Labor Day is Monday September 7, 2026.** Route A shifts to **Sept 14**, and the month's
> second Route A round moves to **Sept 28** — fourteen days later, cadence preserved. Do not
> run a route on a holiday and do not skip the round.

Check: 10 route days × 3 stops = 30 visits = 6 clients × 5 visits ✓

**Each 2026 client receives 5 visits and is billed $697.50** — one pro-rated August visit at
$139.50 plus two full months (`pricing.md` §3.2).

### 3.2 The off-season — November 1 to end of February

**There are no scheduled route days.** No visits, no property checks, no freeze protection, no
snow or ice service, and no membership charge (`service-catalog.md` §4.8).

**What does happen, and it is not optional:**

| When | What |
|---|---|
| **Final October visit** | Tell each member, in person and in writing, exactly when the last visit is and exactly when service resumes. Hand them the season's summary. |
| **Late November** | One written touch: the season-end property report — what was done, what was found, what next season needs, with prices. |
| **Mid-January** | One written touch. A note, a photo of something he noticed driving past, a heads-up about a spring price. Something a person wrote. |
| **February, in writing** | **Re-enrolment confirmed before March 1.** Not on the first route day. See §7.3. |
| **Whenever** | Off-season project work — grill deep cleans, gutters, storm callouts — is quoted and billed normally (`pricing.md` §5). |

**Two touches and a written re-enrolment across four months is the minimum, and it exists for
one reason:** industry evidence on seasonal service businesses is that customers churn because
they feel undervalued or **simply forget to renew between seasons**, and that annual-contract
operators retain **10–20% more customers** than seasonal-billing operators. He has chosen
seasonal billing. The touches are how he buys that back. `decisions.md` **D-18(b)**.

---

## 4. Route compactness is a selection criterion, not a preference

Three tests every prospect passes **before price is discussed**:

- **The 15-minute test.** Every member property must be within 15 minutes' drive of at least
  one other member property. A prospect who fails goes on the waitlist until a neighbour
  qualifies, or gets declined with a referral.
- **The 25-minute test.** No member property is more than 25 minutes from home base.
- **The route-day test.** After adding a property, its route day must still be servable in
  **under 6.5 hours door-to-door at the planning allowance**, and must still be **runnable at
  the two-hour ceiling on every stop** — that is, under 7 hours. If adding it breaks either,
  it doesn't get added, no matter what it pays.

### What an off-route client actually costs

A client 15 minutes further off the route than they should be, adding 30 minutes of drive per
visit:

```
30 min per visit × 16 visits per season         =  8 hours per season of unpaid drive
8 hours × $43.23/hr net (unit-economics.md §5.4) =  $346 per season of margin destroyed

$346 ÷ ($279 × 8 = $2,232)                       =  15.5% of that client's entire revenue
```

**Under a flat price this is 15.5% for every client.** There is no longer a cheaper tier where
the drive hurts more and an expensive one where it hurts less — it is simply a sixth of the
client's revenue, gone before he unloads a tool.

This is why compactness is a selection criterion. **Selling the sixth slot to the wrong house
is worse than leaving it empty, because an empty slot still has all its hours.**

---

## 5. Capacity is part of the product

The draft got this right and it survives intact: **the open capacity is not slack he failed to
sell. It is a feature the client is paying for.**

What the open capacity buys:

- Room for weather delays without anyone being bumped
- Room for a property that needs the full two hours on a day the previous one also did
- Room to take a profitable project the same week it's found, while the client still wants it
- Room to go on an estimate within 48 hours, which is what actually closes project work
- Room for equipment failure, family obligations, illness, and a week off in July
- Room to be off

He is deliberately giving up maximum revenue in exchange for control and service quality.
`unit-economics.md` §6.3 prices it honestly at about **$2,127 a season** — and shows that at
eight clients the schedule stops being physically runnable, which the money alone doesn't say.

**The corollary the draft didn't state:** because the capacity is part of the product, the
scarcity is real. When the six slots are full the site says **MEMBERSHIP FULL** and offers a
waitlist. That is a fact about the schedule, not a marketing device. Never fake it, never
soften it, and never quietly take a seventh client because someone was persistent.

---

## 6. What the two-hour cap is for, and how to talk about it

**The cap is the mechanism that makes a flat price survivable.** At $279 for every property,
a pool-and-outdoor-kitchen house consumes the full two hours while a plain patio house
finishes in ninety minutes — the same fee buying between **$69.75 and $93.00 an hour** of his
on-site time (`unit-economics.md` §7.3). Without a ceiling, the flat price would be a promise
to work until the biggest property was finished, at the price the smallest one pays.

Two clauses travel with the cap wherever it appears, and neither may be dropped:

> **Highest-priority maintenance items come first, using his judgment.**
> **Completion of every possible task during every visit is not guaranteed.**

**How to talk about it.** The cap is a **scope boundary**, not the thing being purchased.
Lead with what stays maintained; state the cap where a boundary belongs — the agreement, the
what's-included page, the walkthrough. **Never put the price and the hours in the same
sentence.** `$279 ÷ 4 hours = $69.75` lands inside the $40–80 Cincinnati handyman band and
reframes a maintenance membership as four hours of general labour. That is a copy problem with
a copy solution, and it costs nothing to avoid (`unit-economics.md` §9.4).

---

## 7. Metrics — the rule, stated precisely

`CANON.md` §3 **narrows** the old blanket ban on minutes per visit. It does not lift it. Both
halves are real and both are enforced here:

| | Status | Why |
|---|---|---|
| **"Up to two hours of on-site service per visit"** | **Legitimate — a scope boundary** | A contractual limit on what the customer purchased. It appears in the agreement and on customer-facing surfaces. |
| **His checklist budgeting two hours across eight blocks** | **Legitimate — a work aid** | His own document, in his own hand, used to structure a visit. |
| **The 1:45 planning allowance in §2.1** | **Legitimate — a calendar input** | Used to size a route day and compute hours. Never recorded, never compared to actuals. |
| **"Average visit length"** | **BANNED** | A performance target. |
| **Minutes per visit tracked as a KPI** | **BANNED** | A stopwatch on his work. |
| **Any copy implying he aims to finish quickly** | **BANNED** | Directly contradicts membership standard 1. |

**One is a ceiling on the customer's entitlement. The other is a stopwatch on his work. Never
confuse them.** The test is simple: *does this number limit what was sold, or does it grade
how fast he worked?*

Five numbers are tracked. Four come from `CANON.md`; the fifth is the draft's own idea and is
kept because it was the best number in the draft.

### 7.1 Revenue per route day

```
membership revenue for the month ÷ route days worked that month
```

At six clients: **$1,674 ÷ 4 = $418.50 per route day.** **Target: $400 or better.**

**Under a flat price this metric changed job, and the new job is still worth doing.** It used
to detect a badly *priced* client. It cannot any more — every client is $279. What it detects
now is **route density**:

| Book | Route days/month | Revenue per route day |
|---|---|---|
| 6 clients, 3 stops/day | 4 | **$418.50** ✓ |
| 6 clients, 2 stops/day | 6 | $279.00 ✗ |
| 4 clients, 2 stops/day | 4 | $279.00 — expected at launch |

**At $279 flat, clearing $400 means exactly one thing: at least three properties on every
route day.** The moment he adds a route day to accommodate an awkward client, or splits a
route to shorten a day, this number tells him what it cost. **At four clients it reads $279
and that is expected — do not chase $400 by taking an off-route fifth client.**

### 7.2 Project attach rate

```
projects sold to members ÷ member visits
```

Target case: 12 member projects across 96 member visits per season = **12.5%**.

Two working targets, because the funnel has two stages:

- **Every visit surfaces at least one item worth naming in block 8.** Even "nothing needs
  attention right now" is a finding — but it should be rare, because properties always have
  something.
- **One visit in eight converts to a sold project**, or about **2 projects per member per
  season.**

If the attach rate is low, the problem is almost never that the properties are perfect. It is
that the service report is being written as a receipt instead of as an inspection.

### 7.3 Season re-enrolment — the number that replaced April retention

```
members who finished last October and are confirmed in writing before March 1
```

**Target: 6 of 6. This is now the single most important metric in the business.**

The superseded model measured retention on April 1 and reasoned that the flat year-round price
prevented winter churn. **That price no longer exists and neither does that protection.** A
seasonal membership requires an *active decision to return*, and the industry evidence is
blunt about what that costs: seasonal-billing operators retain **10–20% fewer customers** than
annual-contract operators, and the two commonest causes of churn are customers who feel
undervalued and customers who **simply forget to renew between seasons**.

**Measure it before March 1, not on the first route day.** By the first route day it is too
late to replace anyone, and a member who is "probably going to do it again" in March is a
member he has already lost half of. Confirmations are in writing. The February conversation in
§3.2 is not a formality — it is the metric.

**The at-risk cohort is named:** anyone who signed after August 1. They will have had three
visits and then four months of silence. `decisions.md` **D-18(b)**.

### 7.4 Referrals

```
new qualified inquiries that name an existing member or a specific job he did
```

**Target: at least one per quarter, and a waitlist that grows without paid advertising.**

Six clients is few enough that word of mouth should be the dominant channel. If it isn't, the
service isn't distinctive enough yet.

### 7.5 Effective hourly rate

```
(gross revenue − expenses) ÷ all hours worked, field and admin
```

Target case: **$19,887 ÷ 460 hours = $43.23 per hour net**, before income and self-employment
tax. **Floor: $40/hr.**

> **The floor moved from $45 to $40 on 2026-08-05 and the reason should be visible, not
> buried.** The $45 figure was set against a twelve-month, attribute-priced model producing
> $50.69/hour. That model is gone. Under the seasonal flat price the target case pays $43.23,
> the launch case pays $38.09, and the zero-project case pays $33.25. A $45 floor would flag
> the business as failing on the day it opened, which makes it a useless instrument.
> **$40 is set below the target case and above the point at which the work stops being worth
> doing.** `decisions.md` **D-26**.

Worth knowing where the floor bites:

| Case | Net per hour | Against the $40 floor |
|---|---|---|
| 6 clients, full season | **$43.23** | clears by $3.23 |
| 4 clients, full season | $38.09 | **under** — expected at launch |
| 6 clients, zero project revenue | $33.25 | **well under** |
| The 7th and 8th client, marginal | $36.99 | **under** — this is the cap's argument |

**Three of those four are under the floor. That is the honest shape of this business: it works
at six clients with the project engine running, and not otherwise.**

---

## 8. The five internal membership standards

The draft proposed five internal rules and the document was cut off mid-sentence in rule 4.
Rules 1–3 are the draft's, verbatim in substance. **Rules 4 and 5 are reconstructed and need
the owner's confirmation before they go into any operations document.** See
`decisions.md` **R-3**.

**1. Never rush a property because another client is waiting.**
The schedule is built with slack so this rule can be kept — three stops a day, four days a
month, four unused Monday/Friday slots for weather. If it can't be kept, the schedule is
wrong, not the rule. **The two-hour cap serves this rule rather than fighting it:** it caps
what the customer is entitled to, so he is never choosing between finishing this property and
reaching the next one.

**2. Communicate anything unusual.**
Storm damage, standing water, a pool that looks off, an Inspect Cell warning, a gate that
won't latch, a neighbour's tree over the fence. Report it even when it isn't his to fix, and
especially when it isn't his to fix. The value of having a trusted person on the property
twice a month is entirely in this rule.

**3. Leave the property visibly better than you found it.**
Not "all tasks completed." Visibly better. The homeowner is going to walk out at six o'clock
and form an opinion in four seconds.

**4. Recommend additional work; never quietly absorb a project into the membership.**
🔶 **RECONSTRUCTED — CONFIRM WITH OWNER.** The draft's sentence ends at *"Recommend additional
work; don't quietly absorb projects into the"* — the only sensible completion is *"the
membership"* or *"the routine visit."* It is also the exact principle in `CANON.md` §2, in §3
of the draft (*"Your recurring service should find additional work, not absorb additional
work"*), and in agreement §6 (*work beyond the scheduled service time requires client approval
before additional billable work is performed*). **Confidence: high.**

The rule in practice, sharpened by the cap: when he finds a two-hour job during a routine
visit, doing it "since I'm here" costs him three times — the two hours, the price of a job the
client now believes is included, **and the routine service that did not happen because the two
hours went somewhere else.** Name it, price it, and let the client say yes. Almost all of them
will.

**5. Every visit ends in writing, the same day.**
🔶 **RECONSTRUCTED — CONFIRM WITH OWNER.** Rule 5 is missing entirely from the source. The
reconstruction comes from what the draft argued hardest for — §7 (customer communication) and
§8 (the property record) — and it is now directly supported by the owner's own checklist, whose
block 8 says *record completed services · note repairs / additional-service recommendations ·
send short service summary to customer.* **Confidence: moderate — this is a reconstruction,
not a recovery, but block 8 corroborates it.**

The rule in practice: the service report goes out before the day ends, and the property record
is updated before the next visit is scheduled. A finding that isn't written down didn't
happen — it can't be quoted, it can't be followed up, and by the third visit neither party
remembers it. **This is the rule that makes 7.2 work.**

> **Note for whoever confirms these:** rules 4 and 5 are the two that carry the money. If the
> owner remembers a different rule 5, use his — but the written-report discipline needs to
> live somewhere regardless.

---

## 9. Money mechanics

These are not optional and they precede the first client, not the fourth.

| Mechanism | Requirement | Why |
|---|---|---|
| **Card on file** | Every member, before the first visit. Auto-charged on the 1st, **March through October only**. | A subscription he has to chase monthly is not a subscription. Terms in `pricing.md` §4. |
| **Signed service agreement** | Every member, before the first visit. | The exclusions in `service-catalog.md` §4 are only worth something if the client signed them. The form exists — `04-operations/service-agreement.md`. |
| **General liability insurance** | In force before the first paid visit, and **carried year-round**. | He works around pools, gas grills, and other people's property. **The insurer must be told he vacuums, backwashes, and checks salt cells** — that is pool-system operation and the superseded scope said he did none of it. `CANON.md` §10.3. Budgeted in `unit-economics.md` A22. |
| **LLC** | Filed before the first paid visit. | Separates his household from a claim. Ohio Articles of Organization: **$99 one time**, no annual report fee, no franchise tax. |

Three supporting practices, two from the draft and one new:

- **Track membership revenue, project revenue, and materials separately.** Materials must never
  disappear into labour revenue. If a project consumes $75 of materials, the $75 is tracked as
  its own line so the real margin is visible.
- **Close the month with a one-page report:** membership revenue, project revenue, material
  reimbursements, gross revenue, expenses, net, hours worked, effective hourly rate.
- **Reserve for the winter during the season.** Insurance, software, and phone run **$119 a
  month and do not stop in November** — $476 across the four-month gap. Set aside **$60 a
  month** during the eight service months and every winter bill is pre-paid; $150 a month
  builds a real cushion. `unit-economics.md` §8.

---

## 10. Operating rules, in one place

1. **Season is March 1 – October 31.** Eight months, two visits a month, **16 visits**. No
   scheduled service November through February, and no charge.
2. Cap is **25 route hours per month, in season**. Launch at 4 properties, hard cap at 6.
3. **Three stops per route day, four route days a month.** Never a fifth route day to
   accommodate an awkward client.
4. Routine service happens **only Mon/Fri of weeks 1 and 3**. **Tue–Thu is protected.** **No
   standing weekend work.**
5. Every property passes the **15-minute, 25-minute, and route-day tests** before it is
   accepted.
6. **Two hours per visit, no rollover.** Highest-priority items first. **Completion of every
   possible task is not guaranteed** — and that sentence appears wherever the cap does.
7. **Never rush a property.** The slack exists so this is possible.
8. **Every finding is named, priced, and written down** — never absorbed into the two hours.
9. **Card on file and a signed agreement** before the first visit, no exceptions.
10. **Two written off-season touches and a written re-enrolment before March 1.** This is the
    highest-leverage unbilled work in the business.
11. When the six slots are full, the answer is **the waitlist** — and it is a real one.
12. **Never say "year-round."** Never imply the winter offering is included. Never propose a
    winter rate, a pause, or a twelve-month spread of the seasonal price.

---

## Related files

- `pricing.md` — $279, billing terms, and how to quote a project
- `service-catalog.md` — the March–October scope, the pool disclaimer, and the exclusions
- `ideal-client.md` — who qualifies, the geography, and the disqualifiers
- `unit-economics.md` — the arithmetic behind every number on this page
- `decisions.md` — **D-20**, **D-21**, **D-25**, **D-26**, and the **D-18** memo
