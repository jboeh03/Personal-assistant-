# Unit Economics

**Owner:** `wpc-strategist` · **Status:** the financial model, with the arithmetic shown

**Every number on this page is checkable.** Every input is either locked in `CANON.md`,
priced in `pricing.md`, or labeled below as an assumption with the reasoning attached. If an
assumption is wrong, the arithmetic still holds — change the input and rerun it.

> **Re-derived 2026-08-05** after the owner resolved the fourth configuration (`decisions.md`
> D-3 / R-1). A property with an outdoor kitchen and no pool is now **$269**, not $229. That
> changed the assumed client mix, which changed the membership line, which changed every
> figure downstream of it. The whole page was recomputed, not patched.

---

## 1. Assumptions, all in one place

Nothing here is a fact. These are the inputs, and they are the first thing to argue with.

### Revenue assumptions

| # | Assumption | Value | Basis |
|---|---|---|---|
| A1 | **Client mix across the four configurations** | 1 × $229, 2 × $269, 1 × $289, 2 × $329 | **The single biggest assumption on this page.** Fully stated in §1.1. Produces a $1,714/month book and a **$285.67** blended average. |
| A2 | Member projects per client per year | **2.5** | The draft assumed 2.0. Raised because 24 visits a year is 24 inspections, and the Dormant Season spring-prep report is a dedicated selling moment. **Assumption.** |
| A3 | Average member project value | **$275** | Between the $249 grill deep clean and the mid-range quoted jobs in `pricing.md` §5.3. **Assumption.** |
| A4 | Non-member project jobs | **1 per week, 40 weeks/year** | Tue–Thu is open ~150 days a year. One job a week uses a fraction of it. 40 weeks allows for weather, holidays, and time off. **Assumption.** |
| A5 | Average non-member project value | **$250** | Anchored on the $249 grill deep clean, the most likely first job from a Tri-State Grill Cleaning referral. **Assumption.** |
| A6 | Project revenue seasonality | **70% Apr–Oct** | Outdoor project work concentrates in Green Season. **Assumption**, used only in §6. |

### Time assumptions

| # | Assumption | Value | Basis |
|---|---|---|---|
| A7 | Route planning allowance | **1.5 hrs per stop door-to-door**, + 0.5 hr home-to-route round trip | `operating-model.md` §2. A scheduling input, **not** a per-visit target. |
| A8 | Scheduled route days | **4/month** (Mon + Fri, weeks 1 and 3) | `CANON.md` §3. |
| A9 | Average project job, including travel | **3.0 hours** | A $249 grill deep clean is ~2.5 hrs on site plus drive. **Assumption.** |
| A10 | Admin hours | **3.0 hrs/week at 6 clients** | Service reports, estimates, invoicing, scheduling, supply runs. 2.5 at 4 clients, 3.5 at 8. **Assumption.** |

### Cost assumptions

| # | Assumption | Value | Basis |
|---|---|---|---|
| A11 | Vehicle cost | **$0.74/mile** | 2026 IRS business standard mileage rate, blended: 72.5¢ Jan–Jun, 76¢ Jul–Dec. Full cost of operation — fuel, wear, depreciation, insurance share — not just gas. See §4.1. |
| A12 | Route miles | 25/route day at 6 clients (20 at 4, 30 at 8) | Compact route per `operating-model.md` §4. **Assumption.** |
| A13 | Project miles | **20 per job**; supply/estimate trips 15 mi | **Assumption.** |
| A14 | Consumable supplies | **$65/month** at 6 clients | Surface cleaner, degreaser, microfiber, bags, spot weed treatment, ice melt. Excludes project materials, which are billed at cost + 25%. **Assumption.** |
| A15 | General liability insurance | **$55/month** | 2026 market: $45–85/month for lawn/landscaping general liability; basic lawn care averages ~$46, landscaping contractors ~$51. A solo operator with no crew and no tree work sits at the low end. **Verify with two real Ohio quotes — `decisions.md` R-5.** |
| A16 | Field service software | **$29/month** | Jobber Core, one user, billed annually. (Housecall Pro Basic is $59/user/month.) |
| A17 | Card processing | **2.9% + $0.30** per transaction; **50%** of non-member work paid by card | Standard card-present/keyed rate. **Assumption** on the 50%. |
| A18 | Phone | **$35/month** attributable | **Assumption.** |
| A19 | Equipment reserve | **$600/year** at 6 clients | Blower, pressure washer, pool net and pole, hand tools, replacement and repair. **Assumption.** |
| A20 | Web, domain, listings | **$60/year** | Static site on a free host; domain renewal. `02-website/` is standalone HTML/CSS with no build cost. |
| A21 | Accounting / tax prep | **$350/year** | Single-member LLC Schedule C. **Assumption.** |
| A22 | LLC formation | **$99, one time, year 1 only** | Ohio Articles of Organization. Ohio has no annual report fee and no franchise tax. |

