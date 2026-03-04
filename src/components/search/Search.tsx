import React, { useEffect, useState } from "react";
import "./Search.scss";
import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";
import SearchDropDown from "./SearchDropDown";

type Location = {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
};

type Result = {
  result: Location[];
};

export default function Search() {
  const [input, setInput] = useState<string>("");
  const [fields, setFields] = useState<Result>();
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchWeather(): Promise<Result | null> {
    setLoading(true);
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=5`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: Result = await response.json();
      setFields(data);
      setLoading(false);
      console.log(data);
      
      return data;
    } catch (error) {
      console.error("Fetch failed:", error);
      return null;
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <SearchInput setInput={setInput} input={input} />
      <SearchBtn fetchWeather={fetchWeather} />
      {input && <SearchDropDown fields={fields} loading={loading} />}
    </form>
  );
}
