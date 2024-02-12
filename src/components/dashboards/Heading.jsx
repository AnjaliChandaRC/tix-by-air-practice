import React from "react";
import CustomButton from "../common/button/CustomButton";

const Heading = ({ title, className, url }) => {

  return (
    <div className={`flex items-center justify-between me-[2px] ${className}`}>
      <h2 className="text-black ff_satoshi_black text-2xl md:text-[28px] leading-[100%]">{title}</h2>
      <CustomButton title="Create New Community" isBgGradient={true} url={url}/>
    </div>
  );
};

export default Heading;
