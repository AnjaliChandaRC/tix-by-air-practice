import React, { useState } from "react";
import CustomButton from "@/components/common/button/CustomButton"; // Importing custom button component
import CustomInput from "@/components/common/fields/CustomInput"; // Importing custom input component
import { useForm } from 'react-hook-form'; // Importing useForm hook for form handling

// Functional component CreateUser
const CreateUser = ({ setCurrentModal }) => {
  // State to manage the visibility of demographic modal
  const [isOpenDemographicModal, setIsOpenDemographicModal] = useState(false);

  // Destructuring useForm hook to handle form state and validation
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Callback function when form is submitted
  const onSubmit = (data) => {
    console.log(data.userName); // Accessing the username from the form data
    if (errors.userName === undefined) { // Checking if there are no errors for username
      setIsOpenDemographicModal(true); // Setting the demographic modal to be open
      setCurrentModal("demographics"); // Setting the current modal to demographics
    }
  };

  // Rendering the component
  return (
    <>
      {/* Heading for the form */}
      <h3 className="ff_inter font-semibold text-black pb-4 text-center">
        Create Your Username
      </h3>
      {/* Label for the username input field */}
      <p className="ff_inter font-semibold text-black pb-4">Username</p>
      {/* Form for user input */}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between h-full'>
        {/* Custom input component for username */}
        <CustomInput
          type="text"
          placeholder="@MyUserName"
          label="Username"
          register={register('userName', { required: 'User name is required.' })} // Registering the username field with validation
          error={errors.userName} // Passing error state for username field
        />
        {/* Additional information about creating a username */}
        <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
          Create a username. This will uniquely identify you as a user on our site
          and any community you join.
        </p>
        {/* Button to submit the form */}
        <CustomButton isBgGradient={true} title="next" type="submit" className='w-full' />
      </form>
    </>
  );
};

export default CreateUser; // Exporting CreateUser component
