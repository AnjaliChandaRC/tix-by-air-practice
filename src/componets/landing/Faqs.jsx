"use client";
import { FaqsList } from "@/utils/LandingHelper"; // Importing FaqsList from utility module
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { FaqArrowIcon } from "../icons/Landing";
const Faqs = () => {
  return (
    <>
      <div className="pb-11 lg:pb-12 mb-11 pt-5 lg:pt-0 relative" id="faq">
        {/* Left vector image */}
        <Image
          src="/assets/images/svg/left_lines.svg"
          alt="left-lines"
          className="z-[-1] hidden md:block -right-[50px] bottom-0 xl:bottom-[55px] md:left-[-35px] absolute h-[20px] md:h-[38px]"
          width={127}
          height={38}
        />
        {/* Right vector image */}
        <Image
          src="/assets/images/svg/left_lines.svg"
          alt="left-lines"
          className="z-[-1] hidden md:block -right-[70px] rotate-180 top-0 absolute h-[20px] md:h-[38px]"
          width={127}
          height={38}
        />
        <div className="max-w-[1188px] mx-auto px-6">
          {/* Heading */}
          <h4 className="ff_satoshi_black text-[28px] sm:text-[38px] lg:text-5xl font-black text-black text-center xl:pt-4">
            Frequently Asked Questions
          </h4>
          {/* Description */}
          <p className="mt-4 ff_inter   text-base text-davygray leading-normal max-w-[780px] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam.
          </p>
          <div className="flex flex-wrap items-center mt-4 md:mt-11">
            <div className="w-full lg:w-6/12 lg:ps-3 lg:pe-[23px] xl:h-[580px]">
              {/* FAQ items */}
              <Accordion.Root type="single" defaultValue="item-1" collapsible>
                {FaqsList.map((object, index) => {
                  return (
                    <Accordion.Item
                      value={object.item}
                      key={index}
                      className={`accordion_item px-5 py-[19px] rounded-[10px] mt-5`}
                    >
                      <Accordion.Trigger className="text-start ff_inter font-medium text-xl text-black flex items-center justify-between w-full accordion_trigger">
                        {object.question}
                        <FaqArrowIcon />
                      </Accordion.Trigger>
                      <Accordion.Content className="ff_inter text-base text-davygray mt-2 accordion_content">
                        {object.answer}
                      </Accordion.Content>
                    </Accordion.Item>
                  );
                })}
              </Accordion.Root>
            </div>
            <div className="w-full lg:w-6/12 lg:pe-3 lg:ps-[23px] mt-4 pt-12 lg:mt-0 ">
              {/* Image section */}
              <div className="relative max-w-[330px] sm:max-w-[476px] mx-auto">
                <Image
                  src="/assets/images/png/faq-img.png"
                  alt="faq-img"
                  width={476}
                  height={493}
                  className="mx-auto lg:mx-0"
                />
                {/* Line image */}
                <Image
                  className="w-[160px] h-[63px] absolute end-[-57px] sm:end-[-15px] lg:end-[-21px] min-[1100px]:end-[-15px] top-[25.9%]"
                  src="/assets/images/svg/single_line.svg"
                  alt="single-line"
                  width={194}
                  height={93}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
