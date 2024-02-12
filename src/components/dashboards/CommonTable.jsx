import React from "react";

const CommonTable = ({ tableHead, ListFooterText, children }) => {
  return (
    <div className="border w-full border-mediumgray mb-3 overflow-x-scroll scroll_bar_none rounded-xl">
      <table className="w-full rounded-xl overflow-hidden ">
        <thead>
          <tr className="bg-[linear-gradient(142.51deg,#FB981D_0%,#FB6609_89.88%),linear-gradient(0deg,#000000,#000000)]">
            {tableHead.map((header, index) => (
              <th
                className="text-start text-black whitespace-nowrap ff_inter text-base font-semibold leading-[100%] py-4 px-[22px]"
                key={index}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      {ListFooterText && (
        <p className="text-center inline-table font-normal text-black font-inter opacity-50 mt-4 w-full text-xs sm:text-sm leading-[14px] sm:leading-[16px] ">
          {ListFooterText}
        </p>
      )}
    </div>
  );
};

export default CommonTable;
