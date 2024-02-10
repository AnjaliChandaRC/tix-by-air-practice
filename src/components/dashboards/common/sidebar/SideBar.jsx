"use client";
import React from "react";
import CreatorTabs from "./creator/CreatorTabs";

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  return (
    <div
      className={`bg-[red] h-full fixed top-0 w-[255px] z-30 transition-all duration-500 ${
        isSidebarVisible ? "start-0" : "start-[-255px] md:start-0"
      }`}
    >
      <CreatorTabs
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </div>
  );
};

export default Sidebar;
