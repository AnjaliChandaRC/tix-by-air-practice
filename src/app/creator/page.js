import CreateCommunity from "@/componets/dashboards/CreateCommunity";
import MyCommunities from "@/componets/dashboards/MyCommunities";
import YourCommunities from "@/componets/dashboards/YourCommunities";
import DashboardHeader from "@/componets/dashboards/common/header/DashboardHeader";
import Siderbar from "@/componets/dashboards/common/sidebar/Siderbar";
import React from "react";

const page = () => {
  return (
    <>
        <div className="flex h-screen">
        <span className="hidden md:inline-block">
          <Siderbar />
        </span>
        <div className="w-full h-screen flex flex-col overflow-auto">
          <DashboardHeader />
          <YourCommunities />
        </div>
      </div>
      {/* <CreateCommunity /> */}
    </>
  );
};

export default page;
