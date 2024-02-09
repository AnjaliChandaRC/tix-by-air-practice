"use client"
import React from "react";
import CustomInputs from "../common/fields/CustomInput";
import CustomButton from "../common/button/CustomButton";
import CustomTextArea from "../common/fields/CustomTextArea";
import { useForm } from "react-hook-form";

const CreateCommunity = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data.userName);
    // Check if there are no errors before proceeding
    if (!errors.userName) {
      // Here you can proceed with submitting the form or any other action
      // After successful submission, reset the form
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
                  id="userName"
                  placeholder="UI/UX"
                  className='bg-transparent'
                  {...register('userName', { required: 'Community Name is required.' })}
                  error={errors.userName} />
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
                  This is your community’s display name
                </p>
              </div>
            </div>
            <div className="mt-8">
              <label htmlFor="CommunityPassword" className="ff_inter font-semibold text-base text-black">
                Community Password
              </label>
              <div className="pt-[10px]">
                <CustomInputs
                  type="Password"
                  id="CommunityPassword"
                  placeholder="Lorem Ipsum Dolor"
                  className='bg-transparent'
                  {...register('CommunityPassword', { required: 'Community Password is required.' })}
                  error={errors.CommunityPassword} />
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
                  id="interest"
                  placeholder="Lorem Ipsum Dolor"
                  className='bg-transparent'
                  {...register('interest', { required: 'Interest is required.' })}
                  error={errors.interest} />
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
                  type=""
                  id="message"
                  placeholder="Lorem Ipsum Dolor"
                  className='bg-transparent'
                  {...register('message', { required: 'Message is required.' })}
                  error={errors.message} />
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
