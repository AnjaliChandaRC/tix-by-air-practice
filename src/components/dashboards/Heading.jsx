import React from "react";
import CustomButton from "../common/button/CustomButton";
import { useRouter } from "next/navigation";

const Heading = ({ title, className, onclick }) => {
  const router = useRouter();
  return (
    <div className={`flex items-center justify-between me-[2px] ${className}`}>
      <h2 className="text-black ff_satoshi_black text-2xl md:text-[28px] leading-[100%]">{title}</h2>
      <CustomButton title="Create New Community" isBgGradient={true} changeModalHandler={onclick} />
    </div>
  );
};

export default Heading;
