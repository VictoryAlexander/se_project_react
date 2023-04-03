import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import './ItemCard.css';

function ItemCard({ card, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  //console.log(card);

  //console.log(currentUser);

  const isLiked = card.likes.some(user => user._id === currentUser._id);
  const itemLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''} ${!currentUser ? 'card__like-button_hidden' : ''}`;

  return (
    <li className="card">
      <div className="card__container">
        <p className="card__description">{card.name}</p>
        <button type="button" className={itemLikeButtonClassName} onClick={() => onCardLike(currentUser, isLiked)}></button>
      </div>
      <img className="card__image" alt={card.name} src={card.imageUrl} onClick={() => onCardClick(card)} />
    </li>
  )
}

export default ItemCard;