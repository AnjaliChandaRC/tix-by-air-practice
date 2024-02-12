import React from "react"; // Importing React library
import * as Select from "@radix-ui/react-select"; // Importing Select components from Radix UI
import { ChevronDownIcon } from "@radix-ui/react-icons"; // Importing ChevronDownIcon from Radix UI icons

// CustomSelect component for rendering a custom select dropdown
export default function CustomSelect({
  dropdownList, // List of dropdown options
  error, // Error status
  selectedValue, // Currently selected value
  setSelectedValue, // Function to set selected value
  fieldName, // Field name for accessibility
}) {
  return (
    <>
      {/* Root Select component */}
      <Select.Root
        value={selectedValue} // Currently selected value
        onValueChange={(value) => {
          setSelectedValue(value); // Function to update selected value
        }}
      >
        {/* Select Trigger */}
        <Select.Trigger
          className={`SelectTrigger rounded-lg flex justify-between items-center border ${
            error && selectedValue === "" // Applying error styles if error and no selected value
              ? "border-red-500"
              : "border-light-grey"
          } h-[44px] pt-[13px] pb-[14px] px-3 text-xs font-inter focus-visible:outline-none text-dark-grey w-full`}
          aria-label={fieldName} // Accessible label for screen readers
        >
          <Select.Value placeholder="Not Applicable" /> {/* Placeholder for selected value */}
          <Select.Icon>
            <ChevronDownIcon className="w-4 h-4" /> {/* Chevron down icon */}
          </Select.Icon>
        </Select.Trigger>
        {/* Select Portal for positioning */}
        <Select.Portal>
          <Select.Content
            position="popper" // Positioning strategy
            className="overflow-hidden w-[227px] ml-auto border p-2.5 max-h-[272px] shadow-modal z-30 bg-white rounded-md border-black" // Styling for dropdown content
          >
            {/* Viewport for scrolling */}
            <Select.Viewport className="p-[5px]">
              <Select.Group className="flex flex-col gap-2">
                {/* Rendering dropdown options */}
                {dropdownList.map((value, index) => (
                  <Select.Item
                    key={index} // Unique key for each dropdown option
                    value={value} // Value of the option
                    className="border border-light-grey px-3 py-[13px] hover:bg-orangecrayola rounded-lg leading-normal text-sm" // Styling for dropdown option
                  >
                    <Select.ItemText>{value}</Select.ItemText> {/* Displaying option text */}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      {/* Error message displayed if error and no selected value */}
      {error && selectedValue === "" && (
        <span className="text-red-500 text-xs">{`${fieldName} is required`}</span> // Error message
      )}
    </>
  );
}
