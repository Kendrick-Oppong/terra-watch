import type { RiskLevel } from "./types";

export const RISK_COLOR: Record<RiskLevel, string> = {
  CRITICAL: "text-destructive border-destructive",
  HIGH: "text-orange-400 border-orange-400",
  MEDIUM: "text-yellow-400 border-yellow-400",
  LOW: "text-green-400 border-green-400",
};

export const RISK_LEFT_BORDER: Record<RiskLevel, string> = {
  CRITICAL: "border-l-destructive",
  HIGH: "border-l-orange-400",
  MEDIUM: "border-l-yellow-400",
  LOW: "border-l-green-400",
};

export const RISK_LABEL: Record<RiskLevel, string> = {
  CRITICAL: "CRITICAL RISK",
  HIGH: "HIGH RISK",
  MEDIUM: "MEDIUM RISK",
  LOW: "LOW RISK",
};

export const RISK_LEVELS: RiskLevel[] = ["CRITICAL", "HIGH", "MEDIUM", "LOW"];
