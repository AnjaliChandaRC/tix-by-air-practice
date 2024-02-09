import React from "react";
import CustomInputs from "../common/fields/CustomInput";

const CreateCommunity = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-[80px] w-full bg-white border-b-2"></div>
      <div className="w-full  min-h-[calc(100vh-80px)] p-5 md:p-6">
        <div className="border-[1px] rounded-2xl bg-whitesmoke  p-[22px]">
          <h2 className="text-black ff_satoshi_black leading-[100%] text-2xl md:text-[28px]">
            Create New Community
          </h2>
          <form action="">
            <div className="mt-5">
              <label
                htmlFor=""
                className="ff_inter font-semibold text-base text-black"
              >
                Community Name
              </label>
              <div className="pt-[10px]">
                <CustomInputs type="text" placeholder="UI/UX" />
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
                  This is your community’s display name
                </p>
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor=""
                className="ff_inter font-semibold text-base text-black"
              >
                Community Password
              </label>
              <div className="pt-[10px]">
                <CustomInputs type="password" placeholder="Lorem Ipsum Dolor" />
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
                  This is your community’s password. Member who are not a part
                  of your community will have to type it in when they see your
                  page
                </p>
              </div>
            </div>
            <div className="mt-8">
              <label
                htmlFor=""
                className="ff_inter font-semibold text-base text-black"
              >
                Interest
              </label>
              <div className="pt-[10px]">
                <CustomInputs type="text" placeholder="Lorem Ipsum Dolor" />
                <p className="ff_inter font-normal text-sm text-shadowgray pt-2.5">
                  This is your Community’s interest
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunity;
