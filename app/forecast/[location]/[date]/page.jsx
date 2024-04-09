"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

function page({ params }) {
  const [dayData, setDayData] = useState(null);
  const date = params.date;
  const location = params.location;

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`;

      const response = await fetch(url);
      const data = await response.json();
      const specificDayData = data.forecast.forecastday.find(
        (day) => day.date === date
      );
      setDayData(specificDayData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (dayData) {
      const hourlyData = dayData.hour;
      const chartData = {
        labels: hourlyData.map((hour) => hour.time),
        datasets: [
          {
            name: "°C",
            type: "line",
            values: hourlyData.map((hour) => hour.temp_c),
          },
        ],
      };

      const chart = new Chart("#hourly-temperature-chart", {
        title: "Hourly Temperature in °C",
        data: chartData,
        type: "line",
        height: 250,
        axisOptions: {
          xIsSeries: true,
          xAxisMode: "tick",
          yAxisMode: "tick",
        },
        lineOptions: {
          hideDots: 0, //default:0
          heatline: 0,
          regionFill: 1,
        },
        colors: ["#69ff47"],
      });
    }
  }, [dayData]);

  return (
    <div>
      {dayData && (
        <div className="card bg-gradient-to-br from-purple-500 to-gray-900">
          <div className="card-body">
            <div className="card-title">
              Forecast for {dayData.date} in {location}
            </div>
            <div className="kbd bg-gradient-to-br from-green-300 to-gray-900 mt-2">
              <img
                src={"https:" + dayData.day.condition.icon}
                alt="icon"
                height="40"
                width="40"
              />
              {dayData.day.condition.text}
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Maximum Temperature</div>
                <div className="stat-value">{dayData.day.maxtemp_c}°C</div>
              </div>

              <div className="stat">
                <div className="stat-title">Minimum Temperature</div>
                <div className="stat-value">{dayData.day.mintemp_c}°C</div>
              </div>

              <div className="stat">
                <div className="stat-title">Average Temperature</div>
                <div className="stat-value">{dayData.day.avgtemp_c}°C</div>
              </div>
            </div>

            {/* 2nd row */}
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Max Wind Speed</div>
                <div className="stat-value">{dayData.day.maxwind_mph} mph</div>
              </div>

              <div className="stat">
                <div className="stat-title">Total Precipitation: </div>
                <div className="stat-value">
                  {dayData.day.totalprecip_mm} mm
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Average Visibility</div>
                <div className="stat-value">{dayData.day.avgvis_miles} mi</div>
              </div>
            </div>

            {/* 3rd row */}
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Average Humidity</div>
                <div className="stat-value"> {dayData.day.avghumidity}%</div>
              </div>

              <div className="stat">
                <div className="stat-title">UV Index</div>
                <div className="stat-value">{dayData.day.uv}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Chance of Rain</div>
                <div className="stat-value">
                  {dayData.day.daily_chance_of_rain} %
                </div>
              </div>
            </div>

            {/* 4th row */}
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Sunrise</div>
                <div className="stat-value"> {dayData.astro.sunrise}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Sunset</div>
                <div className="stat-value"> {dayData.astro.sunset}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Moonrise</div>
                <div className="stat-value"> {dayData.astro.moonrise}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Moonset</div>
                <div className="stat-value"> {dayData.astro.moonset}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Moon Phase</div>
                <div className="stat-value"> {dayData.astro.moon_phase}</div>
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <div id="hourly-temperature-chart"></div>
              </div>
            </div>

            <Link className="btn" href={"/"}>
              Go Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
