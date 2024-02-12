"use client";
import React from "react";
import CustomButton from "../common/button/CustomButton";
import CommonTable from "./common/commonTable/CommonTable";
import { EditIcon } from "../common/icons/EditIcon";
import { EyeIcon } from "../common/icons/EyeIcon";
import { useRouter } from "next/navigation";
import Link from "next/link";


const YourCommunities = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/creator/create-community");
  };

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
      <Link href="/creator/create-community" key="ui-ux"
        className="flex items-center gap-[6px] cursor-pointer table_edit_hover hover:text-orangecrayola"
      >
        <EditIcon /> Edit
      </Link>,
      <Link href="/creator/information"
        key="ui-ux-view"
        className="flex items-center gap-[6px] cursor-pointer table_eye_hover hover:text-orangecrayola"
      >
        <EyeIcon /> View
      </Link>,
    ],
    [
      "Designers",
      5,
      <Link href="/creator/create-community"
        key="designers"
        className="flex items-center gap-[6px] cursor-pointer table_edit_hover hover:text-orangecrayola"
      >
        <EditIcon /> Edit
      </Link>,
      <Link href="/creator/information"
        key="designers-view"
        className="flex items-center gap-[6px] cursor-pointer table_eye_hover hover:text-orangecrayola"
      >
        <EyeIcon /> View
      </Link>,
    ],
  ];

  return (
    <div className=" m-5 md:m-6 border-[1px] rounded-2xl bg-whitesmoke sm:p-[22px] p-3 w-full overflow-hidden">
      {/* Section heading and button to create new community */}
      <div className="flex lg:items-center flex-col lg:flex-row lg:justify-between">
        <h2 className="text-black ff_satoshi_black text-2xl md:text-[28px] leading-[100%]">
          Your Communities
        </h2>
        <div className="mt-3 lg:mt-0">
          <CustomButton title="Create New Community" changeModalHandler={handleClick} />
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
