# Intake Sheet — the WPC513 Google Sheet

**Owner:** `wpc-marketing` · **Status:** internal working document — never customer-facing
**Reads from:** `CANON.md`, `00-model/ideal-client.md`, `00-model/pricing.md` — never contradicts either
**Fed by:** `warm-list-campaign.md` (Track A), `neighborhood-campaign.md` (Track B),
`google-business-profile.md` (Track C), `first-20-prospects.md` (the initial seed list)

This is the spec for the customer-intake system named in the owner's own work-block plan: **a
WPC513 Google Sheet**, one tab, his columns, in his order. **Same fifteen columns as he
specified. Their job changed, not their names.**

---

## 1. Why this document exists

Three tracks feed leads into one place. Without a single sheet, Track A's phone calls, Track B's
door-hanger responses, and Track C's GBP messages each end up in a different notebook, a
different inbox, or nowhere — and the qualification logic in `ideal-client.md` only works if
every lead is checked against the same criteria in the same place. This file is the spec for
that one place. It is not a CRM recommendation and it is not a database schema — it's a Google
Sheet, because a six-client business doesn't need more than that, and a tool more complicated
than the problem is its own kind of scope creep.

**This sheet is never public and never customer-facing.** It holds names, addresses, phone
numbers, and email addresses — real PII, unlike anything else in `03-marketing/`. `voice.md`'s
street-name-only rule governs what appears in *published* copy; it does not apply here, because
this sheet is never published. Keep it in a Google account only he can access, sharing turned
off by default.

---

## 2. The columns, in his order

Two logical groups on one sheet, exactly as the work-block plan laid them out — **Lead
information** on the left, **Tracking** on the right. Same fifteen columns, same names, no
column added and none removed.

| # | Column | Group |
|---|---|---|
| 1 | Name | Lead information |
| 2 | Address | Lead information |
| 3 | Neighborhood | Lead information |
| 4 | Phone | Lead information |
| 5 | Email | Lead information |
| 6 | Pool Y/N | Lead information |
| 7 | Outdoor Kitchen Y/N | Lead information |
| 8 | Monday/Friday Preference | Lead information |
| 9 | Lead Status | Tracking |
| 10 | Date Contacted | Tracking |
| 11 | Follow-Up Date | Tracking |
| 12 | Plan Interested In | Tracking |
| 13 | Notes | Tracking |
| 14 | Customer Y/N | Tracking |
| 15 | Start Date | Tracking |
| 16 | Monthly Revenue | Tracking |

(Sixteen rows above because "Lead Status | Date Contacted" reads as one merged header cell in
the source layout but is two columns in the actual sheet — confirmed against the original
column count, which was always fifteen labeled items grouped as eight and seven. Build the sheet
with sixteen columns exactly as listed; do not compress Lead Status and Date Contacted into one
cell.)

---

## 3. What changed: two columns, same names, different job

**This is the one thing worth stopping on before building the sheet**, because getting it wrong
doesn't break the spreadsheet — it breaks the qualification logic that runs on top of it.

### Pool Y/N and Outdoor Kitchen Y/N

**Old job (dead, from the superseded attribute-pricing model):** these two columns determined
*which of four prices* a property would be quoted — neither ($229), kitchen only ($269), pool
only ($289), or both ($329). A "Y" in either column was a pricing input.

**New job:** under the flat $279 price, these columns no longer touch the price at all — every
signed customer pays $279 regardless of what's checked. What they now do is run the **selection
test** in `ideal-client.md` §2:

- **At least one of the two must be Y** for a lead to be workable as a membership prospect at
  all. Two blank/N columns means the property is, at best, the one-in-six exception
  `ideal-client.md` §2.3 allows — flag it, don't default to it.
- **Both Y at once is a flag, not a bonus.** `ideal-client.md` §2.3 caps the whole book at 2 of 6
  properties with both attributes, and forbids ever placing two of them on the same route day.
  When both columns read Y, add a note in the Notes column: `BOTH — book cap 2/6, route-day cap
  1 per day`. This is the single most important use of the Notes column in the whole sheet.
- **These two columns now feed a book-composition count, not a price lookup.** Periodically —
  at minimum, before signing anyone into slot 5 or 6 — filter Customer Y/N = Y and count how
  many rows have both Pool Y/N and Outdoor Kitchen Y/N marked Y. If that count is already 2,
  the next signed customer cannot be a third "both" property, full stop, regardless of how
  attractive the property or the conversation.

**Practical instruction for filling these in:** mark Y only when confirmed — a visible pool or
outdoor kitchen from the auditor record, satellite image, drive-by, or the lead's own statement.
Leave blank rather than guess. A wrongly-marked Y that clears the selection test on a property
that turns out to have neither costs a walkthrough and a bad first impression; a blank that gets
confirmed later costs nothing.

### Plan Interested In

**Old job:** recorded which of the four price configurations a prospect had been quoted or was
leaning toward.

**New job:** there's one plan. This column now records which **offer** a lead is actually
engaged with, since not everyone in this sheet is a membership prospect:

