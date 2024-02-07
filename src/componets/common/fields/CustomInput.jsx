import React from "react";
const CustomInput = ({ type, placeholder }) => {
  return (
    <>
      <input
        type={type} // Set the type attribute using the passed type prop
        placeholder={placeholder} // Set the placeholder attribute using the passed placeholder prop
        className="w-full rounded-lg border-granitegray border-[1px] pt-[13px] pb-[14px] px-3 h-[44px]"
      />
    </>
  );
};
export default CustomInput;
