import React, { useState, type JSX } from "react";
import type { WeatherData } from "../types/weather";

type Props = {
  data: WeatherData;
  getWeatherIcon: (code: number) => JSX.Element;
};

export default function CurrentWeather({ data, getWeatherIcon }: Props) {
  const currentDate = Math.round(data?.current.temperature_2m ?? 0);

  return (
    <div className="block-1">
      <span>{data?.current.time}</span>
      <span>
        {currentDate} {data?.current_units.temperature_2m}
        <span>{getWeatherIcon(data?.current.weathercode)}</span>
      </span>
    </div>
  );
}