**Not modeled, deliberately:** owner's labor as a cost (this is his income, not a wage);
income tax beyond self-employment tax (depends on his household return — see §4.4); vehicle
purchase or lease (A11 already carries depreciation); and health insurance (a household
decision, not a business one).

---

### 1.1 A1 — the client mix, stated plainly

**This is an assumption, not a fact. He does not have six clients. He does not have one.**
Nothing below is a forecast of who will actually sign; it is a stated composition chosen so
the rest of the page has something concrete to compute from. Change these six rows and every
number after them moves.

The four prices come from `pricing.md` §1: $229 base, +$60 pool, +$40 outdoor kitchen,
add-ons independent.

**The assumed six-client book:**

| Property has | Price | Clients | Subtotal |
|---|---|---|---|
| Neither | $229 | 1 | $229 |
| Outdoor kitchen only | $269 | 2 | $538 |
| Pool only | $289 | 1 | $289 |
| Pool and outdoor kitchen | $329 | 2 | $658 |
| | | **6** | **$1,714/month** |

```
$229 + $538 + $289 + $658 = $1,714 per month
$1,714 ÷ 6                =   $285.67  blended average
$1,714 × 12               = $20,568  per year
```

**Cross-check the same book from its components** — this is the honest way to read it,
because it is how the price is actually built:

```
6 properties × $229 base                =  $1,374
4 of the 6 have an outdoor kitchen × $40 =    $160
3 of the 6 have a pool × $60             =    $180
                                            ------
                                            $1,714  ✓
```

**Why four kitchens and three pools.** In-ground pools are rare and outdoor cooking is
common: roughly **8% of U.S. homes have a pool of any kind** and about **59% of residential
pools are in-ground** (≈4.7% of homes), while **65–80% of U.S. households own an outdoor
grill or smoker.** Every qualified property in this book has at least one of the two
attributes (`ideal-client.md` §2), so the ratio inside the book is far richer than the
population — but the *direction* is not in doubt, and it points the same way the Tri-State
Grill Cleaning warm list points: **outdoor kitchens are the more common attribute, pools are
the rarer and more valuable one.**

**Why this specific mix and not a rounder one.** Three constraints pulled on it:

1. **Kitchen-without-pool has to be well represented.** That is the entire reason the fourth
   configuration exists (`decisions.md` D-3). Modeling it as an edge case would quietly undo
   the decision the owner just made. Two of six is a modest reading of "plausibly the modal
   property" — it could easily be three or four.
2. **The book still has to be pool-weighted enough to be worth running.** `CANON.md` §3 says
   lead with $289/$329, and `ideal-client.md` §2 puts a pool-and-kitchen property at the front
   of the list. Three of six with a pool reflects targeting that works without assuming it
   works perfectly.
3. **One base-tier client is realistic.** Slots 5 and 6 are filled by whoever fits the route
   cluster, not by whoever has the best backyard (`ideal-client.md` §4). Assuming all six are
   premium properties would be the optimistic error.

**The launch four are a subset of the same book,** so the two scenarios are consistent rather
than independently invented:

```
Founding four (§2)   2 × $269 + 1 × $289 + 1 × $329  =  $1,156/month  (avg $289.00)
Clients 5 and 6      1 × $229 + 1 × $329             =    $558/month  (avg $279.00)
                                                        -----------
Full book (§3)                                          $1,714/month  (avg $285.67)
```

The split is deliberate and it says something real: **the founding four are the best-qualified
properties off the warm list and blend to $289; the last two slots go to whoever fits the
cluster, blend to $279, and pull the book average down to $285.67.** If slots 5 and 6 turn out
better than that, the book beats this model. *(That the founding four happen to total the same
$1,156 the pre-resolution model produced from a flat $289 average is a coincidence — see the
note at the end of §2.5.)*

**Sensitivity — what a different mix does to the annual membership line:**

| Mix | Monthly | Annual | vs. model |
|---|---|---|---|
| 3 × $269, 1 × $229, 1 × $289, 1 × $329 (kitchen-heavy) | $1,654 | $19,848 | −$720 |
| **1 × $229, 2 × $269, 1 × $289, 2 × $329 (the model)** | **$1,714** | **$20,568** | **—** |
| 1 × $269, 2 × $289, 3 × $329 (pool-heavy) | $1,834 | $22,008 | +$1,440 |
| 6 × $329 (every property has both — do not plan on it) | $1,974 | $23,688 | +$3,120 |

