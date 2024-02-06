"use client";
import { FaqsMap } from "@/utils/LandingHelper";
import Image from "next/image";
import React, { useState } from "react";
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="pb-12 mb-12 relative">
        <Image
          src="/assets/images/svg/left_vector.svg"
          alt="hero-image"
          className="z-[-1] hidden md:block -right-[50px] bottom-0 xl:bottom-[55px] md:left-[-35px] absolute h-[20px] md:h-[38px]"
          width={127}
          height={38}
        />
        <Image
          src="/assets/images/svg/left_vector.svg"
          alt="hero-image"
          className="z-[-1] hidden md:block -right-[70px] rotate-180 top-0 absolute h-[20px] md:h-[38px]"
          width={127}
          height={38}
        />
        <div className="max-w-[1164px] mx-auto px-3">
          <h4 className="ff_satoshi_black text-[28px] sm:text-[38px] lg:text-5xl font-black text-black text-center">
            Frequently Asked Questions
          </h4>
          <p className="mt-4 ff_inter font-normal text-base text-davygray leading-normal max-w-[780px] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam.
          </p>
          <div className="flex flex-wrap items-center mt-6 md:mt-12">
            <div className="w-full sm:w-11/12 md:w-9/12 mx-auto lg:w-6/12 lg:ps-3 lg:pe-[23px]">
              {FaqsMap.map((faq, index) => (
                <div
                  key={index}
                  className={`overflow-hidden transition-all duration-300 px-5 py-[19px] rounded-[10px] mt-5 ${
                    activeIndex === index
                      ? " border border-black shadow-faq_shadow !pb-[15px]"
                      : " border border-neongray"
                  } mt-3`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left focus:outline-none flex items-center justify-between hover:bg-gray-100 transition duration-300 ease-in-out"
                  >
                    <span className="ff_inter font-medium text-xl text-black">
                      {faq.question}
                    </span>
                    <span className="float-right">
                      <svg
                        className={`w-4 md:h-5 h-4 md:w-5 ${
                          activeIndex === index ? " " : " rotate-180"
                        }`}
                        width="19"
                        height="12"
                        viewBox="0 0 19 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.89125 10.9435C2.23875 11.6185 1.15875 11.6185 0.506249 10.966C-0.16875 10.291 -0.16875 9.23354 0.506249 8.58104L8.31374 0.728536C8.62874 0.413535 9.05624 0.233536 9.50624 0.233536C9.95623 0.233536 10.3837 0.413535 10.6987 0.728536L18.5062 8.58104C18.8437 8.89604 19.0012 9.32354 19.0012 9.75104C19.0012 10.201 18.8437 10.6285 18.5062 10.966C17.8312 11.6185 16.7737 11.6185 16.1212 10.9435L9.50624 4.30604L2.89125 10.9435Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "h-full" : "max-h-0"
                    }`}
                  >
                    <div className="ff_inter font-normal text-base text-davygray mt-2">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-6/12 lg:pe-3 lg:ps-[23px] mt-6 pt-12 lg:mt-0 ">
              <div className="relative max-w-[350px] sm:max-w-[476px] mx-auto">
                <Image
                  src="/assets/images/png/faq-img.png"
                  alt=""
                  width={476}
                  height={493}
                  className="mx-auto lg:mx-0"
                />
                <Image
                  className="w-[160px] h-[63px] absolute end-[-50px] sm:end-[-15px] lg:end-[-18px] min-[1100px]:end-[-15px] top-[26.2%]"
                  src="/assets/images/svg/single_line.svg"
                  alt="hero-line"
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
