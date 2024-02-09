"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SidebarData } from "@/utils/CreatorsHelper";
import { usePathname } from "next/navigation";
import { BackArrow } from "../icons/SidebarIcons";
const Siderbar = ({ toggleSidebar }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-[275px] sm:w-[255px] md:w-[244px] bg-smokyblack h-screen rounded-e-[32px] pb-4 ">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className=" flex items-center gap-4 mx-5 md:mx-[30px] mt-[30px]">
              <span
                onClick={toggleSidebar}
                className="cursor-pointer md:hidden"
              >
                <BackArrow />
              </span>
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src="/assets/images/png/nav-logo.png"
                  alt="logo"
                  width={79}
                  height={54}
                />
                <span className="text-textlg ff_inter font-bold text-white">
                  TixByAir
                </span>
              </Link>
            </div>
            <div className="ps-6 mt-7">
              {SidebarData.map((obj, index) => {
                return (
                  <Link
                    key={index}
                    href={obj.sidebarLink}
                    onClick={toggleSidebar}
                    className={`font-semibold text-sm flex gap-3 py-[18px] rounded-s-full ps-5 my-[7px] ${
                      pathname === obj.sidebarLink
                        ? "bg-white items-center text-black relative"
                        : "text-white"
                    }`}
                  >
                    {pathname === obj.sidebarLink ? (
                      <>
                        <span className="absolute w-[30px] h-[30px] bg-white bottom-[-30px] end-0 before:content-[''] before:absolute before:w-[30px] before:h-[30px] before:bg-smokyblack before:bottom-0 before:end-0 before:rounded-tr-[40px]"></span>
                        <span className="absolute w-[30px] h-[30px] bg-white top-[-30px] end-0 after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:bg-smokyblack after:top-0 after:end-0 after:rounded-br-[40px]"></span>
                      </>
                    ) : (
                      ""
                    )}
                    <span
                      className={` ${
                        pathname === obj.sidebarLink ? "icon_active" : ""
                      }`}
                    >
                      {obj.icon}
                    </span>
                    {obj.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <span>
            <Image
              src="/assets/images/png/sidebar_internet_img.png"
              alt="internet"
              width={205}
              height={210}
              className="mx-auto"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Siderbar;
