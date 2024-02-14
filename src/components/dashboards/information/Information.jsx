// Information.js
"use client"
import React, { useState } from 'react';
import CommonTabs from '../common/commonTabs/CommonTabs';
import InformationMainTab from './InformationMainTab';
import InformationGroupChatTab from './InformationGroupChatTab';

const Information = () => {
  const [activeTab, setActiveTab] = useState("Main");
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className=" m-5 md:m-6 border-[1px] rounded-2xl bg-whitesmoke  w-full pb-14 ">
      <div className='py-[22px] px-[23px]'>
        <CommonTabs
          tabs={['Main', 'Group Chat',]}
          activeTab={activeTab}
          onChange={changeTab} />
      </div>
      {activeTab === 'Main' && <InformationMainTab />}
      {activeTab === 'Group Chat' && <InformationGroupChatTab />}
    </div>
  );
};

export default Information;