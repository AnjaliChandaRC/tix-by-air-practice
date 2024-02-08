import Image from "next/image";
import Link from "next/link";
import React from "react";

const Siderbar = () => {
  return (
    <>
      <div className="w-[244px] bg-smokyblack h-screen rounded-e-[32px]">
        <Link
          href="/"
          className=" flex items-center gap-1 px-[30px] pt-[30px] pb-2"
        >
          <Image
            src="/assets/images/png/nav-logo.png"
            alt="logo"
            width={79}
            height={54}
          />
          <span className="text-[10px] sm:text-textlg ff_inter font-bold text-white">
            TixByAir
          </span>
        </Link>
      </div>
    </>
  );
};

export default Siderbar;
