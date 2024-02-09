"use client";
import { HamburgerIcon } from "@/componets/common/icons/ToggleIcon";
import Image from "next/image";
import React, { useState } from "react";
import Siderbar from "../sidebar/Siderbar";
import { DownArrow } from "../icons/SidebarIcons";
import Link from "next/link";

const DashboardHeader = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const toggleProfile = () => {
    setProfileVisible(!profileVisible);
  };
  return (
    <>
      <div>
        <div
          className={`fixed top-0 start-0 w-full md:hidden h-screen bg-black  transition-all duration-600 ease-in-out  ${
            sidebarVisible ? "opacity-40 z-10" : "opacity-0 -z-10"
          }`}
          onClick={toggleSidebar}
        ></div>
        <div
          className={`fixed top-0 md:hidden !z-20 transition-all duration-400 ease-in-out ${
            sidebarVisible ? "start-0" : "start-[-100%]"
          }`}
        >
          <Siderbar toggleSidebar={toggleSidebar} />
        </div>
        <div className="px-5 py-[19px] w-full bg-white relative z-20 border-b border-b-black">
          <div className="flex items-center justify-between md:justify-end">
            <span className="cursor-pointer md:hidden" onClick={toggleSidebar}>
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
                <p className="ff_inter font-normal text-sm text-black">
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
            className="py-2 md:py-[13px] border border-solid border-black rounded-sm border-opacity-60 ff_inter font-normal text-black text-sm leading-[1] bg-white block w-full text-center duration-300 hover:bg-[linear-gradient(142.51deg,#FB981D_0%,#FB6609_89.88%),linear-gradient(0deg,#000000,#000000)] hover:text-white"
          >
            Log Out
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
