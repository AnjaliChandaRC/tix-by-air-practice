"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CrossIcon, HamburgerIcon } from "../icons/Landing";

const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = (e) => {
    e.stopPropagation();
    setSidebarVisible(!isSidebarVisible);
  };
  const closeSidebar = () => {
    setSidebarVisible(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", closeSidebar);
    return () => {
      document.body.removeEventListener("click", closeSidebar);
    };
  }, []);
  const handleSidebarClick = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarVisible]);
  return (
    <>
      <div className="flex justify-between items-center h-[40px] sm:h-[80px] border-b-2 border-black relative z-20 bg-white">
        <Link
          href="/"
          className="flex items-center gap-2 px-[10px] sm:px-[30px] py-[9px] sm:py-[10px] border-r-2 border-black"
        >
          <Image
            src="/assets/images/png/nav-logo.png"
            alt="footer logo"
            height={59}
            width={83}
            className="logo_img"
          />
          <p className="text-[10px] sm:text-textlg ff_inter font-bold text-black">
            TixByAir
          </p>
        </Link>
        <div className="hidden sm:block">
          <Link
            href="#feature"
            className="ff_inter border-l-2 border-black px-[29px] pt-[31px] pb-[33px] hover:text-orangecrayola transition-all ease-in-out duration-300"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="ff_inter border-l-2 border-black px-[29px] pt-[31px] pb-[33px] hover:text-orangecrayola transition-all ease-in-out duration-300"
          >
            FAQ
          </Link>
          <button className="ff_inter font-semibold log_in_btn_bg border-l-2 border-smokyblack px-[29px] pt-[25px] pb-[29px] transition-all ease-in-out duration-300">
            LOG IN
          </button>
        </div>
        <button
          className="py-[15px] px-[13px] border-l-2 border-black sm:hidden"
          onClick={toggleSidebar}
        >
          <HamburgerIcon />
        </button>
      </div>
      <div
        onClick={handleSidebarClick}
        className={`${
          isSidebarVisible === false
            ? "right-[-400px]"
            : "right-[5px] top-[45px]"
        } fixed z-20 w-[181px] rounded-lg border-2 overflow-hidden duration-300 ease-in-out transition-all border-black bg-white shadow-md`}
      >
        <Link
          onClick={closeSidebar}
          href="#feature"
          className="ff_inter hover:text-orangecrayola transition-all ease-in-out duration-300 py-[18px] flex justify-center items-center w-full"
        >
          Features
        </Link>
        <Link
          onClick={closeSidebar}
          href="#faq"
          className="ff_inter hover:text-orangecrayola transition-all ease-in-out duration-300 py-[18px] flex justify-center w-full items-center  border-t-2 border-black"
        >
          FAQ
        </Link>
        <button
          onClick={closeSidebar}
          className="ff_inter font-semibold log_in_btn_bg transition-all ease-in-out duration-300 py-[18px] flex justify-center items-center text-nowrap w-full  border-t-2 border-black"
        >
          LOG IN
        </button>
      </div>
      {isSidebarVisible && (
        <div
          onClick={closeSidebar}
          className="w-screen h-screen top-0 left-0 fixed z-10 bg-[#000000a7]"
        ></div>
      )}
    </>
  );
};

export default Header;
