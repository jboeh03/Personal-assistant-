"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/deals", label: "Dashboard" },
  { href: "/deals/repairs", label: "Repairs" },
  { href: "/deals/todos", label: "To-Do" },
  { href: "/deals/documents", label: "Documents" },
  { href: "/deals/signatures", label: "Signatures" },
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
                ? "bg-[#101820] text-white dark:bg-[#c6dae7] dark:text-[#0d141c]"
                : "text-neutral-600 hover:bg-[#f4f6f8] dark:text-neutral-300 dark:hover:bg-[#182530]")
            }
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
