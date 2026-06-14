import { MOCK_CONVERSATIONS } from "@/lib/mock-data";
import { formatRelativeTime } from "@/lib/utils";

export default function AuditTrailPage() {
  const withConsensus = MOCK_CONVERSATIONS.filter((c) => c.consensus);

  return (
    <div className="flex flex-col h-full">
      <div className="h-14 border-b border-surface-border px-6 flex items-center">
        <h1 className="font-display font-semibold text-[15px] text-ink tracking-tight">
          Audit Trail
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="border border-surface-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-border bg-surface-raised">
                {["Timestamp", "Subject", "Verdict", "Confidence", "Nodes", "Attestation"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-semibold text-ink-tertiary uppercase tracking-widest"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {withConsensus.map((conv) => (
                <tr key={conv.id} className="hover:bg-surface-raised transition-colors">
                  <td className="px-4 py-3 text-xs text-ink-tertiary whitespace-nowrap">
                    {formatRelativeTime(conv.consensus!.timestamp)}
                  </td>
                  <td className="px-4 py-3 text-ink max-w-[200px] truncate">
                    {conv.subject}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wide ${
                        conv.consensus!.verdict === "flag"
                          ? "text-red-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {conv.consensus!.verdict}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-ink-secondary">
                    {Math.round(conv.consensus!.confidence * 100)}%
                  </td>
                  <td className="px-4 py-3 text-xs text-ink-tertiary">
                    {conv.consensus!.activeNodes.length}
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-[10px] text-ink-tertiary font-mono">
                      {conv.consensus!.attestationHash.slice(0, 16)}…
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink-tertiary mt-4">
          All records are cryptographically attested and cannot be altered after the fact.
        </p>
      </div>
    </div>
  );
}
