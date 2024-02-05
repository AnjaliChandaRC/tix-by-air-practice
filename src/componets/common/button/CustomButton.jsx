import React from 'react';

function CustomButton({ buttonText }) {
  return (
    <button
      className="rounded-lg border-[2px] border-smokyblack py-3 px-8 text-smokyblack ff_inter text-sm md:text-base font-semibold leading-[150%] uppercase shadow-[3px_4px_0px_0px] shadow-black common_btn_bg">
      {buttonText}
    </button>
  );
}

export default CustomButton;