The whole realistic range is about **$1,650 to $1,850 a month.** Every conclusion in this
document survives anywhere in that band. That is the useful thing to know about A1: it moves
the top line by a few percent, and it moves nothing structural.

**What the fourth configuration is worth on this mix.** Under the old rule, the two
outdoor-kitchen-only properties would have been written at $229:

```
2 members × $40 × 12 months = $960 per year
```

And he collects it from month one, because both of those properties are in the founding four.

---

## 2. Scenario: 4 clients — the launch case

This is where he actually starts. `CANON.md`: launch at 4, hard cap at 6.

### 2.1 Revenue

```
MEMBERSHIP                                 (A1 launch subset, §1.1)
  2 × $269 + 1 × $289 + 1 × $329     =    $1,156 per month
  $1,156 × 12                        =   $13,872 per year

MEMBER PROJECTS                            (A2, A3)
  4 clients × 2.5 projects × $275    =    $2,750 per year
  ( = 10 projects )

NON-MEMBER PROJECTS                        (A4, A5, reduced — see note)
  0.75 jobs/week × 40 weeks          =        30 jobs
  30 × $250                          =    $7,500 per year
                                          --------
GROSS REVENUE                              $24,122 per year
```

> **Note on the non-member rate at launch.** The 6-client case assumes 1 job/week. Year one
> assumes 0.75, because the referral engine hasn't spun up, the Google Business Profile is
> new, and there are 4 members generating word of mouth instead of 6. **Assumption.**

### 2.2 Route hours

```
8 visits/month ÷ 4 route days = 2 stops per route day
Hours per route day = (2 stops × 1.5 hrs) + 0.5 hrs travel = 3.5 hrs
4 route days × 3.5 hrs        =  14.0 route hours per month
14.0 × 12                     = 168   route hours per year
```

### 2.3 Total hours

```
Route                              168
Projects  (10 + 30 = 40 jobs × 3)  120
Admin     (2.5 hrs/wk × 52)        130
                                   ---
                                   418 hours per year
418 ÷ 52 = 8.0 hours per week      ≈ 1 working day per week
```

### 2.4 Expenses

```
Vehicle    route 48 days × 20 mi        =    960 mi
           projects 40 jobs × 20 mi     =    800 mi
           supply/estimate 30 × 15 mi   =    450 mi
                                           ------
                                          2,210 mi × $0.74      = $1,635
Supplies   $50/month × 12                                       =   $600
Insurance  $55/month × 12                                       =   $660
Software   $29/month × 12                                       =   $348
Processing membership  $13,872 × 2.9% + (48 × $0.30) = $416.69
           mem projects $2,750 × 2.9% + (10 × $0.30) =  $82.75
           non-member   $3,750 × 2.9% + (15 × $0.30) = $113.25  =   $613
Phone      $35/month × 12                                       =   $420
Equipment  reserve                                              =   $600
Web/domain                                                      =    $60
Accounting                                                      =   $350
                                                                  ------
TOTAL EXPENSES                                                    $5,286
```

### 2.5 Result

```
Gross revenue         $24,122
Expenses             − $5,286
                     ---------
NET                   $18,836   per year

$18,836 ÷ 418 hours = $45.06 per hour, net
$24,122 ÷ 418 hours = $57.71 per hour, gross
```

Year 1 also carries the one-time $99 LLC filing, bringing net to **$18,737**.

> **Revenue per route day at launch is $1,156 ÷ 4 = $289.00** — below the $400 target in
> `operating-model.md` §6.1. That is expected and it is not a problem to solve. Two stops a
> day cannot clear $400 at these prices; the metric starts working as a referee once the
> route days carry three stops. **Do not chase the $400 by taking an off-route fifth client.**

> **Note.** The launch case is numerically unchanged by the 2026-08-05 pricing resolution.
> Two $269 properties plus a $289 and a $329 happen to total exactly $1,156 — the same figure
> the old model produced by assuming four clients at a flat $289 average. The composition is
> different and the reasoning is different; the total is a coincidence. Under the *old* rule
> those two properties would have been written at $229 and the launch book would have been
> $1,076/month — **$12,912/year, $960 less.**

---

## 3. Scenario: 6 clients — the target case

The cap. This is the model the business is built to reach.

### 3.1 Revenue

