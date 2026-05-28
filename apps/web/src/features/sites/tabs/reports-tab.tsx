import { Download, FileText, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REPORTS } from "../constants";

export const ReportsTab = () => (
  <div className="flex-1 overflow-y-auto pt-3 pb-3">
    <div className="mx-3 mb-3 flex items-center gap-2">
      <span className="font-semibold text-[10px] text-muted-foreground tracking-widest">
        RECENT REPORTS
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
    <div className="mb-3 flex flex-col">
      {REPORTS.map((r) => (
        <div
          className="group mx-3 mb-1.5 flex cursor-pointer items-center gap-3 rounded border border-border border-l-2 border-l-muted-foreground bg-muted p-3 transition-colors hover:bg-muted/40"
          key={r.title}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-border bg-muted/40">
            <FileText
              className="size-4 text-muted-foreground"
              strokeWidth={1.5}
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-foreground text-xs">
              {r.title}
            </p>
            <p className="text-[10px]">{r.type}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="mb-1 text-[10px]">{r.date}</p>
            <Download className="ml-auto size-3.5 text-foreground/70 transition-colors group-hover:text-foreground" />
          </div>
        </div>
      ))}
    </div>
    <div className="mx-3">
      <Button
        className="w-full gap-2 rounded border-border text-muted-foreground text-xs tracking-wider hover:text-foreground"
        variant="outline"
      >
        <Plus className="size-3.5" />
        CREATE CUSTOM REPORT
      </Button>
    </div>
  </div>
);
