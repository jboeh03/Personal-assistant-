# Unit Economics

**Owner:** `wpc-strategist` · **Status:** the financial model, with the arithmetic shown

**Every number on this page is checkable.** Every input is either locked in `CANON.md`,
priced in `pricing.md`, or numbered below and explicitly labelled an assumption. Run
`verify-unit-economics.py` in this directory to check the arithmetic mechanically.

> **Rewritten 2026-08-05** against the owner's signed agreement
> (`_source/2026-08-05-owner-decisions.md`). The previous version modelled four
> attribute-based membership prices across a twelve-month year at a 1.5-hour-per-stop
> planning constant. **All three of those inputs are dead.** The membership is one flat
> price, the year is eight months long, and the visit is two hours with a heavier pool
> scope. Roughly 700 of the previous 792 lines were invalid. This page was rebuilt from the
> locked facts up, not patched. See `decisions.md` **D-18** through **D-26**.

---

## 1. What this page models, and what it does not

Two scenarios, modelled separately because they are genuinely different businesses:

| | Period | Why it is separate |
|---|---|---|
| **Scenario A — 2026 partial season** | mid-Aug 2026 → Oct 31 2026, plus the Nov–Feb gap | He is signing in August. Roughly three months of season remain, then four months of nothing. This is the year he actually has to survive. |
| **Scenario B — full 2027 season** | Mar 1 2027 → Feb 28 2028 | Eight service months plus the off-season that follows them. This is the steady state the business is designed around. |

Each scenario is run at **4, 6, and 8 clients.** Four is the launch target, six is the hard
cap, and eight exists only so the price of the cap is visible instead of assumed.

**Not modelled, deliberately:** the owner's labour as a cost (this is his income, not a
wage); income tax beyond self-employment tax (§9.3); vehicle purchase or lease (A19 already
carries depreciation); health insurance (a household decision); and the separate optional
winter offering in `03-marketing/winter-service.md`, which is **not** part of this
membership and must never be counted as though it were.

---

## 2. Step 1 — the operating assumption everything downstream sits on

The old `1.5 hours per property` planning constant is dead (`CANON.md` §3). It is replaced
by the owner's own structure: **two visits a month, up to two hours of on-site service per
visit, unused time does not roll over.** Before a single dollar can be modelled, two things
have to be settled: *how long a property actually takes*, and *how the visits are grouped
into days.*

### 2.1 Average on-site time versus the two-hour ceiling

**The two hours is a ceiling, not a target.** A property that finishes in ninety minutes is
finished; there is no rollover and no obligation to fill the time. So route days cannot be
sized on the ceiling alone or the model over-states his hours, and they cannot be sized on
the average alone or a day with three demanding properties runs off the end of the calendar.

The average is derived from **his own field checklist**, which budgets the two hours across
eight blocks (`_source/2026-08-05-owner-decisions.md` §3). Two of those eight blocks only
exist if the property has the corresponding feature:

| Block | Budget | Present on every property? |
|---|---|---|
| 1 · Arrival + property walkthrough | 10 min | yes |
| **2 · Pool care** | **30 min** | **only if there is a pool** |
| **3 · Outdoor kitchen + grill area** | **20 min** | **only if there is an outdoor kitchen** |
| 4 · Patio + furniture | 20 min | yes |
| 5 · Property cleanup | 15 min | yes |
| 6 · Trash + plants + misc. | 10 min | yes |
| 7 · Flexible priority block | 10 min | yes |
| 8 · Final walk + documentation | 5 min | yes |
| | **120 min** | |

So the checklist itself produces four property shapes:

```
Pool AND outdoor kitchen   120 min                    = 2.00 hrs   ← the ceiling
Pool, no outdoor kitchen   120 − 20 (block 3) = 100    = 1.67 hrs
Outdoor kitchen, no pool   120 − 30 (block 2) =  90    = 1.50 hrs
Neither                    120 − 50           =  70    = 1.17 hrs   ← not a target client
```

Every qualified member property has a pool, an outdoor kitchen, or both
(`ideal-client.md` §2), so the fourth shape is excluded from the book. On the assumed
six-client composition in **A6** — two of each of the first three shapes:

```
(2 × 120) + (2 × 100) + (2 × 90)  =  240 + 200 + 180  =  620 min per full round of six
620 ÷ 6                           =  103.33 min       =  1.72 hrs
```

**Planning allowance: 1.75 hours (1:45) of on-site time per property** — the derived 1.72
rounded up, so the calendar errs long rather than short. **This is assumption A7.**

> **This is not the banned metric, and the distinction matters.** `CANON.md` §3 bans
> minutes-per-visit as a *performance target* — no average visit length tracked as a KPI,
> no copy implying he aims to finish quickly. It explicitly asks `operating-model.md` to
> derive route hours from the client count and the two-hour cap, which is what this is.
> 1:45 is used exactly twice: to lay out a calendar, and to compute the hours on this page.
> It is never recorded, never reported, and never compared against what a visit actually
> took. **If you ever find yourself measuring a real visit against 1:45, you have converted
> a planning input into the banned metric. Stop.**

### 2.2 Drive time

From the route tests in `operating-model.md` §4 — every member within 15 minutes of another
member, and within 25 minutes of home base:

```
Home → first stop and last stop → home   0.50 hr per route day   (A8)
Between two consecutive stops            0.25 hr                 (A8, the 15-minute test as worst case)
```

### 2.3 Route-day structure — 3 stops per day, 4 route days a month

Six clients × two visits = **12 visits a month**, on Mondays and Fridays only. Two
structures fit:

| | Stops per route day | Route days per month | Hours worked per route day | Mon/Fri slots used of 8 |
|---|---|---|---|---|
| **Option A — chosen** | **3** | **4** (Mon + Fri, weeks 1 and 3) | (3 × 1.75) + 0.5 + (2 × 0.25) = **6.25** | **4** |
| Option B — rejected | 2 | 6 | (2 × 1.75) + 0.5 + (1 × 0.25) = **4.25** | 6 |

**Option A is chosen.** Five reasons, in the order they matter:

1. **It protects Tuesday–Thursday absolutely, which is where the income is.** Option A uses
   four of the eight Monday/Friday slots in a month and leaves four as weather valve. In
   Cincinnati between March and October he can lose *two* route days to rain in a month and
   still never touch the project block. Option B leaves two spare slots; a two-rain-out month
   pushes routine work into Tuesday, and `CANON.md` §3 says plainly that is where the money
   is.
