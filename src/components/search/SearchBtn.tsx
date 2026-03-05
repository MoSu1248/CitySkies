import React from "react";

type Props = {
  fetchWeather: () => void;
  setOpen: (input: boolean) => boolean;
};

export default function SearchBtn({ fetchWeather, setOpen }: Props) {
  function OnClick() {
    fetchWeather();
    setOpen(true);
  }
  return (
    <button className="search__btn" onClick={() => OnClick()}>
      Search
    </button>
  );
}
