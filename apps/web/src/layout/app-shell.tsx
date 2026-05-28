import { MapArea } from "@/features/map/map-area";
import { SidebarRight } from "@/layout/sidebar-right";
import { SidebarLeft } from "./sidebar-left";
import { TopBar } from "./top-bar";

export const AppShell = () => {
  return (
    /* SHELL */
    <div className="grid h-dvh w-dvw grid-cols-[350px_1fr_350px] grid-rows-[auto_1fr] overflow-hidden transition-all duration-400 ease-in-out">
      {/* TOPBAR */}
      <TopBar />
      {/* SIDEBAR LEFT */}
      <SidebarLeft />
      {/* MAP AREA */}
      <MapArea />
      {/* SIDEBAR RIGHT */}
      <SidebarRight />
    </div>
  );
};
