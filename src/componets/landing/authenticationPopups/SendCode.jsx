// Import necessary components and libraries
import CustomButton from '@/componets/common/button/CustomButton'; // Import CustomButton component
import CustomPhoneInput from '@/componets/common/fields/CustomPhoneInput'; // Import CustomPhoneInput component
import { CrossIcon } from '@/componets/common/icons/ToggleIcon'; // Import CrossIcon component
import React, { useState } from 'react'; // Import React and useState hook

// Define SendCode component
const SendCode = ({ setCurrentModal }) => {
  // State variables for error handling and phone number input
  const [error, setError] = useState(false); // State variable for error handling
  const [phoneNumber, setPhoneNumber] = useState(''); // State variable for phone number input

  // Function to format phone number input
  const formatPhoneNumber = (input) => {
    // Remove non-numeric characters
    const cleaned = input.replace(/\D/g, '');

    // Apply phone number format
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      setPhoneNumber(`(${match[1]}) ${match[2]}-${match[3]}`);
    } else {
      setPhoneNumber(cleaned);
    }
  };

  // Event handler for input change
  const handleInputChange = (e) => {
    formatPhoneNumber(e.target.value); // Format the input phone number
    setError(false); // Reset error when input changes
  };

  // Function to handle sending code
  const handleSendCode = () => {
    setCurrentModal('verifyCode'); // Set current modal to 'verifyCode'
  };

  // Callback function when form is submitted
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (phoneNumber.trim() === "" || phoneNumber.length < 10) {
      setError(true); // Set error state to true if phone number is invalid
    } else {
      setError(false); // Reset error state
      handleSendCode(); // Trigger modal change only if the phone number is valid
    }
  };

  // Render the component
  return (
    <>
        {/* Button to close the modal */}
        <button className="absolute top-[20px] right-[20px] popup_cross_icon">
          <CrossIcon />
        </button>
        {/* Title */}
        <h3 className="ff_inter font-semibold text-black pb-4 text-center">
          Enter Your Phone Number
        </h3>
        {/* Form */}
        <form onSubmit={submitHandler}>
          {/* Custom phone input component */}
          <CustomPhoneInput phoneNumber={phoneNumber} handleInputChange={handleInputChange} error={error} />
          {/* Instructional text */}
          <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
            Enter your number to sign in sign & register for tixbyair. US number only.
          </p>
          {/* Submit button */}
          <CustomButton
            title="Send code" // Button title
            type="submit" // Added type submit to trigger form submission
          />
        </form>
    </>
  );
};

// Export SendCode component
export default SendCode;
