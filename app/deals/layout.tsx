import type { ReactNode } from "react";
import { getDeal } from "@/lib/deals/store";
import { DealNav } from "./DealNav";

export default async function DealsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const deal = await getDeal();
  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#242424] dark:bg-[#14181a] dark:text-[#e8eae4]">
      <header className="border-b border-[#e7e1d5] bg-[#faf8f3]/80 backdrop-blur dark:border-[#2b3234] dark:bg-[#14181a]/80 sticky top-0 z-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-5 w-1.5 rounded-full bg-[#8a5a2b]"
                aria-hidden
              />
              <h1 className="text-lg font-semibold text-[#1f3a3d] dark:text-[#e8eae4]">
                Deal Room
              </h1>
            </div>
            <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
              {deal.address} · {deal.city}, {deal.state} {deal.zip}
            </p>
          </div>
          <DealNav />
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-6">{children}</main>
      <footer className="mx-auto max-w-5xl px-5 pb-8 pt-2 text-[11px] text-neutral-400 dark:text-neutral-600">
        Internal working tool · figures are estimates, not legal or financial
        advice · shared source of truth with the deal-room files.
      </footer>
    </div>
  );
}
