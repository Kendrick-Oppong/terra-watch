export interface ReportConfig {
  dateFrom: string;
  dateTo: string;
  id: string;
  siteIds: string[];
  studyAreaId: string;
}

export interface Report {
  downloadUrl?: string;
  generatedAt?: string;
  id: string;
  status: "PENDING" | "GENERATING" | "COMPLETED" | "FAILED";
}
