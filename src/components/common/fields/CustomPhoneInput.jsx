"use client"
import React from 'react';

// Component for inputting a phone number
const PhoneNumberInput = ({ error, handleInputChange, phoneNumber }) => {
    // Check if the phone number is valid (14 characters)
    const isPhoneNumberValid = phoneNumber.length === 14;

    return (
        <div>
            {/* Input field for the phone number */}
            <input
                type="text"
                className={`rounded-lg border border-light-grey h-[44px] pt-[13px] pb-[14px] px-3 text-xs   ff_inter focus-visible:border-orange outline-orange text-dark-grey w-full placeholder:text-sm placeholder:ff_inter`}
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
                placeholder="(XXX) XXX-XXXX"
                maxLength={10}
            />
            {/* Display error message if there's an error */}
            {error && (
                <p className="text-red-500 text-xs ff_inter mt-1">
                    {/* Show appropriate error message based on conditions */}
                    {phoneNumber === "" ? 'Phone number is required' : isPhoneNumberValid ? "" : 'Invalid phone number'}
                </p>
            )}
        </div>
    );
};

export default PhoneNumberInput;
