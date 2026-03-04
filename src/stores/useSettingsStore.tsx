import { create } from "zustand";

type Units = {
  tempUnit: string;

  speedUnit: string;

  precipUnit: string;

  setTemp: (newUnit: string) => void;
  setWind: (newUnit: string) => void;
  setPrecip: (newUnit: string) => void;

  getTempUnit: (temp: number, tempUnit: string) => number;
  getWindUnit: (speed: number, speedUnit: string) => string;
  getPrecipUnit: (precip: number, precipUnit: string) => string;
};

export const useSettingStore = create<Units>((set) => ({
  tempUnit: "C",
  speedUnit: "km/h",
  precipUnit: "mm",

  setTemp: (newUnit) => set({ tempUnit: newUnit }),
  setWind: (newUnit) => set({ speedUnit: newUnit }),
  setPrecip: (newUnit) => set({ precipUnit: newUnit }),

  getTempUnit: (temp, tempUnit) => {
    let current = 0;
    if (tempUnit === "C") {
      current = temp;
    } else {
      current = temp * 1.8 + 32;
    }
    return Math.round(current);
  },

  getWindUnit(speed, speedUnit) {
    let current = 0;
    if (speedUnit === "km/h") {
      current = speed;
    } else {
      current = Number((speed * 0.621371).toFixed(2));
    }
    return current;
  },

  getPrecipUnit(speed, speedUnit) {
    let current = 0;
    if (speedUnit === "mm") {
      current = speed;
    } else {
      current = Number((speed / 25.4).toFixed(2));
    }
    return current;
  },
}));