```
MEMBERSHIP                                 (A1, §1.1)
  1×$229 + 2×$269 + 1×$289 + 2×$329  =    $1,714 per month
  $1,714 × 12                        =   $20,568 per year

MEMBER PROJECTS                            (A2, A3)
  6 clients × 2.5 projects × $275    =    $4,125 per year
  ( = 15 projects )

NON-MEMBER PROJECTS                        (A4, A5)
  1 job/week × 40 weeks              =        40 jobs
  40 × $250                          =   $10,000 per year
                                          --------
GROSS REVENUE                              $34,693 per year
```

**Check:** $20,568 + $4,125 + $10,000 = $34,693 ✓

**Membership is 59.3% of gross revenue. Project work is 40.7%** — and the project work only
exists because the membership put him on the property 144 times a year. That is
`CANON.md` §2 expressed in dollars.

### 3.2 Route hours

```
12 visits/month ÷ 4 route days = 3 stops per route day
Hours per route day = (3 stops × 1.5 hrs) + 0.5 hrs travel = 5.0 hrs
4 route days × 5.0 hrs        =  20.0 route hours per month   ← THE CAP
20.0 × 12                     = 240   route hours per year
```

**20 route hours per month is the cap** stated in `operating-model.md` §2. Four scheduled
route days at five hours each, plus roughly one float day a month for weather, which is
where `CANON.md`'s "≈ 5 route days/month" comes from.

### 3.3 Total hours

```
Route                              240
Projects  (15 + 40 = 55 jobs × 3)  165
Admin     (3.0 hrs/wk × 52)        156
                                   ---
                                   561 hours per year
561 ÷ 52 = 10.8 hours per week     ≈ 1.35 working days per week
```

Against `CANON.md`'s "roughly 1.5–2 working days per week": this lands slightly *under* it.
That is the right direction to be wrong in — the schedule has room for a bad month before it
breaks the promise.

### 3.4 Expenses

```
Vehicle    route 48 days × 25 mi        =  1,200 mi
           projects 55 jobs × 20 mi     =  1,100 mi
           supply/estimate 40 × 15 mi   =    600 mi
                                           ------
                                          2,900 mi × $0.74      = $2,146
Supplies   $65/month × 12                                       =   $780
Insurance  $55/month × 12                                       =   $660
Software   $29/month × 12                                       =   $348
Processing membership  $20,568 × 2.9% + (72 × $0.30) = $618.07
           mem projects $4,125 × 2.9% + (15 × $0.30) = $124.13
           non-member   $5,000 × 2.9% + (20 × $0.30) = $151.00  =   $893
Phone      $35/month × 12                                       =   $420
Equipment  reserve                                              =   $600
Web/domain                                                      =    $60
Accounting                                                      =   $350
                                                                  ------
TOTAL EXPENSES                                                    $6,257
```

Expenses are **18.0%** of gross revenue ($6,257 ÷ $34,693). For a solo service business with
no payroll, no rent, and no inventory, that is the shape you'd expect — the largest single
line is the truck.

### 3.5 Result

```
Gross revenue         $34,693
Expenses             − $6,257
                     ---------
NET                   $28,436   per year

$28,436 ÷ 561 hours = $50.69 per hour, net
$34,693 ÷ 561 hours = $61.84 per hour, gross
```

**Revenue per route day** (`operating-model.md` §6.1):
`$1,714 membership ÷ 4 route days = $428.50 per route day` ✓ — clears the $400 target.

> That $428.50 is worth watching, because it is only **7% above the target.** Under the
> kitchen-heavy mix in §1.1 it would be $1,654 ÷ 4 = **$413.50**. Under a book carrying two
> base-tier $229 properties instead of one — 2×$229 + 2×$269 + 1×$289 + 1×$329 = $1,614 — it
> would be **$403.50**, clearing $400 by three and a half dollars. **A second base-tier client
> is the last one this metric can absorb.** That is exactly what it was built to catch.

---

## 4. What's left after tax, and what the truck really costs

### 4.1 The vehicle line is a full cost, not a fuel bill

A11 uses the IRS standard mileage rate, which is the full cost of operating the vehicle —
fuel, maintenance, tires, depreciation, and a share of insurance. It is the honest number
for judging whether the business is profitable.

**Out-of-pocket fuel alone is much smaller:**

```
2,900 miles ÷ 18 mpg = 161 gallons × $3.30/gal ≈ $532 per year
```

So the cash he actually spends at the pump is about **$532**, and the other **~$1,614** is
wear and depreciation he'll pay for later in repairs or a truck payment. Both numbers are
true. Use $2,146 to judge the business; expect $532 to leave the checking account.

### 4.2 Self-employment tax

