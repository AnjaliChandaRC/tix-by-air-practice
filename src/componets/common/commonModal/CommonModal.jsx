"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import SendCode from "@/componets/landing/authenticationPopups/SendCode";
import { useState } from "react";
import VerifyCode from "@/componets/landing/authenticationPopups/VerifyCode";
import CreateUser from "@/componets/landing/authenticationPopups/CreateUser";
import Demographics from "@/componets/landing/authenticationPopups/Demographics";

const CommonModal = () => {
  const [currentModal, setCurrentModal] = useState(null);

  const renderCurrentModal = () => {
    console.log(currentModal, "currentModal");

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
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          onClick={() => setCurrentModal("sendCode")}
          className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
        >
          Edit profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed w-screen h-screen top-0 left-0 z-10 bg-overlayBg" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none border-2 border-black w-[90%] sm:w-[388px] z-10 rounded-[20px] p-[55px]">
          {renderCurrentModal()}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CommonModal;
