import CustomButton from "@/componets/common/button/CustomButton";
import { CrossIcon } from "@/componets/common/icons/ToggleIcon";
import CustomSelect from "@/componets/common/selector/CustomSelect";
import { SelectDataList } from "@/utils/AuthenticationHelper";
import React from "react";

const Demographics = (setCurrentModal) => {
  return (
    <>
      <button className="absolute top-[20px] right-[20px] popup_cross_icon">
        <CrossIcon />
      </button>
      <h3 className="ff_inter font-semibold text-black pb-4 text-center">
        Add Demographics
      </h3>
      {/* {SelectDataList.map((obj, index) => {
        return (
          <>
            <div key={index}>
              <h4>{obj.title}</h4>
              <div>
                <p>{obj.raceItems}</p>
              </div>
            </div>
          </>
        );
      })} */}
      <p className="ff_inter font-semibold text-black pb-4">Race</p>
      <CustomSelect />
      <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
        Select your race
      </p>
      <p className="ff_inter font-semibold text-black pb-4">
        Relationship Status
      </p>
      <CustomSelect />
      <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
        Select your relationship status
      </p>
      <p className="ff_inter font-semibold text-black pb-4">Gender</p>
      <CustomSelect />
      <p className="mt-2 mb-[31px] text-xs text-black opacity-70 ff_inter">
        Select your Gender
      </p>
      <CustomButton title="Submit" setCurrentModal={setCurrentModal} />
    </>
  );
};

export default Demographics;
