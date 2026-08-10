// Runtime capability flags for the cockpit.
//
// The file-backed store only works where the filesystem is writable (local
// dev). On Vercel the FS is read-only, so the app runs view-only until
// DEALS_BACKEND=supabase is configured — at which point editing turns on
// everywhere with no code change.

export const isSupabaseBacked = process.env.DEALS_BACKEND === "supabase";

/** True when the deployment can persist edits. */
export const canEdit = isSupabaseBacked || process.env.NODE_ENV !== "production";

export const READ_ONLY_MESSAGE =
  "View-only: connect the database to enable editing from anywhere.";
