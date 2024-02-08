"use client";
import React from "react";
import { EyeIcon } from "../icons/EyeIcon";

export default function CustomInputs(props) {
  const {
    placeholder,
    label,
    register,
    error,
    backGround,
    marginBottom,
    color,
    isPassword,
    type,
    setType,
    isTypePassword,
  } = props;
  return (
    <>
      {label && <label
        className={`mb-[15px] block text-primary text-base font-inter font-semibold ${marginBottom && marginBottom
          }`}>
        {label}
      </label>}

      <div className=" relative">
        {isPassword && (
          <span onClick={() => setType(!isTypePassword)}>
            <style
              className={`absolute top-1/2 -translate-y-1/2 w-[2px] ${isTypePassword && isTypePassword ? "h-[20px]" : "h-[0px]"
                } bg-black -rotate-45 z-10 inline-block right-[20px] opacity-70 rounded-xl transation-all duration-100`}></style>
            <EyeIcon style="absolute right-3 top-1/2 -translate-y-1/2" />
          </span>
        )}
        <input
          type={type || "text"}
          className={`rounded-lg border border-light-grey h-[44px] pt-[13px] pb-[14px] px-3 text-xs font-normal font-inter focus-visible:border-orange text-dark-grey input-no-spinner w-full ${backGround && backGround
            } ${color && color}`}
          placeholder={placeholder}
          {...register}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs font-inter mt-1">{error.message}</p>
      )}
    </>
  );
}
