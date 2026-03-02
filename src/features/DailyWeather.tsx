import React, { type JSX } from "react";
import type { WeatherData } from "../types/weather";

type MappedDaily = {
  day: string;
  date: string;
  maxTemp: number;
  minTemp: number;
  icon: JSX.Element;
};

type Props = {
  data: WeatherData;
  getWeatherIcon: (code: number) => JSX.Element;
};

export default function DailyWeather({ data, getWeatherIcon }: Props) {
  const dailyData: MappedDaily[] | undefined = data?.daily.time.map(
    (dateStr, i) => {
      const date = new Date(dateStr);
      const code = data?.daily.weathercode[i];
      return {
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: dateStr,
        maxTemp: Math.round(data.daily.temperature_2m_max[i]),
        minTemp: Math.round(data.daily.temperature_2m_min[i]),
        icon: getWeatherIcon(code),
      };
    },
  );

  return (
    <div className="block-3">
      <h3>Daily forecast</h3>
      {dailyData?.map((dayWeather) => (
        <div className="daily__card" key={dayWeather.day}>
          <h4 className="font-bold">{dayWeather.day}</h4>
          {dayWeather.icon}
          <div className="daily__card-temps">
            <p>{dayWeather.maxTemp}°</p>
            <p>{dayWeather.minTemp}°</p>
          </div>
        </div>
      ))}
    </div>
  );
}
