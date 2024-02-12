"use client";
import React from "react";
import CommonTable from "./CommonTable";
import { EditIcon } from "../common/icons/EditIcon";
import { EyeIcon } from "../common/icons/EyeIcon";
import { communitiesHeadList, communityList } from "@/utils/CreatorsHelper";
import Link from "next/link";
import Heading from "./Heading";

const YourCommunities = () => {
  return (
    <>
      <div className=" m-5 md:m-6 border-[1px] rounded-2xl bg-whitesmoke w-full px-[22px] py-[23px] overflow-hidden">
        <Heading
          title="Create New Community "
          url="create-community"
          className="mb-7 flex-col lg:flex-row  !items-start lg:!items-center gap-4 lg:gap-0"
        />
        <CommonTable
          tableHead={communitiesHeadList}
          ListFooterText="A list of your Communities"
        >
          {communityList &&
            communityList.map((obj, i) => (
              <tr key={i}>
                <td className=" font-inter text-black font-normal text-sm leading-[1] pl-3 md:pl-6 py-4 w-[150px]">
                  {obj.coummunityName}
                </td>
                <td className=" font-inter text-black font-normal text-sm leading-[1] pl-3 md:pl-6 py-4 w-[180px]">
                  {obj.totalMembers}
                </td>
                <td className="py-4 w-[180px] pl-3 md:pl-6">
                  <Link
                    href="/"
                    className="flex items-center gap-x-[2px] group transition-all duration-300 hover:text-orangecrayola font-inter text-black font-normal text-sm leading-[1]"
                  >
                    <span>
                      <EditIcon stroke="group-hover:stroke-orangecrayola transition-all duration-200" />
                    </span>
                    Edit
                  </Link>
                </td>
                <td className="pl-3 md:pl-6 py-4 w-[150px]">
                  <Link
                    href="/"
                    className="flex items-center gap-x-[2px] group transition-all duration-300 hover:text-orangecrayola font-inter text-black font-normal text-sm leading-[1] "
                  >
                    <span>
                      <EyeIcon fill="w-[13px] group-hover:fill-orangecrayola transition-all duration-300 ease-linear" />
                    </span>
                    View
                  </Link>
                </td>
              </tr>
            ))}
        </CommonTable>
      </div>
    </>
  );
};

export default YourCommunities;
