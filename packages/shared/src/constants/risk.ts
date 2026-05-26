export const RISK_LEVELS = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;
export const RISK_COLORS = {
  LOW: "#2b9348",
  MEDIUM: "#f4c942",
  HIGH: "#f08a5d",
  CRITICAL: "#d62828",
} as const;

export const RISK_SCORE_THRESHOLDS = {
  LOW: [0, 25],
  MEDIUM: [25, 50],
  HIGH: [50, 75],
  CRITICAL: [75, 100],
} as const;
