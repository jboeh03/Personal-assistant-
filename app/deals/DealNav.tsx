"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/deals", label: "Dashboard" },
  { href: "/deals/repairs", label: "Repairs" },
  { href: "/deals/documents", label: "Documents" },
  { href: "/deals/timeline", label: "Timeline" },
];

export function DealNav() {
  const path = usePathname();
  return (
    <nav className="flex gap-1">
      {TABS.map((t) => {
        const active =
          t.href === "/deals" ? path === "/deals" : path.startsWith(t.href);
        return (
          <Link
            key={t.href}
            href={t.href}
            className={
              "rounded-lg px-3 py-1.5 text-sm font-medium transition " +
              (active
                ? "bg-[#1f3a3d] text-white dark:bg-[#cfe0d6] dark:text-[#14181a]"
                : "text-neutral-600 hover:bg-[#efeae0] dark:text-neutral-300 dark:hover:bg-[#232a2c]")
            }
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
