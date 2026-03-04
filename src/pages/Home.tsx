import "./Home.scss";
import { useWeatherStore } from "../stores/useApiStore";
import { useEffect } from "react";
import CurrentWeather from "../features/CurrentWeather";
import { GetWeatherIcon } from "../features/GetWeatherIcon";
import DailyWeather from "../features/DailyWeather";
import HourlyWeather from "../features/HourlyWeather";
import CurrentWeatherDetails from "../features/CurrentWeatherDetails";

export default function Home() {
  const { data, loading, error, fetchWeather } = useWeatherStore();

  useEffect(() => {
    fetchWeather(52.52437, 13.41053);
  }, []);

  return (
    <div className="metric">
      <CurrentWeather data={data} getWeatherIcon={GetWeatherIcon} />
      <CurrentWeatherDetails data={data} />
      <DailyWeather data={data} getWeatherIcon={GetWeatherIcon} />
      <HourlyWeather data={data} getWeatherIcon={GetWeatherIcon} />
    </div>
  );
}
