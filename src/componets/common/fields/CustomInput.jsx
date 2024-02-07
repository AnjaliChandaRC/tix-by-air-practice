import React from "react";

const CustomInput = ({ error, handleInputChange, phoneNumber, type, placeholder }) => {
  // Check if the phone number is valid (6 characters)
  const isPhoneNumberValid = phoneNumber && phoneNumber.length === 6; // Added a condition to check if phoneNumber exists
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full focus-visible:border-orange rounded-lg border-granitegray border-[1px] pt-[13px] pb-[14px] px-3 h-[44px] input-no-spinner outline-orange"
        onChange={handleInputChange}
      />
      {error && (
        <p className="text-red-500 text-xs font-inter mt-1">
          {phoneNumber === "" ? 'Phone number is required' : isPhoneNumberValid ? "" : 'Invalid phone number'}
        </p>
      )}
    </>
  );
};

export default CustomInput;
