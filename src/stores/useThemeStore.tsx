import { create } from "zustand";

type theme = {
  theme: string;
  toggleTheme: (theme: string) => void;
};

export const usethemeStore = create<theme>((set) => ({
  theme: "dark",
  toggleTheme: (theme) => set({ theme: theme }),
}));
