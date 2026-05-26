export interface ReportConfig {
  id: string;
  studyAreaId: string;
  dateFrom: string;
  dateTo: string;
  siteIds: string[];
}

export interface Report {
  id: string;
  status: "PENDING" | "GENERATING" | "COMPLETED" | "FAILED";
  generatedAt?: string;
  downloadUrl?: string;
}
