import type { MailboxHealth } from "@/types";

export function MailboxHealthBar({ health }: { health: MailboxHealth }) {
  const stats = [
    { label: "Monitored conversations", value: health.monitored },
    { label: "Flagged", value: health.flagged, accent: "text-red-400" },
    { label: "Cleared", value: health.cleared, accent: "text-emerald-400" },
    { label: "Pending review", value: health.pendingReview, accent: "text-yellow-500" },
  ];

  return (
    <div className="border-b border-surface-border px-6 py-3 flex items-center gap-8">
      {stats.map((s) => (
        <div key={s.label} className="flex items-center gap-2">
          <span className={`font-display font-bold text-base ${s.accent ?? "text-ink"}`}>
            {s.value}
          </span>
          <span className="text-xs text-ink-tertiary">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