```
Net                            $28,436
× 92.35% (SE taxable base)   = $26,261
× 15.3%                      =  $4,018

$28,436 − $4,018 = $24,418  after self-employment tax
```

### 4.3 What that means per hour

```
$24,418 ÷ 561 hours = $43.53 per hour, after self-employment tax
```

Cincinnati handyman labor **bills** at $40–80/hour. That is a billing rate, not take-home, so
the comparison flatters nobody: $43.53 is what he keeps per hour after the business pays its
own bills and his SE tax, and a handyman billing $60 keeps considerably less than $60. The
honest reading is that this business pays a solid trade wage — while the work is recurring,
scheduled, and predictable, with a signed agreement and a card on file, instead of chased one
job at a time.

### 4.4 Income tax is not modeled

Federal and Ohio income tax depend entirely on his household return — filing status, other
income, deductions, and the qualified business income deduction. **Do not model it here and
do not guess at it.** He should take these numbers to whoever does his taxes before the
first invoice, not after the first year.

---

## 5. Scenario: 8 clients — what the cap costs

**This is not a proposal.** `CANON.md` caps the book at 6. This scenario exists so the price
of that cap is visible instead of assumed.

**Mix assumption for clients 7 and 8:** one outdoor-kitchen-only property ($269) and one
pool-only property ($289) — the two middle configurations. That is deliberately neutral. He
already took the best properties on his list for slots 1–6, so 7 and 8 should not be assumed
to be better; and assuming both were base-tier would rig the comparison in favour of the cap.

```
Book at 6 (§1.1)   $1,714 + $269 + $289 = $2,272/month   (avg $284.00)
$2,272 × 12                             = $27,264/year
```

### 5.1 Base variant — project flow holds up

```
MEMBERSHIP     $2,272 × 12                           =  $27,264
MEMBER PROJ.   8 × 2.5 × $275   ( = 20 projects )    =   $5,500
NON-MEMBER     0.6 jobs/wk × 40 wks = 24 × $250      =   $6,000
                                                        -------
GROSS                                                    $38,764

ROUTE HOURS    16 visits ÷ 4 days = 4 stops/day
               (4 × 1.5) + 0.5 = 6.5 hrs/route day
               4 × 6.5 = 26.0/month × 12             =      312 hrs
PROJECT HOURS  (20 + 24 = 44 jobs) × 3               =      132 hrs
ADMIN          3.5 hrs/wk × 52                       =      182 hrs
                                                            ----
TOTAL HOURS                                                 626 hrs

EXPENSES       vehicle  route 48 × 30 mi      = 1,440 mi
                        projects 44 × 20 mi   =   880 mi
                        supply/est. 45 × 15   =   675 mi
                        2,995 mi × $0.74          = $2,216
               supplies $85 × 12                  = $1,020
               insurance                          =   $660
               software                           =   $348
               processing  mem  $819.46
                           proj $165.50
                           n-m   $90.60           = $1,076
               phone                              =   $420
               equipment reserve                  =   $700
               web/domain                         =    $60
               accounting                         =   $350
                                                    ------
                                                    $6,850

NET            $38,764 − $6,850                      =  $31,914
               $31,914 ÷ 626 hrs                     =   $50.98 /hr
```

> **Why non-member work drops to 0.6/week.** Two effects. (a) A 6.5-hour route day consumes
> Monday and Friday of weeks 1 and 3 entirely, so a weather reschedule pushes into
> Tuesday–Thursday and eats a project slot. (b) With 16 stops a month there is less slack to
> run an estimate within 48 hours, and estimate turnaround is what actually closes project
> work. **Assumption**, and the whole scenario turns on it — see §5.3.

### 5.2 The comparison, honestly

| | 6 clients | 8 clients | Difference |
|---|---|---|---|
| Membership | $20,568 | $27,264 | +$6,696 |
| Gross | $34,693 | $38,764 | +$4,071 |
| Expenses | $6,257 | $6,850 | +$593 |
| **Net** | **$28,436** | **$31,914** | **+$3,478 (+12.2%)** |
| Hours | 561 | 626 | +65 (+11.6%) |
| Net per hour | $50.69 | $50.98 | +$0.29 |
| **Marginal rate on the extra hours** | — | — | **$3,478 ÷ 65 = $53.51/hr** |

**Eight clients earn more money.** Not a little — about **$3,500 a year**, at a marginal rate
slightly better than his blended rate. Anyone claiming the cap is free is not reading the
arithmetic.

*(This figure was **$3,712** before the 2026-08-05 pricing resolution. It moved to $3,478
because the six-client book now carries two $269 properties instead of a flat $289 average,
while clients 7 and 8 are assumed at the two middle prices. The conclusion did not move.)*

