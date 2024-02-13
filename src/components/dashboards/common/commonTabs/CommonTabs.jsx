// Tabs.js
import React from 'react';

const CommonTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className='flex items-center'>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pt-[17px] pb-4 ps-3 max-w-[230px] w-full text-start ff_inter  text-base font-semibold leading-[100%]  ${activeTab === tab ? 'active border-b-4 border-orangecrayola text-orangecrayola' : 'border-b-[2px] border-[#C5C5C5] pb-[18px]'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
export default CommonTabs;
