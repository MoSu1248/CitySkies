import React from "react";
import Logo from "../logo/Logo";
import Units from "../units/units";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Units />
    </header>
  );
}
