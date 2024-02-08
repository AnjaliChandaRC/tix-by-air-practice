// CustomInput.js
import React from "react";

const CustomInput = ({ onChange, value, type, placeholder }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "").slice(0, 6);
    onChange(inputValue);
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className="w-full focus-visible:border-orange rounded-lg border-granitegray border-[1px] pt-[13px] pb-[14px] px-3 h-[44px] input-no-spinner outline-orange"
      />
    </>
  );
};

export default CustomInput;
