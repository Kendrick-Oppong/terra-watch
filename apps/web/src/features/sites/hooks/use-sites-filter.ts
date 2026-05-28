import { useMemo } from "react";
import { SITES } from "../constants";
import { RISK_LEVELS } from "../risk";
import type { RiskLevel } from "../types";
export const useSitesFilter = (
  search: string,
  activeFilter: RiskLevel | null
) => {
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return SITES.filter((s) => {
      const matchRisk = activeFilter === null || activeFilter === s.risk;
      const matchSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q) ||
        s.region.toLowerCase().includes(q);
      return matchRisk && matchSearch;
    });
  }, [search, activeFilter]);

  const grouped = useMemo(
    () =>
      RISK_LEVELS.map((risk) => ({
        risk,
        sites: filtered.filter((site) => site.risk === risk),
      })).filter((group) => group.sites.length > 0),
    [filtered]
  );

  return { filtered, grouped };
};