### 5.3 The sensitivity that decides it

The 8-client case rests entirely on non-member project flow holding at 0.6 jobs/week. If a
fuller route pushes estimates back and it falls to **0.4/week (16 jobs, $4,000)**:

```
GROSS        $27,264 + $5,500 + $4,000            =  $36,764
HOURS        312 route + (36 jobs × 3 = 108) + 182 =      602
EXPENSES     vehicle 1,440 + 720 + 675 = 2,835 mi × $0.74 = $2,098
             supplies $1,020 · insurance $660 · software $348
             processing $1,045 · phone $420 · equipment $700
             web $60 · accounting $350                      $6,701
NET          $36,764 − $6,701                      =  $30,063
             $30,063 ÷ 602                         =   $49.94 /hr

vs. 6 clients:  +$1,627 net for +41 hours
                $1,627 ÷ 41 = $39.68 per marginal hour
```

**$39.68 is well below his own blended rate of $50.69** — and below the $45/hour floor in
`operating-model.md` §6.5. Under this variant, the seventh and eighth clients are earning him
less per hour than the six he already has, and he cannot un-sell them.

### 5.4 So the cap is a risk decision, not a revenue one

The case for stopping at six is not that six earns more. It's that:

1. **The upside is $3,500 and the downside is a rate cut.** Whether client 7 and 8 are worth
   having depends on an assumption he cannot verify until after he has already signed them.
2. **Every hour of float is gone.** At six clients a rained-out Monday moves to week 2. At
   eight it moves to Tuesday, which was the profitable day.
3. **There is no vacation absorption.** Sixteen stops a month with no slack means a week off
   requires telling clients he isn't coming.
4. **Membership standard rule 1 stops being keepable.** *Never rush a property because
   another client is waiting* is a promise the six-client schedule can keep and the
   eight-client schedule cannot.
5. **The waitlist stops being real.** Scarcity is part of the product (`CANON.md` §3). It
   only works if he actually says no.

**He is buying schedule integrity for about $3,500 a year.** That is the trade, stated
plainly, and it is his to make. If he ever decides differently, this is where the number is.

---

## 6. Cash flow shape — why the flat price matters

Membership revenue is flat. Project revenue is not: assume **70% of project work lands
April–October** (A6).

```
PROJECT REVENUE      $4,125 + $10,000 = $14,125

Green Season (7 mo)   $14,125 × 70% = $9,887.50  ÷ 7 = $1,412.50/month
Dormant Season (5 mo) $14,125 × 30% = $4,237.50  ÷ 5 =   $847.50/month
```

| | Membership | Projects | **Monthly total** |
|---|---|---|---|
| Green Season month (Apr–Oct) | $1,714 | $1,412.50 | **$3,126.50** |
| Dormant Season month (Nov–Mar) | $1,714 | $847.50 | **$2,561.50** |

**Check:** ($3,126.50 × 7) + ($2,561.50 × 5) = $21,885.50 + $12,807.50 = **$34,693** ✓

The swing between a good month and a slow month is **$565**. Without the flat-priced
membership underneath it, that swing would be the difference between a working February and
a February spent worrying — project work in January on the west side of Cincinnati is close
to zero some years.

**This is the arithmetic behind never offering a winter discount** (`pricing.md` §3). The
$1,714 floor is the entire reason the Dormant Season is survivable. Cut it by a third and
February goes from a slow month to a bad one, and a member who cancels in February takes the
whole Green Season with them.

---

## 7. Downside cases

### 7.1 Zero project work — the floor

What if the project engine simply doesn't fire in year one? Six members, membership only:

```
GROSS      $1,714 × 12                               =  $20,568
HOURS      240 route + 104 admin (2 hrs/wk × 52)     =      344
EXPENSES   vehicle  route 1,200 mi + supply 300 mi
                    = 1,500 mi × $0.74      = $1,110
           supplies $780 · insurance $660
           software $348 · processing $618
           phone $420 · equipment $600
           web $60 · accounting $350                    $4,946
NET        $20,568 − $4,946                          =  $15,622
           $15,622 ÷ 344 hrs                         =   $45.41 /hr
```

**Even with no project revenue at all, the membership book alone pays $45.41/hour net** — and
it clears the $45/hour floor in `operating-model.md` §6.5 by forty-one cents. That is the real
floor under this business. The model does not require the project assumptions to be right; it
requires them to be roughly right in order to be *good*.

Two things worth saying about how thin that margin is:

