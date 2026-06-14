import Link from "next/link";
import { ConsensusNetwork } from "./ConsensusNetwork";

export function HeroSection() {
  return (
    <section className="pt-40 pb-28 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div>
          <h1 className="font-display text-[56px] font-bold tracking-[-0.04em] leading-[1.04] text-ink mb-7">
            Stop fraud before
            <br />
            money moves.
          </h1>
          {/* UPDATED TEXT: Aligned copy directly to the Soroban transaction flow specs */}
          <p className="text-[17px] text-ink-secondary leading-relaxed max-w-[440px] mb-10">
            BEShield isolates asset payloads in secure Soroban smart contract escrows—evaluating transfer risks through distributed, off-chain BFT consensus node verification before settlement clearance.
          </p>
          
          <div className="flex gap-3 items-center">
            {/* UPDATED CTA: Converted demo anchor into a high-visibility app entrance */}
            <Link
              href="/dashboard"
              className="px-5 py-3 bg-signal text-white text-sm font-semibold rounded-md hover:bg-signal/90 transition-colors shadow-lg shadow-signal/20"
            >
              Open Active Terminal
            </Link>
            <a
              href="#research"
              className="px-5 py-3 border border-surface-border text-sm font-medium text-ink-secondary hover:text-ink hover:border-surface-border-hi transition-colors rounded-md"
            >
              Read the research
            </a>
          </div>

          {/* UPDATED METRICS: Replaced generic labels with specific contract parameters */}
          <div className="mt-14 pt-8 border-t border-surface-border flex gap-10">
            <Stat value="Soroban Core" label="Escrow Smart Contract" />
            <Stat value="9 Nodes" label="BFT Consensus Array" />
            <Stat value="24 Hours" label="Auto-Return Timeout" />
          </div>
        </div>

        {/* Right — consensus network canvas layout */}
        <div className="flex justify-center lg:justify-end">
          <ConsensusNetwork />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-xl font-bold text-ink">{value}</div>
      <div className="text-xs text-ink-tertiary mt-0.5 font-medium">{label}</div>
    </div>
  );
}