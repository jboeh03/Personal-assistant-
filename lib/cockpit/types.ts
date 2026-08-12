// Song Cockpit domain types (mirror the Supabase schema in migration-cockpit.sql).

export type SongStatus = "draft" | "finished";
export type JudgeKey = "hardtruth" | "craft" | "vocal" | "aandr" | "verdict";
export type SuggestionStatus = "open" | "accepted" | "rejected" | "edited";
export type SuggestionKind = "suggestion" | "praise" | "warning";
export type JobKind = "generate" | "stems" | "voiceclone";
export type JobStatus = "queued" | "running" | "done" | "error";

export type Controls = {
  tempo?: number;
  key?: string;
  style?: string;
  model?: string;
};

export type Song = {
  id: string;
  user_id: string;
  title: string;
  seed: string | null;
  status: SongStatus;
  current_version_id: string | null;
  created_at: string;
  updated_at: string;
};

export type Version = {
  id: string;
  song_id: string;
  user_id: string;
  parent_id: string | null;
  label: string | null;
  lyrics: string;
  controls: Controls;
  audio_url: string | null;
  audio_path: string | null;
  duration_sec: number | null;
  created_at: string;
};

export type Section = {
  id: string;
  version_id: string;
  user_id: string;
  idx: number;
  kind: string;
  label: string | null;
  text: string;
};

export type Suggestion = {
  id: string;
  version_id: string;
  user_id: string;
  section_id: string | null;
  line_start: number | null;
  line_end: number | null;
  judge: string;
  kind: SuggestionKind;
  comment: string;
  replacement: string | null;
  status: SuggestionStatus;
  applied_version_id: string | null;
  created_at: string;
};

export type PanelReview = {
  id: string;
  version_id: string;
  user_id: string;
  context: string | null;
  output: Partial<Record<JudgeKey, string>>;
  created_at: string;
};

export type Job = {
  id: string;
  user_id: string;
  song_id: string | null;
  version_id: string | null;
  kind: JobKind;
  status: JobStatus;
  provider: string;
  provider_ref: string | null;
  error: string | null;
  result_version_id: string | null;
  created_at: string;
  updated_at: string;
};
