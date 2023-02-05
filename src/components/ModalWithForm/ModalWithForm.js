import React from "react";
import './ModalWithForm.css';

function ModalWithForm({ title, name, onClose, children }) {
  return (
    <div className="modal">
      <form className="modal__form" name={name}>
        <div className="modal__form-container">
          <h3 className="modal__title">{title}</h3>
          <button 
          type="button" 
          className="modal__close-button"
          onClick={() => onClose()}
          />
        </div>
        {children}
        <button type="submit" className="modal__submit-button" disabled>Add garmet</button>
      </form>
    </div>
  )
}

export default ModalWithForm;