| Value | Meaning |
|---|---|
| `Membership` | The $279/month plan — the default for anyone who's had the full pitch |
| `Founding` | Membership, and they're one of the first four — use alongside `Membership`, e.g. `Membership (Founding)` |
| `Project only` | Not interested in, or not qualified for, the membership, but a candidate for a grill deep clean, pressure washing, or another quoted job |
| `Waitlist` | Qualified on attributes but off-route or the book is full |
| `Winter service` | Interested in the proposed off-season offering only, once `winter-service.md` is approved and live — see that file |

### Monthly Revenue

**Old job:** recorded which of $229 / $269 / $289 / $329 a signed customer was paying.

**New job:** every signed member pays $279, so this column mostly confirms the obvious — but it
still earns its place for two real reasons:

1. **Pro-ration.** A member's first partial month is billed per visit at $139.50
   (`pricing.md` §3.2), not $279 — record the actual first-month figure here so the sheet
   reflects real billed amounts, not a rounded assumption.
2. **A running total.** Summing this column across every `Customer Y/N = Y` row is the fastest
   sanity check against `operating-model.md` §7.1's revenue-per-route-day target — if the sum
   looks wrong for the number of signed members, something in the sheet is stale.

---

## 4. Lead Status — the allowed values

Use exactly these, so the column can be filtered and counted reliably:

| Value | Meaning |
|---|---|
| `New` | Entered, not yet contacted |
| `Contacted` | First outreach sent (call, letter, email, door hanger response, GBP message) |
| `Walkthrough Scheduled` | A time is set |
| `Walkthrough Complete` | The forty-minute conversation happened — `ideal-client.md` §7's sequence ran |
| `Waitlisted` | Qualified on attributes, failed a route test — `ideal-client.md` §4's waitlist mechanic |
| `Declined — Not Qualified` | Failed the attribute or time-fit test, or a disqualifier in `ideal-client.md` §6 fired |
| `Declined — Off Route` | Failed the 15-minute, 25-minute, or route-day test specifically — distinct from "Not Qualified" because a route-day opening later can revisit these |
| `Project Only` | Not pursuing membership; being worked as a project lead instead |
| `Signed` | Card on file, agreement signed — the row also gets `Customer Y/N = Y`, a `Start Date`, and a `Monthly Revenue` |

---

## 5. Notes column — conventions worth standardizing, without adding a column

The Notes column is free text, and it's meant to stay that way — but a few consistent tags make
it far more useful when filtering:

- `BOTH — book cap 2/6, route-day cap 1 per day` — see §3, for any Pool Y/N + Outdoor Kitchen Y/N
  = Y, Y row.
- `TSGC` — the lead originated from the Tri-State Grill Cleaning warm list, once that track is
  confirmed. Cross-reference against `warm-list-campaign.md` §3's tier (Tier 1 / Tier 2 / Tier 3)
  in the same note, e.g. `TSGC — Tier 2`.
- `REFERRAL — [existing client's first name, with their permission]` — per
  `neighborhood-campaign.md` §3.2, never write a referring client's name here without having
  asked them first.
- `FOUNDING` — flags that this row, if signed, would occupy one of the first four founding slots.
  Remove or update once the fourth founding slot is actually filled elsewhere, so this flag never
  drifts out of sync with reality.
- Anything from the qualifying conversation worth remembering before the walkthrough — a
  disqualifier that almost fired, a specific thing they mentioned wanting handled
  (`ideal-client.md` §7, step 4 — "this is where the project work for the first season comes
  from").

---

## 6. What this sheet is not

- **Not a route-planning tool.** It records `Monday/Friday Preference` as a lead's stated
  preference, but actual Route A / Route B assignment and the 15-/25-minute/route-day tests
  happen in the qualifying conversation and get confirmed at signing — this sheet is where the
  outcome is recorded, not where the routing math happens.
- **Not the property file.** Once someone signs, the ongoing service history — what was found,
  what was quoted, photos — lives in the property record system in `04-operations/`, not here.
  This sheet's job ends at `Customer Y/N = Y`, `Start Date`, and `Monthly Revenue`; it doesn't
  grow a sixteen-row visit history underneath each customer.
- **Not published, ever, in whole or in part.** No column from this sheet is copied into any
  customer-facing surface. If a real address, a real name, or a phone number from this sheet
  ever appears in a piece of marketing copy, that is a data-handling failure, independent of
  whether the copy itself reads well.

---

## 7. Where this sheet's first rows come from

`first-20-prospects.md` is the worksheet that builds the initial candidate list before any of it
is copied into this sheet as `New` rows. Track A (once confirmed) and Track B's own street
research (`neighborhood-campaign.md` §2.3) add rows on an ongoing basis after that.

---

## Related files

- `first-20-prospects.md` — the initial candidate list this sheet is seeded from
- `00-model/ideal-client.md` §2, §2.3 — the selection logic Pool Y/N and Outdoor Kitchen Y/N now
  run, and the book-composition caps this sheet has to help enforce
- `00-model/pricing.md` §3.2 — the pro-ration rule behind the Monthly Revenue column's first-month
  entries
- `warm-list-campaign.md` §3 — the tier system referenced in the Notes convention above
- `gtm-plan.md` §8 — the placeholder and token registry this sheet's downstream copy draws from
