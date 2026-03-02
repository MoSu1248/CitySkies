import { type JSX } from "react";
import sunnyImg from "../assets/images/icon-sunny.webp";
import snowImg from "../assets/images/icon-snow.webp";
import drizzleImg from "../assets/images/icon-drizzle.webp";
import fogImg from "../assets/images/icon-fog.webp";
import overcastImg from "../assets/images/icon-overcast.webp";
import partlyCloudyImg from "../assets/images/icon-partly-cloudy.webp";
import rainImg from "../assets/images/icon-rain.webp";
import stormImg from "../assets/images/icon-storm.webp";

export const GetWeatherIcon = (code: number): JSX.Element => {
  switch (true) {
    case code === 0:
      return <img src={sunnyImg} alt="Clear sky" className="weather-icon" />;

    case code === 1:
      return <img src={sunnyImg} alt="Mainly clear" className="weather-icon" />;
    case code === 2:
      return (
        <img
          src={partlyCloudyImg}
          alt="Partly cloudy"
          className="weather-icon"
        />
      );
    case code === 3:
      return <img src={overcastImg} alt="Overcast" className="weather-icon" />;

    case [45, 48].includes(code):
      return <img src={fogImg} alt="Fog" className="weather-icon" />;

    case [51, 53, 55].includes(code):
      return <img src={drizzleImg} alt="Drizzle" className="weather-icon" />;

    case [56, 57].includes(code):
      return (
        <img src={drizzleImg} alt="Freezing Drizzle" className="weather-icon" />
      );

    case [61, 63, 65].includes(code):
      return <img src={rainImg} alt="Rain" className="weather-icon" />;

    case [66, 67].includes(code):
      return <img src={rainImg} alt="Freezing Rain" className="weather-icon" />;

    case [71, 73, 75, 85, 86].includes(code):
      return <img src={snowImg} alt="Snow" className="weather-icon" />;

    case code === 77:
      return <img src={snowImg} alt="Snow grains" className="weather-icon" />;

    case [80, 81, 82].includes(code):
      return <img src={rainImg} alt="Rain showers" className="weather-icon" />;

    case code === 95:
      return <img src={stormImg} alt="Thunderstorm" className="weather-icon" />;

    case [96, 99].includes(code):
      return (
        <img
          src={stormImg}
          alt="Thunderstorm with hail"
          className="weather-icon"
        />
      );

    default:
      return <div>❓</div>;
  }
};
