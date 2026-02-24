import React from "react";
import GearIcon from "../../assets/images/icon-units.svg?react";
import DropDownIcon from "../../assets/images/icon-dropdown.svg?react";
import { Dispatch, SetStateAction } from "react";

type buttonProps = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UnitBtn({ setVisible }: buttonProps) {
  return (
    <button className="unit__btn">
      <GearIcon />
      Units
      <DropDownIcon />
    </button>
  );
}
