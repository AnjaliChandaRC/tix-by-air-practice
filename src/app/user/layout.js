"use client";
import Sidebar from "@/components/dashboards/common/sidebar/SideBar";
import DashboardHeader from "@/componets/dashboards/common/header/DashboardHeader";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
    <div className="h-screen flex">
      < Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      <div className="w-full h-screen flex flex-col overflow-auto pl-[255px]">
        <DashboardHeader setIsSidebarVisible={setIsSidebarVisible} />
        <div className="flex grow w-full">{children}</div>
      </div>
    </div>
  );
}
