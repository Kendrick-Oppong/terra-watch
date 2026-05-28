export type RiskLevel = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

export interface Site {
  contamination?: boolean;
  delta?: number;
  expanding?: boolean;
  ha: number;
  id: string;
  name: string;
  region: string;
  risk: RiskLevel;
  rivers: number;
}

export interface River {
  affectingSites: number;
  contaminated: boolean;
  km: number;
  name: string;
  type: string;
}

export interface Community {
  exposure: number;
  name: string;
  population: number;
}

export interface Report {
  date: string;
  title: string;
  type: "System Generated" | "Manual Export";
}
