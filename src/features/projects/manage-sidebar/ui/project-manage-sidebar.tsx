import { useUnit } from "effector-react";
import { $sidebarStore } from "../model/model";
import { useMemo } from "react";
import { SidebarContent } from "./content/sidebar-content";
import { SidebarFooter } from "./footer/sidebar-footer";
import { SidebarHeader } from "./header/sidebar-header";

export const ProjectManageSidebar = () => {
  const store = useUnit($sidebarStore);
  const openSidebarClass = useMemo(() => {
    if (store.$isSidebarOpen) return "translate-x-0";
    else return "translate-x-full";
  }, [store.$isSidebarOpen]);

  return (
    <aside
      className={
        "absolute right-0 top-0 min-w-96 min-h-screen flex flex-col gap-4 px-4 py-4 justify-between bg-slate-900 transition-transform" +
        " " +
        openSidebarClass
      }
    >
      <header>
        <SidebarHeader />
      </header>
      <main className="grow">
        <SidebarContent />
      </main>
      <footer className="flex w-full gap-2 justify-between">
        <SidebarFooter />
      </footer>
    </aside>
  );
};
