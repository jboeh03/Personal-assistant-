-- Song Cockpit schema — run once in the Supabase SQL editor (or via CLI/MCP).
-- Per-user access model (matches conversations/messages): every table carries a
-- user_id and a single RLS policy gating on auth.uid(). Multi-user later is a
-- policy relaxation, not a schema change.

-- ── core tables ──────────────────────────────────────────────────────────────
create table if not exists cockpit_songs (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null default auth.uid(),
  title              text not null default 'Untitled',
  seed               text,
  status             text not null default 'draft',   -- draft | finished
  current_version_id uuid,                             -- points at cockpit_versions (no FK: avoids cycle)
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

create table if not exists cockpit_versions (
  id            uuid primary key default gen_random_uuid(),
  song_id       uuid not null references cockpit_songs(id) on delete cascade,
  user_id       uuid not null default auth.uid(),
  parent_id     uuid references cockpit_versions(id) on delete set null,
  label         text,
  lyrics        text not null default '',
  controls      jsonb not null default '{}'::jsonb,    -- { tempo, key, style, model }
  audio_url     text,
  audio_path    text,
  duration_sec  integer,
  created_at    timestamptz not null default now()
);

create table if not exists cockpit_sections (
  id          uuid primary key default gen_random_uuid(),
  version_id  uuid not null references cockpit_versions(id) on delete cascade,
  user_id     uuid not null default auth.uid(),
  idx         integer not null default 0,
  kind        text not null default 'verse',           -- verse|chorus|bridge|intro|outro|other
  label       text,
  text        text not null default ''
);

create table if not exists cockpit_suggestions (
  id                 uuid primary key default gen_random_uuid(),
  version_id         uuid not null references cockpit_versions(id) on delete cascade,
  user_id            uuid not null default auth.uid(),
  section_id         uuid references cockpit_sections(id) on delete cascade,
  line_start         integer,
  line_end           integer,
  judge              text not null default 'inline',   -- hardtruth|craft|vocal|aandr|verdict|inline
  kind               text not null default 'suggestion', -- suggestion|praise|warning
  comment            text not null default '',
  replacement        text,
  status             text not null default 'open',      -- open|accepted|rejected|edited
  applied_version_id uuid references cockpit_versions(id) on delete set null,
  created_at         timestamptz not null default now()
);

create table if not exists cockpit_panel_reviews (
  id          uuid primary key default gen_random_uuid(),
  version_id  uuid not null references cockpit_versions(id) on delete cascade,
  user_id     uuid not null default auth.uid(),
  context     text,
  output      jsonb not null default '{}'::jsonb,        -- { hardtruth, craft, vocal, aandr, verdict }
  created_at  timestamptz not null default now()
);

create table if not exists cockpit_jobs (
  id                uuid primary key default gen_random_uuid(),
  user_id           uuid not null default auth.uid(),
  song_id           uuid references cockpit_songs(id) on delete cascade,
  version_id        uuid references cockpit_versions(id) on delete set null,
  kind              text not null default 'generate',    -- generate|stems|voiceclone
  status            text not null default 'queued',      -- queued|running|done|error
  provider          text not null default 'replicate',
  provider_ref      text,
  error             text,
  result_version_id uuid references cockpit_versions(id) on delete set null,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create table if not exists cockpit_taste (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null default auth.uid(),
  kind          text not null,                            -- pick|accept|reject
  song_id       uuid references cockpit_songs(id) on delete cascade,
  version_id    uuid references cockpit_versions(id) on delete set null,
  suggestion_id uuid references cockpit_suggestions(id) on delete set null,
  note          text,
  created_at    timestamptz not null default now()
);

-- ── RLS: one owner-only policy per table ─────────────────────────────────────
do $$
declare t text;
begin
  foreach t in array array[
    'cockpit_songs','cockpit_versions','cockpit_sections','cockpit_suggestions',
    'cockpit_panel_reviews','cockpit_jobs','cockpit_taste'
  ] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "%s owner" on public.%I', t, t);
    execute format(
      'create policy "%s owner" on public.%I for all to authenticated
         using (user_id = (select auth.uid()))
         with check (user_id = (select auth.uid()))', t, t);
  end loop;
end $$;

create index if not exists cockpit_versions_song_idx    on cockpit_versions(song_id);
create index if not exists cockpit_sections_version_idx on cockpit_sections(version_id);
create index if not exists cockpit_suggestions_ver_idx  on cockpit_suggestions(version_id);
create index if not exists cockpit_jobs_status_idx      on cockpit_jobs(user_id, status);
create index if not exists cockpit_songs_user_idx       on cockpit_songs(user_id, updated_at desc);

-- ── Storage bucket for demo audio (public read for zero-friction playback) ───
insert into storage.buckets (id, name, public)
values ('cockpit-audio', 'cockpit-audio', true)
on conflict (id) do nothing;

drop policy if exists "cockpit-audio read"   on storage.objects;
drop policy if exists "cockpit-audio write"  on storage.objects;
drop policy if exists "cockpit-audio update" on storage.objects;

-- Public read; authenticated users may write/update only under their own uid/ prefix.
create policy "cockpit-audio read" on storage.objects
  for select to anon, authenticated using (bucket_id = 'cockpit-audio');
create policy "cockpit-audio write" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'cockpit-audio' and (storage.foldername(name))[1] = (select auth.uid())::text);
create policy "cockpit-audio update" on storage.objects
  for update to authenticated
  using (bucket_id = 'cockpit-audio' and (storage.foldername(name))[1] = (select auth.uid())::text);
