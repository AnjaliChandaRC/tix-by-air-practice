"use client"; // Indicates this module runs only on the client-side
import React from "react"; // Importing React library
import CommonTable from "./CommonTable"; // Importing CommonTable component
import { EditIcon } from "../common/icons/EditIcon"; // Importing EditIcon component
import { EyeIcon } from "../common/icons/EyeIcon"; // Importing EyeIcon component
import { communitiesHeadList, communityList } from "@/utils/CreatorsHelper"; // Importing data from CreatorsHelper
import Link from "next/link"; // Importing Link component from Next.js
import Heading from "./Heading"; // Importing Heading component

// Defining functional component named YourCommunities
const YourCommunities = () => {


  // Returning JSX for YourCommunities component
  return (
    <>
      <div className=" m-5 md:m-6 border-[1px] rounded-2xl bg-whitesmoke w-full px-[22px] py-[23px] overflow-hidden"> {/* Container div */}
        <Heading // Rendering Heading component
          title="Your Communities" // Passing title prop
          btnTitle="Create New Community"
          className="mb-7 flex-col lg:flex-row  !items-start lg:!items-center gap-4 lg:gap-0" // Customizing className
        />
        <CommonTable // Rendering CommonTable component
          tableHead={communitiesHeadList} // Passing tableHead prop
          ListFooterText="A list of your Communities" // Passing ListFooterText prop
        >
          {communityList && // Mapping through communityList array and rendering table rows
            communityList.map((obj, i) => {
              console.log("objobj",obj.slug)
              return(
                <tr key={i}> {/* Table row */}
                <td className=" ff_inter text-black font-normal text-sm leading-[100%] pl-3 md:pl-6 py-4 w-[150px]"> {/* Table data */}
                  {obj.coummunityName} {/* Displaying community name */}
                </td>
                <td className=" ff_inter text-black font-normal text-sm leading-[100%] pl-3 md:pl-6 py-4 w-[180px]"> {/* Table data */}
                  {obj.totalMembers} {/* Displaying total members */}
                </td>
                <td className="py-4 w-[180px] pl-3 md:pl-6"> {/* Table data */}
                  <Link // Rendering Link component for editing
                    href="/creator/create-community?type=edit" // Setting href for Link
                    className="flex items-center gap-x-[2px] group transition-all duration-300 hover:text-orangecrayola ff_inter text-black font-normal text-sm leading-[100%]" // Customizing className
                  >
                    <span>
                      <EditIcon stroke="group-hover:stroke-orangecrayola transition-all duration-200" /> {/* Rendering EditIcon */}
                    </span>
                    Edit 
                  </Link>
                </td>
                <td className="pl-3 md:pl-6 py-4 w-[150px]"> {/* Table data */}
                  <Link // Rendering Link component for viewing
                    href="/creator/information" // Setting href for Link
                    className="flex items-center gap-x-[2px] group transition-all duration-300 hover:text-orangecrayola ff_inter text-black font-normal text-sm leading-[100%] " // Customizing className
                  >
                    <span>
                      <EyeIcon fill="w-[13px] group-hover:fill-orangecrayola transition-all duration-300 ease-linear" /> {/* Rendering EyeIcon */}
                    </span>
                    View {/* Text */}
                  </Link>
                </td>
              </tr>
              )
            })}
        </CommonTable>
      </div>
    </>
  );
};

export default YourCommunities; // Exporting YourCommunities component as default
