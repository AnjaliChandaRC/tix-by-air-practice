// Importing necessary modules and components
"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { HamburgerIcon } from "@/components/common/icons/ToggleIcon";
import { DownArrow } from "@/components/dashboards/common/icons/SidebarIcons";

// Functional component for the Dashboard Header
const DashboardHeader = ({ setIsSidebarVisible, isSidebarVisible }) => {
  // State for managing the visibility of the profile dropdown
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <>
      <div>
        {/* Main Header Section */}
        <div className="px-5 py-[19px] w-full bg-white relative z-20 border-b border-b-black">
          <div className="flex items-center justify-between md:justify-end">
            {/* Hamburger Icon for mobile view */}
            <span
              className="cursor-pointer md:hidden"
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            >
              <HamburgerIcon />
            </span>
            {/* User Profile Section */}
            <div className="flex items-center gap-2">
              <span>
                {/* User Avatar */}
                <Image
                  src="/assets/images/png/low-fi-avatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </span>
              <div>
                {/* User Name and Profile Type */}
                <p className="ff_inter   text-sm text-black">
                  Cameron Williamson
                </p>
                <p className="ff_poppins text-davygray font-light text-xs">
                  Manager profile
                </p>
              </div>
              <span
                // Dropdown Arrow with rotation based on profile visibility
                className={`ms-2 cursor-pointer transition-all duration-500 ${
                  profileVisible ? "rotate-180" : ""
                }`}
                onClick={() => setProfileVisible(!profileVisible)}
              >
                <DownArrow />
              </span>
            </div>
          </div>
        </div>

        {/* Profile Dropdown Section */}
        <div
          // Styles for positioning and visibility transition
          class={`w-[150px] sm:w-[180px] md:w-[200px] lg:w-[238px] p-3 sm:py-4 lg:py-6 md:px-4 border border-solid border-black rounded-lg md:rounded-[20px] bg-white absolute transition-all duration-500 z-10 right-2 ${
            profileVisible ? "top-[85px]" : "top-[-150%]"
          }`}
        >
          {/* Logout Link */}
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

// Exporting the DashboardHeader component
export default DashboardHeader;
