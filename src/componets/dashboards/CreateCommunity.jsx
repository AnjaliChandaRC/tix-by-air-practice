"use client"
import React from "react";
import CustomInputs from "../common/fields/CustomInput";
import CustomButton from "../common/button/CustomButton";
import CustomTextArea from "../common/fields/CustomTextArea";
import { useForm } from "react-hook-form";

const CreateCommunity = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
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
              <label
                htmlFor="communityName"
                className="ff_inter font-semibold text-base text-black">
                Community Name
              </label>
              <div className="pt-[10px]">
                <CustomInputs
                  type="text"
                  placeholder="UI/UX"
                  className='bg-transparent'
                  {...register('communityName', { required: 'Community Name is required.' })}
                />
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
                  This is your community’s display name
                </p>
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="communityPassword"
                className="ff_inter font-semibold text-base text-black">
                Community Password
              </label>
              <div className="pt-[10px]">
                <CustomInputs
                  type="password"
                  placeholder="Lorem Ipsum Dolor"
                  className='bg-transparent'
                  {...register('communityPassword', { required: 'Community Password is required.' })}
                />
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
                  This is your community’s password. Members who are not a part
                  of your community will have to type it in when they see your
                  page
                </p>
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="interest"
                className="ff_inter font-semibold text-base text-black">
                Interest
              </label>
              <div className="pt-[10px]">
                <CustomInputs
                  type="text"
                  placeholder="Lorem Ipsum Dolor"
                  className='bg-transparent'
                  {...register('interest', { required: 'Interest is required.' })}
                />
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
                  This is your Community’s interest
                </p>
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor="about"
                className="ff_inter font-semibold text-base text-black" >
                About
              </label>
              <div className="pt-[10px]">
                <CustomTextArea
                  placeholder="Lorem Ipsum Dolor"
                  className="placeholder:text-black placeholder:text-sm placeholder:leading-[100%] placeholder:ff_inter" />
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
