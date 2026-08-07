# Net-Proceeds Scenarios — Banded Model (v2, post-intake)

> ⚠️ **Strategy analysis, not legal advice — review with your agent and an Ohio attorney before signing.**

**as_of:** 2026-08-07 · Supersedes the v1 "concession-deltas-only" file. Payoff band, split rule, and insurance intake landed in [data/finance-context.md](../data/finance-context.md); this is now a real (banded) net-proceeds model. Liens/debts upload and commission % remain **PENDING** — regenerate via `/deal-memo net-proceeds` when they land.

## 1. Inputs

| # | Input | Band / value | Label |
|---|---|---|---|
| 1 | Sale price | **$585,000** | EVIDENCE — contract / [DEAL_BRIEF.md](../DEAL_BRIEF.md) |
| 2 | Mortgage payoff (Rocket Mortgage, sole known mortgage lien) | **$300,000–$325,000** | EVIDENCE (banded) — payoff statement dated 08/06/26; rate 2.750%; [finance-context.md](../data/finance-context.md) |
| 3 | Listing-side total commission | **5–6% = $29,250–$35,100** | INFERENCE — typical total-commission band; **pending Amy's confirmation** of the actual structure (incl. any buyer-side amount per §7(c)) |
| 4 | Hamilton County conveyance fee | **$1,755–$2,340** ($3–$4 per $1,000 on $585K; sources ambiguous on whether the $3 county rate includes the $1 state rate) **+ $0.50/parcel** (1 parcel) | EVIDENCE (rate structure, Hamilton County Auditor) / INFERENCE (exact total within band) — as previously cited in v1 |
| 5 | Deed prep + seller-side title settlement fees | **~$500–$1,500** | INFERENCE — typical Ohio seller-side title/deed charges; §23 obligation is EVIDENCE; actual quote pending from Fidelity Land Title |
| 6 | Property tax proration (Ohio **long proration**, §21 — seller pays through closing) | Annual tax **~$8.6K/yr band** (county tax ~$4,317 semi-annual per escrow schedule); Jan 1–Aug 28 ≈ 240/365 of the year → **~$5,000–$6,000 charge** | INFERENCE — **assumption:** Ohio bills a year in arrears and the escrow account has paid all bills issued to date, so the closing charge is the accrued-but-unbilled Jan 1→08/28/26 portion credited to buyers. If a billed installment is unpaid at closing it adds on top — confirm against the county duplicate at title |
| 7 | Other liens / personal debts payable from proceeds | **PENDING upload** — model excludes; any property lien required for marketable title reduces the bands below dollar-for-dollar | PENDING |
| 8 | Split rule | **50/50** | EVIDENCE — confirmed by Jeff, per finance-context.md; subject to counsel/separation agreement |
| 9 | Earnest money $10,000 | Applies to price at closing — buyer-side funds, **not** a seller deduction | EVIDENCE — contract §3 |

> **Payoff statement is STALE.** The 08/06/26 statement was good through 08/06. A **fresh payoff good through 08/28+ (ideally into early September)** must be ordered before closing. Daily interest accrues at **~$25/day** (band) — 08/06→08/28 adds roughly **$550** of interest, which sits comfortably inside the $300–325K band used here. The **~$4K escrow balance** refunds to sellers separately ~20 business days after payoff — **excluded from closing math**, counted as a post-closing inflow (Section 4).

## 2. Baseline net proceeds BEFORE any Defect Notice concession

The math (best case uses the low end of every deduction; worst case the high end):

```
Best case:  $585,000 − $300,000 (payoff) − $29,250 (5%) − $1,756 (conveyance)
            − $500 (deed/title) − $5,000 (tax proration)          = $248,494
Worst case: $585,000 − $325,000 (payoff) − $35,100 (6%) − $2,341 (conveyance)
            − $1,500 (deed/title) − $6,000 (tax proration)        = $215,059
```

| Baseline (pre-concession, pre-liens-pending) | Band |
|---|---|
| **Net to sellers (joint)** | **~$215.1K – $248.5K** |
| **Per spouse @ 50/50** | **~$107.5K – $124.2K** |

