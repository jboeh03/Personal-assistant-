# Ideal Client

**Owner:** `wpc-strategist` · **Status:** source of truth for who this is sold to

He needs **six** clients. Not six hundred, not sixty. Six. That changes everything about
targeting: this is not a market to be segmented, it is a list of streets to be walked.

> **Rewritten 2026-08-05.** Under the flat $279 price, **property attributes no longer set the
> price — they select the client.** A pool and an outdoor kitchen used to add $100 a month to
> the invoice. They now add fifty minutes to a two-hour visit at the same fee. That single
> change rewrites the qualification logic on this page. See `decisions.md` **D-24**.

---

## 1. The segment in one sentence

**A west-side Cincinnati homeowner who has put real money into a pool or an outdoor kitchen,
who already pays other people to maintain things, whose outdoor living area can be genuinely
maintained inside two hours, and who lives within fifteen minutes of another client.**

Four parts, all load-bearing. Drop any one and the model stops working:

- **No pool and no outdoor kitchen** → they will not value $279 a month and their property
  will not generate project work, which is where the income is (§2.3).
- **Doesn't already pay for services** → he is not selling to someone who does their own yard.
  He is selling to someone who has already decided to outsource and is choosing a vendor.
- **Can't be maintained inside two hours** → the flat price becomes a losing trade on every
  visit and the client feels shortchanged on every visit. Both at once (§2.2).
- **Off route** → costs 15.5% of the client's entire revenue in unpaid drive time before he
  picks up a tool (`operating-model.md` §4).

---

## 2. Qualifying attributes — now a selection test, not a price calculator

### 2.1 The arithmetic that drives everything on this page

Every member pays the same **$279 a month, $2,232 a season**. Every member gets the same
**16 visits of up to two hours**. What differs is how much of those two hours the property
consumes — which, at a flat price, is the same thing as how much he is paid per hour of work.

From `unit-economics.md` §7.3, derived from the block budgets on his own checklist:

| Property shape | On-site min/visit | On-site hrs/season | **$ per on-site hour** | Project work it generates |
|---|---|---|---|---|
| Neither pool nor kitchen | 70 | 18.67 | **$119.57** | **Least** — and won't pay $279 |
| **Outdoor kitchen, no pool** | 90 | 24.00 | **$93.00** | Grill deep cleans, kitchen work |
| **Pool, no outdoor kitchen** | 100 | 26.67 | **$83.70** | Deck washing, seasonal, pool-adjacent |
| Pool **and** outdoor kitchen | 120 | 32.00 | **$69.75** | **Most** — and consumes the whole visit |

**Read that table twice, because it does not say what it looks like it says.**

The naive reading is *"take the emptiest backyards, they pay best per hour."* That reading is
wrong, and it is wrong for two reasons that have nothing to do with the hourly column:

1. **A plain patio owner will not buy this.** $279 a month to wipe a table and blow a walkway
   is not a value proposition, it is an invitation to cancel in July. The price only makes
   sense to someone protecting an investment.
2. **The membership is the lead engine, not the revenue** (`CANON.md` §2). A property with
   nothing in it surfaces nothing to quote. At six clients, project work is **46.8% of gross**
   and the zero-project case pays **$33.25 an hour** (`unit-economics.md` §7.1). A book of
   easy, empty properties would run a comfortable route to a bad year.

**The correct reading is the middle two rows.**

> ### The target property has **one** attribute, not zero and not two.
>
> A pool **or** an outdoor kitchen. Rich enough that the owner values $279 and the property
> generates work worth quoting. Not so rich that it consumes the entire two hours on every
> visit and leaves the flexible priority block with nothing in it.

**Between the two, lead with the outdoor kitchen.** It pays $93.00 an on-site hour against
$83.70, it is the attribute Tri-State Grill Cleaning already has a trust relationship around,
and grills are common where in-ground pools are not — roughly **8% of U.S. homes have a pool
of any kind** and about **59% of those are in-ground** (≈4.7% of homes), against **65–80% of
U.S. households owning an outdoor grill or smoker.**

