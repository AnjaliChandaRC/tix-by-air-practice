"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/dashboards/common/sidebar/SideBar";
import { HamburgerIcon } from "@/components/common/icons/ToggleIcon";
import { DownArrow } from "@/components/dashboards/common/icons/SidebarIcons";

const DashboardHeader = ({ setIsSidebarVisible , isSidebarVisible }) => {
  const [profileVisible, setProfileVisible] = useState(false);
  const toggleProfile = () => {
    setProfileVisible(!profileVisible);
  };
  return (
    <>
      <div>
        <div className="px-5 py-[19px] w-full bg-white relative z-20 border-b border-b-black">
          <div className="flex items-center justify-between md:justify-end">
            <span
              className="cursor-pointer md:hidden"
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            >
              <HamburgerIcon />
            </span>
            <div className="flex items-center gap-2">
              <span>
                <Image
                  src="/assets/images/png/low-fi-avatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </span>
              <div>
                <p className="ff_inter   text-sm text-black">
                  Cameron Williamson
                </p>
                <p className="ff_poppins text-davygray font-light text-xs">
                  Manager profile
                </p>
              </div>
              <span
                className={`ms-2 cursor-pointer transition-all duration-500 ${
                  profileVisible ? "rotate-180" : ""
                }`}
                onClick={toggleProfile}
              >
                <DownArrow />
              </span>
            </div>
          </div>
        </div>
        <div
          class={`w-[150px] sm:w-[180px] md:w-[200px] lg:w-[238px] p-3 sm:py-4 lg:py-6 md:px-4 border border-solid border-black rounded-lg md:rounded-[20px] bg-white absolute transition-all duration-500 z-10 right-2 ${
            profileVisible ? "top-[85px]" : "top-[-150%]"
          }`}
        >
          <Link
            href="/"
            className="py-2 md:py-[13px] border border-solid border-black border-opacity-60 rounded-lg ff_inter   text-black text-sm leading-[1] bg-white block w-full text-center transition-all duration-500 ease-in-out hover:bg-orangecrayola hover:text-white"
          >
            Log Out
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
