import React from "react";
import "./SearchDropDown.scss";
import Loading from "../../assets/images/icon-loading.svg?react";
import { useWeatherStore } from "../../stores/useApiStore";

type Location = {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
};

type Result = {
  results: Location[];
};

type Props = {
  fields: Result;
  loading: boolean;
};

export default function SearchDropDown({ fields, loading }: Props) {
  const { fetchWeather, setLocation } = useWeatherStore();

  function onClick(lat: number, lon: number, name: string, country: string) {
    fetchWeather(lat, lon);
    setLocation(name + `,` + country);
  }

  return (
    <div className="search__dropdown">
      {loading === true ? (
        <p>
          <Loading /> Search in progress
        </p>
      ) : (
        <ul>
          {fields?.results?.map((item, index) => (
            <li
              onClick={() =>
                onClick(item.latitude, item.longitude, item.name, item.country)
              }
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
