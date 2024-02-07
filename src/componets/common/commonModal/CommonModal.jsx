// 'use client'
// import SendCode from '@/componets/landing/authenticationPopups/SendCode';
// import VerifyCodeModal from '@/componets/landing/authenticationPopups/SendCode';
// import CreateUserModal from '@/componets/landing/authenticationPopups/SendCode';
// import DemographicsModal from '@/componets/landing/authenticationPopups/SendCode';

// import { useState } from 'react';

// function CommonModal() {
//   const [currentModal, setCurrentModal] = useState("sendCode");

//   const openNextModal = () => {
//     switch (currentModal) {
//       case null:
//         setCurrentModal('sendCode');
//         break;
//       case 'sendCode':
//         setCurrentModal('verifyCode');
//         break;
//       case 'verifyCode':
//         setCurrentModal('createUser');
//         break;
//       case 'createUser':
//         setCurrentModal('demographics');
//         break;
//       case 'demographics':
//         // Handle when all modals are completed
//         break;
//       default:
//         setCurrentModal(null);
//     }
//   };

//   const renderCurrentModal = () => {
//     switch (currentModal) {
//       case 'sendCode':
//         return <SendCode onClose={openNextModal} />;
//       case 'verifyCode':
//         return <VerifyCodeModal onClose={openNextModal} />;
//       case 'createUser':
//         return <CreateUserModal onClose={openNextModal} />;
//       case 'demographics':
//         return <DemographicsModal onClose={openNextModal} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <button onClick={openNextModal}>Open Modal</button>
//       {renderCurrentModal()}
//     </div>
//   );
// }

// export default CommonModal;
"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import SendCode from "@/componets/landing/authenticationPopups/SendCode";
import VerifyCodeModal from "@/componets/landing/authenticationPopups/SendCode";
import CreateUserModal from "@/componets/landing/authenticationPopups/SendCode";
import DemographicsModal from "@/componets/landing/authenticationPopups/SendCode";
import { useState } from "react";

const CommonModal = () => {
  const [currentModal, setCurrentModal] = useState(null);

  const openNextModal = () => {
    switch (currentModal) {
      case null:
        setCurrentModal("sendCode");
        break;
      case "sendCode":
        setCurrentModal("verifyCode");
        break;
      case "verifyCode":
        setCurrentModal("createUser");
        break;
      case "createUser":
        setCurrentModal("demographics");
        break;
      case "demographics":
        break;
      default:
        setCurrentModal(null);
    }
  };

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
        return <VerifyCodeModal setCurrentModal={setCurrentModal} />;
      case "createUser":
        return <CreateUserModal setCurrentModal={setCurrentModal} />;
      case "demographics":
        return <DemographicsModal setCurrentModal={setCurrentModal} />;
      default:
        return null;
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          onClick={() => openNextModal("sendCode")}
          className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
        >
          Edit profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Edit profile
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          {renderCurrentModal()}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CommonModal;
