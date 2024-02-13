// Information.js
"use client"
import React, { useState } from 'react';
import CommonTabs from '../common/commonTabs/CommonTabs';
import InformationMainTab from './InformationMainTab';
import InformationGroupTab from './InformationGroupTab';

const Information = () => {
  const [activeTab, setActiveTab] = useState("Main");
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className=" m-5 md:m-6 border-[1px] rounded-2xl bg-whitesmoke py-[22px] px-[23px] w-full h-full">
      <div>
        <CommonTabs
          tabs={['Main', 'Group Chat',]}
          activeTab={activeTab}
          onChange={changeTab}
        />
        <div>
          {activeTab === 'Main' && <InformationMainTab />}
          {activeTab === 'Group Chat' && <InformationGroupTab />}
        </div>
      </div>
    </div>
  );
};

export default Information;