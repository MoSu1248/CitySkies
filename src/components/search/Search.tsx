import React from "react";
import "./Search.scss";
import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";

export default function Search() {
  return (
    <div className="search">
      <SearchInput />
      <SearchBtn />
    </div>
  );
}
