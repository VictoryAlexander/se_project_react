import React, { useContext } from "react";
import '../Main/Main.css';
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard() {
  const { currentTemperatureUnit, weatherData } = useContext(CurrentTemperatureUnitContext);

  return (
    <div className="main__weather-card">
      <p className="main__temperature">{weatherData.temperature && weatherData.temperature[currentTemperatureUnit]}</p>
    </div>
  )
}

export default WeatherCard;