"use client";
import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const CustomSelect = () => (
  <Select.Root>
    <Select.Trigger className="inline-flex items-center justify-between  px-3 py-[10px] text-[14px] ff_inter  h-[44px]  bg-white text-neongray w-full leading-[100%] rounded-lg border-granitegray border-[1px]">
      <Select.Value placeholder="Not Applicable" />
      <Select.Icon>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] mt-[54px] ms-[16px] w-full max-w-[227px]">
        <Select.Viewport>
          <Select.Group className="rounded-xl bg-white border-[1px] border-black shadow-[0px_15px_30px_0px] shadow-[#C9C9C9] p-[10px]">
            <SelectItem
              value="black"
              className="my-2 bg-white hover:bg-orangecrayola transition-all ease-in-out duration-300 cursor-pointer"
            >
              Black
            </SelectItem>
            <SelectItem
              value="white"
              className="my-2 bg-white hover:bg-orangecrayola transition-all ease-in-out duration-300 cursor-pointer"
            >
              White
            </SelectItem>
            <SelectItem
              value="asian"
              className="bg-white hover:bg-orangecrayola transition-all ease-in-out duration-300 cursor-pointer"
            >
              Asian
            </SelectItem>
            <SelectItem
              value="indian"
              className="my-2 bg-white hover:bg-orangecrayola transition-all ease-in-out duration-300 cursor-pointer"
            >
              Indian
            </SelectItem>
            <SelectItem
              value="applicable"
              className="bg-white hover:bg-orangecrayola transition-all ease-in-out duration-300 cursor-pointer"
            >
              Not Applicable
            </SelectItem>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "rounded-lg border-[1px] border-granitegray ps-3 pt-[13px] pb-[14px] ff_inter text-sm text-black leading-[100%]",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);

export default CustomSelect;
