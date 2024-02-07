import React from "react";

const CustomInput = ({ error, handleInputChange, phoneNumber, type, placeholder, classNames }) => {
  const isPhoneNumberValid = phoneNumber && phoneNumber.length === 6;

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full focus-visible:border-orange rounded-lg border-granitegray border-[1px] pt-[13px] pb-[14px] px-3 h-[44px] input-no-spinner outline-orange ${classNames}`}
        onChange={handleInputChange}
        maxLength={6}
        aria-label={placeholder} // Add aria-label for accessibility
      />
      {error && (
        <p className="text-red-500 text-xs font-inter mt-1">
          {phoneNumber === "" ? 'Code is required' : 'must be 6 digits'} {/* Improve error message */}
        </p>
      )}
    </>
  );
};

export default CustomInput;

