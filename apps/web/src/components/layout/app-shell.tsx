import { MapArea } from "./map-area";
import { SidebarLeft } from "./sidebar-left";
import { SidebarRight } from "./sidebar-right";
import { TopBar } from "./top-bar";

export const AppShell = () => {
  return (
    /* SHELL */
    <div className="grid h-dvh w-dvw grid-cols-[300px_1fr_300px] grid-rows-[auto_1fr] overflow-hidden transition-all duration-400 ease-in-out">
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
