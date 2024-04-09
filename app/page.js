"use client";

import { useState, useEffect } from "react";
import Search from "./components/Search";
import WeatherDetails from "./components/WeatherDetails";
import WeatherForecast from "./components/WeatherForecast";
import CurrentWeather from "./components/CurrentWeather";

export default function Home() {
  const [location, setLocation] = useState("Leeds");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeather(data);
    };

    fetchData();
  }, [location]);

  return (
    <>
      <div className="flex flex-col items-center p-4 text-white min-h-screen">
        <Search getLocation={(search) => setLocation(search)} />

        {weather && (
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <CurrentWeather data={weather} />
            <WeatherDetails data={weather} />
            <WeatherForecast data={weather} />
            {/* <div>{weather.forecast.forecastday[0].day.condition.text}</div> */}
          </div>
        )}
      </div>
    </>
  );
}
