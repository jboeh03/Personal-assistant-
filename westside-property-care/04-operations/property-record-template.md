# Property Record Template

**Owner:** `wpc-ops` · **Status:** internal working file — one copy per member, never
customer-facing

This is the file that lets a solo operator hold six properties in his head — which gate
sticks, which window wells fill, which pot dries out first. Fill one out at the walkthrough,
before the first visit, and update it after every visit. It is the source for the property
boundary referenced in `service-agreement.md` §5, and the record of what a given property was
found to have and what changed on it since.

**This is internal**, but there is no module arithmetic to keep off customer-facing copy any
more — the membership is one flat price (`CANON.md` §3). What stays internal here is the
property detail itself: access codes, quirks, and the running history.

File naming, per `01-brand/brand-brief.md`: `WPC513 · PROPERTY [0#]`.

---

## WPC513 · PROPERTY [0#]

### 1. Member and property

| Field | |
|---|---|
| Member name(s) | |
| Full property address | |
| Phone | |
| Email | |
| Effective date | |
| Route | [ A / B ] |
| Route day | [ Monday / Friday ], twice each calendar month |
| Membership price | **$279/month, flat** — `service-agreement.md` §1 |
| Agreement signed | [ Y / N ] — **signature date:** |
| Founding Member | **Derived from the signature date above — not tracked separately.** Signed on or before **February 28, 2027** → Founding Member, rate locked through **October 31, 2027** (pro-rated remainder of 2026 + full 2027 season). Signed after February 28, 2027 → standard rate, no lock. No limit on how many members qualify — `service-agreement.md` §2 |
| Card on file | [ Y / N ] |

### 2. Access

| Field | |
|---|---|
| Gate code / key location | |
| Alarm code (if the serviced area requires disarming anything) | |
| Lockbox | |
| Which entrance to use | |
| Parking instructions | |
| Anything else about getting onto the property | |

### 3. Pool details

*(Skip this section entirely if the property has no pool.)*

| Field | |
|---|---|
| In-ground / above-ground | |
| Approximate size | |
| Skimmer basket location(s) | |
| Pump basket / equipment pad location | |
| Filter type *(backwashed under the membership when appropriate; other filter service is not — `service-agreement.md` §6.1)* | |
| Salt system | [ Y / N ] — cell type / brand, and where the panel or readout is | |
| Automatic pool vacuum / robot | [ Y / N ] — model, and where the debris container is | |
| Known quirks (e.g., "west skimmer lid is cracked, lift gently") | |

### 4. Outdoor kitchen details

*(Skip this section entirely if the property has no outdoor kitchen.)*

| Field | |
|---|---|
| Grill make / type | |
| Flat-top | [ Y / N ] |
| Side burner | [ Y / N ] |
| Countertop material | |
| Sink | [ Y / N ] — water line location: |
| Known quirks | |

### 5. Trash, water, and electrical

| Field | |
|---|---|
| Designated debris container(s) and location | |
| Container capacity note *(what "up to capacity" means for this property — `service-agreement.md` §6.6)* | |
| Trash pickup day | |
| Outdoor water shutoff location(s) | |
| Hose bib locations | |
| Exterior outlets / GFCI notes | |

### 6. Pets

| Field | |
|---|---|
| Pet(s) and temperament | |
| Where they're secured during visits | |
| Anything special about handling them or the yard while they're present | |

### 7. Special instructions

*Free text. This is where the specificity that makes the business defensible actually lives
— the gate that sticks, the fern that dries out, the neighbor's dog that barks at the blower.
Write down anything a substitute (there isn't one, but write it anyway) would need to know.*

```



```

### 8. Known issues — being monitored, not urgent

*Things worth watching but not yet worth a recommendation. Move to §10 once they're worth
naming a price for.*

| First noted | Issue | Location | Status |
|---|---|---|---|
| | | | |

### 9. Property changes — notification only, no price effect

*The membership price does not change based on what the property has
(`service-agreement.md` §3) — this log exists so the visit plan and the property file stay
accurate when the property itself changes, not to recalculate a bill.*

| Date noted | Change | Notice given | Property file updated | Notes |
|---|---|---|---|---|
| | | | | |

### 10. Recommended future projects

*Every recommendation from a service report belongs here, whether it was accepted, declined,
or is still pending — this is the attach-rate record `operating-model.md` §7.2 depends on.*

| Date recommended | What | Location | Price quoted | Member response | Status |
|---|---|---|---|---|---|
| | | | | [pending / accepted / declined] | [not started / scheduled / completed] |

### 11. Service history

*Update after every visit — this is the running record `operating-model.md` §8 rule 5 exists
to produce. One row per visit.*

| Date | Visit # of 16 | Route day kept? | Work performed (summary) | Finding / recommendation | Report sent |
|---|---|---|---|---|---|
| | | [Y / rescheduled to __] | | | [Y — date] |

---

## Related files

- `visit-sop.md` — the procedure each service-history row documents
- `service-report-templates.md` — the customer-facing message each row's "report sent"
  column tracks
- `service-agreement.md` §1, §2, §3 — the customer-facing price, Founding Member lock, and
  property-change clause this file's §1 and §9 support internally
- `estimate-templates.md` — where a §10 recommendation goes once it's ready to be quoted
  formally