2. **"Never rush a property" is a rule about the property, not the length of the day.** Under
   Option A each property still gets its full two-hour entitlement — the day blocks
   3 × 2.0 + 1.0 = **7.0 hours** at the ceiling and simply ends when it ends. He is never
   choosing between finishing property 2 and reaching property 4, because there is no
   property 4. Membership standard 1 is kept by the *cap*, not by the shortness of the day.
3. **Fewer dead-head round trips.** Six route days means six home-to-route-and-back trips
   instead of four: 2 × 0.5 = **1 extra unpaid hour a month, 8 hours a season.**
4. **Four real workdays a month beats six half-days.** Six 4.25-hour days fragment the
   calendar across three weeks and leave less contiguous project time, which is the opposite
   of what the model needs.
5. **Revenue per route day rewards it and can prove it.** At six clients Option A produces
   $418.50 a route day and Option B produces $279.00 (§9.1). Under a flat price that metric
   has become a **route-density** measure, and it points straight at Option A.

**The honest cost of Option A, and the rule that handles it.** If all three properties on a
route day genuinely need the full two hours, the day is seven hours with no slack in it.
That is why `ideal-client.md` §3 carries a hard scheduling rule: **never more than one
pool-and-outdoor-kitchen property per route day, and never more than two in the book.** On
the assumed composition each route day carries one of each shape:

```
120 + 100 + 90 = 310 min = 5.17 hrs on site
+ 0.5 dead-head + (2 × 0.25) between stops = 1.0 hr drive
                                             --------
                          designed route day = 6.17 hrs      (planning figure: 6.25)
```

### 2.4 Route hours, all three book sizes

Route days per month = **4**. Season = **8 months**. Route days per season = **32**.

| Clients | Visits/month | Stops per route day | Drive/day | **Hours per route day** | **Route hrs/month** | **Route hrs/season** | Ceiling day |
|---|---|---|---|---|---|---|---|
| 4 | 8 | 2 | 0.75 | (2 × 1.75) + 0.75 = **4.25** | **17.0** | **136** | 4.75 |
| **6 (cap)** | **12** | **3** | **1.00** | (3 × 1.75) + 1.00 = **6.25** | **25.0** | **200** | **7.00** |
| 8 (over cap) | 16 | 4 | 1.25 | (4 × 1.75) + 1.25 = **8.25** | 33.0 | 264 | **9.25** |

**The eight-client row is the cap argument in one number: a 9.25-hour worst-case route day.**
That is not a long day, it is an impossible one — it starts before the dew is off the patio
furniture and ends after dark for half the season.

---

## 3. Assumptions, all in one place

**Locked** rows are not assumptions — they come from `CANON.md` or the signed agreement and
may not be changed here. Everything else is an **assumption** and is the first thing to
argue with.

### 3.1 Locked inputs

| # | Input | Value | Source |
|---|---|---|---|
| L1 | Membership price | **$279/month, flat** | `CANON.md` §3 · agreement §1, §11 |
| L2 | Service season | **March 1 – October 31**, 8 months | `CANON.md` §3 · agreement §8 |
| L3 | Visits | **2/month, 16/season** | `CANON.md` §3 · agreement §1 |
| L4 | On-site ceiling | **2.0 hrs/visit, no rollover** | agreement §1 |
| L5 | Route days | **Mon + Fri, weeks 1 and 3 = 4/month** | `CANON.md` §3 |
| L6 | Capacity | launch **4**, hard cap **6** | `CANON.md` §3 |
| L7 | Project quoting rate | **$100/on-site hour**, $149 standalone-trip floor | `pricing.md` §7 |
| L8 | Materials | **cost + 25%**, itemised, never in labour revenue | `pricing.md` §6 |

### 3.2 Revenue assumptions

| # | Assumption | Value | Basis |
|---|---|---|---|
| **A1** | **2026 service starts mid-August** — one visit in August, two each in September and October | **5 visits per client, 3 billed months** | The agreement, card, insurance, and LLC all have to land first. **Assumption.** A September start is run as a variant in §4.4. |
| **A2** | **Partial-month pro-ration is by visit** | **$279 ÷ 2 = $139.50 per visit** | Cleanest possible rule and it needs no calendar arithmetic. Implemented in `pricing.md` §3. **Assumption** pending the owner's confirmation — see `decisions.md` R-7. |
| **A3** | Member projects per client, **full season** | **2.0** | 16 visits, all of them in-season with the owner outside using the space. 2.0 ÷ 16 = a **12.5%** attach rate. The old model assumed 2.5 across 24 visits (10.4%) — ten of which were winter visits with materially lower conversion. **Assumption.** Sensitivity in §7.4. |
| **A4** | Member projects per client, **2026 partial season** | **0.5** | Five visits into a brand-new relationship. He is learning the property, not selling it. **Assumption.** |
| **A5** | Average member project value | **$275** | Between the $249 grill deep clean and the mid-range anchors in `pricing.md` §5.3. **Assumption.** |
| **A6** | **Book composition** — two properties of each shape: pool + kitchen, pool only, kitchen only | 2 / 2 / 2 at six clients | Not a pricing input any more (every property pays $279). It drives **time**, and therefore route hours and selection. **The single biggest assumption on this page.** Derived in §2.1, used in §2.3, priced in §7.3. **Assumption.** |
| **A7** | Non-member jobs, **in season** (30 working weeks of the 35 in the season) | **6 clients: 30** (≈1/wk) · **4 clients: 22** (≈0.75/wk) · **8 clients: 18** (≈0.6/wk) | Tue–Thu is ~100 protected days across the season. The 4-client rate is lower because the referral engine has not spun up; the 8-client rate is lower because a fuller route delays estimates. **Assumption.** |
| **A8** | Non-member jobs, **off season** (Nov–Feb) | **4 jobs**, all book sizes | Grill deep cleans before the holidays, a gutter job, a storm callout. Deliberately small. Independent of book size because members are not being visited. **Assumption.** |
| **A9** | Non-member jobs, **2026 partial season** (11 weeks) | **8 jobs**, all book sizes | ≈0.75/wk. He is new in 2026 regardless of how many members he has signed. **Assumption.** |
| **A10** | Average non-member project value | **$250** | Anchored on the $249 grill deep clean, the most likely first job from a Tri-State Grill Cleaning referral. **Assumption.** |

