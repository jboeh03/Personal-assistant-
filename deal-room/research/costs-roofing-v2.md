# Roof-Package Repair Costs v2 — RS-1, RS-2, RS-3, EG-2 Re-Scoped Against THIS House

**as_of: 2026-08-08** · Prepared by deal-cost-analyst · Market: Cincinnati / Hamilton County, OH
**Supersedes for these four items:** [costs-roofing.md](costs-roofing.md) (v1, 2026-08-07). RS-6 (chimney) and RS-4/RS-5 (gutters) are **not** re-scoped here; v1 and costs-gutters-radon.md still govern those.

**Why v2 exists:** the seller challenged the v1 bands as too low ("won't the roof repair be more?"). v1 priced the findings as generic national repair scopes. v2 re-prices them against the specific house and adds the two tail risks v1 flagged but did not price: **shingle-matching failure** (RS-1) and **hidden sheathing spread** (RS-2).

**Methods caveat (carried from v1, still true):** cost-guide and local-roofer domains (Angi, HomeGuide, HomeAdvisor, Empire, Brandstetter, OpenbooQ, etc.) are egress-blocked in this research environment; numbers were captured from search-result excerpts attributed to those pages, not the pages directly. Two independent sources still required per number; confidence capped at **medium**. The first real Cincinnati contractor quote outranks everything in this file.

## House assumptions (LABELED — `deal-room/data/house-facts.md` did not exist at either check, start and end of this analysis)

| Assumption | Value | Basis |
|---|---|---|
| Structure | 2-story 1974 masonry (brick) colonial, wood siding at rear upper, attached garage | ASSUMED per task fallback — verify against house-facts.md when written |
| Finished area | ~2,800–3,500 sq ft | ASSUMED |
| Roof | 2014 architectural asphalt, est. **25–35 squares** total | ASSUMED |
| Pitch | Colonial-typical 6/12–8/12: borderline-walkable, moderate (not extreme) steepness premium | INFERENCE from house type |
| RS-1 slope ("front lower roof") | est. **4–7 squares** | INFERENCE — lower front plane / porch-garage roof on a colonial |
| RS-2 slope ("left side main upper roof") | est. **6–10 squares** | INFERENCE — one plane of the main gable at full 2-story height |

Every downstream number that depends on these is INFERENCE, not EVIDENCE, and is marked accordingly.

## What changed vs v1, and why

