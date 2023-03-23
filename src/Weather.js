import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-light w-100"
            />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <div className="row mt-3">
        <div className="col-sm-6">
          <ul>
            <li>Tuesday 11-00</li>
            <li className="text-capitalize">Overcast Clouds</li>
            <li>Humidity: 91%, Wind: 5 km/h</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <div className="temperature-container d-flex justify-content-center align-items-stretch">
            <img
              src="https://m.netinfo.bg/sinoptik/icons/small/d300.png"
              alt="cloudy"
              className="float-left"
            ></img>
            <span className="temperature">7</span>
            <span className="unit">ºC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
