import React from "react";

export default function CustomInputs(props) {
  const {
    placeholder,
    register,
    error,
    backGround,
    color,
    type,
    className // Additional className prop to pass custom classes
  } = props;

  const inputClasses = `rounded-lg border border-light-grey h-[44px] pt-[13px] pb-[14px] px-3 text-sm font-normal font-inter focus-visible:border-orange outline-orange text-dark-grey input-no-spinner w-full placeholder:text-sm placeholder:ff_inter ${backGround || ""} ${color || ""} ${className || ""}`;

  return (
    <>
      <input
        type={type || "text"}
        className={inputClasses}
        placeholder={placeholder}
        {...register} // Moved register prop here
      />
      {error && (
        <p className="text-red-500 text-xs font-inter mt-1">{error.message}</p>
      )}
    </>
  );
}
