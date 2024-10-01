"use client";
import Sidebar from "@/components/dashboards/common/sidebar/SideBar";
import DashboardHeader from "@/componets/dashboards/common/header/DashboardHeader";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {pathname === "/creator/create-community" ? (
        <div className="w-full h-screen flex flex-col overflow-auto">
          <DashboardHeader
            setIsSidebarVisible={setIsSidebarVisible}
            isSidebarVisible={isSidebarVisible}
          />
          <div className="flex grow w-full ">{children}</div>
        </div>
      ) : (
        <div className="h-screen flex">
          <Sidebar
            isSidebarVisible={isSidebarVisible}
            setIsSidebarVisible={setIsSidebarVisible}
          />
          <div className="w-full h-screen flex flex-col overflow-auto md:pl-[255px]">
            <DashboardHeader
              setIsSidebarVisible={setIsSidebarVisible}
              isSidebarVisible={isSidebarVisible}
            />
            <div className="flex grow w-full">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
