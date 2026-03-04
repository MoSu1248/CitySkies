import React from "react";
import SearchIcon from "../../assets/images/icon-search.svg?react";

type Props = {
  input: string;
  setInput: (input: string) => string;
};

export default function SearchInput({ input, setInput }: Props) {
  return (
    <div className="search__container">
      <SearchIcon />
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a place..."
        className="search__input"
      >
      </input>
    </div>
  );
}
