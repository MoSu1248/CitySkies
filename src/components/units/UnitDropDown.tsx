import React from "react";
import { useSettingStore } from "../../stores/useSettingsStore";
import UnitSection from "./unitSection";

type DropDownProps = {
  visible: boolean;
};

export default function UnitDropDown({ visible }: DropDownProps) {
  const { tempUnit, setTemp, setWind, speedUnit, precipUnit, setPrecip } =
    useSettingStore();

  const unitSections = [
    {
      label: "Temperature",
      value: tempUnit,
      setter: setTemp,
      options: [
        { label: "Celsius (°C)", value: "C" },
        { label: "Fahrenheit (°F)", value: "F" },
      ],
    },
    {
      label: "Wind Speed",
      value: speedUnit,
      setter: setWind,
      options: [
        { label: "km/h", value: "km/h" },
        { label: "mph", value: "mph" },
      ],
    },
    {
      label: "Precipitation",
      value: precipUnit,
      setter: setPrecip,
      options: [
        { label: "Millimeters (mm)", value: "mm" },
        { label: "Inches (in)", value: "in" },
      ],
    },
  ];

  return (
    visible && (
      <div className="unit__dropdownContainer">
        <div className="unit__dropdown">
          <h3>Switch Units</h3>
          {unitSections.map((section) => (
            <UnitSection key={section.label} {...section} />
          ))}
        </div>
      </div>
    )
  );
}
