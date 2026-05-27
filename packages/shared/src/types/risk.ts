export interface RiskZone {
  affectedAreaHa: number;
  geometry: GeoJSON.Feature<GeoJSON.Polygon>;
  id: string;
  riskLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  siteId: string;
}

export interface ContaminationEvent {
  exposureScore: number;
  featureType: "RIVER" | "COMMUNITY";
  geometry: GeoJSON.Feature<GeoJSON.LineString | GeoJSON.Point>;
  id: string;
  riskZoneId: string;
}

export interface CommunityFeature {
  geometry: GeoJSON.Feature<GeoJSON.Point>;
  id: string;
  name: string;
  population: number;
}
