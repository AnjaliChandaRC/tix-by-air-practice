"use client";
import CustomButton from "@/componets/common/button/CustomButton";
import CustomInput from "@/componets/common/fields/CustomInput";
import { CrossIcon } from "@/componets/common/icons/ToggleIcon";
import React from "react";

const VerifyCode = ({ setCurrentModal }) => {
  const changeModalHandler = () => {
    setCurrentModal("createUser");
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
          Verification Code
        </h3>
        <CustomInput type="number" placeholder="123456" />
        <p className="mt-2 text-xs text-black opacity-70 ff_inter">
          We are sending your verification code. Enter it above when you receive
          it.
        </p>
        <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
          Refresh your page too get a new code after a few minutes
        </p>
        <CustomButton
          title="Verify code"
          changeModalHandler={changeModalHandler}
        />
      </div>
    </>
  );
};

export default VerifyCode;
