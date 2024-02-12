"use client";
import React from "react";
import CreatorTabs from "./creator/CreatorTabs";
import Image from "next/image";
import { BackArrow } from "../icons/SidebarIcons";
import Link from "next/link";

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  
  return (
    <>
      {/* Transparent overlay */}
      {isSidebarVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={()=>setIsSidebarVisible(false)}
        ></div>
      )}
      <div
        className={`bg-smokyblack h-full fixed top-0 w-[255px] z-30 transition-all duration-500 rounded-tr-[32px] rounded-br-[32px] ps-[25px] ${
          isSidebarVisible ? "start-0" : "start-[-255px] md:start-0"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="mt-[30px]">
            <div className="flex items-center gap-[5px] pb-1.5">
              {/* Slider back button */}
              <button
               onClick={()=>setIsSidebarVisible(false)}
                className="text-white md:hidden w-[22px] h-[22px]"
              >
                <BackArrow />
              </button>
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src="/assets/images/png/nav-logo.png"
                  alt="footer-logo"
                  height={58}
                  width={79}
                />
                <h2 className="text-white ff_inter font-bold text-2xl leading-[100%]">
                  TixByAir
                </h2>
              </Link>
            </div>
            <CreatorTabs />
          </div>
          <Image
            src="/assets/images/png/sidebar_internet_img.png"
            alt="Internet"
            width={205}
            height={210}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
