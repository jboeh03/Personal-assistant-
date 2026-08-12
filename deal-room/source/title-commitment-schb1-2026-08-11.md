# Title Commitment — Schedule B, Part I (Requirements) — REDACTED EXTRACT

> ⚠️ **Verify against original.** Extracted 2026-08-11 from a 2-page PDF (pages 6–7 of 10
> of the full commitment) received from the title company via Olivia. **Exact judgment
> amounts, creditor names, case/instrument numbers redacted per the deal-room privacy
> gate** — the unredacted original is held locally at `source/private/` (never committed).

**Document:** ALTA Commitment for Title Insurance (2021 form), underwritten by
**Stewart Title Guaranty Company**. Only Schedule B, Part I (Requirements) received —
Schedule A, B-II (Exceptions), and notice pages are NOT in hand (requested; see todos).

## Requirements (must all be met to close)

| # | Requirement | Notes |
|---|---|---|
| 1–3 | Standard: notify company of new interested parties; pay purchase amount; pay premiums/fees | Boilerplate |
| 4 | **Deed** from Olivia M. Boeh & Jeffrey V. Boeh to Robert & Catherine Sipniewski, executed & recorded at closing | Matches contract parties |
| 5 | **Buyers' mortgage** to CrossCountry Mortgage, LLC securing a loan of **$510,000** | Buyers' financing is far enough along that their lender ordered title — good sign for the ~08/21 conditional-approval milestone. $510K on $585K ≈ 87% LTV, within the contract's ≤90% cap |
| 6 | Pay all taxes/charges/assessments due and payable | Ties to §21 long proration |
| 7 | Dower release if a titled person's spouse exists | Standard Ohio; both sellers are in title and both sign the deed |
| 8 | Notice re: marijuana-related transactions | Boilerplate |
| 9 | **Existing mortgage payoff & release** — recorded 12/2020 mortgage (MERS as nominee; original principal in the ~$350–375K band), to be paid from proceeds and released | The loan now serviced by Rocket Mortgage — matches the payoff already banded in `data/finance-context.md` ($300–325K) |
| 10–15 | **Six certificates of judgment against one seller, each "to be paid with proceeds of loan and released"** — consumer-credit judgments (4 creditors), judgment dates 2024–2025, filed Hamilton County 2025. **Face total: $60–70K band, each "plus additional costs"** (post-judgment interest + court costs accrue on top) | The "liens/debts" input the net-proceeds model was awaiting. Exact payoff letters must be ordered through the title company (see todos). Allocation between sellers is a counsel / separation-agreement matter — not modeled here |

## Intake actions taken (2026-08-11)

- `data/finance-context.md` — liens row filled (banded)
- `deliverables/net-proceeds-scenarios.md` — regenerated (v3) with the lien band
- `data/todos.json` — payoff-letters + full-commitment todos added
- `DEAL_BRIEF.md` — financing note + timeline row added
