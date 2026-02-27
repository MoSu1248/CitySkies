import { create } from "zustand";

type Hourly = {
  time: string[]
  temperature_2m: number[]
}

type HourlyUnits = {
  temperature_2m: string
}

type WeatherData = {
  latitude: number
  longitude: number
  elevation: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  hourly: Hourly
  hourly_units: HourlyUnits
}

type WeatherStore = {
  data: WeatherData | null
  loading: boolean
  error: string | null
  fetchWeather: (lat: number, lon: number) => Promise<void>
  getTemperatureAt: (time: string) => number | null
}


export const useWeatherStore = create<WeatherStore>((set, get) => ({
  data: null,
  loading: false,
  error: null,

  fetchWeather: async (lat, lon) => {
    set({ loading: true, error: null })
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
      )
      
      if (!res.ok) throw new Error('Failed to fetch weather data')
      
      const data: WeatherData = await res.json()
      set({ data })
    } catch (err: unknown) {
      set({ error: err.message || 'Unknown error' })
    } finally {
      set({ loading: false })
    }
  },

  getTemperatureAt: (time) => {
    const data = get().data
    if (!data) return null

    const index = data.hourly.time.findIndex(t => t === time)
    if (index === -1) return null

    return data.hourly.temperature_2m[index]
  },
}))