import { riskBadgeClasses } from "@/lib/utils";
import type { RiskLevel } from "@/types";

const LABELS: Record<RiskLevel, string> = {
  critical: "Critical",
  high: "High",
  medium: "Medium",
  low: "Low",
  clear: "Clear",
};

export function RiskBadge({ level }: { level: RiskLevel }) {
  return (
    <span className={riskBadgeClasses(level)}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {LABELS[level]}
    </span>
  );
}
