import MyCommunities from "@/componets/dashboards/MyCommunities";
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
          <MyCommunities />
        </div>
      </div>
    </>
  );
};

export default page;
