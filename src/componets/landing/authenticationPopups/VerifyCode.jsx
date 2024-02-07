"use client";
import CustomButton from "@/componets/common/button/CustomButton";
import CustomInput from "@/componets/common/fields/CustomInput";
import { CrossIcon } from "@/componets/common/icons/ToggleIcon";
import React, { useState } from "react";

const VerifyCode = ({ setCurrentModal }) => {
  const [error, setError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const changeModalHandler = () => {
    setCurrentModal("createUser");
  };

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
    setError(false);
  };

  const handleSendCode = () => {
    setCurrentModal('verifyCode');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() === "" || phoneNumber.length !== 6) {
      setError(true);
    } else {
      setError(false);
      handleSendCode();
    }
  };

  return (
    <div>
      <button
        className="absolute top-[20px] right-[20px] popup_cross_icon"
        onClick={changeModalHandler}
      >
        <CrossIcon />
      </button>
      <h3 className="ff_inter font-semibold text-black pb-4 text-center">
        Verification Code
      </h3>
      <form onSubmit={submitHandler}>
        <CustomInput
          type="number"
          placeholder="123456"
          value={phoneNumber}
          handleInputChange={handleInputChange}
          error={error}
        />
        <p className="mt-2 text-xs text-black opacity-70 ff_inter">
          We are sending your verification code. Enter it above when you receive it.
        </p>
        <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
          Refresh your page to get a new code after a few minutes
        </p>
        <CustomButton
          title="Verify code"
          onClick={handleSendCode} // Ensure onClick handler is set
        />
      </form>
    </div>
  );
};

export default VerifyCode;
