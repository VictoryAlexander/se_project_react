import React, { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import './ClothesSection.css';

function ClothesSection({ sectionData, onAddNewClick, onCardClick, weatherType }) {
  const { currentUser } = useContext(CurrentUserContext);

  function cardFilter() {
    if (!currentUser) {
      return null;
    }
    return sectionData && sectionData.filter(card => card.weather === weatherType).map(filteredCard => (
      <ItemCard
        key={filteredCard.id}
        card={filteredCard}
        onCardClick={onCardClick}
      />
    ))
  }
  
  return sectionData.length > 0 && (
    <section className="clothes__section">
      <div className="main__info">
        <p className="main__description">Your items</p>
        <button className="main__add-card" onClick={onAddNewClick}>+ Add new</button>
      </div>
      <ul className="main__items">
        {cardFilter()}
      </ul>
    </section>
  )
}

export default ClothesSection;