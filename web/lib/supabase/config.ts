// Supabase connection values for the `personal-assistant` project.
//
// These are PUBLISHABLE (anon) credentials — designed to be exposed in the
// browser and protected by Row Level Security — so shipping them as defaults is
// safe. Environment variables still take precedence if set (e.g. to point at a
// different project), but a deploy works without any build-time env config.
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://ugrguxqdhsjflygkndkv.supabase.co";

export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "sb_publishable_PMdtYA-C4HyBRth3FabnYg__s9sGaAS";