Label: INFERENCE composite built on the EVIDENCE/INFERENCE inputs above. The ~$33K width is driven mostly by the payoff band (±$25K) and the commission band (±$5.9K) — both narrow with one document each (fresh payoff statement; Amy's commission confirmation).

## 3. Net proceeds by response branch

Concession bands trace to [findings.json](../data/findings.json) (all-in ask ~$3,800–$10,200, most likely ~$5,500–$7,700) and [COUNCIL_VERDICT.md](COUNCIL_VERDICT.md) ($5,500 Branch-A credit; ~$7,500 pure-(d)).

| Branch | Concession band | Net to sellers (joint) | Per spouse @ 50/50 | Cash-timing notes |
|---|---|---|---|---|
| **A — radon performed + $5,500 credit** (H2) | Radon ~$1,000–$2,000 pre-closing **+** $5,500 credit = **$6,500–$7,500** | **~$207.6K – $242.0K** | **~$103.8K – $121.0K** | Only the radon $1–2K is out-of-pocket before closing (installer invoice); the $5,500 deducts from proceeds at the closing table. Nothing tied up after closing. |
| **B — (b)-amended, perform all work** | **$3,800–$10,200**, most likely **$5,500–$7,700** | Full band **~$204.9K – $244.7K**; most-likely **~$207.4K – $243.0K** | Full band **~$102.4K – $122.3K** | **Worst pre-closing liquidity profile:** contractor invoices ($4–10K) are typically due before proceeds exist on 08/28 — confirm which spouse fronts what, or whether contractors will invoice at/through closing. RS-2 hidden decking can pierce the top of the band once the roof is opened. |
| **C — pure (d) credit, $7,500 all-in** | **$7,500** flat | **~$207.6K – $241.0K** | **~$103.8K – $120.5K** | $0 pre-closing cash; entire concession deducts at closing. Cleanest timing of any branch. Capped by buyers' actual settlement charges + prepaids (verify with their lender). |
| **Silence → deemed-(a)** (do not do this) | **~$5,500–$10,000+** and the band is **not a ceiling** | ~$205.1K – $243.0K *on paper* | ~$102.5K – $121.5K *on paper* | All work pre-closing out-of-pocket at the buyers' written scope with zero negotiated caps; any unfinished item at the 08/25 re-inspection hands leverage back to the buyers. The paper band excludes this execution risk — treat deemed-(a) as strictly dominated by an intentional Branch B. |

Reading it: the three deliberate branches land within ~$1–3K of each other at the midpoints — **the branch choice is about risk allocation and cash timing, not headline dollars.** A (Branch A/C) credit shifts scope-surprise risk to buyers and needs little or no pre-closing cash; Branch B keeps sellers on the hook for surprises and needs $4–10K fronted, but carries zero §15 auto-termination risk if delivered as acceptance-of-repairs.

## 4. Post-closing inflows (excluded from closing math above)

| Inflow | Band | Label / conditions |
|---|---|---|
| Rocket Mortgage escrow refund | **~$4K band**, ~20 business days after payoff | EVIDENCE (band, finance-context.md) — arrives after closing; agree in advance how a joint refund check is split 50/50 |
| Erie wind-claim offset (RS-1 wind-creased shingles) | **Up to the roof-repair cost minus the $1,000 flat deductible** — e.g., a $2.5–7.5K covered scope could return ~$1.5–6.5K; the $10K Siding & Roofing Restoration endorsement adds headroom if matching forces broader work | INFERENCE — **conditional on** (i) wind damage documented in writing + photos **BEFORE any repair**, (ii) coverage confirmation from Erie (agent: Brodbeck Porter, 513-624-0900), (iii) adjuster not attributing the damage to the RS-2 maintenance picture. Post-closing offset **only** — never delays the Defect Notice response or the repairs. See [insurance-angle.md](../research/insurance-angle.md) addendum. |

## 5. What narrows these bands

1. **Fresh Rocket payoff good through 08/28+** (order now; statement in hand is stale as of 08/06; ~$25/day interest).
2. **Commission % from Amy** (converts input #3 from INFERENCE to EVIDENCE; ±$5.9K of band width).
3. **Liens/debts upload** (input #7 — currently a silent $0 in this model).
4. **Fidelity title quote** (inputs #4–#5) and the county tax duplicate (input #6).
5. **First real contractor quote** — supersedes every repair band per findings.json.

---
*Inputs: [finance-context.md](../data/finance-context.md) · [findings.json](../data/findings.json) · [DEAL_BRIEF.md](../DEAL_BRIEF.md) · [COUNCIL_VERDICT.md](COUNCIL_VERDICT.md) · [insurance-angle.md](../research/insurance-angle.md). Regeneration trigger: any change to finance-context bands → `/deal-memo net-proceeds`.*
