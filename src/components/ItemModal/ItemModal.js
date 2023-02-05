import React from "react";
import './ItemModal.css';

function ItemModal({ card, onClose }) {
  return (
    <div className="modal__preview">
      <div className="modal__container">
        <button type="button" className="modal__close-button" onClick={() => onClose}></button>
        <img className="modal__preview-image" alt={card.name} src={card.link} />
        <div className="modal__description">
          <h3 className="modal__title">{card.name}</h3>
          <p className="modal__weather">{card.weather}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemModal;