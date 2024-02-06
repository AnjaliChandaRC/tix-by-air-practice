import Image from "next/image";
import React from "react";
const Faqs = () => {
  return (
    <>
      <div className="py-12 mb-12">
        <div className="max-w-[1164px] mx-auto px-3">
          <h4 className="ff_satoshi_black text-5xl font-black text-black text-center">
            Frequently Asked Questions
          </h4>
          <p className="mt-4 ff_inter font-normal text-base text-davygray leading-normal max-w-[780px] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
            consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac
            posuere eget nam diam velit urna adipiscing diam.
          </p>
          <div className="flex flex-wrap items-center mt-16">
            <div className="w-full lg:w-6/12 lg:ps-3 lg:pe-[23px]">
              <div className="border border-black p-5 rounded-[10px]">
                <h5 className="ff_inter font-medium text-xl text-black">
                  Is TixByAir free?
                </h5>
                <p className="ff_inter font-normal text-base text-davygray mt-2">
                  Yes, TixByAir is 100% free and provides each community with
                  unlimited QRs, links, and member analytics.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-6/12 lg:pe-3 lg:ps-[23px] mt-6 lg:mt-0 ">
              <div className="relative max-w-[476px] mx-auto">
                <Image
                  src="/assets/images/png/faq-img.png"
                  alt=""
                  width={476}
                  height={493}
                  className="mx-auto lg:mx-0"
                />
                <Image
                  className="w-[160px] h-[63px] absolute end-[-15px] lg:end-[-18px] min-[1100px]:end-[-15px] top-[26.2%]"
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