### 3.3 Time assumptions

| # | Assumption | Value | Basis |
|---|---|---|---|
| **A11** | On-site planning allowance | **1.75 hrs (1:45) per property** | Derived in §2.1 from his checklist blocks and A6. **A planning input, never a target.** **Assumption.** |
| **A12** | Drive allowance | **0.5 hr round trip per route day + 0.25 hr between stops** | The 15- and 25-minute route tests, taken at their worst case. **Assumption.** |
| **A13** | Average project job, including travel | **3.0 hrs** | A $249 grill deep clean is ~2.5 hrs on site plus drive. **Assumption.** |
| **A14** | Admin, **in season** (35 weeks) | **3.0 hrs/wk at 6 clients** (2.5 at 4, 3.5 at 8) | Service reports, estimates, invoicing, scheduling, supply runs. **Assumption.** |
| **A15** | Admin, **off season** (17 weeks) | **1.0 hr/wk**, all book sizes | Bookkeeping, renewals, next-season planning, the odd quote. **Assumption.** |
| **A16** | Season length in weeks | **35 in season, 17 off season** | Mar 1 – Oct 31 = 245 days = 35 weeks exactly. Nov 1 – Feb 28 = 120 days ≈ 17 weeks. 35 + 17 = 52. **Arithmetic, not an assumption.** |
| **A17** | Working weeks available for project work, in season | **30 of 35** | Weather, holidays, and time off. **Assumption.** |

### 3.4 Cost assumptions

| # | Assumption | Value | Basis |
|---|---|---|---|
| **A18** | Vehicle cost | **$0.74/mile** | The 2026 IRS business standard mileage rate is **72.5¢ Jan–Jun and 76¢ Jul–Dec**, blending to 74.25¢; rounded down to $0.74 as a planning figure. This is the *full* cost of operation — fuel, wear, depreciation, insurance share — not a fuel bill. See §9.2. The 2027 rate is unpublished. **Assumption.** |
| **A19** | Route miles per route day | **25 at 6 clients** (20 at 4, 30 at 8) | Compact cluster route. **Assumption.** |
| **A20** | Project miles | **20 per job**; supply and standalone estimate trips **15 mi**, **40/yr at 6 clients** (30 at 4, 45 at 8) | **Assumption.** |
| **A21** | Consumable supplies | **$65/month at 6 clients, in-season months only** ($50 at 4, $85 at 8) | Surface cleaner, degreaser, microfibre, bags, pool net and brush wear, spot weed treatment. Excludes project materials, which are billed at cost + 25% (L8). **Assumption.** |
| **A22** | General liability insurance | **$55/month × 12** | 2026 market for lawn/landscaping general liability is **$45–85/month**; basic lawn care averages about **$46**. A solo operator with no crew and no tree work sits at the low end. **It is carried year-round** — the policy does not take the winter off. **Verify with two real Ohio quotes: `decisions.md` R-5.** |
| **A23** | Field service software | **$29/month × 12** | Jobber Core, one user, billed annually — which is why it also does not stop in November. **Assumption.** |
| **A24** | Card processing | **2.9% + $0.30** per transaction; **50%** of non-member work paid by card | Standard keyed/card-present rate. Membership is 100% card (`pricing.md` §4). **Assumption** on the 50%. |
| **A25** | Phone | **$35/month × 12** attributable | **Assumption.** |
| **A26** | Equipment reserve | **$600/season at 6 clients** ($700 at 8) | Blower, pressure washer, pool net, pole, brush, vac head and hose, hand tools. **Assumption.** |
| **A27** | **Startup equipment, one time** | **$1,200** | The kit has to exist before visit one, and the heavier pool scope adds a vacuum head, hose, and brush the old scope did not need. Charged to 2026 only. **Assumption.** |
| **A28** | Web, domain, listings | **$60/year** | Static site on a free host plus domain renewal. `02-website/` has no build cost. |
| **A29** | Accounting / tax prep | **$350/year** | Single-member LLC, Schedule C. **Assumption.** |
| **A30** | LLC formation | **$99, one time, 2026 only** | Ohio Articles of Organization. No annual report fee, no franchise tax. |

---

## 4. Scenario A — the 2026 partial season

**This is the year he actually has to get through.** Three months of revenue, a full set of
startup costs, and then four months with no membership income at all.

### 4.1 What a client is worth in 2026

Per A1 and A2, a client who starts mid-August gets **five visits** before the season closes:

```
August    1 visit  × $139.50   =  $139.50    (half month, pro-rated by visit)
September 2 visits             =  $279.00
October   2 visits             =  $279.00
                                  -------
                                  $697.50 per client, for 5 visits
Check:    5 visits × $139.50   =  $697.50  ✓
```

**Route days in 2026:** one round in August (the week-3 Monday and Friday) plus two rounds
in each of September and October = **2 + 4 + 4 = 10 route days.**

Check at six clients: 10 route days × 3 stops = 30 visits = 6 clients × 5 visits ✓

### 4.2 The three book sizes, Aug 15 – Oct 31 2026

```
                                    4 CLIENTS      6 CLIENTS      8 CLIENTS
MEMBERSHIP        n × $697.50         $2,790         $4,185         $5,580
MEMBER PROJECTS   n × 0.5 × $275        $550           $825         $1,100      (A4, A5)
NON-MEMBER        8 × $250            $2,000         $2,000         $2,000      (A9, A10)
                                     -------        -------        -------
GROSS                                 $5,340         $7,010         $8,680

ROUTE HOURS       10 days ×             4.25           6.25           8.25
                                        42.5           62.5           82.5
PROJECT HOURS     jobs × 3.0          10 × 3         11 × 3         12 × 3
                                        30.0           33.0           36.0
ADMIN             A14 × 11 wks         2.5×11         3.0×11         3.5×11
                                        27.5           33.0           38.5
                                       -----          -----          -----
TOTAL HOURS                            100.0          128.5          157.0
```

**Expenses** — three in-season months (Aug, Sep, Oct) of the monthly lines, and the full
annual lines because they are billed once:

