import { notFound } from "next/navigation";
import { MOCK_CONVERSATIONS } from "@/lib/mock-data";
import { getDetectorById, formatRelativeTime } from "@/lib/utils";
import { RiskBadge } from "@/components/app/RiskBadge";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return MOCK_CONVERSATIONS.map((c) => ({ id: c.id }));
}

export default function InvestigationPage({ params }: Props) {
  const conv = MOCK_CONVERSATIONS.find((c) => c.id === params.id);
  if (!conv) notFound();

  const { consensus } = conv;

  return (
    <div className="max-w-4xl mx-auto px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-6 mb-3">
          <h1 className="font-display font-bold text-2xl text-ink tracking-tight">
            {conv.subject}
          </h1>
          <RiskBadge level={conv.riskLevel} />
        </div>
        <div className="flex items-center gap-6 text-sm text-ink-tertiary">
          <span>{conv.participants.join(" · ")}</span>
          <span>·</span>
          <span>{conv.messageCount} messages</span>
          <span>·</span>
          <span>Last activity {formatRelativeTime(conv.lastActivity)}</span>
        </div>
      </div>

      {consensus ? (
        <div className="space-y-5">
          {/* Consensus summary */}
          <div className="border border-surface-border rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-surface-border bg-surface-raised flex items-center justify-between">
              <span className="text-sm font-semibold text-ink">Consensus Result</span>
              <div className="flex items-center gap-4">
                <span className="text-xs text-ink-tertiary">
                  {consensus.activeNodes.length} nodes active
                </span>
                <span
                  className={`text-sm font-bold ${
                    consensus.verdict === "flag" ? "text-red-400" : "text-emerald-400"
                  }`}
                >
                  {consensus.verdict === "flag" ? "FLAGGED" : "CLEAR"}
                </span>
                <span className="text-xs text-ink-tertiary">
                  {Math.round(consensus.confidence * 100)}% confidence
                </span>
              </div>
            </div>

            {/* Confidence bar */}
            <div className="px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-ink-tertiary w-24 flex-shrink-0">Confidence</span>
                <div className="flex-1 h-1.5 bg-surface-overlay rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      consensus.verdict === "flag" ? "bg-red-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${consensus.confidence * 100}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-ink w-8 text-right">
                  {Math.round(consensus.confidence * 100)}%
                </span>
              </div>
            </div>
          </div>

          {/* Verification path */}
          <div className="border border-surface-border rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-surface-border bg-surface-raised">
              <span className="text-sm font-semibold text-ink">Verification Path</span>
              <p className="text-xs text-ink-tertiary mt-0.5">
                Active nodes for this investigation. Configuration is not disclosed externally.
              </p>
            </div>
            <div className="divide-y divide-surface-border">
              {consensus.votes.map((vote) => {
                const detector = getDetectorById(vote.detectorId);
                return (
                  <div key={vote.detectorId} className="px-6 py-4">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <span className="text-sm font-medium text-ink">{detector.label}</span>
                        <p className="text-xs text-ink-tertiary mt-0.5">{detector.description}</p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="flex-1 w-20 h-1 bg-surface-overlay rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              vote.verdict === "flag"
                                ? "bg-red-500"
                                : vote.verdict === "clear"
                                ? "bg-emerald-500"
                                : "bg-yellow-500"
                            }`}
                            style={{ width: `${vote.confidence * 100}%` }}
                          />
                        </div>
                        <span
                          className={`text-xs font-semibold uppercase tracking-wide ${
                            vote.verdict === "flag"
                              ? "text-red-400"
                              : vote.verdict === "clear"
                              ? "text-emerald-400"
                              : "text-yellow-500"
                          }`}
                        >
                          {vote.verdict}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-ink-tertiary leading-relaxed bg-surface-overlay rounded px-3 py-2 border border-surface-border">
                      {vote.evidence}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Attestation record */}
          <div className="border border-surface-border rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-surface-border bg-surface-raised">
              <span className="text-sm font-semibold text-ink">Attestation Record</span>
            </div>
            <div className="px-6 py-4 space-y-3">
              <Row label="Recorded at" value={new Date(consensus.timestamp).toLocaleString()} />
              <Row label="Active nodes" value={consensus.activeNodes.join(", ")} />
              <Row label="Verdict" value={consensus.verdict.toUpperCase()} />
              <div>
                <span className="text-xs text-ink-tertiary block mb-1">Attestation hash</span>
                <code className="text-xs font-mono text-ink-secondary break-all bg-surface-overlay rounded px-3 py-2 block border border-surface-border">
                  {consensus.attestationHash}
                </code>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-surface-border rounded-xl px-8 py-12 text-center">
          <p className="text-ink-secondary text-sm">No consensus result available for this conversation.</p>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-6">
      <span className="text-xs text-ink-tertiary w-28 flex-shrink-0 pt-0.5">{label}</span>
      <span className="text-xs text-ink font-medium">{value}</span>
    </div>
  );
}
