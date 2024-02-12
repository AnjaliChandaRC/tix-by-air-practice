import React from "react"; // Importing React library

// Defining CommonTable component, responsible for rendering a table
const CommonTable = ({ tableHead, ListFooterText, children }) => {
  // Returning JSX for the CommonTable component
  return (
    <>
      <div className="border w-full border-mediumgray mb-3 overflow-x-scroll scroll_bar_none rounded-xl"> {/* Container div for the table */}
        <table className="w-full rounded-xl overflow-hidden"> {/* Table element */}
          <thead> {/* Table header */}
            <tr className="bg-[linear-gradient(142.51deg,#FB981D_0%,#FB6609_89.88%),linear-gradient(0deg,#000000,#000000)]"> {/* Table row for header */}
              {/* Mapping through tableHead array to render table headers */}
              {tableHead.map((header, index) => (
                <th
                  className="text-start text-black whitespace-nowrap ff_inter text-base font-semibold leading-[100%] py-4 px-[22px]" // Styling for table header
                  key={index}
                >
                  {header} {/* Displaying table header */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody> {/* Table body with children passed */}
        </table>
      </div>
      {/* Rendering ListFooterText if provided */}
      {ListFooterText && (
        <p className="text-center inline-table font-normal text-black font-inter opacity-50 mt-4 w-full text-xs sm:text-sm leading-[14px] sm:leading-[16px] ">
          {ListFooterText} {/* Displaying ListFooterText */}
        </p>
      )}

    </>
  );
};

export default CommonTable; // Exporting CommonTable component as default
