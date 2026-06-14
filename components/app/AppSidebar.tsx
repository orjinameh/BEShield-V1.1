"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/dashboard", label: "Live Monitor", icon: "◉" },
  { href: "/dashboard/queue", label: "Investigation Queue", icon: "⊞", badge: 2 },
  { href: "/dashboard/history", label: "Audit Trail", icon: "≡" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r border-[var(--color-border)] flex flex-col flex-shrink-0">
      <div className="h-14 flex items-center px-5 border-b border-[var(--color-border)]">
        <Link href="/" className="font-display font-bold text-[16px] tracking-tight text-[var(--color-ink)]">
          BEShield
        </Link>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-0.5">
        {NAV.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors",
                isActive
                  ? "bg-[var(--color-surface-overlay)] text-[var(--color-ink)] font-medium"
                  : "text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-raised)]"
              )}
            >
              <span className="text-base leading-none opacity-70">{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="bg-[var(--color-signal)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[var(--color-border)] px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[var(--color-signal-dim)] border border-[var(--color-signal)] flex items-center justify-center text-[11px] font-bold text-[var(--color-ink)]">
            JM
          </div>
          <div>
            <div className="text-xs font-medium text-[var(--color-ink)]">J. Mitchell</div>
            <div className="text-[10px] text-[var(--color-ink-tertiary)]">Security Analyst</div>
          </div>
        </div>
      </div>
    </aside>
  );
}