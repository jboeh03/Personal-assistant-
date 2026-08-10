// Domain types for the Deal Cockpit.
//
// The cockpit is file-backed: it reads and writes the same `deal-room/` files
// the assistant maintains, so the web app and the agent share one source of
// truth. This module defines the shapes; `store.ts` does the IO.

export type FindingClassification = "in-ask" | "waived";

/** App-managed execution status, distinct from the buyer's in-ask/waived list. */
export type WorkStatus =
  | "not_started"
  | "quoted"
  | "agreed"
  | "scheduled"
  | "in_progress"
  | "done";

export type Assignee =
  | "unassigned"
  | "contractor"
  | "agent_contractor"
  | "diy"
  | "credit";

export type CostConfidence = "cited" | "inferred" | "unverified" | null;

export interface FindingOptions {
  contractor?: string | null;
  agent_as_contractor?: string | null;
  diy?: string | null;
}

/** One inspection finding / repair line. Extra app fields are additive so the
 * agent's existing fields are never disturbed. */
export interface Finding {
  id: string;
  area: string;
  description: string;
  status: FindingClassification;
  requested_remedy: string | null;
  cost_low_usd: number | null;
  cost_high_usd: number | null;
  cost_confidence: CostConfidence;
  surprise_ceiling_usd?: number | null;
  ceiling_trigger?: string | null;
  options?: FindingOptions | null;
  insurance_relevant?: boolean;
  notes?: string;
  sources?: string[];
  actual_quote_usd?: number | null;
  diy_progress?: string | null;

  // App-managed execution fields (persisted back into findings.json):
  work_status?: WorkStatus;
  assignee?: Assignee;
  actual_cost_usd?: number | null;
  activity?: FindingActivity[];
}

export interface FindingActivity {
  at: string; // ISO timestamp
  text: string;
}

export interface BundleBand {
  low?: number;
  likely?: [number, number];
  high?: number;
  ceiling?: number;
  rational_ceiling?: number;
  note?: string;
}

export interface Bundle {
  scope?: string;
  roof_4item?: BundleBand;
  chimney?: BundleBand;
  gutters?: BundleBand;
  radon?: BundleBand;
  all_in?: BundleBand;
  cost_confidence?: string;
}

export type MilestoneState = "open" | "done" | "conditional" | "at_risk";

export interface Milestone {
  id: string;
  date: string; // YYYY-MM-DD
  desc: string;
  critical?: boolean;
  conditional?: boolean;
  status?: MilestoneState;
}

export interface DealEvent {
  date: string; // as written in the journal
  source: string; // human | agent | trigger
  text: string;
}

export type MediaKind =
  | "before"
  | "after"
  | "receipt"
  | "warranty"
  | "document";

export interface MediaItem {
  id: string;
  kind: MediaKind;
  findingId?: string | null;
  label?: string;
  filename: string;
  url: string; // served from /deal-uploads/...
  mime?: string;
  size?: number;
  uploadedAt: string; // ISO
}

export interface DealMeta {
  address: string;
  city: string;
  state: string;
  zip: string;
  parcel?: string;
  price: number;
  earnest?: number;
  appraisalGapCover?: number;
  closingDate: string; // YYYY-MM-DD
  timezone: string;
  dealState: string;
  sellers: string;
  buyers: string;
  listingAgent: string;
  buyersAgent: string;
  title?: string;
}
