import { SliderText } from "@/utils/LandingHelper";

export default function MovingBanner() {
  const renderSliderText = (className) => (
    <div className={`flex gap-9 sm:gap-14 items-center absolute top-[50%] left-0 ${className}`}>
      {SliderText.map((obj, index) => (
        <h4
          className={`text-3xl sm:text-4xl font-bold ff_inter ${index % 2 === 0 ? "text-white" : "text-black"}`}
          style={{ WebkitTextStroke: index % 2 === 0 ? "" : "0.79px white", textShadow: index % 2 === 0 ? "" : "0.79px white" }}
          key={index}
        >
          {obj.heading}
        </h4>
      ))}
    </div>
  );

  return (
    <div className="bg-smokyblack overflow-hidden relative h-16 sm:h-24 transform -rotate-[2.209deg] mt-[-20px] md:mt-[-40px] z-10 mx-[-4px]">
      {renderSliderText("slider_text")}
      {renderSliderText("slider_text2")}
    </div>
  );
}
