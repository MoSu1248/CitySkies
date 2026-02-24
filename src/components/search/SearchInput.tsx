import React from "react";
import SearchIcon from "../../assets/images/icon-search.svg?react";

export default function SearchInput() {
  return (
    <div className="search__container">
      <SearchIcon />
      <input placeholder="Search for a place..." className="search__input"></input>
    </div>
  );
}
