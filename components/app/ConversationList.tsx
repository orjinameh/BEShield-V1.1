"use client";

import Link from "next/link";
import { RiskBadge } from "./RiskBadge";
import type { Conversation } from "@/types";
import { formatRelativeTime } from "@/lib/utils";

export function ConversationList({ conversations }: { conversations: Conversation[] }) {
  return (
    <div className="divide-y divide-surface-border">
      {conversations.map((conv) => (
        <Link
          key={conv.id}
          href={`/dashboard/investigation/${conv.id}`}
          className="flex items-start gap-4 px-6 py-4 hover:bg-surface-raised transition-colors group"
        >
          {/* Risk indicator bar */}
          <div
            className={`mt-1 w-0.5 h-10 rounded-full flex-shrink-0 ${
              {
                critical: "bg-red-500",
                high: "bg-orange-500",
                medium: "bg-yellow-500",
                low: "bg-blue-400",
                clear: "bg-emerald-400",
              }[conv.riskLevel]
            }`}
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4 mb-1">
              <span className="text-sm font-medium text-ink truncate group-hover:text-white transition-colors">
                {conv.subject}
              </span>
              <span className="text-xs text-ink-tertiary flex-shrink-0">
                {formatRelativeTime(conv.lastActivity)}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-ink-tertiary truncate">
                {conv.participants.join(" · ")}
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-2">
            {conv.hasPaymentRequest && (
              <span className="text-[10px] font-medium text-ink-tertiary border border-surface-border-hi rounded px-1.5 py-0.5">
                Payment request
              </span>
            )}
            <RiskBadge level={conv.riskLevel} />
          </div>
        </Link>
      ))}
    </div>
  );
}