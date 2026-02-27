import React, { useState, type JSX } from "react";
import "./Home.scss";
import DropDownIcon from "../assets/images/icon-dropdown.svg?react";
import { useWeatherStore } from "../stores/useApiStore";
import { useEffect } from "react";
import sunnyImg from "../assets/images/icon-sunny.webp";
import snowImg from "../assets/images/icon-snow.webp";
import drizzleImg from "../assets/images/icon-drizzle.webp";
import fogImg from "../assets/images/icon-fog.webp";
import overcastImg from "../assets/images/icon-overcast.webp";
import partlyCloudyImg from "../assets/images/icon-partly-cloudy.webp";
import rainImg from "../assets/images/icon-rain.webp";
import stormImg from "../assets/images/icon-storm.webp";

type Daily = {
  time: string[];
  temperature_2m_min: number[];
  temperature_2m_max: number[];
  precipitation_sum: number[];
  weathercode: number[];
};

type DailyUnits = {
  precipitation_sum: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
};

type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  daily: Daily;
  daily_units: DailyUnits;
};

type MappedDaily = {
  day: string;
  date: string;
  maxTemp: number;
  minTemp: number;
  icon: JSX.Element;
};

export default function Home() {
  const [datas, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchRawWeather = async () => {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.419&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode`,
      );
      const data = await res.json();
      console.log(data);

      setData(data);
    };
    fetchRawWeather();
  }, []);

  const getWeatherIcon = (code: number): JSX.Element => {
    switch (true) {
      case code === 0:
        return <img src={sunnyImg} alt="Clear sky" className="weather-icon" />;

      case code === 1:
        return (
          <img src={sunnyImg} alt="Mainly clear" className="weather-icon" />
        );
      case code === 2:
        return (
          <img
            src={partlyCloudyImg}
            alt="Partly cloudy"
            className="weather-icon"
          />
        );
      case code === 3:
        
        return (
          <img src={overcastImg} alt="Overcast" className="weather-icon" />
        );

      case [45, 48].includes(code):
        return <img src={fogImg} alt="Fog" className="weather-icon" />;

      case [51, 53, 55].includes(code):
        return <img src={drizzleImg} alt="Drizzle" className="weather-icon" />;

      case [56, 57].includes(code):
        return (
          <img
            src={drizzleImg}
            alt="Freezing Drizzle"
            className="weather-icon"
          />
        );

      case [61, 63, 65].includes(code):
        return <img src={rainImg} alt="Rain" className="weather-icon" />;

      case [66, 67].includes(code):
        return (
          <img src={rainImg} alt="Freezing Rain" className="weather-icon" />
        );

      case [71, 73, 75, 85, 86].includes(code):
        return <img src={snowImg} alt="Snow" className="weather-icon" />;

      case code === 77:
        return <img src={snowImg} alt="Snow grains" className="weather-icon" />;

      case [80, 81, 82].includes(code):
        return (
          <img src={rainImg} alt="Rain showers" className="weather-icon" />
        );

      case code === 95:
        return (
          <img src={stormImg} alt="Thunderstorm" className="weather-icon" />
        );

      case [96, 99].includes(code):
        return (
          <img
            src={stormImg}
            alt="Thunderstorm with hail"
            className="weather-icon"
          />
        );

      default:
        return <div>❓</div>; // fallback for unknown codes
    }
  };

  const dailyData: MappedDaily[] | undefined = datas?.daily.time.map(
    (dateStr, i) => {
      const date = new Date(dateStr);
      const code = datas?.daily.weathercode[i];
      return {
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: dateStr,
        maxTemp: datas.daily.temperature_2m_max[i],
        minTemp: datas.daily.temperature_2m_min[i],
        icon: getWeatherIcon(code),
      };
    },
  );

  return (
    <div className="metric">
      <div className="block-1"></div>
      <div className="block-2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="block-3">
        {}
        <h3>Daily forecast</h3>
        {dailyData?.map((dayWeather) => (
          <div className="daily-card p-4 bg-gray-100 rounded shadow">
            <h3 className="font-bold">{dayWeather.day}</h3>
            <p>{dayWeather.maxTemp}</p>
            <p>{dayWeather.minTemp}</p>
            {dayWeather.icon}
          </div>
        ))}
      </div>
      <div className="block-4">
        <div className="Hourly__header">
          <h3>Hourly forecast</h3>{" "}
          <button>
            Tuesday <DropDownIcon />
          </button>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
