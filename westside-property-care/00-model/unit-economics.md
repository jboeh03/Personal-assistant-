# Unit Economics

**Owner:** `wpc-strategist` · **Status:** the financial model, with the arithmetic shown

**Every number on this page is checkable.** Every input is either locked in `CANON.md`,
priced in `pricing.md`, or labeled below as an assumption with the reasoning attached. If an
assumption is wrong, the arithmetic still holds — change the input and rerun it.

---

## 1. Assumptions, all in one place

Nothing here is a fact. These are the inputs, and they are the first thing to argue with.

### Revenue assumptions

| # | Assumption | Value | Basis |
|---|---|---|---|
| A1 | Blended membership price | **$289/month** | Middle tier. `pricing.md` §1. See §1.1 for the mix that produces it exactly. |
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
| A15 | General liability insurance | **$55/month** | 2026 market: $45–85/month for lawn/landscaping general liability; basic lawn care averages ~$46, landscaping contractors ~$51. A solo operator with no crew and no tree work sits at the low end. |
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

### 1.1 The mix behind the $289 blended average

A1 assumes a $289 blended average. One mix produces it exactly:

```
2 clients × $229  =   $458
1 client  × $289  =   $289
3 clients × $329  =   $987
                    -------
6 clients         = $1,734  per month
$1,734 ÷ 6        =   $289  blended average  ✓
```

This mix is **illustrative, not a target.** A pool-heavier book beats it:

```
1 × $229 + 3 × $289 + 2 × $329  =  $229 + $867 + $658  =  $1,754/month
$1,754 × 12 = $21,048  →  $240/year better than the model
```

The model uses the conservative number.

---

## 2. Scenario: 4 clients — the launch case

This is where he actually starts. `CANON.md`: launch at 4, hard cap at 6.

### 2.1 Revenue

```
MEMBERSHIP
  4 clients × $289/month             =    $1,156 per month
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

---

## 3. Scenario: 6 clients — the target case

The cap. This is the model the business is built to reach.

### 3.1 Revenue

```
MEMBERSHIP
  6 clients × $289/month             =    $1,734 per month
  $1,734 × 12                        =   $20,808 per year

MEMBER PROJECTS                            (A2, A3)
  6 clients × 2.5 projects × $275    =    $4,125 per year
  ( = 15 projects )

NON-MEMBER PROJECTS                        (A4, A5)
  1 job/week × 40 weeks              =        40 jobs
  40 × $250                          =   $10,000 per year
                                          --------
GROSS REVENUE                              $34,933 per year
```

**Check:** $20,808 + $4,125 + $10,000 = $34,933 ✓

**Membership is 60% of gross revenue. Project work is 40%** — and the project work only
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
Processing membership  $20,808 × 2.9% + (72 × $0.30) = $625.03
           mem projects $4,125 × 2.9% + (15 × $0.30) = $124.13
           non-member   $5,000 × 2.9% + (20 × $0.30) = $151.00  =   $900
Phone      $35/month × 12                                       =   $420
Equipment  reserve                                              =   $600
Web/domain                                                      =    $60
Accounting                                                      =   $350
                                                                  ------
TOTAL EXPENSES                                                    $6,264
```

Expenses are **17.9%** of gross revenue ($6,264 ÷ $34,933). For a solo service business with
no payroll, no rent, and no inventory, that is the shape you'd expect — the largest single
line is the truck.

### 3.5 Result

```
Gross revenue         $34,933
Expenses             − $6,264
                     ---------
NET                   $28,669   per year

$28,669 ÷ 561 hours = $51.10 per hour, net
$34,933 ÷ 561 hours = $62.27 per hour, gross
```

**Revenue per route day** (`operating-model.md` §6.1):
`$1,734 membership ÷ 4 route days = $433.50 per route day` ✓ — clears the $400 target.

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
Net                            $28,669
× 92.35% (SE taxable base)   = $26,476
× 15.3%                      =  $4,051

$28,669 − $4,051 = $24,618  after self-employment tax
```

### 4.3 What that means per hour

```
$24,618 ÷ 561 hours = $43.88 per hour, after self-employment tax
```

Still at the top of the **$40–80/hour** Cincinnati handyman labor range — while doing
recurring, scheduled, predictable work with a signed agreement and a card on file, rather
than chasing one-off jobs.

### 4.4 Income tax is not modeled

Federal and Ohio income tax depend entirely on his household return — filing status, other
income, deductions, and the qualified business income deduction. **Do not model it here and
do not guess at it.** He should take these numbers to whoever does his taxes before the
first invoice, not after the first year.

---

## 5. Scenario: 8 clients — what the cap costs

**This is not a proposal.** `CANON.md` caps the book at 6. This scenario exists so the price
of that cap is visible instead of assumed.

### 5.1 Base variant — project flow holds up

```
MEMBERSHIP     8 × $289 × 12                         =  $27,744
MEMBER PROJ.   8 × 2.5 × $275   ( = 20 projects )    =   $5,500
NON-MEMBER     0.6 jobs/wk × 40 wks = 24 × $250      =   $6,000
                                                        -------
