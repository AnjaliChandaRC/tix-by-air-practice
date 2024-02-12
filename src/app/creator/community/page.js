import YourCommunities from "@/components/dashboards/YourCommunities";
import { communityList } from "@/utils/CreatorsHelper";
import React from "react";

const page = () => {
  return (
    <>
    
      <YourCommunities  communityList={communityList} />
    </>
  );
};

export default page;
