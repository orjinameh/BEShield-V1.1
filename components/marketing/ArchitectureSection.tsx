"use client";

import { useState, useEffect } from "react";

const STEPS = [
  {
    label: "Escrow Initialization",
    detail:
      "A transaction invocation securely locks the designated USDC payload inside the Soroban containment smart contract vault.",
  },
  {
    label: "Dynamic Node Selection",
    detail:
      "A dynamic subset of off-chain verification nodes is rotated from the pool. This moving-target configuration remains completely unpredictable to adversaries.",
  },
  {
    label: "Consensus Engine",
    detail:
      "Selected nodes vote independently across isolated evidence vectors. The Byzantine fault tolerance protocol ensures compromised nodes cannot alter the verdict.",
  },
  {
    label: "Clearance Authorization",
    detail:
      "The unified consensus quorum constructs an authenticated payload signature using a single-keypair clearance authority engine.",
  },
  {
    label: "Ledger Settlement",
    detail:
      "The Soroban contract consumes the authorized signature to execute final asset release—or executes an automatic return sequence if the 24-hour timeout expires.",
  },
];

export function ArchitectureSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="architecture" className="border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-8 py-28">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-ink-tertiary font-semibold mb-4">
            Verification pipeline
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink max-w-2xl">
            Architecture built for an adversarial world
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Step list */}
          <div className="space-y-1">
            {STEPS.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-full text-left group"
              >
                <div
                  className={`flex items-start gap-4 px-5 py-5 rounded-lg transition-colors duration-200 ${
                    active === i
                      ? "bg-surface-raised border border-surface-border"
                      : "hover:bg-surface-raised/50"
                  }`}
                >
                  <div
                    className={`mt-0.5 w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center text-[10px] font-bold transition-colors ${
                      active === i
                        ? "border-signal bg-signal text-white"
                        : "border-surface-border-hi text-ink-tertiary"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div
                      className={`text-sm font-semibold transition-colors ${
                        active === i ? "text-ink" : "text-ink-secondary"
                      }`}
                    >
                      {step.label}
                    </div>
                    {active === i && (
                      <p className="mt-1.5 text-sm text-ink-tertiary leading-relaxed">
                        {step.detail}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Architecture diagram */}
          <ArchDiagram active={active} />
        </div>
      </div>
    </section>
  );
}

function ArchDiagram({ active }: { active: number }) {
  const boxes = [
    { label: "Soroban Token Lock", sublabel: "On-chain escrow initialization" },
    { label: "Dynamic Verification", sublabel: "Moving-target node rotation" },
    { label: "Consensus Engine", sublabel: "Off-chain BFT voting quorum" },
    { label: "Clearance Verdict", sublabel: "Authenticated agent signature" },
    { label: "Contract Settlement", sublabel: "Stellar ledger state finality" },
  ];

  return (
    <div className="border border-surface-border rounded-xl bg-surface-raised p-6 space-y-2">
      {boxes.map((box, i) => {
        const isActive = i === active;
        const isPast = i < active;

        return (
          <div key={i}>
            <div
              className={`rounded-lg px-5 py-4 border transition-all duration-300 ${
                isActive
                  ? "border-signal bg-signal/10"
                  : isPast
                  ? "border-surface-border bg-surface opacity-60"
                  : "border-surface-border bg-surface opacity-40"
              }`}
            >
              <div
                className={`text-sm font-semibold ${isActive ? "text-ink" : "text-ink-secondary"}`}
              >
                {box.label}
              </div>
              <div className="text-xs text-ink-tertiary mt-0.5">{box.sublabel}</div>
            </div>

            {i < boxes.length - 1 && (
              <div className="flex justify-center py-1">
                <div
                  className={`w-px h-5 transition-colors duration-300 ${
                    isPast ? "bg-signal/40" : "bg-surface-border"
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}

      {/* Pool note */}
      <div className="mt-4 pt-4 border-t border-surface-border">
        <p className="text-xs text-ink-tertiary leading-relaxed">
          <span className="text-ink-secondary font-medium">Note:</span> The
          active verification subset rotates per transaction. Smart contract
          auditors independently verify the cryptographically signed consensus envelope post-execution.
        </p>
      </div>
    </div>
  );
}