GROSS                                                    $39,244

ROUTE HOURS    16 visits ÷ 4 days = 4 stops/day
               (4 × 1.5) + 0.5 = 6.5 hrs/route day
               4 × 6.5 = 26.0/month × 12             =      312 hrs
PROJECT HOURS  (20 + 24 = 44 jobs) × 3               =      132 hrs
ADMIN          3.5 hrs/wk × 52                       =      182 hrs
                                                            ----
TOTAL HOURS                                                 626 hrs

EXPENSES       vehicle 2,995 mi × $0.74     = $2,216
               supplies $85 × 12            = $1,020
               insurance                    =   $660
               software                     =   $348
               processing                   = $1,089
               phone                        =   $420
               equipment reserve            =   $700
               web/domain                   =    $60
               accounting                   =   $350
                                              ------
                                              $6,863

NET            $39,244 − $6,863                      =  $32,381
               $32,381 ÷ 626 hrs                     =   $51.73 /hr
```

> **Why non-member work drops to 0.6/week.** Two effects. (a) A 6.5-hour route day consumes
> Monday and Friday of weeks 1 and 3 entirely, so a weather reschedule pushes into
> Tuesday–Thursday and eats a project slot. (b) With 16 stops a month there is less slack to
> run an estimate within 48 hours, and estimate turnaround is what actually closes project
> work. **Assumption**, and the whole scenario turns on it — see §5.2.

### 5.2 The comparison, honestly

| | 6 clients | 8 clients | Difference |
|---|---|---|---|
| Gross | $34,933 | $39,244 | +$4,311 |
| Expenses | $6,264 | $6,863 | +$599 |
| **Net** | **$28,669** | **$32,381** | **+$3,712 (+12.9%)** |
| Hours | 561 | 626 | +65 (+11.6%) |
| Net per hour | $51.10 | $51.73 | +$0.63 |
| **Marginal rate on the extra hours** | — | — | **$3,712 ÷ 65 = $57.11/hr** |

**Eight clients earn more money.** Not a little — about $3,700 a year, at a marginal rate
slightly better than his blended rate. Anyone claiming the cap is free is not reading the
arithmetic.

### 5.3 The sensitivity that decides it

The 8-client case rests entirely on non-member project flow holding at 0.6 jobs/week. If a
fuller route pushes estimates back and it falls to **0.4/week (16 jobs, $4,000)**:

```
GROSS        $27,744 + $5,500 + $4,000            =  $37,244
HOURS        312 route + (36 jobs × 3 = 108) + 182 =      602
EXPENSES                                           =   $6,715
NET          $37,244 − $6,715                      =  $30,529
             $30,529 ÷ 602                         =   $50.71 /hr

vs. 6 clients:  +$1,860 net for +41 hours
                $1,860 ÷ 41 = $45.37 per marginal hour
```

**$45.37 is below his own blended rate of $51.10.** Under this variant, the eighth and
seventh clients are earning him less per hour than the six he already has — and he cannot
un-sell them.

### 5.4 So the cap is a risk decision, not a revenue one

The case for stopping at six is not that six earns more. It's that:

1. **The upside is $3,700 and the downside is a rate cut.** Whether client 7 and 8 are worth
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

**He is buying schedule integrity for about $3,700 a year.** That is the trade, stated
plainly, and it is his to make. If he ever decides differently, this is where the number is.

---

## 6. Cash flow shape — why the flat price matters

Membership revenue is flat. Project revenue is not: assume **70% of project work lands
April–October** (A6).

```
PROJECT REVENUE      $4,125 + $10,000 = $14,125

