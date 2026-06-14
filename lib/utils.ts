import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { RiskLevel, DetectorId, DetectorNode } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DETECTORS: DetectorNode[] = [
  { id: "domain", label: "Domain Analysis", description: "Inspects sender domain age, reputation, and MX configuration" },
  { id: "language", label: "Language Analysis", description: "Models linguistic patterns against baseline communication style" },
  { id: "behavior", label: "Behavior Analysis", description: "Compares request against historical behavioral signatures" },
  { id: "relationship", label: "Relationship Graph", description: "Validates sender position within the organizational trust graph" },
  { id: "bank", label: "Bank Verification", description: "Cross-references account details against known fraud indicators" },
  { id: "device", label: "Device Intelligence", description: "Fingerprints the originating device and session metadata" },
  { id: "history", label: "Historical Patterns", description: "Scores against historical transaction and communication patterns" },
  { id: "transaction", label: "Transaction Analysis", description: "Evaluates payment amount, cadence, and counterparty risk" },
  { id: "identity", label: "Identity Verification", description: "Validates claimed identity through out-of-band signals" },
];

export function getDetectorById(id: DetectorId): DetectorNode {
  return DETECTORS.find((d) => d.id === id)!;
}

export function riskColor(level: RiskLevel): string {
  return {
    critical: "text-red-400",
    high: "text-orange-400",
    medium: "text-yellow-500",
    low: "text-blue-400",
    clear: "text-emerald-400",
  }[level];
}

export function riskBadgeClasses(level: RiskLevel): string {
  return cn(
    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium tracking-wide",
    {
      critical: "bg-red-950/60 text-red-300 border border-red-900/50",
      high: "bg-orange-950/60 text-orange-300 border border-orange-900/50",
      medium: "bg-yellow-950/60 text-yellow-300 border border-yellow-900/50",
      low: "bg-blue-950/60 text-blue-300 border border-blue-900/50",
      clear: "bg-emerald-950/60 text-emerald-300 border border-emerald-900/50",
    }[level]
  );
}

/** Pick n unique items from an array */
export function pickRandom<T>(arr: T[], n: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

/** Generate a mock attestation hash */
export function mockAttestationHash(): string {
  return Array.from({ length: 64 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join("");
}

export function formatRelativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}
