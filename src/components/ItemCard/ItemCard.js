import React from "react";
import './ItemCard.css';

function ItemCard({ card, onCardClick }) {

  return (
    <li className="card">
      <p className="card__description">{card.name}</p>
      <img className="card__image" alt={card.name} src={card.imageUrl} onClick={() => onCardClick(card)} />
    </li>
  )
}

export default ItemCard;