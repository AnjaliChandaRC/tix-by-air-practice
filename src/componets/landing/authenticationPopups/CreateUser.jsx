import CustomButton from "@/componets/common/button/CustomButton";
import CustomInput from "@/componets/common/fields/CustomInput";
import { CrossIcon } from "@/componets/common/icons/ToggleIcon";
import React from "react";

const CreateUser = ({ setCurrentModal }) => {
  const changeModalHandler = () => {
    setCurrentModal("demographics");
  };
  return (
    <>
      <button className="absolute top-[20px] right-[20px] popup_cross_icon">
        <CrossIcon />
      </button>
      <h3 className="ff_inter font-semibold text-black pb-4 text-center">
        Create Your Username
      </h3>
      <p className="ff_inter font-semibold text-black pb-4">Username</p>
      <CustomInput type="text" placeholder="@MyUserName" />
      <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
        Create a username. This will uniquely identify you as a user on our site
        and any community you join.
      </p>
      <CustomButton title="next" changeModalHandler={changeModalHandler} />
    </>
  );
};

export default CreateUser;
