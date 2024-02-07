import React from "react";
const CustomInput = ({ onChange, value, type, placeholder, isValid }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "").slice(0, 6);
    onChange(inputValue);
  };
  return (
    <>
      <input
        type={type} // Set the type attribute using the passed type prop
        placeholder={placeholder} // Set the placeholder attribute using the passed placeholder prop
        value={value}
        onChange={handleInputChange}
        className="w-full focus-visible:border-orange rounded-lg border-granitegray border-[1px] pt-[13px] pb-[14px] px-3 h-[44px] input-no-spinner outline-orange" // Added input-no-spinner class here
      />
      {!isValid && (
        <p className="text-xs text-red-500 mt-1 ff_inter">
          Please enter a valid 6-digit code.
        </p>
      )}
    </>
  );
};
export default CustomInput;
