import { OurServiceList } from "@/utils/LandingHelper";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="relative" id="feature">
      <Image
        src="/assets/images/svg/left_vector.svg"
        alt="hero-image"
        className="top-[16%] md:top-[45%] z-[-1] -right-[50px] md:left-[-35px] absolute h-[20px] md:h-[38px]"
        width={127}
        height={38}
      />
      <div className="container mx-auto  max-w-[1188px] py-14 lg:pt-32 lg:pb-[118px] static z-10">
        <div className="flex sm:items-center px-6 flex-col lg:flex-row justify-between mb-7 md:mb-12">
          <h2 className="ff_satoshi_black text-[28px] sm:text-[38px] lg:text-5xl !leading-[120%] text-black max-w-[531px] text-start sm:text-center lg:text-start mb-[10px]">
            Discover Our Service Spectrum
          </h2>
          <p className="text-davygray ff_inter text-base leading-[150%] max-w-[403px] text-start sm:text-center lg:text-start ">
            Lorem ipsum dolor sit amet consectetur. Eget mattis justo cras amet
            tortor nisl lacinia. Ut et donec ac velit diam lectus dui.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-[34px] ps-6 sm:px-5 pe-[33px]">
          {OurServiceList.map((data, index) => {
            // Define an array of background colors
            const bgColors = ["bg-orange", "bg-yellow", "bg-green"]; // Add more colors as needed

            // Use modulo operator to cycle through the background colors
            const bgColorClass = bgColors[index % bgColors.length];

            return (
              <div
                key={index}
                className={`border-2 border-black ${bgColorClass} hover:shadow-none transition-all duration-200 ease-linear shadow-[10px_10px_0px_0px] p-6  rounded-[10px] max-w-[355px] w-full min-h-[310px] `}
              >
                <Image
                  width={65}
                  height={65}
                  src={data.image}
                  alt="ticket-image"
                />
                <h2 className="text-black text-xl md:text-2xl ff_satoshi_bold leading-[120%] mt-6 mb-3">
                  {data.title}
                </h2>
                <p className="text-cedarbrown ff_inter leading-[150%]">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
