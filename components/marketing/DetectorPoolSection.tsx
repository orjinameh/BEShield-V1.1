"use client";

import { useState, useEffect } from "react";
import { DETECTORS } from "@/lib/utils";

function pickSubset(size: number) {
  return [...DETECTORS]
    .sort(() => Math.random() - 0.5)
    .slice(0, size)
    .map((d) => d.id);
}

export function DetectorPoolSection() {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  useEffect(() => {
    setActiveIds(pickSubset(4 + Math.floor(Math.random() * 3)));
    const id = setInterval(() => {
      setActiveIds(pickSubset(4 + Math.floor(Math.random() * 3)));
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-tertiary font-semibold mb-4">
              Oracle consensus pool
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink mb-5">
              Nine specializations. Unpredictable subsets.
            </h2>
            <p className="text-[17px] text-ink-secondary leading-relaxed">
              Each ledger state invocation draws from an isolated array of specialized verification oracles.
              The active sub-quorum changes dynamically per transaction — preserving full 
              cryptographic transparency for contract auditors while making node-specific collusion or evasion 
              mathematically unfeasible for adversaries.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-2">
              {DETECTORS.map((detector) => {
                const isActive = activeIds.includes(detector.id);
                return (
                  <div
                    key={detector.id}
                    className={`rounded-lg border px-4 py-3 transition-all duration-500 ${
                      isActive
                        ? "border-signal/40 bg-signal/8 text-ink"
                        : "border-surface-border bg-surface-raised text-ink-tertiary"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500 ${
                          isActive ? "bg-signal" : "bg-surface-border-hi"
                        }`}
                      />
                      <span className="text-xs font-semibold">
                        {detector.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-ink-tertiary">
              Active sub-quorum rotates per transaction invocation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}