# CANON — Read this first

**Every agent working on Westside Property Care reads this file before writing anything.**

It exists for one reason: five agents write into this project, and the fastest way to ruin
it is for two of them to quietly disagree about a price, a client cap, or who the customer
is. The numbers and rules below are **non-negotiable**. If your work requires changing one,
stop and say so — do not change it silently.

---

## 1. The business in one paragraph

**Westside Property Care (WPC513)** is a solo residential outdoor-living property-care
service on the **west side of Cincinnati, Ohio**. It spun out of the family's grill-cleaning
business, Tri-State Grill Cleaning (TSGC). It is **small by design**: a deliberately capped
book of premium residential clients, served consistently by one person, with enough open
capacity left over to take profitable project work. It is a *deliberate side income*, not a
venture — roughly 1.5–2 working days per week. Do not write copy or plans that imply
growth, scale, franchising, crews, or "expanding to serve more families."

---

## 2. The one idea everything else follows from

**The membership is not the revenue. The membership is the lead engine.**

Its job is to put a trusted operator on a property **24 times a year**, where every visit is
also an inspection that surfaces quotable work. Membership revenue covers itself; **project
revenue is the actual income.** The original draft had this inverted — it treated $916/month
of memberships as the business and projects as a bonus.

Practical consequence for every agent: never write anything that treats the membership as
the finish line. Every membership touchpoint — the service report especially — is where the
next project gets found and recommended.

---

## 3. Non-negotiable numbers

### Pricing

| Component | Price | Applies when |
|---|---|---|
| Property Care base | **$229/month** | Always — includes 2 visits/month |
| + Pool Care | **+$60/month** | Property has a pool |
| + Outdoor Kitchen Care | **+$40/month** | Grill, flat-top, or outdoor counters |

**The only three prices a customer ever sees: $229, $289, $329.**
Billed monthly, same price year-round, card on file, auto-charged on the 1st.

**Founding Member rate:** the first 4 clients lock their price for 12 months.

**Lead with $289/$329, not $229.** The homes that can afford this service are the ones with
pools and outdoor kitchens. $229 is the entry point, not the headline.

### Capacity

- **Launch at 4 clients. Hard cap at 6.**
- The cap is on **route hours**, not client count. Six homes ≈ 12 visits/month ≈ 5 route
  days/month.
- **Routine visits happen only on Monday and Friday of weeks 1 and 3.**
- **Tuesday–Thursday is project, estimate, and emergency time.** Protect it — that is where
  the money is.
- **No regularly scheduled weekend work.**
- When all slots are full, the site says **MEMBERSHIP FULL** and offers a **waitlist**. This
  scarcity is real and is part of the product. Never fake it, never soften it.

### Seasons — one price, two scopes

- **Green Season (April–October):** pool skimming and baskets, patio and furniture,
  outdoor kitchen surfaces, debris, watering, light weed treatment, blowing hard surfaces.
- **Dormant Season (November–March):** gutter and downspout check, storm debris, freeze
  protection (hose bibs, disconnects, drain-downs), furniture covering and storage,
  hardscape ice and salt management, full exterior inspection with photo report, spring-prep
  planning.

**The price does not change in winter.** Flat year-round pricing is what makes this a
membership instead of a seasonal service. Never propose a reduced winter rate — it invites
winter churn, which is the single fastest way to kill this business.

### Metrics

Track: **revenue per route day, project attach rate, membership retention, referrals.**

**Do not use "minutes per visit" anywhere, internal or external.** The original draft's
~80-minute target directly contradicts its own best rule — *never rush a property.*

---

## 4. Who the customer actually is

West-side Cincinnati home values are modest: Delhi $180–350k, Bridgetown ~$240k, Green
Township $250–450k, Westwood/Price Hill/Cheviot ~$175k. A $289/month outdoor-care membership
addresses a **narrow** slice of that.

- **Target:** Green Township subdivisions, Oak Hills, and the upper end of Delhi and
  Covedale — homes with a real pool or outdoor-kitchen investment and an owner who already
  pays other people to maintain things.
- **Not the target:** Westwood, Price Hill, Cheviot. Do not write copy or targeting plans
  aimed at them.

This narrowness is a feature. He needs **six** clients. There are a few hundred qualifying
homes and that is plenty.

---

## 5. What the website is for

**The site is not a lead-generation engine. It is what closes someone who already heard his
name** — from a neighbor, a yard sign, a grill-cleaning job, or a Google Business Profile
listing.

So it must: prove craft with real evidence, make the scope and the price unambiguous, and
make joining (or joining the waitlist) frictionless. SEO matters, but it must not drive the
site's architecture — a six-client business does not need a service-area page farm.

---

## 6. File ownership — do not write outside your lane

| Directory | Owner | Everyone else |
|---|---|---|
| `_source/` | nobody — frozen input | read only |
| `00-model/` | `wpc-strategist` | read only |
| `01-brand/` | `wpc-brand` | read only |
| `02-website/` | `wpc-web` | read only |
| `03-marketing/` | `wpc-marketing` | read only |
| `04-operations/` | `wpc-ops` | read only |
| `05-playbook/` | orchestrator | read only |

**Source-of-truth files.** Read these before writing; never contradict them:

- `00-model/operating-model.md` — cap, schedule, principles
- `00-model/pricing.md` — every price in the business
- `00-model/service-catalog.md` — what is included, excluded, and seasonal
- `00-model/ideal-client.md` — who we target and who we don't
- `01-brand/brand-brief.md` — positioning, promise, proof
- `01-brand/voice.md` — how we write
- `01-brand/visual-direction.md` — how it looks

**Never invent a price.** Quote `00-model/pricing.md` verbatim. Price drift across documents
is the most likely defect in this project.

---

## 7. Voice guardrails (full profile in `01-brand/voice.md`)

- Write like a competent tradesperson who takes pride in the work — **not** like a marketing
  department.
- Plain, concrete, specific. "Pool skimmed, baskets emptied, patio blown clean" beats
  "comprehensive outdoor living solutions."
- **Never** use: "solutions," "premier," "one-stop shop," "peace of mind" as a headline,
  "we're passionate about," "elevate your outdoor living experience."
- No exclamation marks in body copy. No stock-photo enthusiasm.
- Specificity is the entire brand. The reason this beats a big company is that he
  personally knows which gate sticks and where the window wells fill up.
- Never claim crews, years in business, client counts, or certifications that don't exist.
  No invented testimonials, no fake review counts, no made-up awards.

---

## 8. Environment constraints — read before planning research

- **WebFetch and curl are blocked.** Every outbound host returns 403. Do not try to fetch a
  URL; it will fail. This includes the live site at `westside-property-care.vercel.app`.
- **WebSearch works.** It is the only live research channel available.
- **Ahrefs keyword tools return "Insufficient plan."** No keyword volume data. Do not build
  an SEO plan that depends on it.
- **Playwright cannot launch** (no browser binary). No screenshots, no browser QA.
- The **repo root is a separate Next.js app**. Never edit anything outside
  `westside-property-care/` except where a step explicitly says to.

---

## 9. Open items — flag, don't guess

1. **The source document is truncated** mid-sentence in rule 4 of 5 of its "membership
   standard" section. Rules 4–5 are reconstructed in `00-model/operating-model.md` and
   marked for confirmation.
2. **TSGC warm-list access is unconfirmed.** Anything depending on that customer list must
   be clearly marked **CONDITIONAL**.
3. **No real photography exists yet.** Never specify stock photos as a final answer — mark
   image slots as requiring real photos of his actual work, and say what each shot needs to
   show.
