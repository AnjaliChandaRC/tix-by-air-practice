"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CrossIcon, HamburgerIcon } from "../icons/Landing";
import SendCode from "./authenticationPopups/SendCode";

const Header = () => {
  const [menuPopup, setMenuPopUp] = useState(false);
  // Add Close Function Here
  const closeMenuPopup = () => {
    setMenuPopUp(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", closeMenuPopup);
    return () => {
      document.body.removeEventListener("click", closeMenuPopup);
    };
  }, []);

  // Add overflow in Body
  useEffect(() => {
    if (menuPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuPopup]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function jo handle karega "log in" button click
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {/* DESKTOP CODE START HERE */}
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
            className="ff_inter border-l-2 border-black px-[29px] py-[31px] hover:text-orangecrayola transition-all ease-in-out duration-300"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="ff_inter border-l-2 border-black px-[29px] py-[31px] hover:text-orangecrayola transition-all ease-in-out duration-300"
          >
            FAQ
          </Link>
          <button
            className="ff_inter font-semibold log_in_btn_bg border-l-2 border-smokyblack py-[27px] px-[55px] px-[29px]pt-[25px]pb-[29px] transition-all ease-in-out duration-300"
            onClick={handleLoginClick}
          >
            LOG IN
          </button>
          {isLoggedIn && <SendCode />}
        </div>
        <button
          className="py-[15px] px-[13px] border-l-2 border-black sm:hidden"
          onClick={() => setMenuPopUp(!menuPopup)}
        >
          {menuPopup === false ? <HamburgerIcon /> : <CrossIcon />}
        </button>
      </div>

      {/* MOBILE CODE START HERE */}
      <div
        className={`${
          menuPopup === false ? "right-[-400px]" : "right-[5px]"
        } fixed z-20 top-[45px] w-[181px] rounded-lg border-2 overflow-hidden duration-300 ease-in-out transition-all border-black bg-white shadow-md`}
      >
        <Link
          onClick={closeMenuPopup}
          href="#feature"
          className="ff_inter hover:text-orangecrayola transition-all ease-in-out duration-300 py-[18px] flex justify-center items-center w-full"
        >
          Features
        </Link>
        <Link
          onClick={closeMenuPopup}
          href="#faq"
          className="ff_inter hover:text-orangecrayola transition-all ease-in-out duration-300 py-[18px] flex justify-center w-full items-center  border-t-2 border-black"
        >
          FAQ
        </Link>
        <button
          className="ff_inter font-semibold log_in_btn_bg transition-all ease-in-out duration-300 py-[18px] flex justify-center items-center text-nowrap w-full  border-t-2 border-black"
          onClick={handleLoginClick}
        >
          LOG IN
        </button>
        {isLoggedIn && <SendCode />}
      </div>

      {/* ADD OVERLAY HERE */}
      {menuPopup && (
        <div
          onClick={closeMenuPopup}
          className="w-screen h-screen top-0 left-0 fixed z-10 bg-overlayBg"
        ></div>
      )}
    </>
  );
};

export default Header;
