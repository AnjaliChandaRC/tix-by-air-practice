// Import necessary dependencies
import CustomButton from "@/componets/common/button/CustomButton";
import CustomInputs from "@/componets/common/fields/CustomInput";
import React from "react";
import { useForm } from "react-hook-form";

// Define the VerifyCode component
const VerifyCode = ({ setCurrentModal }) => {
  // Initialize react-hook-form useForm hook to handle form state and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const submitHandler = (data) => {
    // Log form data to the console
    console.log(data);
    // If no validation errors, proceed to change modal
    if (!errors.code) {
      changeModalHandler();
    }
  };

  // Function to change modal to CreateUser
  const changeModalHandler = () => {
    setCurrentModal("createUser");
  };

  // Render the component
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {/* Title */}
      <h3 className="ff_inter font-semibold text-black pb-4 text-center">
        Verification Code
      </h3>
      {/* Input field for code */}
      <CustomInputs
        type="number"
        placeholder="123456"
        register={register("code", {
          required: "Code is required.",
          minLength: {
            value: 6,
            message: "Code must be at least 6 characters.",
          },
          maxLength: {
            value: 6,
            message: "Code must not exceed 6 characters.",
          },
        })}
        error={errors.code}
      />
      {/* Instructional text */}
      <p className="mt-2 text-xs text-black opacity-70 ff_inter">
        We are sending your verification code. Enter it above when you receive
        it.
      </p>
      {/* Additional instructional text */}
      <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
        Refresh your page to get a new code after a few minutes
      </p>
      {/* Submit button */}
      <CustomButton title="Verify code" />
    </form>
  );
};

// Export the VerifyCode component
export default VerifyCode;
