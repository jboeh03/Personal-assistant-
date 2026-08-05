# Operating Model

**Owner:** `wpc-strategist` · **Status:** source of truth for capacity, schedule, and operating rules
**Reads from:** `CANON.md` · **Refines:** `_source/brother-draft-4-client-model.md`

Every number here traces to `CANON.md` or to `unit-economics.md`. Every price traces to
`pricing.md`. Nothing in this file may contradict either.

---

## 1. The one idea

**The membership is not the revenue. The membership is the lead engine.**

Its job is to put a trusted operator on a property **24 times a year**. Every one of those
24 visits is also an inspection, and every inspection is a chance to find work worth
quoting. Membership revenue covers its own cost and buys standing permission to be on the
property. **Project revenue is the actual income.**

The arithmetic in `unit-economics.md` says this plainly: at six clients, memberships bring
in $20,808 a year and project work brings in $14,125. Projects are 40% of gross revenue
and they exist *because* the membership put him in the backyard twice a month.

Practical consequence, and it applies to every document in this project: **nothing treats
the membership as the finish line.** The service report at the end of each visit is not a
receipt. It is where the next job gets found, named, and priced.

---

## 2. Capacity is a route-hour cap, not a client count

The draft capped the business at four clients. A client count is the wrong unit, because
two clients are not the same size.

A client three minutes from another client costs a fraction of what a client twenty-five
minutes off the route costs, and both pay the same $289. Counting clients hides that. What
actually runs out is **route hours** — the door-to-door time the routine service consumes
out of a week that also has to hold project work, estimates, weather slippage, and a life.

### The cap

| Constraint | Value |
|---|---|
| **Hard cap** | **20 route hours per month** |
| Scheduled route days | 4 (Mon + Fri of weeks 1 and 3) |
| Float capacity | ~1 additional day per month for weather reschedules |
| Client equivalent at cap | **6 properties** (12 visits/month) |
| Launch target | **4 properties** |

At six properties this is four route days of roughly five hours each, plus a float day —
which is where `CANON.md`'s "≈ 5 route days/month" comes from.

### Planning allowance — not a target, not a metric

To build a calendar you need a time estimate. **Plan one and a half hours per stop,
door-to-door, including the drive between properties**, plus half an hour of round trip
from home to the first stop and back from the last.

This is a number used to lay out a schedule. It is **not a standard he is measured
against**, it never appears in customer-facing material, and it is never compared against
what a visit actually took. If a property needs two hours, it gets two hours — see rule 1
in §7. The draft's ~80-minute *target* is gone entirely; see `decisions.md` D-8.

Route hours by book size, using that allowance:

| Properties | Visits/month | Stops per route day | Hours per route day | **Route hrs/month** | Route hrs/year |
|---|---|---|---|---|---|
| 4 | 8 | 2 | (2 × 1.5) + 0.5 = **3.5** | **14.0** | 168 |
| **6 (cap)** | **12** | **3** | (3 × 1.5) + 0.5 = **5.0** | **20.0** | **240** |
| 8 (over cap) | 16 | 4 | (4 × 1.5) + 0.5 = **6.5** | 26.0 | 312 |

The eight-client row is there to show what the cap is protecting, not as an option. See
`unit-economics.md` §5.

### Why the cap holds at six even though eight earns more

Eight clients earn more gross and more net than six. `unit-economics.md` shows it: about
$3,700 more net per year. Anyone who tells him the cap is free is not being straight with
him. **The cap costs real money and he should know exactly how much.**

The reason to hold it anyway is that at six clients a route day is five hours, and at
eight it is six and a half. A six-and-a-half-hour route day is a whole workday. When
Monday of week 1 rains out, six clients push into a float day; eight clients push into
Tuesday, which was project time, which is where the income is. The eight-client case also
assumes project flow holds up. If it doesn't — if 16 stops a month means estimates go out
two days later and fewer close — the marginal hour past the cap pays **$45**, below his
own blended rate. That sensitivity is run in `unit-economics.md` §5.2.

So: the cap is not a claim that six earns more than eight. It is a decision to trade about
$3,700 a year for a schedule that survives a bad February, a sick week, and a vacation
without anyone being told he can't come.

---

## 3. The route schedule

**Routine visits happen only on Monday and Friday of weeks 1 and 3.**

| | Monday | Tue–Thu | Friday | Sat/Sun |
|---|---|---|---|---|
| **Week 1** | Route A (up to 3 stops) | Projects · estimates · emergencies | Route B (up to 3 stops) | — |
| **Week 2** | Open — projects, weather makeup | Projects · estimates · emergencies | Open — projects, weather makeup | — |
| **Week 3** | Route A (up to 3 stops) | Projects · estimates · emergencies | Route B (up to 3 stops) | — |
| **Week 4** | Open — projects, weather makeup | Projects · estimates · emergencies | Open — projects, weather makeup | — |

**Route A** and **Route B** are geographic, not alphabetical. Route A is one cluster of
properties; Route B is the other. A client belongs to whichever route their neighbors are
on, and stays there. Clients are told their route day, not their arrival time.

Three rules attached to this schedule:

1. **Tuesday through Thursday is protected.** It is project, estimate, and emergency time.
   It is not overflow for routine service. If routine work is bleeding into Tuesday more
   than once a quarter, the book is too big or the route is too spread out — fix the cause,
   not the week.
2. **No regularly scheduled weekend work.** A one-off project on a Saturday because a
   client is hosting on Sunday is a judgment call. A standing Saturday route is not.
3. **Weeks 2 and 4 Mondays and Fridays are the weather valve.** They exist so that a
   rained-out route day never touches Tue–Thu. Keeping them genuinely open is what makes
   the schedule real.

---

## 4. Route compactness is a selection criterion, not a preference

The draft said don't take a client who needs 40 minutes of driving each way. That is the
right instinct with no way to enforce it. Here it is as three tests a prospect must pass:

- **The 15-minute test.** Every member property must be within 15 minutes' drive of at
  least one other member property. A prospect who fails goes on the waitlist until a
  neighbor qualifies, or gets declined with a referral.
- **The 25-minute test.** No member property is more than 25 minutes from home base.
- **The 5-hour test.** After adding a property, its route day must still be servable in
  under five hours door-to-door. If adding it breaks that, it doesn't get added — no
  matter what it pays.

### What an off-route client actually costs

Assume a sixth client sits 15 minutes further off the route than he should, adding 30
minutes of drive per visit.

```
30 min per visit × 2 visits/month × 12 months  =  12 hours per year of unpaid drive
12 hours × $51/hr net (unit-economics.md §4)   =  $612 per year of margin destroyed
$612 ÷ ($289 × 12 = $3,468 annual membership)  =  17.6% of that client's gross revenue
```

Almost 18% of the client's revenue is gone before he unloads a tool — and that is the
*profitable* case. A client 25 minutes off-route at the base $229 is worth close to
nothing, and worth less than nothing on a day it rains.

This is why compactness is a selection criterion. Selling the sixth slot to the wrong
house is worse than leaving it empty, because an empty slot still has all its hours.

---

## 5. Capacity is part of the product

The draft got this right and it survives intact: **the open capacity is not slack he
failed to sell. It is a feature the client is paying for.**

What the open capacity buys:

- Room for weather delays without anyone being bumped
- Room for a property that needs an extra hour that week, without shortchanging the next one
- Room to take a profitable project the same week it's found, while the client still wants it
- Room to go on an estimate within 48 hours, which is what actually closes project work
- Room for equipment failure, family obligations, illness, and vacation
- Room to be off

He is deliberately giving up maximum revenue in exchange for control and service quality.
That is the trade, it is intentional, and `unit-economics.md` prices it honestly at about
$3,700 a year.

**The corollary the draft didn't state:** because the capacity is part of the product, the
scarcity is real. When the six slots are full the site says **MEMBERSHIP FULL** and offers
a waitlist. That is a fact about the schedule, not a marketing device. Never fake it,
never soften it, and never quietly take a seventh client because someone was persistent.

---

## 6. Metrics — what replaced "minutes per visit"

The draft set a ~80-minute average visit target, and then, two pages later, made rule 1
of its own membership standard *never rush a property because another client is waiting.*
Those cannot both be true. The time target loses.

**"Minutes per visit" does not appear anywhere in this business — internal or external.**
There is a planning allowance for building a calendar (§2), and that is a different thing:
it is an input to a schedule, never an output he is graded on.

Five numbers replace it. Four come from `CANON.md`; the fifth is the draft's own idea and
is preserved because it was the best number in the draft.

### 6.1 Revenue per route day

```
membership revenue for the month ÷ route days worked that month
```

At six clients: **$1,734 ÷ 4 = $434 per route day.**
**Target: $400 or better.**

This number is the referee for every route decision. It goes up when the route is compact
and the tier mix is pool-heavy. It goes down the moment he accepts a client off the
cluster or discounts to fill a slot. It is the single number that makes the cost of a bad
client visible in the month it happens.

### 6.2 Project attach rate

```
projects sold to members ÷ member visits
```

Target case: 15 member projects across 144 member visits per year = **10.4%**.

Two working targets, because the funnel has two stages:

- **Every visit surfaces at least one item worth naming in the report.** Even "nothing
  needs attention right now" is a finding — but it should be rare, because properties
  always have something.
- **One in ten visits converts to a sold project**, or about **2.5 projects per member per
  year.**

If the attach rate is low, the problem is almost never that the properties are perfect.
It is that the service report is being written as a receipt instead of as an inspection.

### 6.3 Membership retention — measured in April

```
members who started before November and are still active on April 1
```

**Target: 6 of 6.**

Measure it on **April 1, not January 1.** The flat year-round price exists to prevent
winter churn, and winter churn is the fastest way to kill this business. A member who
quits in February takes the whole Green Season with them. A January retention number tells
him nothing; an April number tells him whether the Dormant Season scope is doing its job.

### 6.4 Referrals

```
new qualified inquiries that name an existing member or a specific job he did
```

**Target: at least one per quarter, and a waitlist that grows without paid advertising.**

This is the health check on the whole model. Six clients is few enough that word of mouth
should be the dominant channel. If it isn't, the service isn't distinctive enough yet.