- It clears the floor **on the modeled mix, and only just.** On the kitchen-heavy mix in §1.1
  ($1,654/month, $19,848/year) the same case nets **$19,848 − $4,925 = $14,923, or $43.38 an
  hour** — under the floor. The zero-project case is a genuine floor, not a comfortable one.
  *(Expenses there differ only in card processing: $19,848 × 2.9% + 72 × $0.30 = $597.)*
- **The fourth configuration is what puts it over the line.** Under the old rule the two
  outdoor-kitchen-only properties would be written at $229, making the book $1,634/month =
  $19,608/year. The same zero-project case then nets $19,608 − $4,918 = **$14,690, or $42.70
  an hour** — below the floor. So the 2026-08-05 decision is worth **$2.71 an hour in the
  worst case**, which is the case where an hourly floor actually gets tested.

### 7.2 Losing one client

Under attribute pricing, members are no longer interchangeable — it matters *which* one
cancels.

| The member who leaves | Annual membership lost | Card fees saved | **Net cost** | % of the year's net |
|---|---|---|---|---|
| $229 (neither) | $2,748 | $83 | **$2,665** | 9.4% |
| $269 (kitchen) | $3,228 | $97 | **$3,131** | 11.0% |
| $289 (pool) | $3,468 | $104 | **$3,364** | 11.8% |
| $329 (both) | $3,948 | $118 | **$3,830** | 13.5% |

```
Example, the $329 member:  $329 × 12 = $3,948 of membership revenue gone
                           card fees saved: $3,948 × 2.9% + (12 × $0.30) = $118
                           net cost:        $3,948 − $118 = $3,830
                           $3,830 ÷ $28,436 net = 13.5%
```

Route hours barely move — 12 visits become 10, and a route day drops a stop — so essentially
the entire loss falls to the bottom line. **One cancellation costs 9–14% of net, and the $329
member is worth 1.44× the $229 member** ($3,948 ÷ $2,748). That ratio is the argument for
selecting on attributes rather than filling slots: the best member in the book is worth
almost half again as much as the weakest one, for very nearly the same route time.

This is also why `operating-model.md` §6.3 measures retention on April 1, and why replacing a
member from the waitlist should take weeks, not months.

### 7.3 A client 15 minutes off route

From `operating-model.md` §4: 30 extra minutes of drive per visit is 12 unpaid drive hours a
year.

```
12 hrs × $50.69/hr net (§3.5)          =  $608 of margin destroyed

$608 ÷ ($289 × 12 = $3,468)   =  17.5% of a pool client's gross revenue
$608 ÷ ($229 × 12 = $2,748)   =  22.1% of a base client's gross revenue
```

**The cheaper the property, the worse an off-route client is.** A base-tier $229 house 15
minutes off the cluster gives up better than a fifth of its own revenue before he unloads a
tool. That is the arithmetic behind the disqualifier in `ideal-client.md` §5.1: no price fixes
distance, and the lowest price fixes it least.

---

## 8. Comparison to the source draft

The draft's model: 4 clients at $229, plus two $249 projects each per year.

```
DRAFT
  4 × $229 × 12   =  $10,992   membership
  8 × $249        =   $1,992   projects
                     -------
                     $12,984   per year
```

### This model, target case: **$34,693** gross · **$28,436** net

### The bridge — where $21,709 of additional revenue comes from

```
  $12,984   Draft baseline: 4 clients @ $229, 8 projects @ $249
+  $5,496   Two more clients at the base price (2 × $229 × 12)      D-2
= $18,480
+  $4,080   Attribute add-ons on the six-client book:               D-3
            4 outdoor kitchens × $40 + 3 pools × $60 = $340/mo × 12
= $22,560
+    $996   Member projects scaled 4 → 6 clients at draft rate
            (2 clients × 2 projects × $249)
= $23,556
+  $1,137   Member projects: 2 @ $249 → 2.5 @ $275                  D-4
            ($4,125 − $2,988)
= $24,693
+ $10,000   Non-member Tue–Thu project work — never counted at all  D-6
= $34,693   ✓
```

**Check on the add-on line:** six clients at the bare base would be 6 × $229 × 12 = $16,488.
The actual membership line is $20,568. $20,568 − $16,488 = **$4,080** ✓

**Check on the bridge:** $34,693 − $12,984 = **$21,709**, a 2.67× increase.

### Where the increase actually comes from

| Source | Amount | Share |
|---|---|---|
| **Non-member project work the draft never counted** | $10,000 | **46.1%** |
| Two more clients | $5,496 | 25.3% |
| Attribute add-ons (pool + outdoor kitchen) | $4,080 | 18.8% |
| Member project rate uplift | $1,137 | 5.2% |
| Member project count scaling | $996 | 4.6% |
| | **$21,709** | **100%** |

