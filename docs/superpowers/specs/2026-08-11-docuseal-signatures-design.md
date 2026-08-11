# DocuSeal Document Signing — Design

**Date:** 2026-08-11
**Status:** Approved (approach A)
**Owner:** Jeff

## Problem

Doc signing between Jeff and Olivia is a pain point in the Stonington Rd deal.
Needed: upload a document from the Deal Cockpit, Jeff signs, Olivia gets a
request to sign, and once both are done the signed version is filed in the
Document vault automatically.

## Decisions Made

| Decision | Choice |
|---|---|
| Signing engine | Self-hosted [DocuSeal](https://github.com/docusealco/docuseal) (AGPL) on Railway — Docker container + Postgres, ~$5/mo. Full REST API + email included free. |
| Signing UX | Hosted signing links opened in a new tab (no embedded form — avoids Pro-license gating). |
| Olivia notification | Both: DocuSeal emails her signing link automatically when it's her turn, and the cockpit shows a copyable link for an iMessage nudge. |
| Field placement | Auto-appended signature page (approach A) — no manual field dragging. |
| Completion sync | Poll-on-load (no public webhook endpoint). Webhook can be added later. |
| Signer order | Fixed, ordered: Jeff first, then Olivia. |
| File types | PDF only for v1. |

## Architecture

```
┌─────────────────────┐         ┌──────────────────────┐
│ Next.js app (Vercel)│  REST   │ DocuSeal (Railway)   │
│  /deals/signatures  ├────────►│  templates API       │
│  API routes         │  API    │  submissions API     │
│                     │  token  │  signing pages+email │
└──────┬──────────────┘         └──────────┬───────────┘
       │ store/read                        │ emails signing link
┌──────▼──────────────┐             ┌──────▼───────┐
│ Supabase            │             │ Olivia       │
│  deal_signatures    │             │ (email +     │
│  deal_media (vault) │             │  iMessage    │
│  deal-uploads bucket│             │  nudge)      │
└─────────────────────┘             └──────────────┘
```

DocuSeal cannot run on Vercel (Rails app); it runs as its own Railway service.
The Next.js app talks to it server-side only via `X-Auth-Token`.

## Flow

1. **Create request** — Jeff picks a PDF + title in the cockpit.
   Server: `pdf-lib` appends a standard signature page (title, "Signed by"
   blocks with signature + date lines for Jeff and Olivia). Because the app
   drew the page, it knows exact field coordinates.
2. **Template + submission** — `POST {DOCUSEAL_URL}/api/templates/pdf` with the
   merged PDF and explicit `fields` (role: Jeff, role: Olivia, signature + date
   areas on the appended page). Then `POST /api/submissions` with ordered
   submitters `[Jeff, Olivia]`, `order: preserved`, `send_email: true`.
3. **Jeff signs** — cockpit shows "Sign now" (Jeff's signing URL from the
   submission response) in a new tab.
4. **Olivia's turn** — DocuSeal emails her link automatically; cockpit shows
   the same link with a copy button for iMessage.
5. **Completion sync** — on signatures page load (and via
   `GET /api/deals/signatures` from the deal monitor if desired), each pending
   row is checked with `GET /api/submissions/{id}`. When `completed`:
   download the signed PDF (and audit log URL), upload to
   `deal-uploads/documents/`, insert a `deal_media` row labeled
   "<Title> (signed)", stamp `signed_media_id` + `completed_at` on the
   signature row. Idempotent — a completed row is never re-processed.
6. **Vault** — the signed doc appears on the Documents page like any upload.

## Data Model

New table (append to `supabase/migration.sql`, same permissive-RLS MVP model
as existing tables):

```sql
create table if not exists deal_signatures (
  id                      uuid primary key,
  title                   text not null,
  status                  text not null default 'pending', -- pending | completed | declined | archived
  docuseal_template_id    integer,
  docuseal_submission_id  integer,
  signers                 jsonb not null, -- [{role,name,email,status,sign_url,signed_at}]
  source_url              text,           -- original upload in storage (not a vault row)
  signed_media_id         uuid,           -- deal_media.id of the filed signed PDF
  created_at              timestamptz not null default now(),
  completed_at            timestamptz
);
```

TypeScript: `SignatureRequest` + `SignatureSigner` types in
`lib/deals/types.ts`.

Store: `getSignatures / addSignature / updateSignature` implemented in both
`store.supabase.ts` and `store.file.ts` (file backend persists to
`deal-room/data/signatures.json`), exported through `store.ts` — the existing
dual-backend pattern.

## Components

- `lib/docuseal.ts` — thin server-only API client (create template from PDF,
  create submission, get submission, download document, re-send email).
  Reads `DOCUSEAL_URL` + `DOCUSEAL_API_TOKEN`; throws a typed
  `DocuSealUnavailableError` on connection failure.
- `lib/deals/signature-page.ts` — `pdf-lib` helper: append signature page,
  return merged PDF bytes + field coordinate list.
- `app/api/deals/signatures/route.ts` — `POST` (multipart: file, title) creates
  the request; `GET` lists rows and live-syncs pending ones (step 5).
- `app/api/deals/signatures/[id]/remind/route.ts` — `POST` re-sends Olivia's
  email via DocuSeal.
- `app/deals/signatures/page.tsx` + client components — request list with
  per-signer status pills (You ✓ / Olivia pending), Sign now, Copy link,
  Remind, link to signed PDF when done. New-request form (file + title).
- `app/deals/DealNav.tsx` — add "Signatures" tab.

Signer identities come from env vars (`SIGNER1_NAME`, `SIGNER1_EMAIL`,
`SIGNER2_NAME`, `SIGNER2_EMAIL`) — no hardcoded personal data in code, and
the emails stay out of the repo.

## Error Handling

- DocuSeal unreachable → banner on the signatures page ("Signing service
  offline"); create-request fails cleanly with the uploaded file preserved in
  storage; sync silently skips and retries next load.
- All writes gated by existing `canEdit` / `READ_ONLY_MESSAGE` view-only mode.
- Sync idempotency: rows transition `pending → completed` exactly once;
  vault insert happens before the row is stamped, and re-stamping checks
  `signed_media_id is null`.
- Input validation: PDF magic-bytes check + size cap on upload; title required.

## Infra / Ops

- Railway: DocuSeal template deploy (app + Postgres). SMTP via Resend free
  tier (`SMTP_*` env on the Railway service) so Olivia's emails send.
- Next.js env (Vercel + `.env.local`): `DOCUSEAL_URL`, `DOCUSEAL_API_TOKEN`.
  Documented in `.env.example` / `.env.local.example`.
- DocuSeal admin UI stays available to Jeff for edge cases (inline fields,
  voiding a request).

## Testing

- Unit: signature-page helper (field coordinates, page count), DocuSeal client
  (mocked fetch), sync idempotency (completed row not re-processed).
- Integration: POST create flow against a mocked DocuSeal; GET sync transitions.
- Manual E2E once Railway is live: full Jeff → Olivia → vault round-trip.

## Out of Scope (v1)

- Webhook push (poll-on-load covers it; add later for instant filing).
- Embedded signing form, non-PDF uploads, >2 signers, inline field placement,
  declining/void UX beyond status display.
