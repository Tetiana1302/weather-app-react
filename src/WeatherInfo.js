import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row mt-3">
        <div className="col-sm-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity: {props.data.humidity}%, Wind: {props.data.wind} km/h
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <div className="temperature-container d-flex justify-content-center align-items-stretch">
            <WeatherIcon code={props.data.icon} />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">ºC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
