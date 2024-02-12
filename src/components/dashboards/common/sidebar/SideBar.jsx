"use client"; // Indicates this module runs only on the client-side
import React from "react"; // Importing React library
import CreatorTabs from "./creator/CreatorTabs"; // Importing CreatorTabs component
import Image from "next/image"; // Importing Image component from Next.js
import { BackArrow } from "../icons/SidebarIcons"; // Importing BackArrow icon component
import Link from "next/link"; // Importing Link component from Next.js

// Defining Sidebar component, responsible for rendering the sidebar navigation
const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  
  // Returning JSX for Sidebar component
  return (
    <>
      {/* Transparent overlay to close sidebar when clicked */}
      {isSidebarVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={() => setIsSidebarVisible(false)} // Handling click event to close sidebar
        ></div>
      )}
      {/* Sidebar container */}
      <div
        className={`bg-smokyblack h-full fixed top-0 w-[255px] z-30 transition-all duration-500 rounded-tr-[32px] rounded-br-[32px] ps-[25px] ${
          isSidebarVisible ? "start-0" : "start-[-255px] md:start-0"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="mt-[30px]">
            <div className="flex items-center gap-[5px] pb-4">
              {/* Button to close sidebar (visible only on mobile) */}
              <button
               onClick={() => setIsSidebarVisible(false)} // Handling click event to close sidebar
                className="text-white md:hidden w-[22px] h-[22px]"
              >
                <BackArrow /> {/* BackArrow icon */}
              </button>
              {/* Logo linking to home */}
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src="/assets/images/png/nav-logo.png"
                  alt="footer-logo"
                  height={58}
                  width={79}
                /> {/* Logo image */}
                <h2 className="text-white ff_inter font-bold text-2xl leading-[100%]">
                  TixByAir {/* Website name */}
                </h2>
              </Link>
            </div>
            {/* Tabs for creators */}
            <CreatorTabs /> {/* Rendering CreatorTabs component */}
          </div>
          {/* Image */}
          <Image
            src="/assets/images/png/sidebar_internet_img.png" // Image source
            alt="Internet" // Alt text for accessibility
            width={205} // Image width
            height={210} // Image height
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar; // Exporting Sidebar component as default
