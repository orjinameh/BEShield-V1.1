import Link from "next/link";
import { MOCK_CONVERSATIONS } from "@/lib/mock-data";
import { RiskBadge } from "@/components/app/RiskBadge";
import { formatRelativeTime } from "@/lib/utils";

export default function QueuePage() {
  const queued = MOCK_CONVERSATIONS.filter((c) =>
    ["critical", "high", "medium"].includes(c.riskLevel)
  ).sort((a, b) => {
    const order = { critical: 0, high: 1, medium: 2, low: 3, clear: 4 };
    return order[a.riskLevel] - order[b.riskLevel];
  });

  return (
    <div className="flex flex-col h-full">
      <div className="h-14 border-b border-surface-border px-6 flex items-center">
        <h1 className="font-display font-semibold text-[15px] text-ink tracking-tight">
          Investigation Queue
        </h1>
        <span className="ml-3 text-xs bg-signal/20 text-signal border border-signal/30 rounded-full px-2 py-0.5 font-semibold">
          {queued.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-surface-border">
          {queued.map((conv, idx) => (
            <Link
              key={conv.id}
              href={`/app/investigation/${conv.id}`}
              className="flex items-center gap-5 px-6 py-4 hover:bg-surface-raised transition-colors group"
            >
              <span className="text-xs text-ink-tertiary w-5 text-center">{idx + 1}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink truncate group-hover:text-white transition-colors">
                  {conv.subject}
                </p>
                <p className="text-xs text-ink-tertiary mt-0.5">
                  {conv.flaggedAt
                    ? `Flagged ${formatRelativeTime(conv.flaggedAt)}`
                    : "No flag timestamp"}
                </p>
              </div>
              <RiskBadge level={conv.riskLevel} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
