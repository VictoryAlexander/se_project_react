import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import './ItemModal.css';

function ItemModal({ card, onClose, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  function isOwner() {
    if (!currentUser) {
      return 'item-modal__delete-button item-modal__delete-button_hidden';
    }
    const isOwn = card.owner === currentUser.data._id;
    const itemDeleteButtonClassName = (
      `item-modal__delete-button ${isOwn ? 'item__delete-button_visible' : 'item-modal__delete-button_hidden'}`
    );
    return itemDeleteButtonClassName;
  }

  return (
    <div className="item-modal__preview">
      <div className="item-modal__container">
        <button type="button" className="item-modal__close-button" onClick={onClose}></button>
        <img className="item-modal__preview-image" alt={card.name} src={card.imageUrl} />
        <div className="item-modal__description">
          <h3 className="item-modal__title">{card.name}</h3>
          <button type='button' className={isOwner()} onClick={(e) => {
            e.preventDefault();
            onCardDelete(card);
          }}>
            Delete item
          </button>
        </div>
        <p className="item-modal__weather">Weather: {card.weather}</p>
      </div>
    </div>
  )
}

export default ItemModal;