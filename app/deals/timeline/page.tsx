import { getDeal, getEvents, getMilestones } from "@/lib/deals/store";
import { daysUntil, fmtDate, relativeDays } from "@/lib/deals/format";
import { Card, Pill, SectionTitle } from "../ui";
import { AddEvent } from "./AddEvent";

export const dynamic = "force-dynamic";

export default async function TimelinePage() {
  const [deal, milestones, events] = await Promise.all([
    getDeal(),
    getMilestones(),
    getEvents(),
  ]);
  const tz = deal.timezone;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      {/* Milestones */}
      <Card className="p-5">
        <SectionTitle>Milestones</SectionTitle>
        <ol className="relative space-y-4 border-l border-[#e5e9ec] pl-4 dark:border-[#22303c]">
          {milestones.map((m) => {
            const d = daysUntil(m.date, tz);
            const passed = d < 0 || m.status === "done";
            const critical = m.critical;
            return (
              <li key={m.id} className="relative">
                <span
                  className={
                    "absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full ring-2 ring-[#ffffff] dark:ring-[#0d141c] " +
                    (m.status === "done"
                      ? "bg-[#003a70]"
                      : critical
                        ? "bg-[#b91c1c]"
                        : "bg-[#003a70]")
                  }
                />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-[#101820] dark:text-[#eef4f8]">
                    {fmtDate(m.date)}
                  </span>
                  {!passed ? (
                    <Pill cls="bg-[#f4f6f8] text-[#003a70] dark:bg-[#182530] dark:text-[#c6dae7]">
                      {relativeDays(d)}
                    </Pill>
                  ) : m.status === "done" ? (
                    <Pill cls="bg-[#c6dae7] text-[#003a70] dark:bg-[#16283a] dark:text-[#c6dae7]">
                      done
                    </Pill>
                  ) : (
                    <Pill>past</Pill>
                  )}
                  {m.conditional ? <Pill>conditional</Pill> : null}
                </div>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  {m.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </Card>

      {/* Activity log */}
      <Card className="p-5">
        <SectionTitle hint={`${events.length} entries`}>
          Activity log
        </SectionTitle>
        <AddEvent />
        <ol className="mt-4 space-y-3">
          {events.map((e, i) => (
            <li
              key={i}
              className="border-l-2 border-[#f4f6f8] pl-3 dark:border-[#182530]"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs tabular-nums text-neutral-400">
                  {e.date}
                </span>
                <Pill>{e.source}</Pill>
              </div>
              <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-300">
                {e.text}
              </p>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}
