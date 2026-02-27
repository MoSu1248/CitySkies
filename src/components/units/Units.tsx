import React, { useState } from "react";
import "./Units.scss";
import UnitBtn from "./UnitBtn";
import UnitDropDown from "./UnitDropDown";

export default function Units() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div
      className="unit__container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <UnitBtn setVisible={setVisible} />
      <UnitDropDown visible={visible} />
    </div>
  );
}
