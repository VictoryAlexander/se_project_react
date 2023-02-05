import React from "react";
import '../Main/Main.css';

function WeatherCard({ weatherData }) {
  const actualWeather = weatherData.temperature;

  return (
    <div className="main__weather-card">
      <p className="main__temperature">{actualWeather}°F</p>
    </div>
  )
}

export default WeatherCard;