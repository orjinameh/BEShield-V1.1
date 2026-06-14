"use client";

const CARDS = [
  {
    title: "Decentralized Oracle Array",
    body: "Independent verification nodes evaluate distinct data streams—covering ledger history, transaction velocity, account signing configurations, and pool liquidity—preventing shared systemic failure modes.",
  },
  {
    title: "Dynamic Consensus Routing",
    body: "The active verification layout changes per transaction block. An adversary who analyzes today's oracle subset cannot predict tomorrow's matrix, minimizing structural attack surfaces.",
  },
  {
    title: "On-Chain Attestation Trail",
    body: "Every multi-node verification verdict is cryptographically aggregated and recorded as an immutable ledger event, creating a tamper-evident audit trail verifiable by any counterparty.",
  },
];

export function DifferentiatorsSection() {
  return (
    <section
      id="platform"
      className="border-t border-surface-border"
    >
      <div className="max-w-7xl mx-auto px-8 py-28">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-ink-tertiary font-semibold mb-4">
            Why BEShield
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink mb-5">
            Security that doesn't rely on secrecy
          </h2>
          <p className="text-[17px] text-ink-secondary leading-relaxed">
            BEShield assumes attackers may map out network paths. Defensive resilience
            derives entirely from decentralized Byzantine consensus—not from obscurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-surface-raised border border-surface-border rounded-xl p-7"
            >
              <h3 className="font-display text-[17px] font-semibold text-ink mb-3 tracking-tight">
                {card.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}