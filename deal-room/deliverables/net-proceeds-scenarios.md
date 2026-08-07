# Net-Proceeds Scenarios — Concession Cost Deltas by Option

> ⚠️ **Strategy analysis, not legal advice — review with your agent and an Ohio attorney before signing.**
>
> **Personal financial inputs pending intake — this table shows CONCESSION COST DELTAS per option, not absolute net proceeds.** When payoff/lien/commission bands land in [data/finance-context.md](../data/finance-context.md), regenerate via `/deal-memo net-proceeds`.

**as_of:** 2026-08-07 · Sale price $585,000 · Options modeled against the **ALL-IN ask band ~$3,800–$10,200, most likely ~$5,500–$7,700** (EVIDENCE/INFERENCE composite — [findings.json](../data/findings.json) bundle note).

## 1. Known fixed costs of closing (identical across options (a)–(e); irrelevant only under (f)/termination)

| Item | Amount / band | Label |
|---|---|---|
| Seller-paid settlement charges in base contract | $0 | EVIDENCE — contract §4 / DEAL_BRIEF ("Seller-paid settlement charges in base contract: none") |
| Transfer/conveyance fees, deed prep, seller-side title settlement fees, discharge of liens/encumbrances needed for marketable title | Seller pays; $ amounts pending title quote + payoff intake | EVIDENCE (obligation, contract §23) / amounts PENDING |
| Hamilton County conveyance fee on $585,000 | **~$1,755–$2,340** ($3–$4 per $1,000: $1/1,000 state-mandated + county conveyance & permissive fee reported at $3.00/1,000; sources are ambiguous on whether the $3 includes the state $1 — confirm exact total with the [Hamilton County Auditor's calculator](https://www.hamiltoncountyauditor.org/transfercalciii/)) + **$0.50/parcel** transfer fee (1 parcel) | EVIDENCE (rate structure — [Hamilton County Auditor](https://www.hamiltoncountyauditor.org/textonly/transferfee.asp), [HomeLight Hamilton County transfer tax](https://www.homelight.com/blog/hamilton-county-transfer-tax/)) / INFERENCE (exact total within band) |
| Property tax proration — Ohio bills a year in arrears; **long proration**, seller pays taxes through closing | Accrued-but-unbilled taxes credited to buyers at closing; $ pending county duplicate. Scale anchor only: Anderson Twp median effective ~2.14%/yr → a through-08/28 long proration plausibly runs in the low-five-figures territory on a $585K valuation | EVIDENCE (method, contract §21; rate — [Ownwell Anderson Township](https://www.ownwell.com/trends/ohio/hamilton-county/anderson-township)) / INFERENCE (magnitude; NOT a computed figure — needs actual assessed value + tax duplicate) |
| Earnest money $10,000 | Applies to price at closing (not a cost) | EVIDENCE — contract §3 / finance-context.md |
| Listing-side commission | PENDING intake (structure unknown) | — |

## 2. Concession cost deltas by option

"Per-spouse" column uses a **placeholder 50/50 split rule** (INFERENCE — actual split rule pending intake in finance-context.md; counsel may direct otherwise).

| Option | Gross concession cost band | Cash-at-close timing effect | Execution-risk cost (qualitative) | Per-spouse Δ @ placeholder 50/50 |
|---|---|---|---|---|
| **(a) Agree to all** | $3,800–$10,200 (most likely $5,500–$7,700) — EVIDENCE bands / INFERENCE composite | Paid **pre-closing out of pocket** (contractor invoices due before proceeds exist) — INFERENCE; liquidity check needed | HIGH: RS-2 hidden decking can pierce the high end ("not a ceiling"); unfinished item at 08/25 re-inspection = leverage handed to buyers — EVIDENCE/INFERENCE, [costs-roofing.md](../research/costs-roofing.md) | −$1,900 to −$5,100 each (most likely −$2,750 to −$3,850) |
| **(b) As amended** (scope caps on RS-2/RS-6) | $3,800–$9,000; amendments trim the top of the band — INFERENCE on EVIDENCE bands | Same pre-closing out-of-pocket profile as (a) | MEDIUM-HIGH: same schedule race; ambiguity risk reduced by initialed scope language; 2-day Settlement fuse added — EVIDENCE (§15(c)) | −$1,900 to −$4,500 each |
| **(c) Price reduction** | ~$6,000–$8,000 (must exceed buyers' perceived cost to win a yes; only ~10% reaches buyer as cash at 90% LTV, so an efficient number skews high) — INFERENCE per [contract-timeline-analysis.md](../research/contract-timeline-analysis.md) §3 | Reduces gross at closing; **$0 pre-closing cash needed**; also trims conveyance fee ~$3–4 per $1,000 reduced (de minimis) — EVIDENCE (fee is price-based) | LOW: underwriting-proof, no contractors, no re-inspection scope; risk is acceptance, not execution | −$3,000 to −$4,000 each |
| **(d) Closing-cost credit** | ~$5,500–$7,700 sized to the all-in ask; double-capped by buyers' **actual** settlement charges + prepaids and the 6% IPC cap (≈$35,100 headroom, so only the actual-costs cap binds) — EVIDENCE (caps) / INFERENCE (sizing) | Deducted from proceeds **at closing**; $0 pre-closing cash | LOW: routine lender treatment; residual risk = credit oversized vs. buyers' actual costs (wasted dollars) — verify via buyers' agent | −$2,750 to −$3,850 each |
| **(e) Escrowed contractor funds** | Final cost = licensed bids (~$3,800–$10,200 scope), but **1.2×–1.5× of bids withheld from proceeds** → ~$4,600–$15,300 held at Fidelity until completion sign-off (Form 1004D/442) — EVIDENCE (sizing rules) / INFERENCE (applied) | **Worst timing profile:** $5K–$15K of proceeds tied up past closing, released only on completion verification — collides with payoff/lien settlement needs during separation — INFERENCE | HIGH (structural): written lender approval required; rejection can land 08/21–08/25, too late to pivot; "safety/soundness" carve-out may capture RS-2 — EVIDENCE/INFERENCE | Tie-up of −$2,300 to −$7,650 each until release; final cost −$1,900 to −$5,100 each |
| **(f) Refuse all** | $0 concession — EVIDENCE (form) | No closing occurs on rejection → **no proceeds at all in 2026 base case** | SEVERE: auto-termination 08/12; BATNA **−$20,000 to −$45,000** vs. closing plus **−$5,000 to −$13,000 carry** (2–3.5 mo. at ~$2,500–$3,500/mo); $10K earnest frozen at Fidelity pending mutual Release/court order; full ORC 5302.30 disclosure on relist — EVIDENCE/INFERENCE, [market-batna.md](../research/market-batna.md) | −$12,500 to −$29,000 each (BATNA midpoint math) |
| **H1: radon now + roof escrow** | Radon $1,000–$2,000 cash pre-closing + roof/gutter bids ($2,800–$8,300) escrowed at 1.2–1.5× → ~$3,400–$12,450 held — EVIDENCE bands / INFERENCE sizing | Small pre-closing outlay (radon); mid-size escrow tie-up past closing | MEDIUM: escrow leg carries (e)'s lender-veto risk — mitigated by conditioning the counter on written lender approval inside the Settlement Period — INFERENCE | Final cost −$1,900 to −$5,150 each; plus temporary tie-up −$1,700 to −$6,225 each |
| **H2: radon now + roof credit** ⭐ ranked #1 | Radon $1,000–$2,000 pre-closing + credit ~$2,800–$8,300 (most likely ~$4,000–$5,700) → **total ~$3,800–$10,300, most likely ~$5,000–$7,700** — EVIDENCE bands / INFERENCE composite | Only radon (~$1–2K) needed pre-closing; credit deducted at closing; **nothing tied up after closing** | LOW: radon fits pre-08/25 with 3–7 days margin (licensed ODH installer, retest <4.0); credit is routine IPC; RS-2 surprise risk transfers to buyers — EVIDENCE/INFERENCE | −$1,900 to −$5,150 each (most likely −$2,500 to −$3,850) |

## 3. Reading the table

- **Cheapest expected concession:** (a)/(b)/H2 all center near the same ~$5,500–$7,700 most-likely zone; the differentiators are *who bears scope-surprise risk* (sellers under (a)/(b); buyers under (d)/H2) and *when cash moves* (pre-closing out-of-pocket under (a)/(b); at-closing deduction under (c)/(d)/H2; post-closing tie-up under (e)/H1). INFERENCE.
- **Every negotiated option beats (f) by roughly 2×–8× its own cost.** The BATNA gap (−$20K to −$45K plus carry) is the controlling number in this file. EVIDENCE/INFERENCE — market-batna.md.
- **Liquidity flag for intake:** options (a)/(b)/H1/H2 need $1K–$10K of pre-closing cash from sellers whose proceeds arrive 08/28; confirm which spouse fronts what, and whether Amy's network invoices at/after closing. INFERENCE — resolve at finance intake.
- Fixed §23/§21 items in Section 1 are common-mode: they change *absolute* net proceeds but not the *ranking* of options — except (f), under which none of them are incurred in 2026 and far worse costs are. INFERENCE.

---
*Regeneration trigger: any edit to [data/finance-context.md](../data/finance-context.md) bands (payoff, liens, commission, split rule, wind deductible) → rerun `/deal-memo net-proceeds`. First real contractor quote supersedes all repair bands per findings.json.*
