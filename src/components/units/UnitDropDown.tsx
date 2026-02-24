import React from "react";

type DropDownProps = {
  visible: boolean;
};

export default function UnitDropDown({ visible }: DropDownProps) {
  return (
    visible && (
      <div className="unit__dropdownContainer">
        <div className="unit__dropdown"></div>
      </div>
    )
  );
}
