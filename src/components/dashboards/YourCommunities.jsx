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
      <Heading title="Create New Community" />
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
                  className="flex items-center gap-x-[2px]  group transition-all duration-300 hover:text-orange05 font-inter text-black font-normal text-sm leading-[1]"
                >
                  <span>
                    <EditIcon stroke="group-hover:stroke-orange05 transition-all duration-200" />
                  </span>
                  Edit
                </Link>
              </td>
              <td className="pl-3 md:pl-6 py-4 w-[150px]">
                <Link
                  href="/"
                  className="flex items-center gap-x-[2px]  group transition-all duration-300 hover:text-orange05 font-inter text-black font-normal text-sm leading-[1] "
                >
                  <span>
                    <EyeIcon className="w-[13px] group-hover:fill-orange05 transition-all duration-100 ease-linear" />
                  </span>
                  View
                </Link>
              </td>
            </tr>
          ))}
      </CommonTable>
    </>
  );
};

export default YourCommunities;
