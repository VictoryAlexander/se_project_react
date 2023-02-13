import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import './ClothesSection.css';

function ClothesSection({ sectionData, onAddNewClick, onCardClick, onCardDelete, weatherType }) {
  
  return sectionData.length > 0 && (
    <section className="clothes__section">
      <div className="main__info">
        <p className="main__description">Your items</p>
        <button className="main__add-card" onClick={onAddNewClick}>+ Add new</button>
      </div>
      <ul className="main__items">
        {sectionData && sectionData.filter(card => card.weather === {weatherType}).map(filteredCard => (
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