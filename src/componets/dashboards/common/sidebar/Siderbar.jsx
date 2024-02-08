"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SidebarData } from "@/utils/CreatorsHelper";
import { usePathname } from "next/navigation";
const Siderbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-[244px] bg-smokyblack h-screen rounded-e-[32px] pb-4">
        <div className="flex flex-col justify-between h-full">
          <div>
            <Link
              href="/"
              className="flex items-center gap-1 px-[30px] pt-[30px] pb-2"
            >
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
            <div className="ps-6">
              {SidebarData.map((obj, index) => {
                return (
                  <Link
                    key={index}
                    href={obj.sidebarLink}
                    className={`font-semibold text-sm flex gap-3 py-[17px] rounded-s-full ps-5 my-[22px] ${
                      pathname === obj.sidebarLink
                        ? "bg-white items-center text-black relative"
                        : "text-white"
                    }`}
                  >
                    <span className="absolute w-[30px] h-[30px] bg-white bottom-[-30px] end-0 before:content-[''] before:absolute before:w-[30px] before:h-[30px] before:bg-black before:bottom-0 before:end-0 before:rounded-tr-[40px]"></span>
                    <span className="absolute w-[30px] h-[30px] bg-white top-[-30px] end-0 after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:bg-black after:top-0 after:end-0 after:rounded-br-[40px]"></span>
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