```
                                    4 CLIENTS      6 CLIENTS      8 CLIENTS
Vehicle  route  10 × A19             200 mi         250 mi         300 mi
         proj.  jobs × 20            200 mi         220 mi         240 mi
         supply trips × 15           150 mi         180 mi         210 mi
                                     ------         ------         ------
                                     550 mi         650 mi         750 mi
         × $0.74                       $407           $481           $555
Supplies A21 × 3 months                $150           $195           $255
Insurance $55 × 3                      $165           $165           $165
Software  $29 × 3                       $87            $87            $87
Processing (derived below)             $131           $182           $232
Phone     $35 × 3                      $105           $105           $105
Web/domain                              $60            $60            $60
Accounting                             $350           $350           $350
                                     -------        -------        -------
OPERATING EXPENSES                    $1,455         $1,625         $1,809
```

Card processing, six-client column, derived in full (A24). Membership is three charges per
client — August, September, October:

```
membership     $4,185 × 2.9%  = $121.365  +  (6 × 3 = 18 txns × $0.30 = $5.40)  = $126.765
member proj.     $825 × 2.9%  =  $23.925  +  (3 txns × $0.30 = $0.90)           =  $24.825
non-member  ($2,000 × 50%) × 2.9% = $29.00 + (8 × 50% = 4 txns × $0.30 = $1.20) =  $30.200
                                                                                  --------
                                                                                  $181.79 → $182
```

**Result:**

```
                                    4 CLIENTS      6 CLIENTS      8 CLIENTS
Gross                                 $5,340         $7,010         $8,680
Operating expenses                  − $1,455       − $1,625       − $1,809
                                     -------        -------        -------
OPERATING NET                         $3,885         $5,385         $6,871
  ÷ hours                              $38.85         $41.91         $43.76  /hr

One-time startup  LLC $99 + equipment $1,200      = $1,299   (A27, A30)
                                     -------        -------        -------
NET AFTER STARTUP                     $2,586         $4,086         $5,572
  ÷ hours                              $25.86         $31.80         $35.49  /hr
```

> **The realistic 2026 number is none of these three.** He has no members today. Signing
> four qualified properties inside two weeks — walkthrough, agreement, card on file, and
> insurance in force before the first visit — would be an excellent result. **Two members is
> the honest expectation**, which is roughly $1,395 of membership revenue and does not cover
> the $1,299 of startup on its own. **2026 is a launch year, not an earnings year. Plan for
> it to be paid for out of project work, and treat every membership dollar as a bonus.**

### 4.3 The gap — November 2026 to February 2027

This is the part of the seasonal model that does not appear in any revenue table, and it is
the part that decides whether there is a 2027.

```
REVENUE     4 non-member jobs × $250                          =  $1,000   (A8)
            membership                                        =      $0

EXPENSES    insurance   $55 × 4                = $220
            software    $29 × 4                = $116
            phone       $35 × 4                = $140
                                                 ----
            fixed costs that do not stop       = $476
            vehicle  (4 jobs × 20) + (4 trips × 15) = 140 mi × $0.74 = $104
            processing ($1,000 × 50%) × 2.9% + (2 × $0.30)           =  $15
                                                                       ----
                                                                       $595

NET over four months                          $1,000 − $595   =    $405
HOURS  (4 jobs × 3) + (1.0 hr/wk × 17 wks)    = 12 + 17       =     29
$405 ÷ 29                                                     =  $13.97 /hr
```

**$119 a month of fixed cost keeps running whether or not he works.** That is not the
problem. The problem is the second line of the revenue block: **four months of zero contact
with every member he just signed.** See §9.4 and `decisions.md` **D-18(b)**.

### 4.4 Variant — a September 1 start

If A1 is optimistic and the first visit is September rather than mid-August, each client
bills **two full months = $558** instead of $697.50, and there are **8 route days** instead
of 10.

```
Membership at 6 clients   6 × $558   =  $3,348     versus $4,185
Difference                              −$837
Route days                    8         versus 10
Route hours                 8 × 6.25 = 50.0        versus 62.5
```

Everything else moves with it. The shape of the year does not change; the launch just gets
$837 thinner and the winter gap gets three weeks longer.

---

## 5. Scenario B — a full 2027 season, six clients (the target case)

Eight service months, sixteen visits per client, plus the Nov 2027 – Feb 2028 off-season so
the figure is a comparable full trading year.

### 5.1 Revenue

```
MEMBERSHIP                             (L1, L2, L6)
  $279 × 8 months × 6 clients    =   $13,392 per year
  ( = $1,674 per month, in season )

MEMBER PROJECTS                        (A3, A5)
  6 clients × 2.0 × $275         =    $3,300     ( = 12 projects )

NON-MEMBER, IN SEASON                  (A7, A10)
  30 jobs × $250                 =    $7,500

NON-MEMBER, OFF SEASON                 (A8, A10)
  4 jobs × $250                  =    $1,000
                                      -------
GROSS REVENUE                          $25,192 per year
```

**Check:** $13,392 + $3,300 + $7,500 + $1,000 = **$25,192** ✓

```
Membership share   $13,392 ÷ $25,192  =  53.2%
Project share      $11,800 ÷ $25,192  =  46.8%
```

Under the superseded year-round model project work was **40.7%** of gross. Under the
seasonal model it is **46.8%.** `CANON.md` §2 is right that the eight-month membership year
makes project work carry more — and §7.1 below shows exactly how much more.

### 5.2 Hours

```
ROUTE       32 route days × 6.25 hrs                    =  200.0
PROJECTS    (12 + 30 + 4) = 46 jobs × 3.0 hrs           =  138.0
ADMIN       in season  3.0 hrs/wk × 35 wks  = 105.0
            off season 1.0 hr/wk  × 17 wks  =  17.0     =  122.0
                                                           -----
TOTAL                                                      460.0 hours per year
```

Averaging 460 hours over 52 weeks is misleading, because the work is not spread evenly.
Split it:

```
IN SEASON   200 route + (12 + 30 = 42 jobs × 3 = 126) + 105 admin  =  431 hrs over 35 wks
            431 ÷ 35 = 12.3 hrs/week  =  1.54 eight-hour days/week
OFF SEASON  (4 jobs × 3 = 12) + 17 admin                           =   29 hrs over 17 wks
            29 ÷ 17 = 1.7 hrs/week
Check: 431 + 29 = 460 ✓
```

