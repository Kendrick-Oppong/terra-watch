import { AnalyticsTab } from "./tabs/analytics-tab";
import { ImpactTab } from "./tabs/impact-tab";
import { ReportsTab } from "./tabs/reports-tab";
import { SitesTab } from "./tabs/sites-tab";

export const TABS = [
  { id: "SITES", label: "SITES", component: SitesTab },
  { id: "IMPACT", label: "IMPACT", component: ImpactTab },
  { id: "REPORTS", label: "REPORTS", component: ReportsTab },
  { id: "ANALYTICS", label: "ANALYTICS", component: AnalyticsTab },
] as const;

export type TabId = (typeof TABS)[number]["id"];
