"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import SendCode from "@/componets/landing/authenticationPopups/SendCode";
import { useState } from "react";
import VerifyCode from "@/componets/landing/authenticationPopups/VerifyCode";
import CreateUser from "@/componets/landing/authenticationPopups/CreateUser";
import Demographics from "@/componets/landing/authenticationPopups/Demographics";
import { CrossIcon } from "../icons/ToggleIcon";

const CommonModal = ({ currentModal, setCurrentModal }) => {
  const renderCurrentModal = () => {
    switch (currentModal) {
      case "sendCode":
        return (
          <SendCode
            setCurrentModal={setCurrentModal}
            currentModal={currentModal}
          />
        );
      case "verifyCode":
        return <VerifyCode setCurrentModal={setCurrentModal} />;
      case "createUser":
        return <CreateUser setCurrentModal={setCurrentModal} />;
      case "demographics":
        return <Demographics setCurrentModal={setCurrentModal} />;
      default:
        return null;
    }
  };

  return (
    <Dialog.Root open={currentModal}>
      <Dialog.Portal>
        <Dialog.Overlay onClick={() => setCurrentModal(null)} className="data-[state=open]:animate-overlayShow fixed w-screen h-screen top-0 left-0 z-0 bg-overlayBg" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none border-2 border-black w-[90%] sm:w-[388px] rounded-[20px] p-5 sm:p-[55px]">
          {renderCurrentModal()}
          <Dialog.Close >
            <button onClick={() => setCurrentModal(null)}
              className="focus:shadow-violet7 absolute top-[20px] right-[20px] popup_cross_icon"
              aria-label="Close"
            >
              <CrossIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CommonModal;
