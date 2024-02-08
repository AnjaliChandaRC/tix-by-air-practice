// // VerifyCode.js
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import CustomInput from "@/componets/common/fields/CustomInput";
// import CustomButton from "@/componets/common/button/CustomButton";
// import { CrossIcon } from "@/componets/common/icons/ToggleIcon";

// const VerifyCode = ({ setCurrentModal }) => {
//   const [verificationCode, setVerificationCode] = useState("");
//   const [error, setError] = useState("");
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const submitHandler = (data) => {
//     console.log(data);
//     if (!errors.code) {
//       changeModalHandler();
//     }
//   };

//   const changeModalHandler = () => {
//     setCurrentModal("createUser");
//   };

//   const handleVerify = () => {
//     if (verificationCode.length === 6) {
//       console.log("Verification code:", verificationCode);
//       changeModalHandler();
//     } else {
//       setError("Verification code must be 6 digits.");
//     }
//   };

//   const handleInputChange = (e) => {
//     setVerificationCode(e.target.value);
//     setError(""); // Clear error message on input change
//   };

//   return (
//     <form onSubmit={handleSubmit(submitHandler)}>
//       <button className="absolute top-[20px] right-[20px] popup_cross_icon">
//         <CrossIcon />
//       </button>
//       <h3 className="ff_inter font-semibold text-black pb-4 text-center">
//         Verification Code
//       </h3>
//       <CustomInput
//         type="number"
//         placeholder="123456"
//         value={verificationCode}
//         onChange={handleInputChange}
//         {...register("code", { required: true, minLength: 6, maxLength: 6 })}
//       />
//       {errors.code && errors.code.type === "required" && <p className="text-red-500">Verification code is required.</p>}
//       {errors.code && (errors.code.type === "minLength" || errors.code.type === "maxLength") && <p className="text-red-500">Verification code must be 6 digits.</p>}
//       {error && <p className="text-red-500">{error}</p>}
//       <p className="mt-2 text-xs text-black opacity-70 ff_inter">
//         We are sending your verification code. Enter it above when you receive
//         it.
//       </p>
//       <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
//         Refresh your page to get a new code after a few minutes
//       </p>
//       <CustomButton title="Verify code" onClick={handleVerify} />
//     </form>
//   );
// };

// export default VerifyCode;
