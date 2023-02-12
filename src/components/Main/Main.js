import React, { useContext } from "react";
import './Main.css';
import ItemCard from "../ItemCard/ItemCard.js";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { weatherType } from "../../utils/weatherApi";

function Main({ weatherData, cards, onCardClick, onCardDelete }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="main__clothes">
        <div className="main__info">
          <div className="main__description-container">
            <p className="main__description">Today is {weatherData.temperature && weatherData.temperature[currentTemperatureUnit]} and it is {weatherType()}</p>
            <p className="main__description">&nbsp;/&nbsp;</p>
            <p className="main__description">You may want to wear:</p>
          </div>
        </div>
        <ul className="main__items">
          {cards.filter(card => card.weather === weatherType()).map(filteredCard => (
            <ItemCard
              key={filteredCard._id}
              card={filteredCard}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;