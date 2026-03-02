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
};

type Hourly = {
  time: string[];
  temperature_2m: number[];
  weathercode: number[];
};
type HourlyUnits = {
  time: string;
  temperature_2m_min: string;
};

type Current = {
  apparent_temperature: number;
  interval: number;
  precipitation: number;
  temperature_2m: number;
  time: string;
  weathercode: number;
  wind_speed_10m: number;
  relative_humidity_2m: number;
};

type CurrentUnits = {
  apparent_temperature: string;
  interval: number;
  precipitation: string;
  temperature_2m: string;
  time: string;
  weathercode: string;
  wind_speed_10m: string;
};

export type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  daily: Daily;
  daily_units: DailyUnits;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  current_units: CurrentUnits;
  current: Current;
};
