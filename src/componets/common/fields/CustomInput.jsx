"use client";
import React from "react";

export default function CustomInputs(props) {
  const {
    placeholder,
    register,
    error,
    backGround,
    color,
    type,
  } = props;
  return (
    <>
      <input
        type={type || "text"}
        className={`rounded-lg border border-light-grey h-[44px] pt-[13px] pb-[14px] px-3 text-sm font-normal font-inter focus-visible:border-orange outline-orange text-dark-grey input-no-spinner w-full ${backGround && backGround
          } ${color && color}`}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <p className="text-red-500 text-xs font-inter mt-1">{error.message}</p>
      )}
    </>
  );
}