**The single largest line — $10,000, 46% of the entire increase — is the Tuesday-through-
Thursday non-member project work.** The draft described this strategy correctly in §10
("You can still accept non-members. I'd use Tuesday–Thursday primarily for these jobs") and
then left it out of every financial table it produced. Its financial baseline counted only
$12,984, and by doing so it made the business look like a $13k side gig instead of a $35k
one.

The second thing worth noticing: **only 25% of the increase comes from having more
clients.** Three quarters of it comes from pricing the same properties correctly and
counting revenue the draft was already generating but not measuring. That is why the cap
can stay at six.

**Of the $4,080 attribute line, $960 is the fourth configuration** — the two
outdoor-kitchen-only properties that the pre-2026-08-05 rule would have written at $229. It
is a small share of the total and it is the easiest $960 in the whole document to collect: it
requires no extra client, no extra visit, and no extra minute of work.

### What the draft got right, and kept

The draft's actual strategic instincts were sound and survive intact:

- Cap the book on purpose and treat the open capacity as part of the product
- Consolidate visits into weeks 1 and 3 rather than spreading them across every week
- Protect Tuesday–Thursday for project work
- Select clients for route compactness
- The exclusions list — the single best section in the document
- Track membership, project, and material revenue separately
- Measure the effective hourly rate, because "that last number matters"

The draft's error was one of accounting, not of strategy: it invented the right business and
then reported it as though the recurring revenue *was* the business.

---

## 9. Summary

| | 4 clients (launch) | **6 clients (target)** | 8 clients (over cap) |
|---|---|---|---|
| Assumed mix | 2×$269, 1×$289, 1×$329 | **1×$229, 2×$269, 1×$289, 2×$329** | +1×$269, +1×$289 |
| Book per month | $1,156 | **$1,714** | $2,272 |
| Blended average | $289.00 | **$285.67** | $284.00 |
| Membership revenue | $13,872 | **$20,568** | $27,264 |
| Member projects | $2,750 | **$4,125** | $5,500 |
| Non-member projects | $7,500 | **$10,000** | $6,000 |
| **Gross revenue** | **$24,122** | **$34,693** | **$38,764** |
| Expenses | $5,286 | $6,257 | $6,850 |
| **Net** | **$18,836** | **$28,436** | **$31,914** |
| Route hrs/month | 14.0 | **20.0** | 26.0 |
| Total hrs/year | 418 | **561** | 626 |
| Hours/week | 8.0 | **10.8** | 12.0 |
| Days/week (8-hr) | 1.0 | **1.35** | 1.5 |
| **Net per hour** | **$45.06** | **$50.69** | **$50.98** |
| Revenue per route day | $289.00 | **$428.50** | $568.00 |
| After SE tax | $16,175 | **$24,418** | $27,405 |

*(After-SE-tax line: net × 0.9235 × 15.3%, subtracted from net.
4-client: $18,836 × 0.9235 × 0.153 = $2,661 → $16,175.
6-client: $28,436 × 0.9235 × 0.153 = $4,018 → $24,418.
8-client: $31,914 × 0.9235 × 0.153 = $4,509 → $27,405.
Revenue per route day: book per month ÷ 4 scheduled route days.)*

**The target case: about $34,700 gross and $28,400 net, on roughly 1.35 days a week, from six
clients.** That is what `README.md` means by "roughly $35k/year at 1.5–2 days per week."

---

## 10. How to re-run this page

Every figure above is a function of the assumptions in §1. If one changes, three things have
to move together or the page stops being checkable:

1. **The mix in §1.1** drives the monthly book, which drives §2.1/§3.1/§5.1 membership,
   §3.4 card processing, §6 cash flow, §7.1/§7.2 downside, and the §8 add-on line.
2. **Card processing is recomputed, not scaled** — it has a per-transaction component
   (2.9% of revenue *plus* $0.30 × the number of charges).
3. **The §8 bridge must still close on the §3.1 gross**, and the five shares must still sum
   to 100%.

The fastest check that the page is internally consistent: **the bridge in §8 must land
exactly on $34,693**, and **§6's seasonal split must reconcile to the same $34,693.** If both
close, nothing upstream drifted.

---

## Related files

- `pricing.md` — every price used above, including the four configurations
- `operating-model.md` — the cap, the schedule, and the metrics these numbers feed
- `ideal-client.md` — the attributes that determine which of the four prices a property lands on
- `decisions.md` — D-2 through D-6 explain each line of the §8 bridge; D-3 explains the
  fourth configuration and what the resolution is worth
