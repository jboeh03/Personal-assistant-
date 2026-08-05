# Property Record Template

**Owner:** `wpc-ops` · **Status:** internal working file — one copy per member, never
customer-facing

This is the file that lets a solo operator hold six properties in his head — which gate
sticks, which window wells fill, which pot dries out first. Fill one out at the walkthrough,
before the first visit, and update it after every visit. It is the source for the property
boundary referenced in `service-agreement.md` §5, and the source of truth for what a given
property is billed, and why.

**This is internal.** Unlike the service agreement and the service reports, this file is not
customer-facing, so the `+$60` / `+$40` module arithmetic that's banned from customer-facing
copy (`CANON.md` §3) is exactly how §9 below should be filled in.

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
| Route day | [ Monday / Friday ] of weeks 1 and 3 |
| Founding Member | [ Y / N ] — if Y, lock expires: [date, 12 months from effective date] |
| Agreement signed | [ Y / N ] — date: |
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
| Filter type *(noted for reference — not serviced under the membership; see `service-agreement.md` §6.1)* | |
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

*Things worth watching but not yet worth a recommendation. Move to §9 once they're worth
naming a price for.*

| First noted | Issue | Location | Status |
|---|---|---|---|
| | | | |

### 9. Configuration and price

*Internal only — the module arithmetic that produces the customer-facing number in
`service-agreement.md` §1.*

| Component | Applies | Amount |
|---|---|---|
| Property Care base | Always | $229 |
| + Pool Care | [ Y / N ] | +$60 if Y |
| + Outdoor Kitchen Care | [ Y / N ] | +$40 if Y |
| **Current monthly price** | | **$[ ]** |

**Configuration history** *(log every change under `service-agreement.md` §3 — property
changes, notice given, effective date, and how it interacted with the Founding Member lock
if applicable)*

| Date noted | Change | Old config → new config | Notice given | New price effective | Founding lock note |
|---|---|---|---|---|---|
| | | | | | |

### 10. Recommended future projects

*Every recommendation from a service report belongs here, whether it was accepted, declined,
or is still pending — this is the attach-rate record `operating-model.md` §6.2 depends on.*

| Date recommended | What | Location | Price quoted | Member response | Status |
|---|---|---|---|---|---|
| | | | | [pending / accepted / declined] | [not started / scheduled / completed] |

### 11. Service history

*Update after every visit — this is the running record `operating-model.md` §7 rule 5 exists
to produce. One row per visit.*

| Date | Season | Route day kept? | Work performed (summary) | Finding / recommendation | Report sent |
|---|---|---|---|---|---|
| | [Green / Dormant] | [Y / rescheduled to __] | | | [Y — date] |

---

## Related files

- `visit-sop.md` — the procedure each service-history row documents
- `service-report-templates.md` — the customer-facing message each row's "report sent"
  column tracks
- `service-agreement.md` §1, §3 — the customer-facing price and property-change clause this
  file's §9 supports internally
- `estimate-templates.md` — where a §10 recommendation goes once it's ready to be quoted
  formally
