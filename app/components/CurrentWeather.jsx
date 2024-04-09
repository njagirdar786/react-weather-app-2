import React from "react";

function CurrentWeather({ data }) {
  return (
    <>
      <div className="card bg-gradient-to-br from-purple-500 to-gray-900">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Today</h2>
          <div className="stats shadow">
            <div className="card-body">
              <h2 className="card-title">
                {data.location.name}, {data.location.region}
              </h2>
              <h2 className="stat-title">{data.location.tz_id}</h2>
              <p className="stat-value">{data.current.temp_c}°C</p>
              <div className="kbd bg-gradient-to-br from-pink-500 to-gray-900">
                <img
                  src={"https:" + data.current.condition.icon}
                  alt="icon"
                  height="40"
                  width="40"
                  className="mt-1"
                />
                <p className="pl-2 pr-2">{data.current.condition.text}</p>
              </div>
              <p>{data.location.localtime}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
