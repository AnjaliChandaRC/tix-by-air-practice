import Image from "next/image";
import React from "react";

const DashboardHeader = () => {
  return (
    <>
      <div className="p-5 w-full bg-white border-b border-b-black">
       
        <div className="flex gap-2 justify-end">
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
    </>
  );
};

export default DashboardHeader;
