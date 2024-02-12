"use client";
import React, { useEffect, useState } from "react";
import CustomInputs from "../common/fields/CustomInput";
import CustomButton from "../common/button/CustomButton";
import CustomTextArea from "../common/fields/CustomTextArea";
import { useForm } from "react-hook-form";
import { EyeIcon } from "../common/icons/EyeIcon";
import { EyeClosedIcon } from "@radix-ui/react-icons";

const CreateCommunity = () => {
  // React Hook Form initialization
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Callback function when form is submitted
  const onSubmit = () => {
    if (errors.userName === undefined) {
      // Reset form if there are no errors for username
      reset();
    }
  };

  // State for handling input value and array of values
  const [inputValue, setInputValue] = useState("");
  const [valueArray, setValueArray] = useState([]);
  useEffect(() => {
    // Add default values to valueArray when the component mounts
    setValueArray(["Lorem Ipsum Dolor", "Lorem Ipsum Dolor"]);
  }, []);
  // Event handler for input change
  const handleNameChange = (e) => {
    setInputValue(e.target.value);
  };

  // Event handler for key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default form submission
      // Check if the input value is not empty
      if (inputValue.trim() !== "") {
        // Check if the array has less than 3 values before adding the input value
        if (valueArray.length < 3) {
          setValueArray((prevArray) => [...prevArray, inputValue]);
          setInputValue("");
          console.log(valueArray);
        }
      }
    }
  };

  // Event handler for removing value from array
  const handleRemove = (index) => {
    setValueArray((prevArray) => {
      const newArray = [...prevArray];
      newArray.splice(index, 1);
      return newArray;
    });
  };
  // Determine the placeholder message based on the condition
  const placeholderMessage =
    valueArray.length >= 3 ? "Maximum value reached" : "Enter a value";
  return (
    <div className="flex flex-col w-full h-full">
      <div className="p-5 md:p-6 w-full">
        <div className="border rounded-2xl bg-whitesmoke p-5 sm:px-[22px] sm:py-[23px]">
          <h2 className="text-black ff_satoshi_black leading-[100%] text-2xl md:text-[28px]">
            Create New Community
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              {/* Community Name input field */}
              <label
                htmlFor="userName"
                className="ff_inter font-semibold text-black"
              >
                Community Name
              </label>
              <div className="pt-[10px]">
                <CustomInputs
                  type="text"
                  placeholder="UI/UX"
                  label="Username"
                  className="bg-transparent"
                  register={register("userName", {
                    required: "Community Name is required.",
                  })}
                  error={errors.userName}
                />
                <p className="ff_inter  text-sm text-shadowgray pt-2.5">
                  This is your community’s display name
                </p>
              </div>
            </div>
            {/* Community Password input field */}
            <div className="mt-8">
              <label
                htmlFor="password"
                className="ff_inter font-semibold text-black"
              >
                Community Password
              </label>
              <div className="pt-[10px] ">
                <div className="relative">
                  <CustomInputs
                    type={showPassword ? "text" : "password"}
                    placeholder="Community Password"
                    label="password"
                    className="bg-transparent"
                    register={register("password", {
                      required: "Community Password is required.",
                    })}
                    error={errors.password}
                  />
                  {/* Button to toggle password visibility */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-2/4 -translate-y-2/4 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                  </button>
                </div>
                <p className="ff_inter  text-sm text-shadowgray pt-2.5">
                  This is your community’s password. Members who are not part of
                  your community will have to type it in when they visit your
                  page.
                </p>
              </div>
            </div>
            {/* Interest input field */}
            <div className="mt-8">
              <label
                htmlFor="interest"
                className="ff_inter font-semibold text-black"
              >
                Interest
              </label>
              <div className="pt-[10px]">
                <label
                  htmlFor="interest"
                  className="rounded-lg border border-light-grey inline-block pt-[13px] pb-[14px] px-3 input-no-spinner w-full placeholder:text-sm placeholder:ff_inter bg-transparent"
                >
                  {/* Displaying values and allowing removal */}
                  {valueArray.map((obj, index) => {
                    return (
                      <span
                        key={index}
                        className="px-2 me-2 py-1 rounded-[10px] bg-antiquewhite border border-[#888178] border-solid bg-antique-white ff_inter inline-block text-sm relative text-[#4A4641] mb-2 sm:mb-0"
                      >
                        {obj}
                        <button
                          onClick={() => handleRemove(index)}
                          className="text-orange font-bold ps-1 "
                        >
                          X
                        </button>
                      </span>
                    );
                  })}
                  {/* Input field for adding new interests */}
                  <input
                    type="text"
                    id="interest"
                    value={inputValue}
                    onChange={handleNameChange}
                    placeholder={placeholderMessage}
                    onKeyDown={handleKeyPress}
                    disabled={valueArray.length >= 3}
                    className="outline-none bottom-0 bg-transparent text-sm text-dark-grey placeholder:ff_inter placeholder:text-sm placeholder:text-dark-grey w-[195px]"
                  />
                </label>
                <p className="ff_inter text-sm text-shadowgray pt-2.5">
                  This is your community’s interest.
                </p>
              </div>
            </div>
            {/* About input field */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="ff_inter font-semibold text-black"
              >
                About
              </label>
              <div className="pt-[10px]">
                <CustomTextArea
                  type="text"
                  placeholder="Message"
                  label="message"
                  className="bg-transparent "
                  register={register("message", {
                    required: "Message is required.",
                  })}
                  error={errors.message}
                />
                <p className="ff_inter  text-sm text-shadowgray pt-2.5">
                  This is your community’s about section.
                </p>
              </div>
            </div>
            {/* Submit button */}
            <div className="mt-[30px] flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <CustomButton isBgGradient={true} title="Submit" className="w-full max-w-[350px] sm:w-[227px] order-1" />
              <CustomButton isBgGradient={false}
                title="View community"
                className="w-full max-w-[350px] sm:w-[227px] bg-white order-first sm:order-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunity;
