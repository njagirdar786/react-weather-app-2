import React from "react";

function WeatherDetails({ data }) {
  let iconUrl = "https:" + data.current.condition.icon;

  return (
    <>
      <div className="card bg-gradient-to-br from-cyan-300 to-gray-900">
        <div className="card-body">
          <h2 className="card-title">Weather Details</h2>
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Humidity</div>
              <div className="stat-value">{data.current.humidity}%</div>
            </div>

            <div className="stat">
              <div className="stat-title">Wind Speed</div>
              <div className="stat-value">{data.current.wind_mph} mph</div>
            </div>

            <div className="stat">
              <div className="stat-title">Wind Direction</div>
              <div className="stat-value">{data.current.wind_dir}</div>
            </div>
          </div>
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Sunrise</div>
              <div className="stat-value">
                {data.forecast.forecastday[0].astro.sunrise}
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Sunset</div>
              <div className="stat-value">
                {data.forecast.forecastday[0].astro.sunset}
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Feels Like</div>
              <div className="stat-value">{data.current.feelslike_c}°C</div>
            </div>

            <div className="stat">
              <div className="stat-title">Visibility</div>
              <div className="stat-value">{data.current?.vis_miles} mi</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherDetails;
