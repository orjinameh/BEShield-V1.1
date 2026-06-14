"use client";

import React from 'react';
import Link from 'next/link';
import { MOCK_CONVERSATIONS } from "@/lib/mock-data";
import { RiskBadge } from "@/components/app/RiskBadge";
import { formatRelativeTime } from "@/lib/utils";

export default function DashboardHub() {
  return (
    <div className="min-h-screen bg-surface-base text-ink p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-display">Security Investigations</h1>
          <p className="text-xs text-ink-secondary mt-1">Select an active verification query payload to review node consensus details.</p>
        </div>

        <div className="border border-surface-border rounded-xl overflow-hidden bg-surface-raised/50 divide-y divide-surface-border">
          {MOCK_CONVERSATIONS.map((conv) => (
            <Link 
              key={conv.id} 
              href={`/dashboard/investigation/${conv.id}`}
              className="block p-5 hover:bg-surface-overlay/40 transition group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-sm font-semibold text-ink group-hover:text-signal transition">
                    {conv.subject}
                  </h2>
                  <p className="text-xs text-ink-tertiary">
                    {conv.participants.join(" · ")}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-ink-tertiary font-mono">
                    {formatRelativeTime(conv.lastActivity)}
                  </span>
                  <RiskBadge level={conv.riskLevel} />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}