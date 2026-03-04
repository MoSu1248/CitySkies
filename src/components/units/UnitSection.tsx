import React from "react";
import Check from "../../assets/images/icon-checkmark.svg?react";

type Props = {
  label: string;
  value: string;
  setter: (value: string) => void;
  options: UnitOption[];
};

type UnitOption = {
  label: string;
  value: string;
};

export default function UnitSection({ label, value, setter, options }: Props) {
  return (
    <div className="unit__btnContainer">
      <span className="unit__label">{label}</span>
      <button
        className={
          value === options[0].value ? "unit__btns  active" : "unit__btns"
        }
        onClick={() => setter(options[0].value)}
      >
        {options[0].label} {value === options[0].value ? <Check /> : ""}
      </button>
      <button
        className={
          value === options[1].value ? "unit__btns  active" : "unit__btns"
        }
        onClick={() => setter(options[1].value)}
      >
        {options[1].label} {value === options[1].value ? <Check /> : ""}
      </button>
    </div>
  );
}
