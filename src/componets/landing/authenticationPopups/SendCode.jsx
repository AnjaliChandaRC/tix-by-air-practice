import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import CustomButton from "@/componets/common/button/CustomButton";
import { CrossIcon } from "@/componets/common/icons/ToggleIcon";
const SendCode = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
            Edit profile
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed w-screen h-screen top-0 left-0 z-10 bg-overlayBg" />
          <Dialog.Content className="data-[state=open]:animate-contentShow z-10 fixed top-[50%] left-[50%] w-[90%] sm:w-[388px] sm:h-[322px] border-2 border-black translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-white p-[55px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <Dialog.Title className="ff_inter font-semibold text-black pb-4 text-center">
              Enter Your Phone Number
            </Dialog.Title>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <input
                className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                id="name"
                defaultValue="Pedro Duarte"
              />
            </fieldset>
            <Dialog.Description className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
              Enter your number to sign in sign & register for tixbyair. US
              number only.
            </Dialog.Description>
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild className="!w-full">
                <CustomButton title="Send code" />
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:none absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:none focus:outline-none popup_cross_icon"
                aria-label="Close"
              >
                <CrossIcon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default SendCode;