### 2.2 Must have — all four

| # | Attribute | How to check |
|---|---|---|
| 1 | **A pool, an outdoor kitchen, or both** | Visible from the street, from a satellite image, or stated on the inquiry |
| 2 | **Already pays someone to maintain something** | Lawn service, pool service, cleaning service, snow contract. Ask on the walkthrough: *"who else takes care of things around here?"* |
| 3 | **Passes the time-fit test** | See below — run it on the walkthrough, before the price |
| 4 | **Passes the route tests** | Within 15 min of another member, within 25 min of home base, and doesn't push the route day past 6.5 hours |

#### The time-fit test — run the eight blocks in your head, on the walkthrough

Standing in the backyard, walk the checklist (`service-catalog.md` §2) against what is
actually in front of you:

```
Arrival + walkthrough                                       10 min
Pool care          — is there a pool?                    +  30 min
Outdoor kitchen    — is there one?                       +  20 min
Patio + furniture  — how many pieces? how much surface?     20 min
Property cleanup   — how many trees? how big is the area?   15 min
Trash + plants     — how many cans? how many pots?          10 min
Flexible block     — is there anything LEFT for this?        10 min
Final walk + docs                                            5 min
```

**The test is block 7.** If, standing there, he cannot see ten minutes of slack in a typical
visit, **the property does not fit inside the membership.** Three specific failure signals:

- **A patio big enough to need its own block.** Multiple seating zones, a fire feature, twelve
  chairs, a pergola. Block 4 quietly becomes forty minutes.
- **Heavy tree cover over the outdoor living area.** Block 5 becomes the whole visit for two
  months a year, every year.
- **A pool that is already struggling.** Green corners, a full auto-vac canister every visit,
  an equipment pad with something visibly wrong. Block 2 will blow past thirty minutes and the
  client will hold him responsible for water he does not guarantee
  (`service-catalog.md` §4.1).

**A property that fails the time-fit test is not a bad prospect — it is a project client.**
Quote the pressure washing, quote the deep clean, take the work on a Tuesday. That is a good
outcome, not a lost sale.

### 2.3 Book composition rules — these are hard limits, not preferences

Because attributes no longer price the property, the book has to be composed deliberately or
it composes itself badly.

| Rule | Why |
|---|---|
| **At most 2 of 6 properties may have both a pool and an outdoor kitchen** | Each one is a guaranteed 120-minute visit at $69.75 an on-site hour, with no flexible block left. Three of them and the route days stop absorbing a bad day. |
| **Never two maximal properties on the same route day** | Route A and Route B each take at most one. Three 120-minute stops plus drive is a **7-hour day at the ceiling** with zero slack (`unit-economics.md` §2.3). |
| **At most 1 of 6 with neither attribute** | And only if they are exceptionally well placed on the route and genuinely want the service. They generate the least project work. |
| **The other 3–4 slots are one-attribute properties** | This is the core of the book and it is where the economics actually live. |

**The assumed six-client book** (`unit-economics.md` A6): two pool-and-kitchen, two pool-only,
two kitchen-only. Each route day carries one of each — a **310-minute, 6.17-hour designed
day.** That composition is an assumption, but the *limits* above are not negotiable, because
they are what keep the route day runnable at the ceiling.

### 2.4 Strong signals — move to the front of the list

- **An outdoor kitchen, no pool.** The single best client shape in the book: $93.00 an on-site
  hour, 90-minute visits with real slack, and every visit is standing next to a grill he
  already knows how to deep-clean for $249.
- **A pool, no outdoor kitchen.** Nearly as good, and the pool is what makes the service feel
  indispensable to the owner. Take these readily.
- **Existing Tri-State Grill Cleaning customer.** He has already been on the property, they
  have already paid him, and they already trust him. *(Access to that list is **CONDITIONAL** —
  `CANON.md` §10.5. Any plan depending on it must say so.)*
