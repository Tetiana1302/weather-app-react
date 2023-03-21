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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Tuesday 11-00</li>
            <li>Overcast Clouds</li>
            <li>Humidity: 91%, Wind: 5 km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <img
            src="https://m.netinfo.bg/sinoptik/icons/small/d300.png"
            alt="cloudy"
          ></img>
          <span>7</span>
          <span>ºC</span>
        </div>
      </div>
    </div>
  );
}
