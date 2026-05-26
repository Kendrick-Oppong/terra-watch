export interface ImageryScene {
  id: string;
  capturedAt: string;
  cloudCover: number;
  source: string;
  footprint: GeoJSON.Feature<GeoJSON.Polygon>;
}

export interface PipelineRun {
  id: string;
  studyAreaId: string;
  startedAt: string;
  completedAt?: string;
  status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED";
}

export interface PipelineStatus {
  runId: string;
  stage: string;
  progressPct: number;
  message: string;
}