**1.54 working days a week in season** lands inside `CANON.md`'s "roughly 1.5–2 working days
per week," slightly under. That is the right direction to be wrong in.

### 5.3 Expenses

```
Vehicle    route     32 days × 25 mi      =    800 mi
           projects  46 jobs × 20 mi      =    920 mi
           supply/estimate 40 × 15 mi     =    600 mi
                                              ------
                                             2,320 mi × $0.74      = $1,717
Supplies   $65/month × 8 in-season months                          =   $520
Insurance  $55/month × 12                                          =   $660
Software   $29/month × 12                                          =   $348
Processing membership $13,392 × 2.9% + (48 × $0.30) = $402.77
           mem. proj.  $3,300 × 2.9% + (12 × $0.30) =  $99.30
           non-member ($8,500 × 50%) × 2.9%
                              + (34 × 50% × $0.30)  = $128.35      =   $630
Phone      $35/month × 12                                          =   $420
Equipment  reserve                                                 =   $600
Web/domain                                                         =    $60
Accounting                                                         =   $350
                                                                     ------
TOTAL EXPENSES                                                       $5,305
```

Membership transactions: 6 clients × 8 monthly charges = **48**.
Expenses are **$5,305 ÷ $25,192 = 21.1%** of gross. The largest single line is the truck.

### 5.4 Result

```
Gross revenue         $25,192
Expenses             − $5,305
                     ---------
NET                   $19,887   per year

$19,887 ÷ 460 hours = $43.23 per hour, net
$25,192 ÷ 460 hours = $54.77 per hour, gross
```

**Revenue per route day:** `$13,392 ÷ 32 route days = $418.50` — clears the $400 target in
`operating-model.md` §7.1. Equivalently `$1,674 ÷ 4 = $418.50`.

> **$43.23 an hour is below the $45 floor the superseded model used**, and that is not a
> rounding problem — it is the seasonal model telling the truth. The floor has been reset to
> **$40/hour** in `operating-model.md` §7.5, with the reasoning recorded in `decisions.md`
> **D-26**. The target case now clears its floor by $3.23 instead of $5.69. That is thinner,
> and it should be.

---

## 6. Scenario B at 4 and 8 clients

### 6.1 Four clients — the launch case

```
MEMBERSHIP        $279 × 8 × 4                    =   $8,928
MEMBER PROJECTS   4 × 2.0 × $275  ( = 8 projects) =   $2,200
NON-MEMBER        (22 in season + 4 off) = 26 × $250 = $6,500
                                                     -------
GROSS                                                 $17,628

ROUTE      32 days × 4.25 hrs                     =    136.0 hrs
PROJECTS   (8 + 26) = 34 jobs × 3.0               =    102.0 hrs
ADMIN      (2.5 × 35) + (1.0 × 17) = 87.5 + 17    =    104.5 hrs
                                                       -----
TOTAL                                                  342.5 hrs

EXPENSES   vehicle  route 32 × 20      =   640 mi
                    proj. 34 × 20      =   680 mi
                    supply 30 × 15     =   450 mi
                    1,770 mi × $0.74                =  $1,310
           supplies $50 × 8                         =    $400
           insurance $660 · software $348 · phone $420
           processing  mem  $8,928 × 2.9% + (32 × $0.30) = $268.51
                       proj $2,200 × 2.9% + ( 8 × $0.30) =  $66.20
                       n-m ($6,500 × 50%) × 2.9%
                                  + (13 × $0.30)         =  $98.15   =  $433
           equipment $600 · web $60 · accounting $350
                                                          -------
                                                           $4,581

NET        $17,628 − $4,581                          =   $13,047
           $13,047 ÷ 342.5 hrs                       =    $38.09 /hr net
           $17,628 ÷ 342.5 hrs                       =    $51.47 /hr gross
```

**Revenue per route day at four clients: `$1,116 ÷ 4 = $279.00`** — memorably, exactly the
membership price, because two stops a day at two rounds a month works out that way. It is
well under the $400 target and **that is expected and is not a problem to solve.** Two stops
a day cannot clear $400 at a flat $279. **Do not chase the target by taking an off-route
fifth client.**

**$38.09/hr is below the $40 floor.** The launch case does not clear it. That is worth
saying out loud: at four clients this is a business that pays for itself and buys a route,
not one that pays a trade wage. The floor starts working at six.

### 6.2 Eight clients — what the cap costs

**This is not a proposal.** `CANON.md` caps the book at 6.

```
MEMBERSHIP        $279 × 8 × 8                     =  $17,856
MEMBER PROJECTS   8 × 2.0 × $275 ( = 16 projects)  =   $4,400
NON-MEMBER        (18 in season + 4 off) = 22 × $250 =  $5,500
                                                      -------
GROSS                                                  $27,756

ROUTE      32 days × 8.25 hrs                      =    264.0 hrs
PROJECTS   (16 + 22) = 38 jobs × 3.0               =    114.0 hrs
ADMIN      (3.5 × 35) + (1.0 × 17) = 122.5 + 17    =    139.5 hrs
                                                        -----
TOTAL                                                   517.5 hrs

EXPENSES   vehicle  route 32 × 30      =   960 mi
                    proj. 38 × 20      =   760 mi
                    supply 45 × 15     =   675 mi
                    2,395 mi × $0.74                 =  $1,772
           supplies $85 × 8                          =    $680
           insurance $660 · software $348 · phone $420
           processing  mem  $17,856 × 2.9% + (64 × $0.30) = $537.02
                       proj  $4,400 × 2.9% + (16 × $0.30) = $132.40
                       n-m  ($5,500 × 50%) × 2.9%
                                    + (11 × $0.30)        =  $83.05  =   $752
           equipment $700 · web $60 · accounting $350
                                                           -------
                                                            $5,742

NET        $27,756 − $5,742                          =   $22,014
           $22,014 ÷ 517.5 hrs                       =    $42.54 /hr
```

### 6.3 Six versus eight, honestly

