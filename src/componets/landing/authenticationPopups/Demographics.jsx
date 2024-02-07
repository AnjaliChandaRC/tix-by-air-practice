"use client";
import CustomButton from "@/componets/common/button/CustomButton";
import { CrossIcon } from "@/componets/common/icons/ToggleIcon";
import CustomSelect from "@/componets/common/selector/CustomSelect";
import {
  GenderSelectList,
  RaceSelectList,
  RelationshipSelectList,
} from "@/utils/AuthenticationHelper";
import React, { useState } from "react";

const Demographics = ({ setCurrentModal }) => {
  const [selectedValues, setSelectedValues] = useState({
    race: "",
    relationship: "",
    gender: "",
  });
  const [error, setError] = useState(false);

  // Array containing demographic categories with their properties
  const demographicsCategoryList = [
    {
      demographicType: "Race",
      dropdownComponent: RaceSelectList,
      promptMessage: "Select your race",
      // Update the selected value for race
      setSelectedValue: (value) =>
        setSelectedValues({ ...selectedValues, race: value }),
    },
    {
      demographicType: "Relationship Status",
      dropdownComponent: RelationshipSelectList,
      promptMessage: "Select your relationship status",
      // Update the selected value for relationship status
      setSelectedValue: (value) =>
        setSelectedValues({ ...selectedValues, relationship: value }),
    },
    {
      demographicType: "Gender",
      dropdownComponent: GenderSelectList,
      promptMessage: "Select your Gender",
      // Update the selected value for gender
      setSelectedValue: (value) =>
        setSelectedValues({ ...selectedValues, gender: value }),
    },
  ];

  // Callback function when the form is submitted
  const submitHandler = (e) => {
    e.preventDefault();
    setError(true);
    // Check if all demographic values are selected before navigating
    if (
      selectedValues.race !== "" &&
      selectedValues.gender !== "" &&
      selectedValues.relationship !== ""
    ) {
      setError(false);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-col justify-between h-full w-full"
      >
        <button className="absolute top-[20px] right-[20px] popup_cross_icon">
          <CrossIcon />
        </button>
        <h3 className="ff_inter font-semibold text-black pb-4 text-center">
          Add Demographics
        </h3>
        <div>
          {demographicsCategoryList.map((obj, index) => {
            let fieldKey;
            // Determine the field key based on demographic type
            if (obj.demographicType === "Relationship Status") {
              fieldKey = "relationship";
            } else {
              fieldKey = obj.demographicType.toLowerCase();
            }
            // Set the error field name based on demographic type
            let errorFieldName = obj.demographicType.toLowerCase();
            return (
              <div key={index} className="mb-[22px] w-full">
                <p className="text-base font-semibold mb-[15px] ff_inter">
                  {obj.demographicType}
                </p>
                {/* CustomSelector component for each demographic category */}
                <CustomSelect
                  dropdownList={obj.dropdownComponent}
                  selectedValue={selectedValues[fieldKey]}
                  setSelectedValue={(value) => obj.setSelectedValue(value)}
                  error={error}
                  fieldName={errorFieldName}
                />
                <p className="text-xs font-normal font-inter mt-2 text-grey">
                  {obj.promptMessage}
                </p>
              </div>
            );
          })}
        </div>
        <CustomButton title="Submit" setCurrentModal={setCurrentModal} />
      </form>
    </>
  );
};

export default Demographics;