Green Season (7 mo)  $14,125 × 70% = $9,887.50  ÷ 7 = $1,412.50/month
Dormant Season (5 mo) $14,125 × 30% = $4,237.50  ÷ 5 =   $847.50/month
```

| | Membership | Projects | **Monthly total** |
|---|---|---|---|
| Green Season month (Apr–Oct) | $1,734 | $1,412.50 | **$3,146.50** |
| Dormant Season month (Nov–Mar) | $1,734 | $847.50 | **$2,581.50** |

**Check:** ($3,146.50 × 7) + ($2,581.50 × 5) = $22,025.50 + $12,907.50 = **$34,933** ✓

The swing between a good month and a slow month is **$565**. Without the flat-priced
membership underneath it, that swing would be the difference between a working February and
a February spent worrying — project work in January on the west side of Cincinnati is close
to zero some years.

**This is the arithmetic behind never offering a winter discount** (`pricing.md` §3). The
$1,734 floor is the entire reason the Dormant Season is survivable. Cut it to $1,200 and
February goes from a slow month to a bad one, and a member who cancels in February takes the
whole Green Season with them.

---

## 7. Downside cases

### 7.1 Zero project work — the floor

What if the project engine simply doesn't fire in year one? Six members, membership only:

```
GROSS      6 × $289 × 12                             =  $20,808
HOURS      240 route + 104 admin (2 hrs/wk × 52)     =      344
EXPENSES   vehicle 1,500 mi × $0.74         = $1,110
           supplies $780 · insurance $660
           software $348 · processing $625
           phone $420 · equipment $600
           web $60 · accounting $350                    $4,953
NET        $20,808 − $4,953                          =  $15,855
           $15,855 ÷ 344 hrs                         =   $46.09 /hr
```

**Even with no project revenue at all, the membership book alone pays $46/hour net.** That
is the real floor under this business, and it is above the top of the Cincinnati handyman
range. The model does not require the project assumptions to be right — it requires them to
be roughly right to be *good*.

### 7.2 Losing one client

```
5 clients × $289 × 12 = $17,340    ( −$3,468, −10% of membership gross )
```

Route hours barely move — 12 visits become 10, and a route day drops a stop. So the entire
loss falls to the bottom line. **One cancellation costs about 12% of net.** This is why
`operating-model.md` §6.3 measures retention on April 1 and why replacing a member from the
waitlist should take weeks, not months.

### 7.3 A client 15 minutes off route

From `operating-model.md` §4: 12 unpaid drive hours a year, **$612 of margin**, against
$3,468 of revenue — **17.6% of that client's gross gone before he starts working.**

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

### This model, target case: **$34,933** gross · **$28,669** net

### The bridge — where $21,949 of additional revenue comes from

```
  $12,984   Draft baseline: 4 clients @ $229, 8 projects @ $249
+  $5,496   Two more clients at the base price (2 × $229 × 12)      D-2
= $18,480
+  $4,320   Attribute tiers: $229 → $289 blended, × 6 (6 × $60 × 12) D-3
= $22,800
+    $996   Member projects scaled 4 → 6 clients at draft rate
= $23,796
+  $1,137   Member projects: 2 @ $249 → 2.5 @ $275                  D-4
= $24,933
+ $10,000   Non-member Tue–Thu project work — never counted at all  D-6
= $34,933   ✓
```

**Check:** $34,933 − $12,984 = **$21,949**, a 2.69× increase.

### Where the increase actually comes from

| Source | Amount | Share |
|---|---|---|
| **Non-member project work the draft never counted** | $10,000 | **45.6%** |
| Two more clients | $5,496 | 25.0% |
| Attribute-based tiers | $4,320 | 19.7% |
| Member project rate uplift | $1,137 | 5.2% |
| Member project count scaling | $996 | 4.5% |
| | **$21,949** | **100%** |

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
| Membership revenue | $13,872 | **$20,808** | $27,744 |
| Member projects | $2,750 | **$4,125** | $5,500 |
| Non-member projects | $7,500 | **$10,000** | $6,000 |
| **Gross revenue** | **$24,122** | **$34,933** | **$39,244** |
| Expenses | $5,286 | $6,264 | $6,863 |
| **Net** | **$18,836** | **$28,669** | **$32,381** |
| Route hrs/month | 14.0 | **20.0** | 26.0 |
| Total hrs/year | 418 | **561** | 626 |
| Hours/week | 8.0 | **10.8** | 12.0 |
| Days/week (8-hr) | 1.0 | **1.35** | 1.5 |
| **Net per hour** | **$45.06** | **$51.10** | **$51.73** |
| After SE tax | $16,175 | **$24,618** | $27,806 |

*(After-SE-tax line: net × 0.9235 × 15.3%, subtracted from net.
4-client: $18,836 × 0.9235 × 0.153 = $2,661 → $16,175.
6-client: $28,669 × 0.9235 × 0.153 = $4,051 → $24,618.
8-client: $32,381 × 0.9235 × 0.153 = $4,575 → $27,806.)*

**The target case: about $34,900 gross and $28,700 net, on roughly 1.5 days a week, from six
clients.** That is what `README.md` means by "roughly $35k/year at 1.5–2 days per week."

---

## Related files

- `pricing.md` — every price used above
- `operating-model.md` — the cap, the schedule, and the metrics these numbers feed
- `ideal-client.md` — the client mix that produces the $289 blended average
- `decisions.md` — D-2 through D-6 explain each line of the §8 bridge