| | 6 clients | 8 clients | Difference |
|---|---|---|---|
| Membership | $13,392 | $17,856 | +$4,464 |
| Gross | $25,192 | $27,756 | +$2,564 |
| Expenses | $5,305 | $5,742 | +$437 |
| **Net** | **$19,887** | **$22,014** | **+$2,127 (+10.7%)** |
| Hours | 460 | 517.5 | +57.5 (+12.5%) |
| Net per hour | **$43.23** | **$42.54** | **−$0.69** |
| Worst-case route day | 7.00 hrs | **9.25 hrs** | +2.25 |
| **Marginal rate on the extra hours** | — | — | **$2,127 ÷ 57.5 = $36.99/hr** |

**Under the seasonal flat-price model the cap argument got much stronger, and it no longer
needs a sensitivity to make it.** Eight clients earn $2,127 more, but:

- the marginal hours pay **$36.99** — *below* his blended $43.23 and **below the $40 floor**,
  in the base case, before any assumption is stressed;
- net per hour goes **down**, not up;
- the worst-case route day is **9.25 hours**, which cannot be run without either rushing a
  property or breaking the Monday/Friday-only rule.

Under the superseded year-round model the eighth client paid a *better* marginal rate than
the blended one and the cap cost about $3,500 a year. It now costs **$2,127 a year and buys
a schedule that is physically possible.** `decisions.md` **R-2** is updated accordingly.

---

## 7. Downside and sensitivity

### 7.1 Zero project work — the floor, and it is much lower than it was

Six members, membership only, no project revenue at all:

```
GROSS      $279 × 8 × 6                                =  $13,392
HOURS      200 route + admin ((2.0 × 35) + (0.5 × 17) = 78.5)  =   278.5
EXPENSES   vehicle  route 800 mi + supply (16 × 15 = 240 mi)
                    = 1,040 mi × $0.74      =   $770
           supplies $520 · insurance $660 · software $348
           processing $403 · phone $420 · equipment $600
           web $60 · accounting $350                       $4,131
NET        $13,392 − $4,131                            =   $9,261
           $9,261 ÷ 278.5 hrs                          =    $33.25 /hr
```

**The superseded year-round model produced $45.41/hour in this same case. The seasonal model
produces $33.25.** That is the single most important number on this page, and it is not a
criticism of the decision — it is the decision's consequence, stated plainly:

> **The membership book can no longer stand on its own.** Under the old model, six members
> with zero projects still paid a trade wage. Under this one they do not. `CANON.md` §2 says
> *the membership is the lead engine, not the revenue*; that was a strategic claim before.
> It is now an arithmetic fact. **If the project engine does not fire, this is a $9,261
> business.**

### 7.2 Losing one member

Under a flat price every member is worth the same revenue:

```
Membership lost      $279 × 8                          = $2,232
Card fees saved      $2,232 × 2.9% + (8 × $0.30)       =    $67
                                                         ------
NET COST                                                 $2,165
$2,165 ÷ $19,887 net                                   =   10.9%
```

**One cancellation costs 10.9% of the year's net**, and route hours barely move — a route day
drops a stop, and essentially the whole loss falls to the bottom line.

**But the members are not interchangeable in time**, and that inverts the old retention
logic. See §7.3.

### 7.3 What the flat price actually buys, per hour, by property shape

This is the arithmetic that turns property attributes from a pricing input into a selection
criterion (`ideal-client.md` §2). Same $2,232 a season from every member:

| Property shape | On-site min/visit | On-site hrs/season (× 16) | **Revenue per on-site hour** |
|---|---|---|---|
| Outdoor kitchen, no pool | 90 | 24.00 | **$93.00** |
| Pool, no outdoor kitchen | 100 | 26.67 | **$83.70** |
| Pool **and** outdoor kitchen | 120 | 32.00 | **$69.75** |

```
$2,232 ÷ 24.00 = $93.00
$2,232 ÷ 26.67 = $83.70
$2,232 ÷ 32.00 = $69.75
Spread:  $93.00 ÷ $69.75 = 1.333  →  33.3%
```

For completeness, the shape that is deliberately excluded from the book: a property with
neither attribute runs 70 minutes, or 18.67 on-site hours a season, and therefore
**$2,232 ÷ 18.67 = $119.57 an on-site hour** — the best rate in the table and the worst
client in the business, because it generates almost no project work and its owner will not
value $279 a month. `ideal-client.md` §2.1 explains why the hourly column is not the answer.

**The same fee buys a third more of his on-site time on a maximal property than on a plain
one.** Under attribute pricing that gap was closed with money. Under a flat price it can
only be closed with **selection and scheduling** — which is why `ideal-client.md` §3 caps
the book at two pool-and-outdoor-kitchen properties and never puts two on the same route
day.

The counterweight, and it is real: the maximal property is also the one with the most
surface area to inspect and the most project work to find. **The rule is not "avoid pools."
It is "never let the book fill up with maximal properties."**

### 7.4 If the member project rate is optimistic

A3 assumes 2.0 member projects per client per season (12.5% attach). At **1.5** (9.4%):

```
MEMBER PROJECTS   6 × 1.5 × $275  ( = 9 projects)     =   $2,475
GROSS             $13,392 + $2,475 + $7,500 + $1,000  =  $24,367
HOURS             200 + ((9 + 34) = 43 × 3 = 129) + 122  =   451
EXPENSES          vehicle 800 + (43 × 20 = 860) + 600
                          = 2,260 mi × $0.74  = $1,672
                  supplies $520 · insurance $660 · software $348
                  processing $606 · phone $420 · equipment $600
                  web $60 · accounting $350               $5,236
NET               $24,367 − $5,236                    =  $19,131
                  $19,131 ÷ 451                       =   $42.42 /hr
```

**−$756 of net and −$0.81 an hour.** Still above the $40 floor. A3 is an assumption worth
arguing with, but it is not load-bearing. **A7 — the non-member job rate — is.**

### 7.5 A client fifteen minutes off route

Thirty extra minutes of drive per visit, sixteen visits a season:

```
30 min × 16 visits                       =  8 unpaid drive hours per season
8 hrs × $43.23/hr net (§5.4)             =  $346 of margin destroyed
$346 ÷ $2,232                            =  15.5% of that client's entire membership revenue
```

Under a flat price this is **15.5% for every client** — there is no longer a cheaper tier
where it hurts more. It is simply a sixth of the client's revenue, gone before he unloads a
tool. `ideal-client.md` §6.1 is the disqualifier this pays for.

