export interface RiskZone {
  id: string;
  siteId: string;
  riskLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  affectedAreaHa: number;
  geometry: GeoJSON.Feature<GeoJSON.Polygon>;
}

export interface ContaminationEvent {
  id: string;
  riskZoneId: string;
  featureType: "RIVER" | "COMMUNITY";
  exposureScore: number;
  geometry: GeoJSON.Feature<GeoJSON.LineString | GeoJSON.Point>;
}

export interface CommunityFeature {
  id: string;
  name: string;
  population: number;
  geometry: GeoJSON.Feature<GeoJSON.Point>;
}
