// Information.js
import React from 'react';

const Information = () => {
  const tabs = [
    <div key="tab1">Tab 1 Content</div>,
    <div key="tab2">Tab 2 Content</div>,
    // Add more tabs as needed
  ];

  return (
    <div className="min-h-[calc(100vh-128px)] overflow-hidden overflow-y-scroll scroll_bar_none m-5 md:m-6 border-[1px] rounded-2xl bg-whitesmoke xl:flex items-center justify-center sm:px-12 ps-3 pe-4 w-full">
      <CommonTabs tabs={tabs} />
    </div>
  );
};

export default Information;
