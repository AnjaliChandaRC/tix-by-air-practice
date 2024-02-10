"use client";
import React from "react";

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  return (
    <div
      className={`bg-[red] h-full fixed top-0 w-[255px] z-30 transition-all duration-500 ${
        isSidebarVisible ? "start-0" : "start-[-255px] md:start-0"
      }`}
    >
      <button onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
        close sidebar
      </button>
    </div>
  );
};

export default Sidebar;
