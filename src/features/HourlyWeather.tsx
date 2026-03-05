import React, { type JSX } from "react";
import type { WeatherData } from "../types/weather";
import { useSettingStore } from "../stores/useSettingsStore";

type MappedHourly = {
  hour: string;
  temp: number;
  icon: JSX.Element;
};

type Props = {
  data: WeatherData;
  getWeatherIcon: (code: number) => JSX.Element;
};

export default function hourlyWeather({ data, getWeatherIcon }: Props) {
  const { tempUnit, getTempUnit } = useSettingStore();

  const hourlyData: MappedHourly[] | undefined = data?.hourly.time.map(
    (hourStr, index) => {
      const date = new Date(hourStr);
      const code = data?.hourly.weathercode[index];

      return {
        hour: date.toLocaleTimeString("en-US", {
          hour: "numeric",
        }),
        temp: Math.round(data.hourly.temperature_2m[index]),
        icon: getWeatherIcon(code),
      };
    },
  );

  return (
    <div className="block-4">
      <div className="Hourly__header">
        <h3>Hourly forecast</h3> <button>Tuesday</button>
      </div>
      <ul>
        {hourlyData?.map((hourlyWeather) => (
          <li key={hourlyWeather.hour}>
            <span>
              {hourlyWeather.icon} {hourlyWeather.hour}
            </span>
            <span>{getTempUnit(hourlyWeather.temp, tempUnit)}°</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
