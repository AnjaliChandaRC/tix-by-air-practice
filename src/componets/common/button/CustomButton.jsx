// Import necessary modules
import Link from 'next/link';
import React from 'react';

// Define the CustomButton component
function CustomButton({ title, link }) {
  return (
    // Link component from Next.js for navigation
    <Link href={link}>

      {/* Custom-styled button */}
      <button className="rounded-lg border-[2px] border-smokyblack px-[18px] text-smokyblack ff_inter text-sm md:text-base font-semibold  uppercase shadow-[3px_4px_0px_0px] shadow-black  hover:shadow-[1px_2px_0px_0px] ease-linear bg-[linear-gradient(142.51deg,#FB981D_0%,#FB6609_89.88%),linear-gradient(0deg,#000000,#000000)]  inline-block  py-[16px] md:py-4 leading-[120%]  border-solid relative group transition-all duration-200 hover:translate-y-[2px]  hover:translate-x-[2px] active:translate-y-[4px] active:translate-x-[4px]  ">
        {/* Button text */}
        {title}
      </button>
    </Link>
  );
}

// Export the CustomButton component
export default CustomButton;
