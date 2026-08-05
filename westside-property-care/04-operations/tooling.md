# Tooling — the setup checklist

**Owner:** `wpc-ops` · **Status:** human checklist, ordered by how long each step actually
takes

**Ordered by lead time, longest first.** Start the top of this list before you start the
bottom of it — several of these run in parallel, and the slowest ones are the ones most
likely to get started too late. Every item is marked **BLOCKER** or not: a blocker is
something `00-model/decisions.md` D-5 or plain practicality requires **before the first paid
visit**, not just before launch day.

**The 2026 season (March 1 – October 31) is already underway.** Every week this list takes
is a week of a season that doesn't wait, and the season, not the calendar year, is what these
lead times are racing.

All timeframes below are working estimates, not guarantees from the providers involved —
confirm current processing times with the Ohio Secretary of State, the IRS, your insurance
agent, and Google directly, since these change without notice.

---

## At a glance

| # | Step | Typical lead time | Blocks the first paid visit? |
|---|---|---|---|
| 1 | Google Business Profile verification | 1–3+ weeks | No — but start it first, it's the slowest thing on this page |
| 2 | General liability insurance — shop and bind | 1–2 weeks | **Yes — and must reflect the new pool scope (R-6)** |
| 3 | LLC formation (Ohio Articles of Organization) | A few business days to ~2 weeks | **Yes** |
| 4 | EIN (federal tax ID) | Same day, once the LLC is approved | Practically yes — needed for #5 |
| 5 | Business bank account | Same day to a few days, once EIN is in hand | Practically yes — see note below |
| 6 | Payment / scheduling software (Stripe vs. Jobber vs. Housecall Pro) | Minutes to a day | **Yes** — needed to hold a card on file |
| 7 | Business phone number | Minutes if new, up to several days if porting | Recommended before the first inquiry, not a hard blocker |
| 8 | The three ledgers (membership / project / materials) | No external lead time | Set up last — it depends on #5 and #6 |

---

## 1. Google Business Profile verification

**Lead time: 1 to 3+ weeks. Not a blocker to the first paid visit — start it anyway, today,
because it's the slowest thing on this page and the first members most likely come from the
warm list or a referral, not a search.**

Google verifies a new business listing before it goes live and starts appearing in search or
maps. For a new listing at a home-based address, verification is commonly done by mailed
postcard with a code — that alone can take a week or two to arrive, and video or phone
verification isn't always offered to a brand-new listing. Budget for the slow path.

- [ ] Confirm the legal business name is settled (`01-brand/brand-brief.md` §1) before
      creating the listing — changing the name after verification is more friction than
      doing it once, correctly.
