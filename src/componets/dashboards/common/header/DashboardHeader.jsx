"use client";
import { HamburgerIcon } from "@/componets/common/icons/ToggleIcon";
import Image from "next/image";
import React, { useState } from "react";
import Siderbar from "../sidebar/Siderbar";

const DashboardHeader = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <div className="p-5 w-full bg-white border-b border-b-black">
        <span
          className={`fixed top-0 md:hidden z-20 ${
            sidebarVisible ? "start-0" : "start-[-100%]"
          }`}
        >
          <Siderbar />
        </span>
        <div className="flex items-center justify-between md:justify-end">
          <span className="cursor-pointer md:hidden" onClick={toggleSidebar}>
            <HamburgerIcon />
          </span>
          <div className="flex gap-2">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
