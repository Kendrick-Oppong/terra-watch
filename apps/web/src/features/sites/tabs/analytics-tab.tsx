export const AnalyticsTab = () => (
  <div className="flex-1 overflow-y-auto px-3 pt-3">
    <div className="mb-3 flex items-center gap-2">
      <span className="font-semibold text-[10px] text-muted-foreground tracking-widest">
        NATIONAL OVERVIEW
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>

    {/* Total Disturbed Area */}
    <div className="mb-3 rounded border border-border bg-muted/20 p-4">
      <p className="mb-3 font-semibold text-foreground text-xs">
        Total Disturbed Area
      </p>
      <div className="mb-3 flex items-baseline gap-1.5">
        <span className="font-bold text-4xl text-foreground tracking-tight">
          2,847
        </span>
        <span className="text-muted-foreground text-sm">ha</span>
      </div>
      <div className="relative mb-3 h-1.5 overflow-hidden rounded-full bg-muted/60">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-linear-to-r from-orange-500 to-orange-400"
          style={{ width: "91.8%" }}
        />
      </div>
      <div className="flex justify-between">
        <span className="text-[10px] text-muted-foreground">
          +120ha since Jan
        </span>
        <span className="text-[10px] text-muted-foreground">
          Projected: 3,100ha by Dec
        </span>
      </div>
    </div>

    {/* Risk Distribution */}
    <div className="rounded border border-border bg-muted/20 p-4">
      <p className="mb-3 font-semibold text-foreground text-xs">
        Risk Distribution
      </p>
      <div className="mb-2.5 flex h-8 overflow-hidden rounded">
        <div className="bg-destructive" style={{ width: "15%" }} />
        <div className="bg-orange-400" style={{ width: "25%" }} />
        <div className="bg-yellow-400" style={{ width: "40%" }} />
        <div className="bg-green-400" style={{ width: "20%" }} />
      </div>
      <div className="flex justify-between">
        <span className="text-[10px] text-muted-foreground">
          CRIT: <span className="font-medium text-foreground">15%</span>
        </span>
        <span className="text-[10px] text-muted-foreground">
          HIGH: <span className="font-medium text-foreground">25%</span>
        </span>
        <span className="text-[10px] text-muted-foreground">
          MED: <span className="font-medium text-foreground">40%</span>
        </span>
        <span className="text-[10px] text-muted-foreground">
          LOW: <span className="font-medium text-foreground">20%</span>
        </span>
      </div>
    </div>
  </div>
);
