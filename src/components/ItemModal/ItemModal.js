import React from "react";
import './ItemModal.css';

function ItemModal({ card, onClose }) {
  return (
    <div className="item-modal__preview">
      <div className="item-modal__container">
        <button type="button" className="item-modal__close-button" onClick={onClose}></button>
        <img className="item-modal__preview-image" alt={card.name} src={card.link} />
        <div className="item-modal__description">
          <h3 className="item-modal__title">{card.name}</h3>
          <p className="item-modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemModal;