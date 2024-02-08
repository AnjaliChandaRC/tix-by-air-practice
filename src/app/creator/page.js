import CreateCommunity from "@/componets/dashboards/CreateCommunity";
import MyCommunities from "@/componets/dashboards/MyCommunities";
import Siderbar from "@/componets/dashboards/common/sidebar/Siderbar";
import React from "react";

const page = () => {
  return <>
    {/* <div className="flex items-start">
      <div className="hidden md:block">
        <Siderbar />
      </div>
      <div className="flex flex-col w-full">
        <div className="h-[80px] w-full bg-white border-b-2">
        </div>
        <MyCommunities />
      </div>
    </div> */}
    <CreateCommunity />
  </>;
};

export default page;
