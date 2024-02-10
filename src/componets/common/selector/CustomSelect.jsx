import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function CustomSelect({
  dropdownList,
  error,
  selectedValue,
  setSelectedValue,
  fieldName,
}) {
  return (
    <>
      <Select.Root
        value={selectedValue}
        onValueChange={(value) => {
          setSelectedValue(value);
        }}
      >
        <Select.Trigger
          className={`SelectTrigger rounded-lg flex justify-between items-center border ${
            error && selectedValue === ""
              ? "border-red-500"
              : "border-light-grey"
          } h-[44px] pt-[13px] pb-[14px] px-3 text-xs   font-inter focus-visible:outline-none text-dark-grey w-full`}
          aria-label={fieldName}
        >
          <Select.Value placeholder="Not Applicable" />
          <Select.Icon>
            <ChevronDownIcon className="w-4 h-4" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position="popper"
            className="overflow-hidden w-[227px] ml-auto border p-2.5 max-h-[272px] shadow-modal z-30 bg-white rounded-md border-black"
          >
            <Select.Viewport className="p-[5px]">
              <Select.Group className="flex flex-col gap-2">
                {/* DROPDOWN LIST ITEMS */}
                {dropdownList.map((value, index) => (
                  <Select.Item
                    key={index}
                    value={value}
                    className="border border-light-grey px-3 py-[13px] hover:bg-orangecrayola rounded-lg leading-normal text-sm"
                  >
                    <Select.ItemText>{value}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      {/* ERROR MESSAGE  */}
      {error && selectedValue === "" && (
        <span className="text-red-500 text-xs">{`${fieldName} is required`}</span>
      )}
    </>
  );
}
