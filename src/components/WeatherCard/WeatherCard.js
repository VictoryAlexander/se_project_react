import React, { useContext } from "react";
import '../Main/Main.css';
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <div className="main__weather-card">
      <p className="main__temperature">{weatherData.temperature[currentTemperatureUnit]}</p>
    </div>
  )
}

export default WeatherCard;