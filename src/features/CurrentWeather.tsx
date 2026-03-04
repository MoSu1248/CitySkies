import React, { useState, type JSX } from "react";
import type { WeatherData } from "../types/weather";
import { useSettingStore } from "../stores/useSettingsStore";
import { useWeatherStore } from "../stores/useApiStore";
import "./CurrentWeather.scss";

type Props = {
  data: WeatherData;
  getWeatherIcon: (code: number) => JSX.Element;
};

export default function CurrentWeather({ data, getWeatherIcon }: Props) {
  const { tempUnit, getTempUnit } = useSettingStore();
  const currentTemp = getTempUnit(data?.current.temperature_2m, tempUnit);
  const { location } = useWeatherStore();

  return (
    <div className="current">
      <div className="current__container">
        <div className="text__container">
          <h3 className="text__container-header">{location}</h3>
          <p>{data?.current.time}</p>
        </div>
        <div className="weather__container">
          <span>{getWeatherIcon(data?.current.weathercode)}</span>
          <h2 className="weather__container-text">{currentTemp}°</h2>
        </div>
      </div>
    </div>
  );
}
