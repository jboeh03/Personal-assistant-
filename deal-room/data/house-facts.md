# House Facts — 6840 Stonington Rd, Cincinnati OH 45230

**as_of:** 2026-08-08
**Parcel:** 500-0344-0036-00 (Anderson Township, Hamilton County)
**Prepared by:** deal-market-analyst (physical-facts baseline for repair scoping)

> **Access limitation (caps confidence):** The Hamilton County Auditor
> (hamiltoncountyauditor.org / wedge.hcauditor.org), Redfin, Zillow detail pages,
> Xome, and city-data.com were all **blocked by the network egress proxy** —
> direct page fetches failed. Every third-party fact below comes from
> **web-search result snippets** of property aggregators, not from the pages
> themselves. Treat third-party numbers as MEDIUM confidence pending a direct
> auditor pull. Deal-document facts are HIGH confidence.

---

## 1. Established physical facts

### EVIDENCE — from deal documents (HIGH confidence)

| Fact | Source |
|---|---|
| Built 1974 | Deal docs (Erie/inspection package) |
| Masonry construction: brick veneer + some wood siding areas (EG-1 cracked brick veneer; EG-2 rear upper wood siding) | [inspection-findings.md](../source/inspection-findings.md) |
| Full basement (radon test, basement fireplace, basement bath P-1, foundation walls SS-1/SS-2) | [inspection-findings.md](../source/inspection-findings.md) |
| Attached garage **with its own attic** (ASIV-1 garage attic framing) | [inspection-findings.md](../source/inspection-findings.md) |
| Two distinct roof levels: "front **lower** roof" (RS-1) and "left side **main upper** roof" (RS-2) — i.e., a main upper roof plus at least one lower roof section | [inspection-findings.md](../source/inspection-findings.md) |
| Roof installed 2014, composite/asphalt shingle | Deal docs (Erie policy/inspection) |
| Erie estimated dwelling replacement cost ~$524,500 | Deal docs (Erie policy) |
| Sold $585,000 July 2026 (over $575,000 ask) | [DEAL_BRIEF.md](../DEAL_BRIEF.md) |
| At least two fireplaces (basement fireplace mantle ECNI-1; fireplace flue **throats** plural F-1/F-2) | [inspection-findings.md](../source/inspection-findings.md) |
| Gutters present with wall/gutter transitions needing kick-out flashing (RS-3), multiple gutter runs (RS-4/RS-5 "multiple areas") | [inspection-findings.md](../source/inspection-findings.md) |

### EVIDENCE — from web-search snippets of aggregators (MEDIUM confidence; pages not directly verifiable)

