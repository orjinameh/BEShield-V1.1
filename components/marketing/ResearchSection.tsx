"use client";

export function ResearchSection() {
  return (
    <section
      id="research"
      className="border-t border-surface-border bg-surface-raised"
    >
      <div className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-tertiary font-semibold mb-4">
              Mathematical foundation
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink mb-6">
              A second independent security lever
            </h2>
            <p className="text-[17px] text-ink-secondary leading-relaxed mb-5">
              Traditional Byzantine fault tolerance models treat oracle manipulation
              probability p as a static constant. BEShield formalizes an adversarial extension:
              p is a variable function of attacker capability A and operational knowledge K of the
              active consensus routing configuration.
            </p>
            <p className="text-[17px] text-ink-secondary leading-relaxed mb-8">
              This establishes a secondary axis for decentralized protection—beyond merely increasing 
              the total node count n, on-chain safety can be maximized by minimizing K. Moving-target 
              quorum selection makes active validation paths mathematically unpredictable.
            </p>
            <a
              href="#"
              className="inline-block px-5 py-3 border border-surface-border-hi text-sm font-semibold text-ink hover:border-signal/50 hover:bg-signal/5 transition-colors rounded-md"
            >
              Read the formal spec
            </a>
          </div>

          {/* Formula panel */}
          <div className="bg-surface border border-surface-border rounded-xl p-8 font-mono">
            <p className="text-xs uppercase tracking-widest text-ink-tertiary font-sans font-semibold mb-7">
              Quorum compromise model
            </p>

            <div className="space-y-3 mb-8">
              <div>
                <span className="text-xs text-ink-tertiary font-sans block mb-1">
                  Standard BFT Bound
                </span>
                <span className="text-lg text-ink-secondary">
                  P(compromise) = p<sup>n−f</sup>
                </span>
              </div>
              <div className="border-t border-surface-border pt-3">
                <span className="text-xs text-signal font-sans block mb-1 font-semibold">
                  BEShield Core Extension
                </span>
                <span className="text-lg text-ink">
                  P(compromise) = p(A, K)<sup>n−f</sup>
                </span>
              </div>
            </div>

            <div className="border-t border-surface-border pt-6 space-y-2 text-sm">
              {[
                ["p", "probability a single node is deceived"],
                ["A", "adversary resource capability"],
                ["K", "attacker knowledge of active sub-quorum selection"],
                ["n", "assigned active verification oracles"],
                ["f", "maximum allowed Byzantine nodes"],
              ].map(([sym, def]) => (
                <div key={sym} className="flex gap-4">
                  <span className="text-ink w-4 flex-shrink-0">{sym}</span>
                  <span className="text-ink-tertiary font-sans">{def}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 pt-4 border-t border-surface-border text-xs text-ink-tertiary font-sans leading-relaxed">
              Systematically compressing K minimizes the probability of quorum failure, driving consensus security even when adversary capital A scales up indefinitely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}