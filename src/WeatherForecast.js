import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max-temperature">19º</span>
            <span className="WeatherForecast-min-temperature">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
