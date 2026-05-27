import { Bell, CircleQuestionMark, Crosshair, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TopBar = () => {
  return (
    <header className="relative z-100 col-span-full grid grid-cols-[300px_1fr_300px] items-stretch border-border border-b bg-background">
      {/* logo — col 1 */}
      <div className="flex items-center gap-2 border-border border-r px-4">
        <div className="flex items-center justify-center rounded-sm border-[0.5px] border-primary p-0.5">
          <div className="rounded-sm border-[0.5px] border-primary p-0.5">
            <Crosshair className="h-4 w-4 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xs uppercase tracking-wider">
            TerraWatch
          </h1>
          <p className="text-primary text-xs tracking-wider">
            Ghana Operations
          </p>
        </div>
      </div>

      {/* summary-strip — col 2 */}
      <div className="flex items-stretch">
        <div className="flex flex-1 items-center justify-center gap-3 border-border border-r px-4 py-3">
          <p className="font-semibold text-lg">34</p>
          <p className="text-destructive text-xs">
            Critical Risk{" "}
            <span className="block text-[10px] text-muted-foreground">
              Sites active
            </span>
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center gap-3 border-border border-r px-4 py-3">
          <p className="font-semibold text-lg">12</p>
          <p className="text-destructive text-xs">
            Expanding{" "}
            <span className="block text-[10px] text-muted-foreground">
              Last 30 days
            </span>
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center gap-3 px-4 py-3">
          <p className="font-semibold text-lg">84km</p>
          <p className="text-destructive text-xs">
            Contaminated{" "}
            <span className="block text-[10px] text-muted-foreground">
              River network
            </span>
          </p>
        </div>
      </div>

      {/* top right — col 3 */}
      <div className="flex items-stretch overflow-hidden border-border border-l">
        {/* sentinel status — button */}
        <Button
          className="flex h-full shrink-0 flex-col items-start justify-center gap-0 rounded-none border-border border-r px-3"
          variant="ghost"
        >
          Sentinel-2
        </Button>

        {/* icon buttons — equal width, fill remaining space */}
        <div className="flex flex-1 items-stretch">
          <Button
            className="h-full flex-1 rounded-none border-border border-r"
            size="icon"
            variant="ghost"
          >
            <CircleQuestionMark className="size-4" />
          </Button>
          <Button
            className="h-full flex-1 rounded-none border-border border-r"
            size="icon"
            variant="ghost"
          >
            <Settings className="size-4" />
          </Button>
          <Button
            className="h-full flex-1 rounded-none"
            size="icon"
            variant="ghost"
          >
            <Bell className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
