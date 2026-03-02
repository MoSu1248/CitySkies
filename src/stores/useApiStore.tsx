import { create } from "zustand";
import type { WeatherData } from "../types/weather";

type WeatherStore = {
  data: WeatherData;
  loading: boolean;
  error: string | null;
  fetchWeather: () => Promise<void>;
  getTemperatureAt: (time: string) => number | null;
};

export const useWeatherStore = create<WeatherStore>((set, get) => ({
  data: null,
  loading: false,
  error: null,

  fetchWeather: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.419&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&hourly=temperature_2m,weathercode&forecast_days=7&forecast_hours=7&current=temperature_2m,precipitation,weathercode,wind_speed_10m,apparent_temperature,relative_humidity_2m`,
      );

      if (!res.ok) throw new Error("Failed to fetch weather data");

      const data: WeatherData = await res.json();
      set({ data });
      console.log(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: "Unknown error" });
      }
    } finally {
      set({ loading: false });
    }
  },

  getTemperatureAt: (time) => {
    const data = get().data;
    if (!data) return null;

    const index = data.hourly.time.findIndex((t) => t === time);
    if (index === -1) return null;

    return data.hourly.temperature_2m[index];
  },
}));