1. **2-story / steepness premiums were missing from v1.** EVIDENCE: second-story work adds a material-hoisting surcharge of ~2–3% of project cost, with story-factor surcharges running **up to 25%** for second/third-story work (equipment setup, safety rigging, hoisting) ([Angi roof-repair cost guide](https://www.angi.com/articles/how-much-do-roof-repairs-cost.htm), [LocalServiceCalculator](https://localservicecalculator.com/roof-repair)). Steep pitch (>6:12) adds ~30% on repair calculators, or shows up as $3.00–$7.00/sq ft high-complexity labor plus $0.50–$1.50/sq ft access/safety rigging ([RoofPitch.net calculator](https://roofpitch.net/roof-replacement-cost-calculator/), [Housecall Pro roofing prices](https://www.housecallpro.com/resources/roofing-prices/), [Fiddler Roofing](https://fiddlerroofingnm.com/will-it-cost-more-to-fix-a-steeply-pitched-roof/)). INFERENCE: RS-2 and EG-2 sit at full 2-story height → apply **+10–25%** to their labor-heavy bands. RS-1 is the *lower* front roof → smaller adder (~+5–10%). This lifts v1's mid/high ends; it barely moves the lows (minimum charges already floor them).
2. **Shingle-matching risk was unpriced.** The 2014 colorway is 12 years old — squarely in the window where discontinuation is likely (evidence below). v1's RS-1 high of $1,500 assumed a match exists. v2 prices the **slope re-shingle fallback**.
3. **RS-2 hidden-damage tiers.** v1 said "the high end is not a ceiling" but stopped there. v2 prices three tiers, including the roofer-refuses-spot-repair scenario. The inspector's own note points this direction: findings.json records his framing that this condition is "**commonly reconciled at failure or when new roof coverings are installed**" — i.e., the trade's default remedy is re-roofing the affected covering, which is exactly the lever a roofer will pull if the deck looks bad on tear-off.
4. **Brick changes RS-3.** v1 priced kick-outs against generic (implicitly vinyl/wood) walls where siding lifts off in minutes. On a masonry colonial, wall/gutter transitions on brick faces need **counterflashing cut (reglet) into the mortar joint with a diamond grinder** — slower, more skilled work (evidence below).
5. **Honest upside kept:** the lows barely move. If a color match exists, the sheathing is really 3–6 sheets, and the kick-out walls turn out to be the wood-sided sections, the v1 numbers were roughly right. The seller's instinct is about the *tail*, and the tail is real — but it is also **capped**: no rational seller pays >$15K in slope-by-slope repairs when a full Cincinnati re-roof runs $8K–$16K (evidence below).

## Per-item table (revised)

| Item | Low | Likely | High | Surprise ceiling | Ceiling trigger (named) |
|---|---|---|---|---|---|
| RS-1 wind-creased shingles, front lower roof | $400 | $800–$1,500 | $1,800 | **$6,000** (slope re-shingle, 4–7 sq) | ITEL/supplier confirms 2014 colorway discontinued **and** buyers reject closest-match patch at 08/25 re-inspection |
| RS-2 buckled sheathing, left main upper roof | $1,000 | $1,500–$3,000 (tier a–b) | $5,500 (tier b) | **$11,000** (tier c: re-deck + re-shingle slope, 6–10 sq) | Tear-off reveals moisture spread beyond ~6 sheets, or roofer declines spot-repair and bids the slope |
| RS-3 kick-out flashing, brick + wood walls | $700 | $1,200–$1,800 | $2,200 | **$2,800** | All 4 assumed locations are brick-abutting (reglet counterflashing) + stained mortar/siding remediation |
| EG-2 loose rear upper wood siding | $200 | $300–$600 | $900 | **$1,200** | Rot found behind siding (consistent with RS-3 staining); staging at 2-story eave |
| **4-item package (bundled, 1 mobilization)** | **~$2,300** | **~$4,000–$6,500** | **~$9,500** | **~$15,000–$18,000** (full-reroof cap — see below) | Matching fails **AND** sheathing spreads: at that point slope-repair math loses to whole-roof replacement |

All lows assume single-mobilization bundling; all four items are one roofing crew except possible masonry help on RS-3.

## Evidence and derivations

### RS-1 — creased shingles, and the matching problem (the big one)

- EVIDENCE (base repair, unchanged from v1): shingle repair $350–$1,900, one square $500–$1,500 ([Angi](https://www.angi.com/articles/cost-to-repair-asphalt-shingles.htm)); minor wind-damage repair usually <$1,000 ([HomeAdvisor](https://www.homeadvisor.com/cost/roofing/asphalt-shingle-roof-repair)). INFERENCE: +5–10% lower-roof access adder → **$400–$1,800**.
- EVIDENCE (matching risk): roofs installed **10–20 years ago have a "good chance" the specific color is no longer in production** — manufacturers routinely retire colorways, and granule-source/manufacturing changes make even same-name products differ ([SK Roofing & Construction](https://skroofingandconstruction.com/why-cant-i-find-a-color-match-for-my-3-tab-asphalt-shingle-repair/), [Native Sons Roofing](https://nativesonsroofing.com/why-new-shingle-repairs-might-not-match-your-old-roof/), [Renovations Roofing](https://www.renovationsroofing.com/blog/roofing-shingles)). 12 years also means the existing shingles are weathered, so even a same-SKU patch reads visibly different ([Mattsson Roofing](https://www.mattssonroofing.com/posts/new-shingles-dont-match-old-roof)).
- EVIDENCE (what roofers do): sample-to-supplier comparison; ITEL Laboratories lab match (industry standard — report states whether the product is discontinued and names the nearest current equivalent) ([Restoration Roofing](https://www.restorationroofing.com/what-is-an-itel-report-for-a-roof-insurance-claim/), [Bill Ragan Roofing](https://www.billraganroofing.com/blog/what-itel-report-roof-damage-insurance-claim)); harvesting shingles from an inconspicuous slope; and **slope blending — re-shingling the entire architectural plane peak-to-eave** so the color break lands on a natural line ([Mattermind discontinued-shingle guide](https://mattermind.blog/discontinued-shingle-colours-guide), [Renovations Roofing](https://www.renovationsroofing.com/blog/roofing-shingles)).
- EVIDENCE (slope re-shingle pricing): architectural shingles **$400–$600/square installed** nationally ($100–$250/sq material + $300–$350/sq labor) ([HomeGuide](https://homeguide.com/costs/architectural-shingles-cost), [Angi](https://www.angi.com/articles/architectural-shingles-cost.htm)); Cincinnati-specific **~$400–$850/square** for architectural ([Roof Revivers Cincinnati guide](https://roofrevivers.com/blog/roof-replacement-cost-in-2026-what-you-ll-actually-pay-by-location-and-material), [HomeBlue Cincinnati](https://www.homeblue.com/roof-replacement/cincinnati-oh-roof-replacement-cost.htm)); tear-off $1–$3/sq ft ([HomeGuide roof-replacement](https://homeguide.com/costs/roof-replacement-cost)).
- INFERENCE (derivation): assumed front-lower slope 4–7 squares × $450–$700/sq installed = $1,800–$4,900; + tear-off/disposal where not included, mobilization minimum, modest access adder → **slope re-shingle scenario $2,500–$5,500, ceiling $6,000**. This only fires if the match fails **and** the buyers object to a visible patch at re-inspection — the Defect Notice says "repair or secure," so a sound-but-mismatched repair arguably complies; the risk is a re-inspection fight three days before closing. RECOMMENDATION: have the roofer run the color question (supplier sample or ITEL) **before** work starts, and get the buyers' agent to accept "closest available match" in writing. That one email caps RS-1 at ~$1,800.

### RS-2 — sheathing: three tiers

- EVIDENCE (unit costs): decking $70–$100/sheet installed, $2–$5/sq ft overall, labor $1.50–$3.00/sq ft ([HomeGuide decking](https://homeguide.com/costs/cost-to-replace-roof-decking)); plywood ~$100–$135/sheet installed, OSB sheets $25–$75 ([SK Roofing decking guide](https://skroofingandconstruction.com/roof-decking-replacement-cost/)); ~$150/sheet on few-sheet-only jobs ([MyHomePros](https://myhomepros.com/roofing/how-much-does-it-cost-to-replace-roof-decking/)).
- EVIDENCE (hidden-damage mechanics): "impossible to know how much decking has rot until the shingles are removed" — extra decking is the classic tear-off change order ([IKO](https://www.iko.com/na/blog/rotted-roof-deck-how-to-replace-roof-sheathing/)); rot/soft spots spread, so roofers push comprehensive replacement over spot fixes ([Artisan Quality Roofing](https://artisanqualityroofing.com/rotted-roof-sheathing/), [Werner Roofing](https://www.wernerroofing.com/blog/can-i-replace-part-of-my-roof)). The inspector's own framing (findings.json note): condition "commonly reconciled at failure or when **new roof coverings are installed**."
- INFERENCE (tier derivations, all include +10–25% upper-roof 2-story premium):
  - **Tier a — as inspected (3–6 sheets):** v1 composite $800–$2,500 + premium → **$1,000–$3,000**.
  - **Tier b — spread found on tear-off (10–15 sheets):** decking 10–15 × $70–$135 = $700–$2,000; tear-off/re-shingle ~3–5 squares over it at $450–$700/sq = $1,600–$3,900 → **$2,500–$5,500**.
  - **Tier c — roofer refuses spot-repair, bids re-deck + re-shingle of the slope (6–10 sq):** re-shingle $2,700–$7,000 (per-square evidence above) + re-deck 600–1,000 sq ft × $2–$5 = $1,200–$5,000, partially overlapping labor → **$4,500–$11,000**, most plausibly landing $6,000–$9,000.
- Probability texture (INFERENCE): buckling visible from the attic at ≥3 locations on a 51-year-old house with a 2014 re-roof (decking likely original 1974 boards/ply) makes tier b a live possibility, not a scare story. Tier c is the roofer's-judgment scenario — mitigate by asking bidders **up front** for their per-sheet change-order rate in writing.

### RS-3 — kick-out flashing on a brick house

- EVIDENCE (base, from v1): single kick-out retrofit $250–$400, ~$935 where siding had to come off ([RoofingTalk](https://www.roofingtalk.com/threads/retro-fitting-kick-out-flashing-how-hard-is-it-to-diy.11931/), [JustAnswer](https://www.justanswer.com/home-improvement/nu86u-cost-install-flashing-home.html)).
- EVIDENCE (masonry adder): on brick, the counterflashing must be set in a **reglet — a groove diamond-ground ≥1" into the mortar joint** (never the brick), metal inserted, wedged, and sealed ([Copper Development Association](https://copper.org/applications/architecture/arch_dhb/arch-details/flashings_copings/counterflashing.php), [Professional Roofing / NRCA](https://www.professionalroofing.net/Articles/Anatomy-of-a-regleted-counterflashing--11-01-2022/5129)). Contractor pricing for reglet counterflashing runs **$25–$45/linear foot** (tear-out/replace, one metro's quotes) vs ~$15/LF for simple new aluminum work ([Contractor Talk](https://www.contractortalk.com/threads/chimney-counter-flashing.147772/)).
- INFERENCE (derivation): a kick-out junction needs ~3–6 LF of counterflashing → **+$100–$270 per brick-abutting location** over the vinyl/wood baseline. Assumed 2–4 locations (unchanged from v1), mix of brick and wood walls unknown → **$700–$2,200; ceiling $2,800** if all four are brick and the stained wall needs mortar/siding remediation. Honest upside: any location on the wood-sided sections prices at the old v1 rate.

### EG-2 — rear upper wood siding

- EVIDENCE (unchanged from v1): wood siding repair $4–$13/sq ft ([HomeGuide](https://homeguide.com/costs/siding-repair-cost)), labor $2–$5/sq ft or $40–$90/hr ([HomeAdvisor](https://www.homeadvisor.com/cost/siding/wood-siding-repair)).
- INFERENCE: "rear **upper**… near roofline" on a 2-story house = extension-ladder/staging work at the eave; apply the story-factor logic (up to 25% adder, [Angi](https://www.angi.com/articles/how-much-do-roof-repairs-cost.htm)) → **$200–$900 bundled with the roof crew already staged; ceiling $1,200** if rot is found behind it (plausible given RS-3's water-staining is on a wall). Cheapest item; the only reason it moved is height.

## Revised package totals

- **4-item scope (RS-1+RS-2+RS-3+EG-2, one mobilization):** low **~$2,300** / most-likely **~$4,000–$6,500** / high **~$9,500** / surprise ceiling **~$15,000–$18,000**.
- **Ceiling logic (the honest cap):** sum-of-item-ceilings is ~$21,000, but that number should never be paid. EVIDENCE: full architectural re-roof in Cincinnati runs **$8,000–$13,500 typical**, "$8,000–$14,000 for most 25-square homes," architectural range to $12,500–$22,500 on large/complex roofs ([HomeBlue Cincinnati](https://www.homeblue.com/roof-replacement/cincinnati-oh-roof-replacement-cost.htm), [Shamrock Restoration Cincinnati](https://shamrockrestorationllc.com/blog/roof-replacement-cost-financing-cincinnati-2026/), [Roof Revivers](https://roofrevivers.com/blog/roof-replacement-cost-in-2026-what-you-ll-actually-pay-by-location-and-material)); v1's local anchors said $10K–$16K+ ([Empire Contractors](https://empirecontractorsllc.com/how-much-does-roof-repair-cost-in-cincinnati-2025-price-guide/), [Brandstetter](https://www.brandstetterroofing.com/how-much-does-roof-replacement-cost-in-cincinnati-oh/)). INFERENCE: at 25–35 assumed squares this house re-roofs for roughly **$11,000–$18,000** — so the surprise ceiling for the repair package is effectively the re-roof number. If BOTH triggers fire (colorway dead + deck spread), the right move is negotiating a credit/re-roof, not stacking slope repairs. That is also the strongest counter to the seller's "won't it be more?" worry: **it cannot run away past the cost of a new roof.**
- **5-item roof package (add RS-6 chimney, unchanged $350–$3,500 from v1):** low ~$2,650 / most-likely **~$5,000–$7,500** / high ~$13,000 / ceiling ~$19,000–$21,500. vs v1's $2,500–$7,500 (most-likely $3,500–$5,000): the low held, the most-likely moved up ~$1,500–$2,500 (2-story premiums + brick kick-outs), and the tail is now priced instead of hand-waved.
- Timeline note (unchanged from v1): repairs fit the 08/11–08/24 window if calls go out immediately; a **tier-c or slope re-shingle scenario discovered mid-window is the schedule killer** — which is one more reason to force the color-match question and per-sheet change-order rates into the bids before work starts, and to keep the insurance wind-claim angle (RS-1 "wind-bent" language) alive as a cost offset if the ceiling scenarios fire.

## findings.json patch

```json
{
  "as_of": "2026-08-08",
  "patch_note": "v2 re-scope vs specific house (2-story masonry colonial ASSUMED - house-facts.md absent at write time). Adds surprise_ceiling_usd with named triggers. RS-6, RS-4, RS-5, RADON unchanged.",
  "findings": [
    {
      "id": "RS-1",
      "cost_low_usd": 400,
      "cost_high_usd": 1800,
      "surprise_ceiling_usd": 6000,
      "ceiling_trigger": "2014 colorway confirmed discontinued (supplier/ITEL) AND buyers reject closest-match patch at re-inspection -> re-shingle front lower slope (assumed 4-7 squares @ $450-700/sq installed)",
      "cost_confidence": "inferred",
      "sources": [
        "https://www.angi.com/articles/cost-to-repair-asphalt-shingles.htm",
        "https://www.homeadvisor.com/cost/roofing/asphalt-shingle-roof-repair",
        "https://skroofingandconstruction.com/why-cant-i-find-a-color-match-for-my-3-tab-asphalt-shingle-repair/",
        "https://nativesonsroofing.com/why-new-shingle-repairs-might-not-match-your-old-roof/",
        "https://mattermind.blog/discontinued-shingle-colours-guide",
        "https://www.restorationroofing.com/what-is-an-itel-report-for-a-roof-insurance-claim/",
        "https://homeguide.com/costs/architectural-shingles-cost",
        "https://roofrevivers.com/blog/roof-replacement-cost-in-2026-what-you-ll-actually-pay-by-location-and-material"
      ]
    },
    {
      "id": "RS-2",
      "cost_low_usd": 1000,
      "cost_high_usd": 5500,
      "surprise_ceiling_usd": 11000,
      "ceiling_trigger": "Tear-off reveals moisture spread beyond ~6 sheets, or roofer declines spot-repair and bids re-deck + re-shingle of left main upper slope (assumed 6-10 squares); inspector notes condition is 'commonly reconciled... when new roof coverings are installed'",
      "cost_confidence": "inferred",
      "tiers": {
        "a_as_inspected_3_6_sheets": [1000, 3000],
        "b_spread_10_15_sheets": [2500, 5500],
        "c_redeck_reshingle_slope": [4500, 11000]
      },
      "sources": [
        "https://homeguide.com/costs/cost-to-replace-roof-decking",
        "https://skroofingandconstruction.com/roof-decking-replacement-cost/",
        "https://myhomepros.com/roofing/how-much-does-it-cost-to-replace-roof-decking/",
        "https://www.iko.com/na/blog/rotted-roof-deck-how-to-replace-roof-sheathing/",
        "https://artisanqualityroofing.com/rotted-roof-sheathing/",
        "https://www.angi.com/articles/how-much-do-roof-repairs-cost.htm"
      ]
    },
    {
      "id": "RS-3",
      "cost_low_usd": 700,
      "cost_high_usd": 2200,
      "surprise_ceiling_usd": 2800,
      "ceiling_trigger": "All assumed 2-4 locations are brick-abutting (reglet counterflashing ground into mortar @ ~$25-45/LF) plus stained-wall remediation",
      "cost_confidence": "inferred",
      "sources": [
        "https://www.roofingtalk.com/threads/retro-fitting-kick-out-flashing-how-hard-is-it-to-diy.11931/",
        "https://copper.org/applications/architecture/arch_dhb/arch-details/flashings_copings/counterflashing.php",
        "https://www.professionalroofing.net/Articles/Anatomy-of-a-regleted-counterflashing--11-01-2022/5129",
        "https://www.contractortalk.com/threads/chimney-counter-flashing.147772/"
      ]
    },
    {
      "id": "EG-2",
      "cost_low_usd": 200,
      "cost_high_usd": 900,
      "surprise_ceiling_usd": 1200,
      "ceiling_trigger": "Rot found behind loose siding at 2-story eave (consistent with RS-3 water staining); staging required",
      "cost_confidence": "inferred",
      "sources": [
        "https://homeguide.com/costs/siding-repair-cost",
        "https://www.homeadvisor.com/cost/siding/wood-siding-repair",
        "https://www.angi.com/articles/how-much-do-roof-repairs-cost.htm"
      ]
    }
  ],
  "bundle_v2": {
    "scope": "RS-1+RS-2+RS-3+EG-2 bundled, one mobilization (excl. RS-6 chimney, gutters, radon)",
    "total_low_usd": 2300,
    "most_likely_usd_range": [4000, 6500],
    "total_high_usd": 9500,
    "surprise_ceiling_usd": 18000,
    "ceiling_note": "Ceiling = full Cincinnati re-roof cost (assumed 25-35 sq @ ~$450-700/sq installed = ~$11K-18K); fires only if shingle matching fails AND sheathing spread found. Item ceilings sum to ~$21K but rational cap is the re-roof number.",
    "cost_confidence": "inferred"
  }
}
```

## Source list (v2 additions)

- 2-story/steep premiums: [Angi roof repair cost](https://www.angi.com/articles/how-much-do-roof-repairs-cost.htm) · [LocalServiceCalculator](https://localservicecalculator.com/roof-repair) · [RoofPitch.net](https://roofpitch.net/roof-replacement-cost-calculator/) · [Housecall Pro](https://www.housecallpro.com/resources/roofing-prices/) · [Fiddler Roofing](https://fiddlerroofingnm.com/will-it-cost-more-to-fix-a-steeply-pitched-roof/) · [Harper Exteriors](https://harperexteriors.net/roofing/how-roof-pitch-affects-price-of-a-new-roof/)
- Shingle matching: [SK Roofing](https://skroofingandconstruction.com/why-cant-i-find-a-color-match-for-my-3-tab-asphalt-shingle-repair/) · [Native Sons](https://nativesonsroofing.com/why-new-shingle-repairs-might-not-match-your-old-roof/) · [Mattermind](https://mattermind.blog/discontinued-shingle-colours-guide) · [Renovations Roofing](https://www.renovationsroofing.com/blog/roofing-shingles) · [Mattsson Roofing](https://www.mattssonroofing.com/posts/new-shingles-dont-match-old-roof) · [Restoration Roofing (ITEL)](https://www.restorationroofing.com/what-is-an-itel-report-for-a-roof-insurance-claim/) · [Bill Ragan (ITEL)](https://www.billraganroofing.com/blog/what-itel-report-roof-damage-insurance-claim)
- Per-square / Cincinnati: [HomeGuide architectural](https://homeguide.com/costs/architectural-shingles-cost) · [Angi architectural](https://www.angi.com/articles/architectural-shingles-cost.htm) · [HomeGuide replacement](https://homeguide.com/costs/roof-replacement-cost) · [Roof Revivers](https://roofrevivers.com/blog/roof-replacement-cost-in-2026-what-you-ll-actually-pay-by-location-and-material) · [Shamrock Restoration](https://shamrockrestorationllc.com/blog/roof-replacement-cost-financing-cincinnati-2026/) · [HomeBlue Cincinnati](https://www.homeblue.com/roof-replacement/cincinnati-oh-roof-replacement-cost.htm)
- Decking/hidden rot: [HomeGuide decking](https://homeguide.com/costs/cost-to-replace-roof-decking) · [SK Roofing decking](https://skroofingandconstruction.com/roof-decking-replacement-cost/) · [MyHomePros](https://myhomepros.com/roofing/how-much-does-it-cost-to-replace-roof-decking/) · [IKO](https://www.iko.com/na/blog/rotted-roof-deck-how-to-replace-roof-sheathing/) · [Artisan Quality Roofing](https://artisanqualityroofing.com/rotted-roof-sheathing/) · [Werner Roofing](https://www.wernerroofing.com/blog/can-i-replace-part-of-my-roof)
- Masonry counterflashing: [Copper.org](https://copper.org/applications/architecture/arch_dhb/arch-details/flashings_copings/counterflashing.php) · [Professional Roofing/NRCA](https://www.professionalroofing.net/Articles/Anatomy-of-a-regleted-counterflashing--11-01-2022/5129) · [Contractor Talk](https://www.contractortalk.com/threads/chimney-counter-flashing.147772/)
