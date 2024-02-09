import React from "react";

export default function CustomTextArea(props) {
    const {
        placeholder,
        color,
        type,
        className
    } = props;

    // Concatenate the additional class names with the default classes
    const inputClasses = `w-full h-[134px] bg-transparent rounded-lg border border-light-grey focus-visible:border-orange outline-orange  pt-[13px] pb-[14px] px-3  ${color || ""} ${className || ""}`;

    return (
        <>
            <textarea
                type={type || "text"}
                className={inputClasses} // Use the concatenated classes here
                placeholder={placeholder}
            />
        </>
    );
}
