"use client";
import CustomButton from "@/componets/common/button/CustomButton";
import CustomInput from "@/componets/common/fields/CustomInput";
import { CrossIcon } from "@/componets/common/icons/ToggleIcon";
import React, { useState } from "react";
const VerifyCode = ({ setCurrentModal }) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isValid, setIsValid] = useState(true);
  const changeModalHandler = () => {
    if (isValid) {
      setCurrentModal("createUser");
    } else {
      // Handle invalid code submission, e.g., show an error message
    }
  };
  return (
    <>
      <div>
        <button className="absolute top-[20px] right-[20px] popup_cross_icon">
          <CrossIcon />
        </button>
        <h3 className="ff_inter font-semibold text-black pb-4 text-center">
          Verification Code
        </h3>
        <CustomInput
          type="number"
          placeholder="123456"
          value={verificationCode}
          onChange={(value) => {
            setVerificationCode(value);
            setIsValid(/^\d{6}$/.test(value));
          }}
          isValid={isValid}
        />
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
          disabled={!isValid}
        />
      </div>
    </>
  );
};
export default VerifyCode;