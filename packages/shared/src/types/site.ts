export type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type SiteStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "VERIFIED_ACTIVE"
  | "VERIFIED_INACTIVE";
export type SiteSource = "SATELLITE" | "MANUAL";

export interface Detection {
  id: string;
  siteId: string;
  detectedAt: string;
  areaHa: number;
  deltaNdvi: number;
  deltaBsi: number;
}

export interface MiningSite {
  id: string;
  name: string;
  description?: string;
  source: SiteSource;
  status: SiteStatus;
  riskLevel: RiskLevel;
  areaHa: number;
  lastDetectedAt: string;
  geometry: GeoJSON.Feature<GeoJSON.Polygon>;
}
