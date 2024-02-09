"use client";
import React, { useState } from "react";
import CustomInputs from "../common/fields/CustomInput";
import CustomButton from "../common/button/CustomButton";
import CustomTextArea from "../common/fields/CustomTextArea";
import { useForm } from "react-hook-form";
import { EyeIcon } from "../common/icons/EyeIcon";
import { EyeClosedIcon } from "@radix-ui/react-icons";
const CreateCommunity = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  // Callback function when form is submitted
  const onSubmit = (data) => {
    if (errors.userName === undefined) {
      // Checking if there are no errors for username
      reset();
    }
  };
  const [inputValue, setInputValue] = useState("");
  const [valueArray, setValueArray] = useState([]);
  const handleNameChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Shift") {
      setValueArray((prevArray) => [...prevArray, inputValue]);
      setInputValue("");
      console.log(inputValue);
    }
  };
  const handleRemove = (index) => {
    setValueArray((prevArray) => {
      const newArray = [...prevArray];
      newArray.splice(index, 1);
      return newArray;
    });
  };
  return (
    <div className="flex flex-col w-full">
      <div className="w-full min-h-[calc(100vh-80px)] p-5 md:p-6">
        <div className="border rounded-2xl bg-whitesmoke p-[22px]">
          <h2 className="text-black ff_satoshi_black leading-[100%] text-2xl md:text-[28px]">
            Create New Community
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <label
                htmlFor="userName"
                className="ff_inter font-semibold text-black"
              >
                Community Name
              </label>
              <div className="pt-[10px]">
                <CustomInputs
                  type="text"
                  placeholder="UI/UX"
                  label="Username"
                  className="bg-transparent"
                  register={register("userName", {
                    required: "Community Name is required.",
                  })} // Registering the username field with validation
                  error={errors.userName}
                />
                <p className="ff_inter  text-sm text-shadowgray pt-2.5">
                  This is your community’s display name
                </p>
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="password"
                className="ff_inter font-semibold text-black"
              >
                Community Password
              </label>
              <div className="pt-[10px] ">
                <div className="relative">
                  <CustomInputs
                    type={showPassword ? "text" : "password"}
                    placeholder="Community Password"
                    label="password"
                    className="bg-transparent"
                    register={register("password", {
                      required: "Community Password is required.",
                    })} // Registering the username field with validation
                    error={errors.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                    className="absolute top-2/4 -translate-y-2/4 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                  </button>
                </div>
                <p className="ff_inter  text-sm text-shadowgray pt-2.5">
                  This is your community’s password. Member who are not a part
                  of your community will have to type it in when they see your
                  page
                </p>
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="interest"
                className="ff_inter font-semibold text-black"
              >
                Interest
              </label>
              <div className="pt-[10px]">
                <div class="rounded-lg border border-light-grey h-[60px] pt-[13px] pb-[14px] px-3 input-no-spinner w-full placeholder:text-sm placeholder:ff_inter bg-transparent">
                  {valueArray.map((obj, index) => {
                    return (
                      <span
                        key={index}
                        class="px-2 me-2 py-1 rounded-[10px] bg-antiquewhite border border-[#888178] border-solid bg-antique-white ff_inter  inline-block text-sm relative text-[#4A4641] "
                      >
                        {obj}
                        <button
                          onClick={() => handleRemove(index)}
                          className="text-orange font-bold ps-1 "
                        >
                          X
                        </button>
                      </span>
                    );
                  })}
                  <input
                    type="text"
                    id="Name"
                    value={inputValue}
                    onChange={handleNameChange}
                    onKeyDown={handleKeyPress}
                    className=" outline-none bottom-0 bg-transparent text-sm  text-dark-grey"
                  />
                </div>
                {/* <CustomInputs
                  type="text"
                  placeholder="Interest"
                  label="interest"
                  className="bg-transparent "
                  register={register("interest", {
                    required: "Interest is required.",
                  })} // Registering the username field with validation
                  error={errors.interest}
                /> */}
                <p className="ff_inter  text-sm text-shadowgray pt-2.5">
                  This is your Community’s interest
                </p>
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="ff_inter font-semibold text-black"
              >
                About
              </label>
              <div className="pt-[10px]">
                <CustomTextArea
                  type="text"
                  placeholder="Message"
                  label="message"
                  className="bg-transparent "
                  register={register("message", {
                    required: "Message is required.",
                  })} // Registering the username field with validation
                  error={errors.message}
                />
                <p className="ff_inter  text-sm text-shadowgray pt-2.5">
                  This is your community’s about
                </p>
              </div>
            </div>
            <div className="mt-[30px]">
              <CustomButton title="Submit" className="w-[167px]" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunity;
