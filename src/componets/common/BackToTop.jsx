"use client"
import { DoubleArrowUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide the button based on the scroll position
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      // Show the button if the user has scrolled beyond a certain point
      setIsVisible(scrollTop > 300);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Back to Top button with fixed position at bottom right
    <button
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-0 m-4 p-2 right-0 bg-orangecrayola text-white rounded-full transition-opacity duration-300 z-50 border border-white hover:bg-black`}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      <DoubleArrowUpIcon className="h-6 w-6" />
    </button>
  );
};

export default BackToTop;