- **A neighbour of an existing member.** Directly improves route compactness and arrives
  pre-sold. **The single best lead type in the business.**
- **Travels, or owns a second property.** The value of a trusted person on the property twice a
  month goes up sharply when the owner isn't there. Also the client most likely to buy the
  separate winter offering.
- **Entertains at home.** Someone who hosts wants the patio ready on Thursday, not eventually.
  They generate project work — pressure washing before a party, grill deep clean before the
  season.
- **Recently finished an outdoor project.** Somebody who just spent $40,000 on a patio and
  outdoor kitchen has a fresh, sharp interest in protecting it.
- **Empty nesters, or a household where both adults work long hours.** Time is the scarce
  input, not money.

### 2.5 Weak signals — take with care, or not at all

- **Pool and outdoor kitchen both.** Genuinely desirable *and* genuinely expensive to serve.
  **Two in the book, one per route day, and set the priority list in writing at the
  walkthrough** so the first February conversation about what didn't get done has already
  happened in August.
- **Neither attribute.** Now the *highest* revenue per on-site hour and the *lowest* project
  yield. One in the book is acceptable if they are three minutes from another member and
  actually want the service. **Never two.**
- **Long list of conditions and preferences at the first conversation.** See §6.2.
- **Wants to start "sometime next spring."** Fine, and put them on the waitlist with a date —
  but the season starts March 1 and the slot is not held indefinitely.

---

## 3. Geography

West-side Cincinnati home values are modest: **Delhi $180–350k, Bridgetown ~$240k, Green
Township $250–450k, Westwood/Price Hill/Cheviot ~$175k.**

**The seasonal price changed the affordability arithmetic and it is worth being accurate about
it.** At **$279 × 8 = $2,232 a season**, the membership costs about a third less per year than
the superseded year-round model did ($3,468 for a pool property). That does widen the
addressable list slightly. **It does not change the targeting**, because the binding constraint
was never price alone — it is the density of properties that actually have a real pool or a
built outdoor kitchen *and* an owner who already outsources.

### Qualified

| Area | Why |
|---|---|
| **Green Township subdivisions** | $250–450k range, newer construction, the highest density of in-ground pools and built outdoor kitchens on the west side. **This is the core.** |
| **Oak Hills** | Established, well-kept, higher-value housing stock with mature outdoor investment. |
| **Upper Delhi** | The top of the $180–350k range only — the river-side and higher-value streets, not Delhi generally. |
| **Covedale** | Well-maintained pockets with owner-occupied homes above the west-side median. |

**Bridgetown is conditional.** It sits inside Green Township and averages ~$240k, at the bottom
of the qualified range. Bridgetown properties qualify on the **attribute and time-fit tests**
in §2 — a real pool or outdoor kitchen, an owner who already outsources, and a backyard that
fits in two hours — never on the address alone.

### Explicitly excluded

**Westwood. Price Hill. Cheviot.**

At roughly **$175k** median, these are not the market. **This is not a judgment about the
neighbourhoods — it is density arithmetic.** Built outdoor kitchens and in-ground pools are
rare in that housing stock, and households already paying three vendors to maintain things are
rarer still. Finding the handful that qualify costs more than they return when he needs six
clients total.

**Do not write copy, ads, yard-sign plans, or targeting for these areas** (`CANON.md` §5). If
an inquiry comes in from one of them and the property genuinely passes §2, take the
walkthrough — **an exception is fine, a strategy is not.**

### How narrow this is, and why that's good

Green Township, Oak Hills, upper Delhi, and Covedale together hold a few hundred homes with a
real pool or built outdoor kitchen and an owner who already outsources maintenance.

**He needs six of them. That is roughly a 2% conversion of a list he could physically walk in a
few weekends.** The narrowness is not a limitation to work around — it is the reason this is
achievable with no advertising budget.

---

## 4. Route compactness as a selection criterion

At six clients, geography *is* the business model.

### The three tests, applied before the price is discussed

