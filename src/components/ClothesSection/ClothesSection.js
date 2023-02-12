import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { weatherType } from "../../utils/weatherApi";

function ClothesSection({ sectionData, onAddNewClick, onCardClick, onCardDelete }) {
  
  return (
    <section className="main__clothes">
      <div className="main__info">
        <p className="main__description"></p>
        <button className="main__add-card" onClick={onAddNewClick}></button>
      </div>
      <ul className="main__items">
        {sectionData.filter(card => card.weather === weatherType()).map(filteredCard => (
          <ItemCard
            key={filteredCard._id}
            card={filteredCard}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
    </section>
  )
}

export default ClothesSection;