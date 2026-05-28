import {
  Hexagon,
  Search,
  TrendingUp,
  TriangleAlert,
  Waves,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { RISK_COLOR, RISK_LABEL, RISK_LEFT_BORDER, RISK_LEVELS } from "../risk";
import type { RiskLevel } from "../types";
import { useSitesFilter } from "./hooks/useSitesFilter";

export const SitesTab = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<RiskLevel | null>(null);

  const { grouped } = useSitesFilter(search, activeFilter);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Search */}
      <div className="shrink-0 px-3 pt-3 pb-2">
        <div className="flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2">
          <Search className="size-3.5 shrink-0 text-muted-foreground" />
          <input
            className="flex-1 bg-transparent text-foreground text-xs outline-none placeholder:text-muted-foreground"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search GH-ID, Region, or River..."
            value={search}
          />
          {search && (
            <button onClick={() => setSearch("")} type="button">
              <X className="size-3 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex shrink-0 items-center gap-2 px-3 pb-3">
        <button
          className={cn(
            "rounded border border-transparent px-2 py-1 font-semibold text-[10px] tracking-wider transition-all",
            activeFilter === null
              ? "border-primary"
              : "border-border text-foreground opacity-40 hover:bg-muted hover:text-foreground hover:opacity-100"
          )}
          onClick={() => setActiveFilter(null)}
          type="button"
        >
          ALL
        </button>

        {RISK_LEVELS.map((risk) => (
          <button
            className={cn(
              "rounded border px-2.5 py-1 font-semibold text-[10px] tracking-wider transition-all",
              RISK_COLOR[risk],
              activeFilter === risk
                ? "bg-muted/60 ring-[0.5px] ring-current ring-offset-0"
                : "bg-transparent opacity-40 hover:opacity-100"
            )}
            key={risk}
            onClick={() => setActiveFilter(risk)}
            type="button"
          >
            {risk}
          </button>
        ))}

        {activeFilter && (
          <button
            className="ml-auto text-muted-foreground hover:text-foreground"
            onClick={() => setActiveFilter(null)}
            type="button"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>

      {/* Sites List */}
      <div className="flex-1 overflow-y-auto pb-3">
        {grouped.map(({ risk, sites }) => (
          <div key={risk}>
            <div className="flex items-center gap-2 px-3 py-1.5">
              <span
                className={cn(
                  "font-semibold text-[10px] tracking-widest",
                  RISK_COLOR[risk].split(" ")[0]
                )}
              >
                {RISK_LABEL[risk]}
              </span>
              <span className="text-[10px] text-foreground">
                {sites.length}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            {sites.map((site) => (
              <div
                className={cn(
                  "mx-3 mb-1.5 cursor-pointer rounded border border-border border-l-2 bg-muted p-3 transition-colors hover:bg-muted/40",
                  RISK_LEFT_BORDER[site.risk]
                )}
                key={site.id}
              >
                <div className="mb-1.5 flex items-start justify-between">
                  <p className="font-semibold text-foreground text-xs leading-tight">
                    {site.name}
                  </p>
                  <span
                    className={cn(
                      "ml-2 shrink-0 rounded border px-1.5 py-0.5 font-bold text-[9px] tracking-wider",
                      RISK_COLOR[site.risk]
                    )}
                  >
                    {site.risk}
                  </span>
                </div>
                <div className="mb-1 flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[10px]">
                    <Hexagon
                      className="size-3 text-primary"
                      strokeWidth={1.5}
                    />
                    {site.ha} ha
                  </span>
                  <span className="flex items-center gap-1 text-[10px]">
                    <Waves className="size-3 text-blue-400" strokeWidth={1.5} />
                    {site.rivers} {site.rivers === 1 ? "river" : "rivers"}
                  </span>
                  <span className="ml-auto text-[10px]">{site.region}</span>
                </div>
                {site.contamination && (
                  <p className="mb-1 flex items-center gap-1 p-1.5 font-semibold text-[10px] text-destructive tracking-wider">
                    <TriangleAlert size={10} /> RIVER CONTAMINATION ACTIVE
                  </p>
                )}
                {site.expanding && site.delta && site.delta > 0 && (
                  <div className="flex items-center gap-1">
                    <TrendingUp
                      className="size-3 text-orange-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-[10px] text-orange-400">
                      Expanding · +{site.delta} ha this epoch
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
