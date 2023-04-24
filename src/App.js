import React from "react";
import "./App.css";

export default function App() {
  let weatherData = {
    city: "Salzburg",
    temperature: 8,
    date: "Friday 21:44 pm",
    description: "light rain",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-night.png",
    humidity: 91,
    wind: 3,
  };
  return (
    <div className="container">
      <div className="weather-wrapper">
        <div className="weather-app">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="🔎 Enter Location..."
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Last updated: {weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="d-flex weather-temperature">
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
