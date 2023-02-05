import React from "react";
import './Main.css';
import ItemCard from "../ItemCard/ItemCard.js";
import WeatherCard from "../WeatherCard/WeatherCard.js";

function Main({ weatherData, cards, onCardClick }) {
  const actualWeather = weatherData.temperature;

  function weatherType() {
    if (actualWeather >= 86) {
      return 'hot';
    } else if (actualWeather >= 66 && actualWeather <= 85) {
      return 'warm';
    } else if (actualWeather <= 65) {
      return 'cold';
    }
  }

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="main__clothes">
        <div className="main__info">
          <div className="main__description-container">
            <p className="main__description">Today is {actualWeather}°F</p>
            <p className="main__description"> / </p>
            <p className="main__description">You may want to wear:</p>
          </div>
        </div>
        <ul className="main__items">
          {cards.filter(card => card.weather === weatherType()).map(filteredCard => (
            <ItemCard
              card={filteredCard}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;