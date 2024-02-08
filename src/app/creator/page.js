import MyCommunities from "@/componets/dashboards/MyCommunities";
import Siderbar from "@/componets/dashboards/common/sidebar/Siderbar";
import React from "react";

const page = () => {
  return <>
    <div className="flex items-start">
      <div className="hidden md:block">
        <Siderbar />
      </div>
      <MyCommunities />
    </div>
  </>;
};

export default page;
