// Import necessary modules
import Image from "next/image";
import React from "react";
import CustomButton from "../common/button/CustomButton";

// Define the Hero component
const Hero = ({ setCurrentModal }) => {
  return (
    // Hero section container with background and styling
    <div className="relative bg-seashell min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-12 pb-20 md:pt-28 md:pb-32 lg:pb-44">
      {/* Hidden line image for larger screens */}
      <Image
        src="/assets/images/svg/heroline.svg"
        alt="hero-line"
        className="hidden md:block bottom-0 left-[-35px] absolute h-[320px]"
        width={328}
        height={328}
      />
      {/* Left vector image */}
      <Image
        src="/assets/images/svg/left_vector.svg"
        alt="hero-image"
        className="top-4 xl:top-20 -left-14 md:left-[-35px] absolute h-[20px] md:h-[38px]"
        width={127}
        height={38}
      />
      {/* Half circle image */}
      <Image
        src="/assets/images/svg/fullcircel.svg"
        alt="hero-image"
        className="moving_annimation w-5 h-5 sm:w-7 sm:h-7 top-20 right-[3%] absolute "
        width={27}
        height={27}
      />
      {/* Full circle image */}
      <Image
        src="/assets/images/svg/fullcircel.svg"
        alt="hero-image"
        className="moving_annimation bottom-8 md:bottom-16 lg:bottom-20 left-2/4 absolute "
        width={27}
        height={27}
      />
      {/* Container for content */}
      <div className="container mx-auto px-6 max-w-[1188px]">
        <div className="flex items-center flex-col md:flex-row ">
          {/* Left content column */}
          <div className="max-w-[586px]">
            {/* Welcome message */}
            <p className="ff_inter text-eerieblack text-base font-semibold !leading-[150%] mb-[10px]">
              Welcome To TixByAir
            </p>
            {/* Main heading */}
            <h1 className="text-smokyblack text-[40px] lg:text-[55px] xl:text-textXXl !leading-[120%] ff_satoshi_black">
              Instantly Track
              <span className="inline-block text_border text-seashell">
                Your Community
              </span>
              Engagement!
            </h1>
            {/* Subtitle */}
            <p className="text-darkgraytwo text-base leading-[150%] ff_inter mt-4 max-w-[450px] xl:max-w-[530px] mb-6 md:mb-10">
              See who showed up. View analytics, create tickets, and track
              who&#34;s supporting you the most.
            </p>
            {/* Custom button */}
            <button onClick={() => setCurrentModal("sendCode")}>
              <CustomButton title="create your community" link="/" />
            </button>
          </div>
          {/* Right content column with images */}
          <div className="relative mt-12 sm:mt-14 md:mt-0 md:ms-6 lg:ms-10 z-0">
            {/* Large line image */}
            <Image
              src="/assets/images/svg/heroline.svg"
              alt="hero-line"
              className="-top-[1%] right-[2%] absolute "
              width={666}
              height={666}
            />
            {/* Main hero image */}
            <Image
              src="/assets/images/png/hero-img.png"
              alt="hero-image"
              className="relative z-10 max-w-[296px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-none"
              width={504}
              height={471}
            />
            {/* Top left line image */}
            <Image
              className="w-[140px] xl:!w-[145px] absolute -top-[5%] left-[-26px] sm:-left-[11px] lg:-top-[4%] lg:left-2 xl:left-10 xl:-top-[2%]"
              src="/assets/images/svg/single_line.svg"
              alt="hero-line"
              width={194}
              height={93}
            />
            {/* Bottom right line image */}
            <Image
              className="w-[140px] xl:!w-[145px] absolute bottom-[10%] -right-[37%] sm:-right-[33%] lg:-right-[27%] xl:-right-[20%] xl:bottom-[11%]"
              src="/assets/images/svg/single_line.svg"
              alt="hero-line"
              width={194}
              height={93}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Hero component
export default Hero;
