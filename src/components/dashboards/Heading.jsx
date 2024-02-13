import React from "react"; // Importing React library
import CustomButton from "../common/button/CustomButton"; // Importing CustomButton component
import { useRouter } from "next/navigation"; // Importing useRouter hook from Next.js

// Defining a functional component named Heading, taking props { title, className, onclick }
const Heading = ({ title, className, onclick ,btnTitle}) => {
  // Initializing useRouter hook to get access to the Next.js router
  const router = useRouter();

  // Returning JSX for the Heading component
  return (
    <div className={`flex items-center justify-between me-[2px] ${className}`}> {/* Container div */}
      <h2 className="text-black ff_satoshi_black text-2xl md:text-[28px] leading-[100%]">{title}</h2> {/* Heading with dynamic title */}
      <CustomButton isBgGradient={true} title={btnTitle}  changeModalHandler={onclick} /> {/* CustomButton component */}
    </div>
  );
};

// Exporting Heading component as default
export default Heading;
