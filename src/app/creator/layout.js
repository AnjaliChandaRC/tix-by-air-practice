"use client";
import Header from "@/components/dashboards/common/header/Header";
import Siderbar from "@/components/dashboards/common/sidebar/Siderbar";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
    <div className="h-screen flex">
      <Siderbar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      <div className="w-full h-screen flex flex-col overflow-auto pl-[255px]">
        <Header setIsSidebarVisible={setIsSidebarVisible} />
        <div className="flex grow w-full">{children}</div>
      </div>
    </div>
  );
}