| Fact | Value | Source (via search snippet) |
|---|---|---|
| Finished square footage | **2,619 sq ft** (two independent snippets) | [Xome — Stonington 45230](https://www.xome.com/realestate/OH/Cincinnati/45230/Stonington), [Ownerly — Stonington Rd](https://www.ownerly.com/oh/cincinnati/stonington-rd-home-details) |
| Bedrooms | **4** | same |
| Bathrooms | **3 or 4** — snippets conflict (one said "4 bd, 3 ba"; another "4 beds, 4 baths"; likely 2 full + 2 half or 3 full/1 half — **unresolved**) | [Xome](https://www.xome.com/realestate/OH/Cincinnati/45230/Stonington), [NeighborWho](https://www.neighborwho.com/Stonington-Rd-Cincinnati-OH-addresses/) |
| Lot size | **0.53 acre** | [Xome](https://www.xome.com/realestate/OH/Cincinnati/45230/Stonington) |
| Rooms | 8 total | same |
| Garage | attached, snippet says **"3–4 car"** (aggregator field; treat as "oversized 2-car or larger" until verified) | same |
| Prior sale | 2011, ~$282,300 (owner of record in 2014 assessment: Lucille Bugge Tr) | [city-data — Stonington Road tax assessments](https://www.city-data.com/hamilton-county/S/Stonington-Road-2.html) |
| 2014 assessed market value | $268,820 ($68,000 land / $200,820 building) | [city-data](https://www.city-data.com/hamilton-county/S/Stonington-Road-2.html) |
| List price on recent listing | $575,000 (matches deal docs) | search snippet citing listing aggregators |

**Discarded snippet:** one search summary claimed "last sold 8 months ago for
$399,000 ($152/sqft)". That conflicts with the known $585,000 July 2026 contract
and the $575,000 list, and $152/sqft × 2,619 ≈ $399K suggests an AVM estimate or
a different Stonington Rd property. Not used.

**Not found:** number of stories (no snippet stated it), exact garage
dimensions, footprint dimensions, roof style (gable vs hip), listing photo
descriptions/remarks about the roof. The recent listing's marketing text could
not be retrieved (all listing domains egress-blocked).

---

## 2. Stories & footprint — INFERENCE

No source states stories. Reasoning:

- The inspection distinguishes a "front lower roof" from the "left side **main
  upper** roof," and notes "rear **upper** wood siding" (EG-2) — a single-story
  ranch would not have an "upper" wall/roof vocabulary. So the house has **at
  least 1.5–2 stories** of above-grade massing.
- A 1974 Anderson Township 4-bed brick-veneer colonial/two-story is the
  archetype for this vintage and size.
- **Working assumption: 2 stories** (sensitivity below covers 1.5-story).

Footprint arithmetic (assumes the 2,619 sq ft is all above-grade, per standard
auditor practice of excluding basement):

```
House footprint  ≈ 2,619 sq ft ÷ 2 stories        ≈ 1,310 sq ft
Garage footprint ≈ 500–700 sq ft ("3–4 car" snippet; 2-car = ~480, oversized = ~700)
                   use 600 sq ft midpoint
Total ground-cover footprint ≈ 1,310 + 600         ≈ 1,910 sq ft
```

Sensitivity: if 1.5-story (finished upper half-story), footprint ≈ 2,619 ÷ 1.5 ≈
1,746 + garage ≈ **2,350 sq ft** — roof estimates below carry this as the high
band.

---

## 3. Estimated roof area — INFERENCE

**Pitch/overhang factor: 1.35** (typical 6/12–8/12 pitch for a 1974 two-story ≈
slope factor 1.12–1.20, plus ~1 ft eave/rake overhangs adding ~10–15% area; the
two-level roof adds cut-up complexity but not much plane area).

```
Base case (2-story, 600 sq ft garage):
  1,910 sq ft footprint × 1.35 = 2,579 sq ft roof plane
  ÷ 100 = 25.8 roofing squares  → ~26 squares

Low case (2-story, 2-car 480 sq ft garage, 1.30 factor):
  (1,310 + 480) × 1.30 = 2,327 sq ft → 23.3 squares

High case (1.5-story massing, 700 sq ft garage, 1.40 factor):
  (1,746 + 700) × 1.40 = 3,424 sq ft → 34.2 squares
```

**Estimate: ~26 squares base; realistic band 23–30 squares; order/waste
allowance +10% → bid quantity ~28–29 squares** for full-replacement pricing.
Cross-check: Erie's ~$524,500 replacement cost is consistent with a
2,600-sq-ft-class masonry two-story, not a sprawling ranch — supports the
2-story (lower-footprint) base case.

Note for scoping: the Defect Notice asks for **repair, not replacement**
(RS-1/RS-2 areas: front lower roof + ≥3 sheathing locations on left main
upper). The squares figure is the ceiling for a full-reroof counter-scenario;
repair scope is a small fraction of it.

---

## 4. Estimated gutter linear footage — INFERENCE

```
Combined footprint ≈ 1,910 sq ft, modeled as ~55 ft × 35 ft envelope
Perimeter ≈ 2 × (55 + 35) = 180 LF

If gable roof: gutters on eave sides only ≈ 60–75% of perimeter ≈ 110–135 LF
If hip roof:   gutters on ~all sides       ≈ ~170–180 LF
```

Roof style is unconfirmed (listing photos unreachable), so: **gutter estimate
110–180 LF; plan ~150 LF** for clean/re-secure/re-pitch pricing (RS-4/RS-5),
plus **6–8 downspout drops** (~120–160 LF of downspout on a two-story) if a
contractor prices those separately. The inspection's "multiple areas" of clogs
and the wall/gutter transition flashing issues (RS-3) confirm multiple distinct
runs, consistent with a two-level roof.

---

## 5. Chimneys — count

**EVIDENCE:** the inspection supports **at least one masonry chimney, plausibly
two** ([inspection-findings.md](../source/inspection-findings.md)):

- RS-6: "chimney crown/cap (concrete) damaged; water penetrating chimney/brick"
  — the deal-room summary uses the singular, but the task brief notes the
  underlying report references **"crowns/caps" (plural)**.
- F-1/F-2: "fireplace flue **throats** corbeled" (plural flues) + CSIA level-2
  recommended — ≥2 flues.
- ECNI-1: **basement fireplace** mantle; a main-level fireplace is implied by
  the plural flues → two fireplaces, which in a 1974 build are most often
  stacked on **one** masonry chimney with two flues.
- ASIV-1: garage attic framing stained **at chimney penetration** — a chimney
  passes through/adjacent to the garage attic. If the fireplace chimney is on
  the opposite (left/rear) side of the house, this would be a **second** chimney
  or metal flue (e.g., furnace/water-heater flue chase).

**INFERENCE: 1–2 masonry chimneys; ≥2 flues total.** For repair scoping, price
RS-6 crown/cap + flashing work assuming **two crowns/caps** until listing
photos or a contractor walk confirms — the plural "crowns/caps" reference plus
the garage-attic penetration makes a second stack a live possibility, and the
marginal cost of quoting both is small.

---

## 6. Repair-scoping baseline (summary)

| Parameter | Value | Status |
|---|---|---|
| Finished sq ft | 2,619 | EVIDENCE (aggregator snippets, MEDIUM) |
| Stories | 2 (assumed) | INFERENCE |
| Beds / baths | 4 / 3–4 (unresolved) | EVIDENCE (conflicting snippets) |
| Lot | 0.53 acre | EVIDENCE (snippet, MEDIUM) |
| Garage | attached, "3–4 car" per aggregator; own attic | EVIDENCE (mixed) |
| Footprint | ~1,910 sq ft (band 1,790–2,450) | INFERENCE |
| Roof area | ~26 squares (band 23–30; +10% waste → ~28–29 bid) | INFERENCE, factor 1.35 |
| Roof style | unknown (gable vs hip unconfirmed) | GAP |
| Gutters | ~150 LF (band 110–180) + 6–8 downspouts | INFERENCE |
| Chimneys | 1–2 masonry, ≥2 flues; quote 2 crowns | EVIDENCE + INFERENCE |
| Roof age/material | 2014 composite/asphalt (12 yrs old) | EVIDENCE (deal docs) |

**Open items to close the gaps:** (1) pull the auditor card
(wedge.hcauditor.org, parcel 5000344003600) from an unblocked network for
stories/rooms/bath split/garage sq ft/sketch footprint; (2) listing photos via
Amy Broghamer for roof style, chimney count, and gutter runs; (3) AA Home
Inspection full report for the exact "crowns/caps" language and roof sketch.
