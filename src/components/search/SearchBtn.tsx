import React from "react";

type Props = {
  fetchWeather: () => void;
};

export default function SearchBtn({ fetchWeather }: Props) {
  return <button className="search__btn" onClick={()=> fetchWeather()}>Search</button>;
}
