import React from "react";
import './ModalWithForm.css';

function ModalWithForm({ title, name, onClose, buttonText, onSubmit, redirectButtonText, onButtonClick, children }) {

  const redirectButtonClassName = `modal__redirect-button ${redirectButtonText.length > 0 ? 'modal__redirect-button_visible' : 'modal__redirect-button_hidden'}`;

  return (
    <div className="modal">
      <form className="modal__form" name={name} onSubmit={onSubmit}>
        <div className="modal__form-container">
          <h3 className="modal__title">{title}</h3>
          <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
          />
        </div>
        {children}
        <div>
          <button type="submit" className="modal__submit-button">{buttonText}</button>
          <button type='button' className={redirectButtonClassName} onClick={onButtonClick}>{redirectButtonText}</button>
        </div>
      </form>
    </div>
  )
}

export default ModalWithForm;