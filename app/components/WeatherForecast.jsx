import React from "react";
import ForecastCard from "./ForecastCard";

function WeatherForecast({ data }) {
  return (
    <>
      <div className="card bg-gradient-to-br from-green-300 to-gray-900 lg:col-span-2 md:col-span-2">
        <div className="card-body">
          <h2 className="card-title">3 Days Forecast</h2>
          <div className="flex justify-around">
            {data.forecast.forecastday.map((day) => (
              <ForecastCard
                key={day.date}
                day={day}
                location={data.location.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherForecast;
