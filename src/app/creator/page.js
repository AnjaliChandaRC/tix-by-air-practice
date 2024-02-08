import CreateCommunity from "@/componets/dashboards/CreateCommunity";
import MyCommunities from "@/componets/dashboards/MyCommunities";
import DashboardHeader from "@/componets/dashboards/common/header/DashboardHeader";
import Siderbar from "@/componets/dashboards/common/sidebar/Siderbar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-start">
        <span>
          <Siderbar />
        </span>
        <div className="flex flex-col w-full">
          <DashboardHeader />
          <MyCommunities />
        </div>
      </div>
      {/* <CreateCommunity /> */}
    </>
  );
};

export default page;
