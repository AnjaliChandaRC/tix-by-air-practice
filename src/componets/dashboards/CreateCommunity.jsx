"use client"
import React, { useState } from "react";
import CustomInputs from "../common/fields/CustomInput";
import CustomButton from "../common/button/CustomButton";
import CustomTextArea from "../common/fields/CustomTextArea";
import { useForm } from "react-hook-form";
import { EyeIcon } from "../common/icons/EyeIcon";
import { EyeClosedIcon } from "@radix-ui/react-icons";
const CreateCommunity = ({ setCurrentModal }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  // Callback function when form is submitted
  const onSubmit = (data) => {
    console.log(data.userName); // Accessing the username from the form data
    if (errors.userName === undefined) { // Checking if there are no errors for username
      reset();
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full min-h-[calc(100vh-80px)] p-5 md:p-6">
        <div className="border-[1px] rounded-2xl bg-whitesmoke p-[22px]">
          <h2 className="text-black ff_satoshi_black leading-[100%] text-2xl md:text-[28px]">
            Create New Community
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <label htmlFor="userName" className="ff_inter font-semibold text-base text-black">
                Community Name
              </label>
              <div className="pt-[10px]">
                <CustomInputs
                  type="text"
                  placeholder="UI/UX"
                  label="Username"
                  className="bg-transparent"
                  register={register('userName', { required: 'Community Name is required.' })} // Registering the username field with validation
                  error={errors.userName}
                />
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
                  This is your community’s display name
                </p>
              </div>
            </div>
            <div className="mt-8">
              <label htmlFor="password" className="ff_inter font-semibold text-base text-black">
                Community Password
              </label>
              <div className="pt-[10px] ">
                <div className="relative">
                <CustomInputs
                  type={showPassword ? "text" : "password"}
                  placeholder="Community Password"
                  label="password"
                  className="bg-transparent"
                  register={register('password', { required: 'Community Password is required.' })} // Registering the username field with validation
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
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
                  This is your community’s password. Member who are not a part of your community will have to type it in when they see your page
                </p>
              </div>
            </div>
            <div className="mt-8">
              <label htmlFor="interest" className="ff_inter font-semibold text-base text-black">
                Interest
              </label>
              <div className="pt-[10px]">
                <CustomInputs
                  type="text"
                  placeholder="Interest"
                  label="interest"
                  className="bg-transparent "
                  register={register('interest', { required: 'Interest is required.' })} // Registering the username field with validation
                  error={errors.interest}
                />
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
                  This is your Community’s interest
                </p>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="ff_inter font-semibold text-base text-black">
                About
              </label>
              <div className="pt-[10px]">
                <CustomTextArea
                  type="text"
                  placeholder="Message"
                  label="message"
                  className="bg-transparent "
                  register={register('message', { required: 'Message is required.' })} // Registering the username field with validation
                  error={errors.message}
                />
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
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