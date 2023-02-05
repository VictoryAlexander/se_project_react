import React from "react";
import './ItemCard.css';

function ItemCard({key, card, onCardClick }) {

  return (
    <li className="card" key={key}>
      <img className="card__image" alt={card.name} src={card.link} onClick={() => onCardClick} />
      <p className="card__description">{card.name}</p>
    </li>
  )
}

export default ItemCard;