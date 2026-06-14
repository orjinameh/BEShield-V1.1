export type RiskLevel = "critical" | "high" | "medium" | "low" | "clear";

export type DetectorId =
  | "domain"
  | "language"
  | "behavior"
  | "relationship"
  | "bank"
  | "device"
  | "history"
  | "transaction"
  | "identity";

export interface DetectorNode {
  id: DetectorId;
  label: string;
  description: string;
}

export interface NodeVote {
  detectorId: DetectorId;
  verdict: "flag" | "clear" | "uncertain";
  confidence: number; // 0–1
  evidence: string;
}

export interface ConsensusResult {
  verdict: "flag" | "clear";
  confidence: number;
  activeNodes: DetectorId[];
  votes: NodeVote[];
  attestationHash: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  subject: string;
  participants: string[];
  lastActivity: string;
  riskLevel: RiskLevel;
  flaggedAt?: string;
  consensus?: ConsensusResult;
  messageCount: number;
  hasPaymentRequest: boolean;
}

export interface MailboxHealth {
  monitored: number;
  flagged: number;
  cleared: number;
  pendingReview: number;
}
