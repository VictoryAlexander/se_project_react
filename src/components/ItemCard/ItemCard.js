import React from "react";
import './ItemCard.css';

function ItemCard({ key, card, onCardClick }) {

  return (
    <li className="card" key={key}>
      <p className="card__description">{card.name}</p>
      <img className="card__image" alt={card.name} src={card.link} onClick={() => onCardClick(card)} />
    </li>
  )
}

export default ItemCard;