1. **15-minute test** — within 15 minutes of at least one existing member.
2. **25-minute test** — within 25 minutes of home base.
3. **Route-day test** — the route day still finishes under **6.5 hours** at the planning
   allowance and stays **runnable at the two-hour ceiling on every stop** (under 7 hours) after
   this property is added.

### The order to fill the six slots

- **Clients 1 and 2 anchor the two routes.** Pick them for cluster potential, not just for the
  individual property — the best client 1 is the one with the most qualifying neighbours.
- **Clients 3 and 4 attach to an anchor.** Each one a short drive from 1 or 2. **If either
  anchor is a pool-and-kitchen property, its route partner is not.**
- **Clients 5 and 6 are the compactness test.** By this point the route shape is set. A
  prospect who doesn't fit one of the two clusters is a waitlist candidate, not a member — even
  if they want to start Monday.

**The empty slot is worth more than the wrong client.** An empty slot keeps all its hours and
all its optionality. A wrong client consumes route hours for a whole season, sets a bad
precedent, and can't be removed without an awkward conversation.

### What to do with a qualified prospect who doesn't fit the route

Do not decline them. Do this instead:

1. Tell them the truth: the route is built around clusters, and there isn't one near them yet.
2. Put them on the **waitlist** — a real list, in writing, with their address.
3. **Ask them who else on their street has a pool.** A waitlisted prospect who recruits two
   neighbours converts all three, because now there's a cluster.
4. Offer them **project work** in the meantime. A grill deep clean or a pressure wash on a
   Tuesday is profitable, requires no route commitment, and turns them into a member the day a
   slot near them opens.

**The waitlist isn't a rejection queue, it's a project pipeline.**

---

## 5. The seasonal conversation — the one thing that must be said before the signature

**Every prospect hears this, in these words, before they sign:**

> *"Service runs March through October. Two visits a month, sixteen a season, $279 a month for
> those eight months. November through February I'm not out here and you're not billed. I'll
> tell you in October exactly when the last visit is, and I'll be in touch before March."*

**Three reasons this is non-negotiable:**

1. **A prospect who reacts badly to it has just disqualified themselves for free**, in the
   driveway, instead of in November when they are already a member.
2. **Someone signing in August 2026 will get three visits and then four months of silence.**
   That is the single highest-risk cohort in the business (`operating-model.md` §7.3). They
   have to know it going in, and they have to hear the off-season touch plan as part of the
   offer, not as damage control.
3. **The separate winter offering may not be used to soften it.** It is not included, it is
   not part of the $279, and mentioning it as though it were creates exactly the expectation
   the season boundary exists to prevent. If they want it, quote it separately.

---

## 6. Disqualifiers

Any one of these ends the conversation. Not "proceed with caution" — ends it.

### 6.1 Too far off route

Fails the 15-minute, 25-minute, or route-day test. **No price fixes distance** — and under a
flat price, no price can even try. A client 30 minutes off the cluster gives up **15.5% of
their own revenue** in unpaid drive (`operating-model.md` §4), every visit, for as long as they
are a member.

*What to say:* "I'd like to, but my route is built around two clusters and you're not near
either one yet. Let me put you on the waitlist, and in the meantime I can take care of the
grill for you."

### 6.2 Wants unlimited scope

Someone who, on the walkthrough, is already testing the edges — *"and you'd handle the beds
too, right?"* and *"what about the front?"* and *"could you get the driveway while you're
here?"*

**This is more dangerous under a flat price than it was under attribute pricing**, because
there is no longer a bigger number to absorb a bigger appetite. This prospect isn't buying a
membership; they're buying a person, and they will keep testing the boundary until either he
gives in or they feel cheated.

*What to say:* Walk the exclusions on the spot (`service-catalog.md` §5) and say the motto out
loud: **"Maintain everything, deep-clean nothing unless it's scheduled."** If they're still
adding after that, decline — and quote the extras as projects if they're interested.

### 6.3 Haggles the price

