export interface ImageryScene {
  capturedAt: string;
  cloudCover: number;
  footprint: GeoJSON.Feature<GeoJSON.Polygon>;
  id: string;
  source: string;
}

export interface PipelineRun {
  completedAt?: string;
  id: string;
  startedAt: string;
  status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED";
  studyAreaId: string;
}

export interface PipelineStatus {
  message: string;
  progressPct: number;
  runId: string;
  stage: string;
}