- [ ] Use the business address and category consistent with the LLC filing (#3) once that
      name is locked.
- [ ] Start the verification process as early as possible — even before the LLC is fully
      filed, if the listing name and address are already settled — since this step gates
      when the site and the listing can actually go live for `03-marketing/`.

## 2. General liability insurance

**Lead time: 1 to 2 weeks to gather real quotes and bind coverage. BLOCKER — insurance must
be in force before the first paid visit** (`operating-model.md` §9; `decisions.md` D-5).

🔴 **`00-model/decisions.md` R-6 — the highest-priority open item on this whole page, and it
blocks the first paid visit as surely as having no policy at all.** The membership's pool
scope changed on 2026-08-05: WPC513 now vacuums, brushes, backwashes when the system allows
it, empties the pump basket, and reads the salt cell and other displayed indicators. All of
that is **pool-system operation** (`service-agreement.md` §5.2). The scope this business
launched with excluded every one of those tasks, so **a policy quoted or bound against the
old description may not respond to a claim arising from the new work.** This is a coverage
question, not a scope question, and it has to be resolved before anyone is charged for a
visit:

- [ ] **When getting quotes, describe the pool work exactly as `service-agreement.md` §5.2
      does — vacuuming, brushing, backwashing, emptying both baskets and the automatic-vacuum
      debris container, and reading salt-cell and system indicators** — not "basic pool
      maintenance" or "skimming." Ask the agent directly: does this policy cover
      pool-system operation, and does it change the quote?
- [ ] Get the answer in writing before the policy is bound, not after.

🔶 **`decisions.md` R-5 — still open, and it matters here specifically.** The $55/month
figure used throughout `00-model/unit-economics.md` is a **national average for
lawn/landscaping general liability, not a real quote.** Before this number goes into a
budget or a contract:

- [ ] **Get two real quotes from Ohio-licensed agents or carriers**, specifically for a
      solo residential outdoor property-care operator with no crew, no tree work, and
      work performed around pools and gas grills — describing the pool work exactly as
      above, per R-6.
- [ ] **Ask each quote explicitly whether commercial auto coverage is required** if the work
      vehicle is titled to the LLC rather than to the owner personally — this was flagged
      in `decisions.md` R-5 as unmodeled and could add meaningfully to the expense line in
      `unit-economics.md`.
- [ ] Once bound, get the policy number and the carrier name into `service-agreement.md`
      §13 — that section cannot be completed with real fill-in values until this step is
      done.
- [ ] Send `service-agreement.md` §13 to the carrier for review once bound, per that
      document's own instruction (§17) — the liability language on the agreement has to
      match what the policy actually covers.

## 3. LLC formation

**Lead time: a few business days to roughly two weeks depending on filing method and current
Ohio Secretary of State processing volume. BLOCKER — must be filed before the first paid
visit** (`decisions.md` D-5).

- [ ] **Check name availability first**, against the Ohio Secretary of State business
      search, before filing anything (`01-brand/brand-brief.md` §1). Preferred: **Westside
      Property Care LLC.** Fallback if unavailable: **Westside Property Care of Cincinnati
      LLC**, trading publicly as *Westside Property Care* either way.
- [ ] File Articles of Organization with the Ohio Secretary of State. **$99, one time.**
      Ohio has no annual report fee and no franchise tax for an LLC — this is one of the
      genuinely cheap parts of starting this business.
- [ ] Filing online is typically faster than filing by mail; expedited processing is
      usually available from the Secretary of State for an extra fee if the timeline is
      tight. Confirm current options and fees directly with the Secretary of State's office
      before filing.
- [ ] Once approved, the confirmed legal name feeds directly into #1 (GBP), #4 (EIN), #5
      (bank account), and the fill-in slot at the top of `service-agreement.md`.

## 4. EIN (federal tax ID)

**Lead time: typically same-day/instant once applied for online — but only after the LLC is
approved.** Practically a blocker, because #5 needs it.

- [ ] Apply directly at IRS.gov once the LLC is approved. There is no cost to apply
      directly with the IRS — never pay a third-party site for this.
- [ ] Use the EIN, not a personal Social Security number, on the business bank account, any
      W-9 given to a client who requests one, and the accounting setup referenced in
      `unit-economics.md` A21.

## 5. Business bank account

**Lead time: same day to a few days once the EIN and LLC documents are in hand.** Not named
explicitly as a blocker in `decisions.md` D-5, but treat it as one in practice: card-on-file
payments (#6) need somewhere to land, and running membership income through a personal
account undermines the entire reason for having the LLC in the first place — separating his
household from a claim.

- [ ] Open the account with the LLC formation documents and the EIN.
- [ ] This account is what the three ledgers in §8 below are actually tracking — get it
      open before trying to formalize the ledger structure.

## 6. Payment and scheduling software

**Lead time: minutes to about a day to get an account live. BLOCKER in the sense that D-5
requires a card on file before the first visit, and this is how that's collected.**

**The actual tradeoff for six clients:**

| Option | Monthly cost | What it does | What it doesn't do |
|---|---|---|---|
| **Stripe alone** | $0 fixed — just the per-transaction rate (2.9% + $0.30, `pricing.md` §4 / `unit-economics.md` A17) | Collects and stores a card on file, auto-charges on a schedule | No scheduling, no client list, no service-report tooling, no invoicing beyond what you build yourself in a spreadsheet or a payment-link tool |
| **Jobber Core** | **$29/month**, one user, billed annually (`unit-economics.md` A16) | Recurring billing *and* card processing, client and property records, scheduling, job tracking, invoicing | Costs more than raw Stripe; still needs discipline to keep the property-record habit — the software doesn't write the service report for you |
| **Housecall Pro Basic** | $59/user/month | Comparable feature set to Jobber Core | Roughly double Jobber's cost for a six-client book, with no clear feature advantage at this scale |

**Recommendation, and why it's already the model's assumption:** `unit-economics.md` A16
prices field service software at $29/month — that figure is Jobber Core, not Housecall Pro.
The financial model already assumes this choice. Raw Stripe is the cheapest path and is
defensible during the 4-client launch stage to preserve cash, but the admin-hour savings
from Jobber's scheduling and recurring-billing tooling are worth more than $29/month the
moment there are six properties and two route days a week to keep straight — and Tuesday
through Thursday is supposed to be protected for project work, not spent rebuilding a
billing spreadsheet (`operating-model.md` §3).

- [ ] Whichever is chosen, connect it to the business bank account (#5), not a personal one.
- [ ] Card-on-file collection must be working and tested before the first member's first
      visit — `pricing.md` §4: "collected before the first visit, no exceptions."

## 7. Business phone number

**Lead time: minutes for a new VOIP-style number, up to several days if porting an existing
number.** Recommended before the first public-facing inquiry (GBP listing, yard sign, door
hanger) — not a hard blocker if the very first clients come from a personal introduction
off the Tri-State Grill Cleaning warm list, but get it running before #1 goes live, since
the GBP listing will publish this number.

- [ ] Get the number running and voicemail set up before it appears anywhere public.
- [ ] Budgeted at $35/month attributable (`unit-economics.md` A18).

## 8. The three ledgers — membership, project, materials

**No external lead time — this is a spreadsheet or an accounting-software setup, not a
third-party dependency. Do it last, because it depends on #5 (where the money lands) and #6
(what's actually generating the transactions).**

`operating-model.md` §9 states the rule plainly: **track membership revenue, project
revenue, and materials separately.** Materials must never disappear into labor revenue — if
a project consumes $75 of materials, that $75 shows up as its own line, not folded into the
job's price, so the real margin is visible.

- [ ] **Ledger 1 — Membership.** One row per member per month: **$279 flat** — there is no
      configuration to log any more, just whether it charged, the date charged, and whether
      it cleared. This ledger is what produces `operating-model.md` §7.1's
      revenue-per-route-day number.
- [ ] **Ledger 2 — Project revenue.** One row per project: the job, the member or
      non-member, the flat price charged, the date invoiced, the date paid. This is what
      `operating-model.md` §7.2's attach rate is counted from.
- [ ] **Ledger 3 — Materials.** One row per material line: the job it belongs to, the cost,
      the 25% markup, the total billed. Never merge this into Ledger 2 — the whole point of
      `pricing.md` §6 is that materials stay visible as their own number.
- [ ] Close the month with a one-page report, per `operating-model.md` §9: membership
      revenue, project revenue, material reimbursements, gross revenue, expenses, net,
      hours worked, and the effective hourly rate.
- [ ] If Jobber (or similar) was chosen in #6, most of Ledgers 1 and 2 come out of its
      reporting directly — Ledger 3 (materials) still needs its own line because most
      field-service software folds materials into a single invoice total by default.

---

## What has to be true before the first paid visit — summed up

From `decisions.md` D-5, plus the practical additions above:

1. **Card on file** — working payment processor connected to the business bank account (#5, #6)
2. **Signed service agreement** — `service-agreement.md`, with real values in place of its
   `[ ]` slots, including the insurance carrier and policy number from #2
3. **General liability insurance in force** — real Ohio quotes, not the $55/month modeling
   assumption, **and written confirmation the carrier knows about the pool-system work**
   (#2, R-6)
4. **LLC filed** — Ohio Articles of Organization approved (#3)

Google Business Profile (#1), the phone number (#7), and the choice of software beyond bare
card processing (#6) can all be in progress rather than finished — but #1 takes the longest
of anything on this page, so it should already be moving before any of the four blockers
above are finished.

## Related files

- `00-model/decisions.md` D-5, R-5, R-6 — why these four are required before the first visit,
  the open flag on the insurance and vehicle-cost figures, and the pool-scope insurance
  disclosure that blocks the first paid visit
- `00-model/unit-economics.md` §1 (A15–A22) — every cost assumption this page budgets
  against
- `00-model/operating-model.md` §9 — the money mechanics this checklist implements
- `service-agreement.md` §13, §17 — the fill-in slots that depend on #2 and #3 being real
- `01-brand/brand-brief.md` §1 — the legal name decision that gates #1, #3, #4, and #5
