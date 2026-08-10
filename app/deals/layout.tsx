import type { ReactNode } from "react";
import Image from "next/image";
import { Fraunces, Jost } from "next/font/google";
import { getDeal } from "@/lib/deals/store";
import { DealNav } from "./DealNav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export default async function DealsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const deal = await getDeal();
  return (
    <div
      className={`deal-shell ${jost.variable} ${fraunces.variable} min-h-screen bg-[#ffffff] text-[#101820] dark:bg-[#0d141c] dark:text-[#eef4f8]`}
    >
      <header className="sticky top-0 z-10 border-b border-[#e5e9ec] bg-[#ffffff]/85 backdrop-blur dark:border-[#22303c] dark:bg-[#0d141c]/85">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {/* Codex logo — dark wordmark on light, white wordmark on dark */}
            <Image
              src="/brand/codex-logo-horizontal.png"
              alt="Codex Homes"
              width={132}
              height={26}
              priority
              className="h-6 w-auto dark:hidden"
            />
            <Image
              src="/brand/codex-logo-horizontal-white.png"
              alt="Codex Homes"
              width={132}
              height={26}
              priority
              className="hidden h-6 w-auto dark:block"
            />
            <span
              className="h-5 w-px bg-[#e5e9ec] dark:bg-[#22303c]"
              aria-hidden
            />
            <div>
              <p className="font-display text-base leading-none text-[#101820] dark:text-[#eef4f8]">
                Stonington Sale
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#98a4ae]">
                Deal Room
              </p>
            </div>
          </div>
          <DealNav />
        </div>
        <div className="mx-auto max-w-5xl px-5 pb-3">
          <p className="text-xs text-[#5b6770] dark:text-[#98a4ae]">
            {deal.address} · {deal.city}, {deal.state} {deal.zip}
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-6">{children}</main>
      <footer className="mx-auto max-w-5xl px-5 pb-8 pt-2 text-[11px] text-[#98a4ae]">
        Internal working tool · figures are estimates, not legal or financial
        advice · shared source of truth with the deal-room files.
      </footer>
    </div>
  );
}
