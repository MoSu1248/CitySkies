import type { WeatherData } from "../types/weather";

type Props = {
  data: WeatherData;
};

export default function CurrentWeatherDetails({ data}: Props) {
  return (
    <div className="block-2">
      <div>
        <p>Feels Like</p>
        <span>
          {data?.current.apparent_temperature}
          {data?.current_units.temperature_2m}
        </span>
      </div>
      <div>
        <p>Humidity</p> <span>{data?.current.apparent_temperature}%</span>
      </div>
      <div>
        <p>Wind</p>
        <span>
          {data?.current.apparent_temperature}
          {data?.current_units.wind_speed_10m}
        </span>
      </div>
      <div>
        <p>Precipitation</p>
        <span>
          {data?.current.apparent_temperature}
          {data?.current_units.precipitation}
        </span>
      </div>
    </div>
  );
}
