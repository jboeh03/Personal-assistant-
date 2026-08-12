-- Deal Cockpit schema — run once in the Supabase SQL editor (or via CLI/MCP).
-- MVP access model: one private deal, obscure URL + app passcode. RLS is on
-- with permissive policies for the anon (publishable) key; tighten to per-user
-- auth in phase 2 when sharing/roles land.

create table if not exists deal_state (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists deal_media (
  id          uuid primary key,
  kind        text not null,
  finding_id  text,
  label       text,
  filename    text not null,
  url         text not null,
  mime        text,
  size        integer,
  uploaded_at timestamptz not null default now()
);

create table if not exists deal_journal (
  id     bigint generated always as identity primary key,
  at     timestamptz not null default now(),
  source text not null default 'human',
  body   text not null
);

alter table deal_state   enable row level security;
alter table deal_media   enable row level security;
alter table deal_journal enable row level security;

drop policy if exists "deal_state rw"   on deal_state;
drop policy if exists "deal_media rw"   on deal_media;
drop policy if exists "deal_journal rw" on deal_journal;

create policy "deal_state rw"   on deal_state   for all to anon, authenticated using (true) with check (true);
create policy "deal_media rw"   on deal_media   for all to anon, authenticated using (true) with check (true);
create policy "deal_journal rw" on deal_journal for all to anon, authenticated using (true) with check (true);

-- Storage bucket for photos / receipts / documents (public read).
insert into storage.buckets (id, name, public)
values ('deal-uploads', 'deal-uploads', true)
on conflict (id) do nothing;

drop policy if exists "deal-uploads read"   on storage.objects;
drop policy if exists "deal-uploads write"  on storage.objects;
drop policy if exists "deal-uploads update" on storage.objects;

create policy "deal-uploads read"   on storage.objects for select to anon, authenticated using (bucket_id = 'deal-uploads');
create policy "deal-uploads write"  on storage.objects for insert to anon, authenticated with check (bucket_id = 'deal-uploads');
create policy "deal-uploads update" on storage.objects for update to anon, authenticated using (bucket_id = 'deal-uploads');

-- ── E-signature requests (DocuSeal-backed) — added 2026-08-12 ────────────────
-- Run this block in the Supabase SQL editor if the table doesn't exist yet.

create table if not exists deal_signatures (
  id                      uuid primary key,
  title                   text not null,
  status                  text not null default 'pending',
  docuseal_template_id    integer,
  docuseal_submission_id  integer,
  signers                 jsonb not null default '[]'::jsonb,
  source_url              text,
  signed_media_id         uuid,
  created_at              timestamptz not null default now(),
  completed_at            timestamptz
);

alter table deal_signatures enable row level security;

drop policy if exists "deal_signatures rw" on deal_signatures;
create policy "deal_signatures rw" on deal_signatures
  for all to anon, authenticated using (true) with check (true);
