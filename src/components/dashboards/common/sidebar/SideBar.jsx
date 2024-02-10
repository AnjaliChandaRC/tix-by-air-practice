"use client";
import React from "react";
import CreatorTabs from "./creator/CreatorTabs";
import Image from "next/image";
import { BackArrow } from "../icons/SidebarIcons";
import Link from "next/link";

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  const handleSliderBack = () => {
    // Implement the logic to handle sliding the sidebar back
    setIsSidebarVisible(false); // For example, close the sidebar when back button is clicked
  };

  return (
    <div
      className={`bg-smokyblack h-full fixed top-0 w-[255px] z-30 transition-all duration-500 rounded-tr-[32px] rounded-br-[32px] ${isSidebarVisible ? "start-0" : "start-[-255px] md:start-0"
        }`}
    >
      <div className="flex items-center mt-[30px] ms-5 md:ms-[30px] gap-[5px]">
        {/* Slider back button */}
        <button onClick={handleSliderBack} className="text-white md:hidden w-[22px] h-[22px]"><BackArrow /></button>
        <Link href='/' className="flex items-center">
          <Image
            src="/assets/images/png/nav-logo.png"
            alt="footer-logo"
            height={58}
            width={79}
          />
          <h2 className="text-white ff_inter font-bold text-2xl leading-[100%]">TixByAir</h2>
        </Link>
      </div>
      <CreatorTabs
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </div>
  );
};

export default Sidebar;
