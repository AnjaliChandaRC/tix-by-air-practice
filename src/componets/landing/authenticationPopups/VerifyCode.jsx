// VerifyCode.js
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "@/componets/common/fields/CustomInput";
import CustomButton from "@/componets/common/button/CustomButton";
import { CrossIcon } from "@/componets/common/icons/ToggleIcon";

const VerifyCode = ({ setCurrentModal }) => {
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        console.log(data);
        if (!errors.code) {
            changeModalHandler();
        }
    };

    const changeModalHandler = () => {
        setCurrentModal("createUser");
    };


    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <button className="absolute top-[20px] right-[20px] popup_cross_icon">
                <CrossIcon />
            </button>
            <h3 className="ff_inter font-semibold text-black pb-4 text-center">
                Verification Code
            </h3>
            <CustomInput
                type="number"
                placeholder="123456"
                register={register('code', {
                    required: 'Code is required.',
                    minLength: {
                        value: 6,
                        message: 'Code must be at least 6 characters.',
                    },
                    maxLength: {
                        value: 6,
                        message: 'Code must not exceed 6 characters.',
                    },
                })}
                error={errors.code}
            />
            <p className="mt-2 text-xs text-black opacity-70 ff_inter">
                We are sending your verification code. Enter it above when you receive
                it.
            </p>
            <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
                Refresh your page to get a new code after a few minutes
            </p>
            <CustomButton title="Verify code" />
        </form>
    );
};

export default VerifyCode;
