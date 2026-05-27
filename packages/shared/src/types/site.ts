export type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type SiteStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "VERIFIED_ACTIVE"
  | "VERIFIED_INACTIVE";
export type SiteSource = "SATELLITE" | "MANUAL";

export interface Detection {
  areaHa: number;
  deltaBsi: number;
  deltaNdvi: number;
  detectedAt: string;
  id: string;
  siteId: string;
}

export interface MiningSite {
  areaHa: number;
  description?: string;
  geometry: GeoJSON.Feature<GeoJSON.Polygon>;
  id: string;
  lastDetectedAt: string;
  name: string;
  riskLevel: RiskLevel;
  source: SiteSource;
  status: SiteStatus;
}
