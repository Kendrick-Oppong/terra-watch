import { useMemo } from "react";
import { SITES } from "../constants";
import { RISK_LEVELS } from "../risk";
import type { RiskLevel } from "../types";
export const useSitesFilter = (
  search: string,
  activeFilter: RiskLevel | null
) => {
  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return SITES.filter((site) => {
      const matchRisk = activeFilter === null || activeFilter === site.risk;
      const matchSearch =
        !query ||
        site.name.toLowerCase().includes(query) ||
        site.id.toLowerCase().includes(query) ||
        site.region.toLowerCase().includes(query);
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