---

## 8. Cash-flow shape — and why this is the risk the flat price no longer covers

Membership revenue is flat **within the season and zero outside it.** Project revenue moves
with the season too.

```
IN-SEASON MONTH (Mar–Oct, 8 months)
  membership                                          $1,674.00
  member projects      $3,300 ÷ 8                      $412.50
  non-member in season $7,500 ÷ 8                      $937.50
                                                     ----------
                                                     $3,024.00

OFF-SEASON MONTH (Nov–Feb, 4 months)
  membership                                              $0.00
  non-member off season $1,000 ÷ 4                      $250.00
                                                     ----------
                                                       $250.00
```

**Check:** ($3,024.00 × 8) + ($250.00 × 4) = $24,192 + $1,000 = **$25,192** ✓

| | Membership | Projects | **Monthly total** |
|---|---|---|---|
| In-season month (Mar–Oct) | $1,674.00 | $1,350.00 | **$3,024.00** |
| Off-season month (Nov–Feb) | $0.00 | $250.00 | **$250.00** |

**The swing between a good month and a slow month is $2,774.**

Under the superseded year-round model that swing was **$565**, and the flat membership floor
was the reason. **The seasonal model gives that floor up for four months a year — the swing
is 4.9× larger.** ($2,774 ÷ $565 = 4.91.)

Two consequences that belong in his hands, not in a footnote:

1. **Fixed costs do not take the winter off.** Insurance, software, and phone are $119 a
   month, $476 across the gap (§4.3). The off-season project line covers them and leaves
   $405. It is not a loss. It is also not an income.
2. **The winter has to be reserved for out of the season, not earned in it.**

   ```
   Winter fixed cost                      $476
   ÷ 8 in-season months                =   $59.50  →  set aside $60 a month
   ```

   **Sixty dollars a month during the season pre-pays every winter bill the business has.**
   $150 a month builds a real cushion — $1,200 across the season, enough to cover the winter
   *and* a February equipment failure. That is a bookkeeping instruction, and it is the whole
   of the cash-flow answer. The revenue gap is not the danger; forgetting to fund it is.

---

## 9. The honest comparison, and four numbers worth checking

### 9.1 The superseded year-round model versus his seasonal one

The previous version of this page modelled six clients across twelve months on four
attribute-based membership prices. **Those prices are dead** (`decisions.md` **D-19**, which
reverses D-3). The comparison below exists for one reason: he should know what the decision
cost, because he made it for reasons that were not financial and those reasons may well be
right.

| At six clients | Superseded year-round model **(dead)** | **His seasonal model** | Difference |
|---|---|---|---|
| Membership | $20,568 | **$13,392** | **−$7,176** |
| Member projects | $4,125 | $3,300 | −$825 |
| Non-member projects | $10,000 | $8,500 | −$1,500 |
| **Gross** | **$34,693** | **$25,192** | **−$9,501** |
| Expenses | $6,257 | $5,305 | −$952 |
| **Net** | **$28,436** | **$19,887** | **−$8,549** |
| Hours | 561 | 460 | −101 |
| **Net per hour** | **$50.69** | **$43.23** | **−$7.46** |
| Project share of gross | 40.7% | **46.8%** | +6.1 pts |
| Zero-project floor | $45.41/hr | **$33.25/hr** | −$12.16 |

**Checks:** $7,176 + $825 + $1,500 = **$9,501** ✓ · $9,501 − $952 = **$8,549** ✓

**Per client, the same thing stated the way he will feel it:**

```
Now         $279 × 8 months          =  $2,232 per client per year
Superseded  a pool-configuration property, 12 months
                                     =  $3,468 per client per year   (dead — D-19)
Difference                              −$1,236  ( −35.6% )
```

**Two ways to size the gap at six clients, and they differ for a reason:**

```
If all six had been pool-configuration:  6 × ($3,468 − $2,232)  = $7,416
On the mix the old model actually assumed (blended $285.67/mo):
                              $20,568 − $13,392                 = $7,176
```

The second is the right one, because the superseded book was a mix, not six identical
properties. **$7,176 is the membership gap at six clients.** ($7,176 ÷ $20,568 = **34.9%**.)

**What he gets for it, and it is not nothing:**

- **Four months with no route obligation.** 101 fewer hours a year, all of them in the worst
  weather, and — more to the point — no obligation to invent value for a January visit. That
  was the weakest joint in the old model and he removed it instead of defending it.
- **A product that explains itself in ten seconds.** One number, one season, two visits.
  `CANON.md` §6 is his own standard and the flat price meets it; four attribute-derived
  configurations did not.
- **A cap that does the work price used to do.** The two-hour ceiling is what makes one price
  survivable across a 90-minute property and a 120-minute one (§7.3). That is a genuinely
  good mechanism and the old model did not have it.

**What it does not fix, and what `decisions.md` D-18 is about:** the gap is not really a
revenue problem. It is a **retention** problem, and a **pool-scope positioning** problem.

### 9.2 The vehicle line is a full cost, not a fuel bill

A18 uses the IRS standard mileage rate, which covers fuel, maintenance, tyres, depreciation,
and a share of insurance. It is the honest number for judging whether the business is
profitable. Out-of-pocket fuel alone is far smaller:

```
2,320 miles ÷ 18 mpg = 128.9 gallons × $3.30/gal  ≈  $425 per year
$1,717 − $425 = $1,292 of wear and depreciation he pays for later
```

Use **$1,717** to judge the business. Expect **$425** to leave the checking account.

### 9.3 Self-employment tax

```
6 CLIENTS   Net $19,887 × 92.35% = $18,366 × 15.3% = $2,810
            $19,887 − $2,810 = $17,077  after SE tax
            $17,077 ÷ 460 hrs = $37.12 per hour

4 CLIENTS   $13,047 × 0.9235 × 0.153 = $1,843  →  $11,204
8 CLIENTS   $22,014 × 0.9235 × 0.153 = $3,110  →  $18,904
```

Cincinnati handyman labour **bills** at $40–80/hour. That is a billing rate, not take-home,
so the comparison flatters nobody: $37.12 is what he keeps per hour after the business pays
its own bills and his SE tax, and a handyman billing $60 keeps considerably less than $60.
The honest reading is that this pays a modest trade wage on about one and a half days a week
for eight months, with a signed agreement and a card on file instead of work chased one job
at a time.