### 6.5 Effective hourly rate

```
(gross revenue − expenses) ÷ all hours worked, field and admin
```

Target case: **$28,669 ÷ 561 hours = $51 per hour net**, before income and
self-employment tax.
**Floor: $45/hr.** Below that, something in the book or the route needs to change.

This is the draft's own metric — it said "that last number matters," and it was right. It
is kept, given a formula and a floor, and it now includes admin hours, which the draft's
version did not.

---

## 7. The five internal membership standards

The draft proposed five internal rules and the document was cut off mid-sentence in rule 4.
Rules 1–3 are the draft's, verbatim in substance. **Rules 4 and 5 are reconstructed and
need his brother's confirmation before they go into any operations document.**

**1. Never rush a property because another client is waiting.**
The schedule is built with slack so this rule can be kept. If it can't be kept, the
schedule is wrong — not the rule.

**2. Communicate anything unusual.**
Storm damage, standing water, a pool that looks off, a gate that won't latch, a neighbor's
tree over the fence. Report it even when it isn't his to fix, and especially when it isn't
his to fix. The value of having a trusted person on the property twice a month is entirely
in this rule.

**3. Leave the property visibly better than you found it.**
Not "all tasks completed." Visibly better. The homeowner is going to walk out at six
o'clock and form an opinion in four seconds.

**4. Recommend additional work; never quietly absorb a project into the membership.**
🔶 **RECONSTRUCTED — CONFIRM WITH OWNER.** The draft's sentence ends at *"Recommend
additional work; don't quietly absorb projects into the"* — the only sensible completion is
*"the membership"* or *"the routine visit."* It is also the exact principle in `CANON.md`
§2 and in §9 of the draft ("Your recurring service should find additional work, not absorb
additional work"), so the reconstruction is well supported.

The rule in practice: when he finds a two-hour job during a routine visit, doing it "since
I'm here" costs him twice — the two hours, and the price of a job the client now believes
is included. **Name it, price it, and let the client say yes.** Almost all of them will.

**5. Every visit ends in writing, the same day.**
🔶 **RECONSTRUCTED — CONFIRM WITH OWNER.** Rule 5 is missing entirely from the source. This
reconstruction comes from what the draft itself emphasized most: §7 (customer
communication) and §8 (property record) are the two sections it argued a four-client
operation could beat a large company on.

The rule in practice: the service report goes out before the day ends, and the property
record is updated before the next visit is scheduled. A finding that isn't written down
didn't happen — it can't be quoted, it can't be followed up, and by the third visit
neither party remembers it. This is the rule that makes 6.2 work.

> **Note for whoever confirms these:** rules 4 and 5 are the two that carry the money. If
> the owner remembers what the original rule 5 was and it differs, use his — but the
> written-report discipline needs to live somewhere regardless.

---

## 8. Money mechanics

The draft had a service model and no way to get paid reliably. These are not optional and
they precede the first client, not the fourth.

| Mechanism | Requirement | Why |
|---|---|---|
| **Card on file** | Every member, before the first visit. Auto-charged on the 1st. | A subscription he has to chase monthly is not a subscription. Terms in `pricing.md` §4. |
| **Signed service agreement** | Every member, before the first visit. | The exclusions in `service-catalog.md` are only worth something if the client signed them. Draft the agreement in `04-operations/`. |
| **General liability insurance** | In force before the first paid visit. | He is working around pools, gas grills, and other people's property. Budgeted in `unit-economics.md` §4. |
| **LLC** | Filed before the first paid visit. | Separates his household from a claim. Ohio Articles of Organization are a one-time $99 with no annual report fee. |

Two supporting practices from the draft, kept:

- **Track membership revenue, project revenue, and materials separately.** Materials must
  never disappear into labor revenue. If a project consumes $75 of materials, the $75 is
  tracked as its own line so the real margin is visible.
- **Close the month with a one-page report:** membership revenue, project revenue,
  material reimbursements, gross revenue, expenses, net, hours worked, effective hourly
  rate.

---

## 9. Operating rules, in one place

1. Cap is **20 route hours per month**. Launch at 4 properties, hard cap at 6.
2. Routine service happens **only Mon/Fri of weeks 1 and 3**.
3. **Tue–Thu is protected** for projects, estimates, and emergencies.
4. **No standing weekend work.**
5. Every property passes the **15-minute, 25-minute, and 5-hour** route tests before it is
   accepted.
6. **Same price year-round.** Never propose a reduced winter rate.
7. **Never rush a property.** The slack exists so this is possible.
8. **Every finding is named, priced, and written down** — never absorbed.
9. **Card on file and a signed agreement** before the first visit, no exceptions.
10. When the six slots are full, the answer is **the waitlist** — and it is a real one.

---

## Related files

- `pricing.md` — every price, billing terms, and how to quote a project
- `service-catalog.md` — Green and Dormant scope, and the exclusions
- `ideal-client.md` — who qualifies, the geography, and the disqualifiers
- `unit-economics.md` — the arithmetic behind every number on this page
- `decisions.md` — what changed from the draft and why
