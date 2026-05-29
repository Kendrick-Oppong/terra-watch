import { useState } from "react";
import { TABS, type TabId } from "@/features/sites/config";
import { cn } from "@/lib/utils";

export const SidebarLeft = () => {
  const [activeTab, setActiveTab] = useState<TabId>("SITES");
  const ActiveComponent = TABS.find((t) => t.id === activeTab)?.component;

  if (!ActiveComponent) {
    return null;
  }

  return (
    <aside className="relative col-start-1 row-start-2 flex flex-col overflow-hidden border-border border-r bg-background">
      {/* Tab Bar */}
      <div className="flex shrink-0 items-stretch border-border border-b bg-card">
        {TABS.map((tab) => (
          <button
            className={cn(
              "relative flex-1 py-2.5 font-medium text-[10px] tracking-widest transition-colors",
              activeTab === tab.id
                ? "bg-primary/5 text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            type="button"
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <ActiveComponent />
      </div>
    </aside>
  );
};
