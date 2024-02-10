"use client";
import React from "react";
import CustomButton from "../common/button/CustomButton";
import CommonTable from "./common/commonTable/CommonTable";
import { EditIcon } from "../common/icons/EditIcon";
import { EyeIcon } from "../common/icons/EyeIcon";

const YourCommunities = () => {
  // Define table headers
  const tableHeaderData = [
    "Community name",
    "Number of members",
    "Manage",
    "View Community",
  ];
  // Define table data
  const tableRowData = [
    [
      "UI/UX",
      12,
      <div
        key="ui-ux"
        className="flex items-center gap-[6px] cursor-pointer table_edit_hover hover:text-orangecrayola"
      >
        <EditIcon /> Edit
      </div>,
      <div
        key="ui-ux-view"
        className="flex items-center gap-[6px] cursor-pointer table_eye_hover hover:text-orangecrayola"
      >
        <EyeIcon /> View
      </div>,
    ],
    [
      "Designers",
      5,
      <div
        key="designers"
        className="flex items-center gap-[6px] cursor-pointer table_edit_hover hover:text-orangecrayola"
      >
        <EditIcon /> Edit
      </div>,
      <div
        key="designers-view"
        className="flex items-center gap-[6px] cursor-pointer table_eye_hover hover:text-orangecrayola"
      >
        <EyeIcon /> View
      </div>,
    ],
  ];

  return (
    <div className=" min-h-[calc(100vh-128px)] m-5 md:m-6 border-[1px] rounded-2xl bg-whitesmoke sm:p-[22px] p-3">
      {/* Section heading and button to create new community */}
      <div className="flex lg:items-center flex-col lg:flex-row lg:justify-between">
        <h2 className="text-black ff_satoshi_black text-2xl md:text-[28px] leading-[100%]">
          Your Communities
        </h2>
        <div className="mt-3 lg:mt-0">
          <CustomButton title="Create New Community" />
        </div>
      </div>
      {/* Custom table component */}
      <div className="mt-7">
        <CommonTable tableHeader={tableHeaderData} tableData={tableRowData} />
      </div>
      {/* Additional information */}
      <p className="text-graytwo ff_inter text-center text-sm leading-[100%] mt-7">
        A list of your Communities
      </p>
    </div>
  );
};

export default YourCommunities;
