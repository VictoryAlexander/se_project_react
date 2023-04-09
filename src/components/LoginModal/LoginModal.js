import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal ({ handleLogIn, onClose, onButtonClick }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogIn(email, password);
  }

  return (
    <ModalWithForm
      title='Log in'
      name='login'
      onClose={onClose}
      buttonText='Log in'
      onSubmit={handleSubmit}
      redirectButtonText='or Register'
      onButtonClick={onButtonClick}
    >
      <label className='logIn-modal__label'>
        Email
        <input
          type="email"
          name="email"
          id="email"
          className="logIn-modal__input logIn-modal__input_type_email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <span className='logIn-modal__error' id='email-error'></span>
      </label>
      <label className='logIn-modal__label'>
        Password
        <input
          type="password"
          name="password"
          id="password"
          className="logIn-modal__input logIn-modal__input_type_password"
          placeholder="Password"
          required
          minLength="1"
          maxLength="30"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className='logIn-modal__error' id='password-error'></span>
      </label>
    </ModalWithForm>
  )
}

export default LoginModal;