**Someone who negotiates $279 before the first visit will negotiate the scope after it.** There
is no discount, no trial rate, and no cheaper version — see `pricing.md` §8.

There is one legitimate version of this conversation and it is not haggling: *"$279 is more
than I want to spend."* That is a budget statement. **It does not make them a cheaper member**,
because there is nothing to take out of the price. They may be a project client or a waitlist
name instead, and either is a fine outcome. What is disqualifying is the person who wants the
$279 service at $220.

*What to say:* "It's $279 a month, March through October — same for every property I take on.
If that's not where you want to be, I'd still be glad to take care of the grill for you."

### 6.4 Expects on-demand response

Someone who needs him to come when they call. The membership is **two scheduled visits per
month on an assigned route day**, with **no guaranteed arrival times and no guaranteed response
time** (`service-catalog.md` §4.7 and §4.11).

The open Tuesday-through-Thursday capacity means urgent requests usually *do* get handled, and
that is a real benefit worth mentioning. **It is not a promise**, and a prospect who hears it
as one will be disappointed by the second month.

*What to say:* "Your visits are the first and third Monday. If something comes up in between,
I'll get to it when I can midweek — but I don't promise same-day, and I'd rather tell you that
now than have you find out."

### 6.5 The quiet ones

Also disqualifying, and worth naming because they don't announce themselves:

- **Won't put a card on file.** Not a payment preference — a signal. `pricing.md` §4.
- **Won't sign the agreement, or wants to redline the exclusions.** The exclusions are the
  product boundary. A prospect editing them is proposing a different product.
- **Pushes back on the pool disclaimer.** Someone who wants him responsible for water clarity
  is shopping for a pool company — at **half a pool company's visit frequency** (2 visits a
  month against 4) and **without chemicals**. **This is the single most important thing to test
  for now that the pool scope is heavy** (`service-catalog.md` §4.1).
- **Reacts badly to the November–February gap** and wants it "worked out somehow." §5.
- **Actively unhappy with their last three vendors.** Sometimes the vendors were the problem.
  Three in a row is a pattern, and he'll be the fourth.
- **Wants him there when they're not home, and won't give access.** Two visits a month with
  gate access that may or may not work isn't a service, it's a coin flip.

---

## 7. The qualification conversation, in order

The walkthrough is the qualification. Run it in this sequence:

1. **Walk the property first, talk price last.** He needs to see the pool, the kitchen, the
   hardscape, and the access before a number means anything.
2. **Run the time-fit test while you walk** (§2.2). Eight blocks, in your head. Is there ten
   minutes of slack?
3. **Ask who else maintains things here.** Qualifying attribute 2, and it tells him what the
   client is used to paying.
4. **Ask what they want handled that isn't getting handled.** This is where the project work
   for the first season comes from — write it in the property file before you leave.
5. **Walk the exclusions out loud** — the pool disclaimer first, then lawn, gutters, and deep
   cleaning. **Do it before the price, not after.** It costs a few sales and prevents every bad
   year.
6. **Say the season out loud** (§5). March through October. Not billed November through
   February.
7. **Then the price. One number.** "$279 a month." Do not follow it with the hours
   (`operating-model.md` §6).
8. **Explain the route day, not an arrival time.**
9. **Card on file and the signed agreement, before the first visit.**

If any disqualifier in §6 appears at any point, stop and pivot to project work. **A prospect
who becomes a good project customer instead of a bad member is a win, not a loss** — and under
this model, project work is 46.8% of the revenue.

---

## Related files

- `pricing.md` — the one price, and how to say it
- `service-catalog.md` — the exclusions to walk at step 5, and the pool disclaimer
- `operating-model.md` — the route tests, the off-season touch plan, and the re-enrolment metric
- `unit-economics.md` §7.3 — the per-on-site-hour arithmetic this whole page rests on
- `decisions.md` — **D-24** (attributes as selection criteria), **D-18** (the memo)
- `03-marketing/` — how these households are actually reached
