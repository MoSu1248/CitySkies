import { create } from "zustand";
import type { WeatherData } from "../types/weather";

type WeatherStore = {
  data: WeatherData;
  loading: boolean;
  error: string | null;
  fetchWeather: () => Promise<void>;
  setLocation: (newUnit: string) => void;
  location: string;
};

export const useWeatherStore = create<WeatherStore>((set) => ({
  data: null,
  loading: false,
  error: null,
  location: "Berlin, Germany",
  setLocation: (newUnit) => set({ location: newUnit }),

  fetchWeather: async (lat: number, lon: number) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&hourly=temperature_2m,weathercode&forecast_days=7&forecast_hours=7&current=temperature_2m,precipitation,weathercode,wind_speed_10m,apparent_temperature,relative_humidity_2m`,
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
}));