**Federal and Ohio income tax are not modelled and must not be guessed at here.** They depend
entirely on his household return. He should take these numbers to whoever does his taxes
before the first invoice, not after the first season.

### 9.4 $279 ÷ 4 hours = $69.75, and why that framing is dangerous

```
$279 per month ÷ (2 visits × 2 hours) = $69.75 per hour of entitlement
```

That number is arithmetically correct and it is the wrong way to see the product. It is also
the first calculation a price-sensitive prospect will do, and it lands squarely inside the
$40–80/hour Cincinnati handyman band — which makes a *maintenance membership from someone
who knows the property* look like *four hours of general labour.*

**This is fixable in copy alone and costs nothing.** `CANON.md` §3 already requires it: lead
with what stays maintained, state the cap only where a boundary belongs, and never let a
customer-facing surface put the price and the hours in the same sentence. `decisions.md`
**D-18(d)** carries the full note.

---

## 10. Summary

### 10.1 Scenario A — Aug 15 to Oct 31, 2026

| | 4 clients | **6 clients** | 8 clients |
|---|---|---|---|
| Membership (3 billed months) | $2,790 | **$4,185** | $5,580 |
| Member projects | $550 | **$825** | $1,100 |
| Non-member projects | $2,000 | **$2,000** | $2,000 |
| **Gross** | **$5,340** | **$7,010** | **$8,680** |
| Operating expenses | $1,455 | $1,625 | $1,809 |
| **Operating net** | **$3,885** | **$5,385** | **$6,871** |
| One-time startup (LLC + kit) | $1,299 | $1,299 | $1,299 |
| **Net after startup** | **$2,586** | **$4,086** | **$5,572** |
| Route days | 10 | 10 | 10 |
| Total hours | 100.0 | 128.5 | 157.0 |
| Net/hr (operating) | $38.85 | **$41.91** | $43.76 |
| Net/hr (after startup) | $25.86 | **$31.80** | $35.49 |

**Plus the gap, Nov 2026 – Feb 2027, identical at every book size:** $1,000 gross, $595
expenses, **$405 net**, 29 hours.

**Combined Aug 2026 – Feb 2027 at six clients:** $8,010 gross · $2,220 expenses · $5,790
operating net · **$4,491 after startup**, across 157.5 hours = **$28.51/hr**.

### 10.2 Scenario B — a full season, Mar 2027 – Feb 2028

| | 4 clients (launch) | **6 clients (target)** | 8 clients (over cap) |
|---|---|---|---|
| Membership | $8,928 | **$13,392** | $17,856 |
| Member projects | $2,200 | **$3,300** | $4,400 |
| Non-member projects | $6,500 | **$8,500** | $5,500 |
| **Gross revenue** | **$17,628** | **$25,192** | **$27,756** |
| Expenses | $4,581 | **$5,305** | $5,742 |
| **Net** | **$13,047** | **$19,887** | **$22,014** |
| Route hrs/month, in season | 17.0 | **25.0** | 33.0 |
| Route hrs/season | 136 | **200** | 264 |
| Total hrs/year | 342.5 | **460** | 517.5 |
| In-season hrs/week | 9.0 | **12.3** | 14.0 |
| In-season days/week (8-hr) | 1.12 | **1.54** | 1.74 |
| **Net per hour** | **$38.09** | **$43.23** | **$42.54** |
| Revenue per route day | $279.00 | **$418.50** | $558.00 |
| Worst-case route day | 4.75 hrs | **7.00 hrs** | 9.25 hrs |
| After SE tax | $11,204 | **$17,077** | $18,904 |

*(In-season hours = route + in-season project hours + in-season admin, excluding the 29
off-season hours every column carries. 4-client: 136 + ((8 + 22) × 3 = 90) + 87.5 = 313.5,
÷ 35 = 9.0. 6-client: 200 + ((12 + 30) × 3 = 126) + 105 = 431, ÷ 35 = 12.3. 8-client:
264 + ((16 + 18) × 3 = 102) + 122.5 = 488.5, ÷ 35 = 14.0. Each reconciles: 313.5 + 29 =
342.5 ✓ · 431 + 29 = 460 ✓ · 488.5 + 29 = 517.5 ✓. After-SE line: net × 0.9235 × 15.3%,
subtracted from net. Revenue per route day: monthly membership ÷ 4 route days.)*

**The target case: about $25,200 gross and $19,900 net, on roughly a day and a half a week
for eight months, from six clients — with the entire winter off.**

Anything in this repository still claiming "roughly $35k/year" is describing the superseded
model and is wrong. `README.md` and any downstream document quoting that figure need
updating by their owners.

---

## 11. How to re-run this page

Every figure is a function of the assumptions in §3. Run `verify-unit-economics.py` after any
change — it checks every number above and exits non-zero on the first disagreement.

Four things have to move together or the page stops being checkable:

1. **A11 (1.75 hrs) drives everything in §2.4**, which drives route hours in every scenario,
   which drives total hours, which drives every per-hour figure.
2. **Card processing is recomputed, never scaled** — it has a per-transaction component
   (2.9% of revenue *plus* $0.30 × the number of charges). Membership transactions are
   **clients × 8** in a full season and **clients × 3** in the 2026 partial season.
3. **Anything multiplied by 12 in a membership context is wrong.** The season is 8 months.
   Insurance, software, phone, web, and accounting *are* twelve-month costs; supplies and
   membership are not.
4. **§8 must reconcile to §5.1.** ($3,024 × 8) + ($250 × 4) must equal $25,192.

The fastest check that nothing drifted: **§8 reconciles to $25,192**, and **§9.1's three
revenue deltas sum to $9,501.** If both close, nothing upstream moved.

---

## Related files

- `pricing.md` — the one membership price, the project price list, and the quoting formula
- `operating-model.md` — the calendar, the route structure derived in §2, and the metrics
- `service-catalog.md` — the scope the two hours are spent on
- `ideal-client.md` — the selection logic §7.3 pays for
- `decisions.md` — **D-18** is the memo explaining this page to the owner; **D-19** through
  **D-26** record each reversal
- `verify-unit-economics.py` — mechanical check of every figure above
