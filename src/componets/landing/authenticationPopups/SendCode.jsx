import React from "react";

const SendCode = ({ setCurrentModal, currentModal }) => {
  console.log("currentModalcurrentModal", currentModal);

  const handleClick = () => {
    if (currentModal === "sendCode") {
      setCurrentModal("verifyCode");
    }
  };

  return (
    <button onClick={handleClick}>
      SendCode
    </button>
  );
};

export default SendCode;
