import Link from "next/link";
import {
  getBundle,
  getDeal,
  getEvents,
  getFindings,
  getMilestones,
} from "@/lib/deals/store";
import {
  daysUntil,
  fmtBand,
  fmtDate,
  fmtUsd,
  relativeDays,
  workStatusBadge,
} from "@/lib/deals/format";
import { Card, Pill, ProgressBar, SectionTitle, Stat } from "./ui";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const [deal, findings, bundle, milestones, events] = await Promise.all([
    getDeal(),
    getFindings(),
    getBundle(),
    getMilestones(),
    getEvents(5),
  ]);

  const tz = deal.timezone;
  const response = milestones.find((m) => m.id === "defect-response");
  const closing = milestones.find((m) => m.id === "closing");
  const responseDays = response ? daysUntil(response.date, tz) : null;
  const closingDays = closing ? daysUntil(closing.date, tz) : null;

  // Nearest open, non-conditional milestone drives "what's next".
  const upcoming = milestones
    .filter((m) => m.status !== "done")
    .map((m) => ({ m, d: daysUntil(m.date, tz) }))
    .filter((x) => x.d >= 0)
    .sort((a, b) => a.d - b.d);
  const next = upcoming[0];

  const inAsk = findings.filter((f) => f.status === "in-ask");
  const done = inAsk.filter((f) => f.work_status === "done").length;

  const allIn = bundle?.all_in;
  const categories = [
    { key: "Roof pkg", band: bundle?.roof_4item },
    { key: "Chimney", band: bundle?.chimney },
    { key: "Gutters", band: bundle?.gutters },
    { key: "Radon", band: bundle?.radon },
  ];

  return (
    <div className="space-y-6">
      {/* Deal state + key facts */}
      <Card className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
            <Stat label="Sale price" value={fmtUsd(deal.price)} />
            <Stat label="Earnest" value={fmtUsd(deal.earnest)} />
            <Stat
              label="Closing"
              value={closing ? fmtDate(closing.date) : "—"}
              sub={closingDays !== null ? relativeDays(closingDays) : undefined}
            />
            <Stat
              label="State"
              value={
                <span className="text-base font-semibold">
                  {deal.dealState.replaceAll("_", " ").toLowerCase()}
                </span>
              }
            />
          </div>
        </div>
      </Card>

      {/* The clock */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card
          className={
            "p-5 " +
            (responseDays !== null && responseDays <= 1
              ? "ring-2 ring-rose-400/70 dark:ring-rose-500/50"
              : "")
          }
        >
          <SectionTitle>Response deadline</SectionTitle>
          {response ? (
            <>
              <Stat
                label={fmtDate(response.date)}
                value={`${responseDays} ${responseDays === 1 ? "day" : "days"} left`}
                danger={responseDays !== null && responseDays <= 1}
                sub="Silence = deemed agreement to all requested repairs (§15b)"
              />
            </>
          ) : (
            <p className="text-sm text-neutral-500">No deadline set.</p>
          )}
        </Card>

        <Card className="p-5">
          <SectionTitle>What&rsquo;s next</SectionTitle>
          {next ? (
            <div>
              <div className="text-sm font-medium text-[#1f3a3d] dark:text-[#e8eae4]">
                {fmtDate(next.m.date)} · {relativeDays(next.d)}
              </div>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                {next.m.desc}
              </p>
            </div>
          ) : (
            <p className="text-sm text-neutral-500">Nothing scheduled.</p>
          )}
        </Card>
      </div>

      {/* Cost roll-up */}
      <Card className="p-5">
        <SectionTitle hint="most likely · estimates, first real quote wins">
          Repair cost outlook
        </SectionTitle>
        <div className="flex flex-wrap items-end gap-6">
          <Stat
            label="All-in (everything asked)"
            value={
              allIn?.likely
                ? fmtBand(allIn.likely[0], allIn.likely[1])
                : "—"
            }
            accent
            sub={
              allIn
                ? `range ${fmtBand(allIn.low, allIn.high)} · ceiling ${fmtUsd(allIn.rational_ceiling)}`
                : undefined
            }
          />
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4">
            {categories.map((c) => (
              <div key={c.key}>
                <div className="text-[11px] font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  {c.key}
                </div>
                <div className="text-sm font-semibold tabular-nums text-[#1f3a3d] dark:text-[#e8eae4]">
                  {c.band?.likely
                    ? fmtBand(c.band.likely[0], c.band.likely[1])
                    : "—"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Repair progress + recent activity */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <SectionTitle hint={`${done} of ${inAsk.length} complete`}>
            Repair progress
          </SectionTitle>
          <ProgressBar done={done} total={inAsk.length} />
          <div className="mt-4 space-y-2">
            {inAsk.map((f) => {
              const b = workStatusBadge(f.work_status);
              return (
                <div
                  key={f.id}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <span className="truncate text-neutral-700 dark:text-neutral-300">
                    <span className="mr-1.5 text-xs text-neutral-400">
                      {f.id}
                    </span>
                    {f.description.split(";")[0].slice(0, 46)}
                  </span>
                  <Pill cls={b.cls}>{b.label}</Pill>
                </div>
              );
            })}
          </div>
          <Link
            href="/deals/repairs"
            className="mt-4 inline-block text-sm font-medium text-[#8a5a2b] hover:underline dark:text-[#d1a06a]"
          >
            Open repair tracker →
          </Link>
        </Card>

        <Card className="p-5">
          <SectionTitle hint="latest">Recent activity</SectionTitle>
          <ol className="space-y-3">
            {events.map((e, i) => (
              <li key={i} className="text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400">{e.date}</span>
                  <Pill>{e.source}</Pill>
                </div>
                <p className="mt-0.5 text-neutral-600 dark:text-neutral-300">
                  {e.text.length > 160 ? e.text.slice(0, 160) + "…" : e.text}
                </p>
              </li>
            ))}
          </ol>
          <Link
            href="/deals/timeline"
            className="mt-4 inline-block text-sm font-medium text-[#8a5a2b] hover:underline dark:text-[#d1a06a]"
          >
            Full timeline →
          </Link>
        </Card>
      </div>
    </div>
  );
}
