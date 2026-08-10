import { getBundle, getFindings, getMedia } from "@/lib/deals/store";
import { fmtBand, fmtUsd } from "@/lib/deals/format";
import { Card, SectionTitle } from "../ui";
import { RepairCard } from "./RepairCard";

export const dynamic = "force-dynamic";

export default async function RepairsPage() {
  const [findings, media, bundle] = await Promise.all([
    getFindings(),
    getMedia(),
    getBundle(),
  ]);

  const inAsk = findings.filter((f) => f.status === "in-ask");
  const waived = findings.filter((f) => f.status === "waived");
  const mediaFor = (id: string) => media.filter((m) => m.findingId === id);
  const allIn = bundle?.all_in;

  return (
    <div className="space-y-6">
      <Card className="p-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionTitle hint={`${inAsk.length} items the buyers asked for`}>
              Repair tracker
            </SectionTitle>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Set status, assign who does the work, log the actual cost, and
              attach before/after photos + receipts for the buyers&rsquo;
              re-inspection.
            </p>
          </div>
          {allIn?.likely ? (
            <div className="text-right">
              <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-400">
                All-in (most likely)
              </div>
              <div className="text-xl font-semibold tabular-nums text-[#003a70] dark:text-[#c6dae7]">
                {fmtBand(allIn.likely[0], allIn.likely[1])}
              </div>
              <div className="text-xs text-neutral-400">
                ceiling {fmtUsd(allIn.rational_ceiling)}
              </div>
            </div>
          ) : null}
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {inAsk.map((f) => (
          <RepairCard key={f.id} finding={f} media={mediaFor(f.id)} />
        ))}
      </div>

      {waived.length ? (
        <details className="group">
          <summary className="cursor-pointer list-none rounded-lg border border-[#e5e9ec] bg-white/60 px-4 py-2 text-sm font-medium text-neutral-600 dark:border-[#22303c] dark:bg-[#111a24]/60 dark:text-neutral-300">
            <span className="mr-1 inline-block text-[#98a4ae] transition group-open:rotate-90">
              &rsaquo;
            </span>
            {waived.length} findings the buyers waived (still on record for
            disclosure)
          </summary>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {waived.map((f) => (
              <div
                key={f.id}
                className="rounded-lg border border-[#e5e9ec] bg-white/70 p-3 text-sm dark:border-[#22303c] dark:bg-[#111a24]/70"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[11px] font-semibold text-neutral-500 dark:bg-neutral-800">
                    {f.id}
                  </span>
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    {f.area}
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </details>
      ) : null}
    </div>
  );
}
