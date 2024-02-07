"use client";
import CustomButton from "@/componets/common/button/CustomButton";
import CustomInput from "@/componets/common/fields/CustomInput";
import { CrossIcon } from "@/componets/common/icons/ToggleIcon";
import React, { useState } from "react";
const VerifyCode = ({ setCurrentModal }) => {
  const [error, setError] = useState(false); // State variable for error handling
  const [phoneNumber, setPhoneNumber] = useState('');

  const changeModalHandler = () => {
    setCurrentModal("createUser");
  };

  // Event handler for input change
  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value); // Update phone number state
    setError(false); // Reset error when input changes
  };

  // Function to handle sending code
  const handleSendCode = () => {
    setCurrentModal('verifyCode'); // Set current modal to 'verifyCode'
  };

  // Callback function when form is submitted
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (phoneNumber.trim() === "" || phoneNumber.length !== 6) { // Check for 6 digit phone number
      setError(true); // Set error state to true if phone number is invalid
    } else {
      setError(false); // Reset error state
      handleSendCode(); // Trigger modal change only if the phone number is valid
    }
  };

  return (
    <>
      <div>
        <button
          className="absolute top-[20px] right-[20px] popup_cross_icon"
          onClick={changeModalHandler} // Added click event handler to close the modal
        >
          <CrossIcon />
        </button>
        <h3 className="ff_inter font-semibold text-black pb-4 text-center">
          Verification Code
        </h3>
        <form onSubmit={submitHandler}>
          <CustomInput type="number" placeholder="123456" phoneNumber={phoneNumber} handleInputChange={handleInputChange} error={error} /> {/* Passed necessary props to CustomInput */}
          <p className="mt-2 text-xs text-black opacity-70 ff_inter">
            We are sending your verification code. Enter it above when you receive
            it.
          </p>
          <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
            Refresh your page to get a new code after a few minutes {/* Fixed typo in text */}
          </p>
          <CustomButton
            title="Verify code"
            changeModalHandler={changeModalHandler}
            disabled={phoneNumber.trim() === ''} // Disable the button if the phone number is not filled
          />
        </form>
      </div>
    </>
  );
};

export default VerifyCode;
