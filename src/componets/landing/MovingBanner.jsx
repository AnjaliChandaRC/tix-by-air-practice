// Import SliderText from LandingHelper utility
import { SliderText } from "@/utils/LandingHelper";

// Define the MovingBanner component
export default function MovingBanner() {
  // Function to render slider text based on the given className
  const renderSliderText = (className) => (
    // Container for slider text with dynamic class and positioning
    <div className={`flex gap-9 sm:gap-14 items-center absolute top-[50%] left-0 ${className}`}>
      {/* Map through SliderText array and render each heading */}
      {SliderText.map((obj, index) => (
        // Individual heading with dynamic styling based on index
        <h4
          className={`text-[26px] sm:text-4xl font-bold ff_inter ${index % 2 === 0 ? "text-white" : "text-black"}`}
          // Apply text stroke and shadow styles based on index
          style={{ WebkitTextStroke: index % 2 === 0 ? "" : "0.79px white", textShadow: index % 2 === 0 ? "" : "0.79px white" }}
          key={index}
        >
          {/* Display heading text from SliderText array */}
          {obj.title}
        </h4>
      ))}
    </div>
  );

  // Main component rendering slider text with background styling
  return (
    <div className="bg-smokyblack overflow-hidden relative h-16 sm:h-20 lg::h-24 transform -rotate-[2.209deg] mt-[-20px] md:mt-[-40px] z-10 mx-[-4px]">
      {/* Render slider text with the first set of styles */}
      {renderSliderText("slider_text")}
      {/* Render slider text with the second set of styles */}
      {renderSliderText("slider_text2")}
    </div>
  );
}
