"use client";
import CustomButton from "@/componets/common/button/CustomButton";
import CustomInput from "@/componets/common/fields/CustomInput";
import { CrossIcon } from "@/componets/common/icons/ToggleIcon";
import React from "react";

const SendCode = ({ setCurrentModal }) => {
  const changeModalHandler = () => {
    setCurrentModal("verifyCode");
  };

  return (
    <>
        <div>
          <button
            className="absolute top-[20px] right-[20px] popup_cross_icon"
          >
            <CrossIcon />
          </button>
          <h3 className="ff_inter font-semibold text-black pb-4 text-center">
            Enter Your Phone Number
          </h3>
          <CustomInput type="number" placeholder="+1 (xxx) xxx xxxx" />
          <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
            Enter your number to sign in sign & register for tixbyair. US number
            only.
          </p>
          <CustomButton
            title="Send code"
            changeModalHandler={changeModalHandler}
          />
        </div>
    </>
  );
};

export default SendCode;
