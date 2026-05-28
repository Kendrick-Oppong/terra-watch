import { Home, Waves } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMMUNITIES, RIVERS } from "../constants";
import { getExposureColor, getRiverBorderColor } from "../utils";

export const ImpactTab = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-3 pb-3">
      {/* Affected Rivers */}
      <div className="mb-4">
        <div className="mx-3 mb-2 flex items-center gap-2">
          <span className="font-semibold text-[10px] text-muted-foreground tracking-widest">
            AFFECTED RIVERS
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="flex flex-col">
          {RIVERS.map((r) => {
            const riverBorderClass = getRiverBorderColor(r.contaminated);
            const iconContainerClass = r.contaminated
              ? "border-destructive/40 bg-destructive/10"
              : "border-blue-400/40 bg-blue-400/10";
            const waveColor = r.contaminated
              ? "text-destructive"
              : "text-blue-400";
            const kmColor = r.contaminated
              ? "text-destructive"
              : "text-foreground";

            return (
              <div
                className={cn(
                  "mx-3 mb-1.5 flex cursor-pointer items-center gap-3 rounded border border-border border-l-2 bg-muted p-3 transition-colors hover:bg-muted/40",
                  riverBorderClass
                )}
                key={r.name}
              >
                <div
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded border",
                    iconContainerClass
                  )}
                >
                  <Waves
                    className={cn("size-4", waveColor)}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground text-xs">
                    {r.name}
                  </p>
                  <p className="text-[10px]">
                    {r.type} · {r.affectingSites} affecting sites
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className={cn("font-bold text-sm", kmColor)}>{r.km} km</p>
                  <p className="text-[9px] text-foreground/90 tracking-wider">
                    CONTAMINATED
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exposed Communities */}
      <div className="mb-4">
        <div className="mx-3 mb-2 flex items-center gap-2">
          <span className="font-semibold text-[10px] text-muted-foreground tracking-widest">
            EXPOSED COMMUNITIES
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="flex flex-col">
          {COMMUNITIES.map((c) => {
            let borderColor = "border-l-border";
            if (c.exposure >= 80) {
              borderColor = "border-l-destructive";
            } else if (c.exposure >= 50) {
              borderColor = "border-l-orange-400";
            }

            let iconContainerClass = "border-border bg-muted/30";
            if (c.exposure >= 80) {
              iconContainerClass = "border-destructive/40 bg-destructive/10";
            } else if (c.exposure >= 50) {
              iconContainerClass = "border-orange-400/40 bg-orange-400/10";
            }

            let iconColor = "text-foreground";
            if (c.exposure >= 80) {
              iconColor = "text-destructive";
            } else if (c.exposure >= 50) {
              iconColor = "text-orange-400";
            }

            return (
              <div
                className={cn(
                  "mx-3 mb-1.5 flex cursor-pointer items-center gap-3 rounded border border-border border-l-2 bg-muted p-3 transition-colors hover:bg-muted/40",
                  borderColor
                )}
                key={c.name}
              >
                <div
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded border",
                    iconContainerClass
                  )}
                >
                  <Home className={cn("size-4", iconColor)} strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground text-xs">
                    {c.name}
                  </p>
                  <p className="text-[10px]">
                    Population: {c.population.toLocaleString()}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p
                    className={cn(
                      "font-bold text-sm",
                      getExposureColor(c.exposure)
                    )}
                  >
                    {c.exposure}%
                  </p>
                  <p className="text-[9px] text-foreground/90 tracking-wider">
                    EXPOSURE
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
