import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import './ItemCard.css';

function ItemCard({ card, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  function cardLike() {
    if (!currentUser) {
      return false;
    }
    const isLiked = card.likes.some(user => user === currentUser.data._id);
    return isLiked;
  }

  const itemLikeButtonClassName = `card__like-button ${cardLike() ? 'card__like-button_active' : ''} ${!currentUser ? 'card__like-button_hidden' : ''}`;

  return (
    <li className="card">
      <div className="card__container">
        <p className="card__description">{card.name}</p>
        <button type="button" className={itemLikeButtonClassName} onClick={() => onCardLike(card._id, cardLike(), currentUser.data._id)}></button>
      </div>
      <img className="card__image" alt={card.name} src={card.imageUrl} onClick={() => onCardClick(card)} />
    </li>
  )
}

export default ItemCard;