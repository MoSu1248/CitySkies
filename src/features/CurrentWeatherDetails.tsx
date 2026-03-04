import type { WeatherData } from "../types/weather";
import { useSettingStore } from "../stores/useSettingsStore";

type Props = {
  data: WeatherData;
};

export default function CurrentWeatherDetails({ data }: Props) {
  const {
    tempUnit,
    getTempUnit,
    getWindUnit,
    speedUnit,
    precipUnit,
    getPrecipUnit,
  } = useSettingStore();

  return (
    <div className="block-2">
      <div>
        <h3>Feels Like</h3>
        <span>
          {getTempUnit(data?.current.apparent_temperature, tempUnit)}°
          {tempUnit}
        </span>
      </div>
      <div>
        <h3>Humidity</h3> <span>{data?.current.apparent_temperature}%</span>
      </div>
      <div>
        <h3>Wind</h3>
        <span>
          {getWindUnit(data?.current.apparent_temperature, speedUnit)}
          {speedUnit}
        </span>
      </div>
      <div>
        <h3>Precipitation</h3>
        <span>
          {getPrecipUnit(data?.current.apparent_temperature, precipUnit)}
          {precipUnit}
        </span>
      </div>
    </div>
  );
}
