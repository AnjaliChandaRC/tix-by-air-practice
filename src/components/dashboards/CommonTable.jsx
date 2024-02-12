import React from "react"; // Importing React library

// Defining CommonTable component, responsible for rendering a table
const CommonTable = ({ tableHead, ListFooterText, children }) => {
  // Returning JSX for the CommonTable component
  return (
    <>
      <div className="sm:w-full overflow-y-hidden overflow-x-visible custom__Scroll_bar pb-3 rounded-[10px_10px_0_0]">
        <table className="w-full overflow-hidden">
          <thead className="bg-[linear-gradient(142.51deg,#FB981D_0%,#FB6609_89.88%)] rounded-xl">
            <tr>
              {tableHead.map((value, index) => {
                return (
                  <th key={index} className="py-4 pl-4 text-start pr-4 min-w-[120px]">
                    <h2
                      className="ff_inter font-semibold text-black text-sm leading-[100%] sm:text-base whitespace-nowrap">
                      {value}
                    </h2>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="relative z-10 after:absolute after:h-full after:w-full after:pointer-events-none after:rounded-[0px_0px_10px_10px] after:top-0 after:border-t-0 after:left-0 after:border after:border-graytwo after:border-solid after:z-0">
            {children}
          </tbody>
        </table>
        {/* Rendering ListFooterText if provided */}
        {ListFooterText && (
          <p className="text-center inline-table font-normal text-graytwo ff_inter mt-4 w-full text-xs sm:text-sm leading-[14px] sm:leading-[16px] ">
            {ListFooterText} {/* Displaying ListFooterText */}
          </p>
        )}
      </div>
    </>
  );
};

export default CommonTable; // Exporting CommonTable component as default
