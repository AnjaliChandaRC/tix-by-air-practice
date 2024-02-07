"use client";
import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { FaqsList } from "@/utils/LandingHelper";
import { FaqArrowIcon } from "../icons/Landing";
const RadixAccordion = () => {
  return (
    <>
      <Accordion.Root
        className="my-5 max-w-[1140px] mx-auto"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {FaqsList.map((object, index) => {
          return (
            <Accordion.Item
              value={object.item}
              key={index}
              className={`AccordionItem px-5 py-[19px] rounded-[10px] mt-5`}
            >
              <Accordion.Trigger className="text-start ff_inter font-medium text-xl text-black flex items-center justify-between w-full AccordionTrigger">
                {object.question}
                <FaqArrowIcon />
              </Accordion.Trigger>
              <Accordion.Content className="ff_inter font-normal text-base text-davygray mt-2">
                {object.answer}
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </>
  );
};

export default RadixAccordion;
