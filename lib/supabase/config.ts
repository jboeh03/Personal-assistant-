// Supabase connection values.
//
// These are PUBLISHABLE (anon) credentials — designed to be exposed in the
// browser and protected by Row Level Security.
//
// There is deliberately NO hardcoded fallback: the previous default pointed at
// a project that no longer exists, which made auth fail with an opaque network
// error instead of a clear "not configured" state. When these are unset the app
// runs without auth (the deal room is public by design) rather than throwing.
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/** True only when both values are present, so callers can degrade gracefully. */
export const isSupabaseConfigured =
  SUPABASE_URL.startsWith("https://") && SUPABASE_ANON_KEY.length > 0;

/** This deployment fronts only the Stonington deal room (hides /login, /chat). */
export const isDealRoomOnly = process.env.DEAL_ROOM_ONLY === "1";
