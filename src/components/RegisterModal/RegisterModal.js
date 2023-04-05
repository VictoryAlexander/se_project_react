import React, { useState } from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './RegisterModal.css';

function RegisterModal({ handleRegister, onClose, onButtonClick }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(name, avatar, email, password);
  }

  return (
    <ModalWithForm
      title='Sign up'
      name='sign-up'
      onClose={onClose}
      buttonText='Next'
      onSubmit={handleSubmit}
      redirectButtonText='or Log in'
      onButtonClick={onButtonClick}
    >
      <label className='signUp-modal__label'>
        Email*
        <input
          type="email"
          name="email"
          id="email"
          className="signUp-modal__input signUp-modal__input_type_email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <span className='signUp-modal__error' id='email-error'></span>
      </label>
      <label className='signUp-modal__label'>
        Password*
        <input
          type="password"
          name="password"
          id="password"
          className="signUp-modal__input signUp-modal__input_type_password"
          placeholder="Password"
          required
          minLength="1"
          maxLength="30"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className='signUp-modal__error' id='password-error'></span>
      </label>
      <label className='signUp-modal__label'>
        Name
        <input
          type="text"
          name="name"
          id="name"
          className="signUp-modal__input signUp-modal__input_type_name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
        <span className='signUp-modal__error' id='name-error'></span>
      </label>
      <label className='signUp-modal__label'>
        Avatar URL
        <input
          type="url"
          name="image-url"
          id="image-url"
          className="signUp-modal__input signUp-modal__input_type_avatar"
          placeholder="Avatar URL"
          required
          value={avatar}
          onChange={handleAvatarChange}
        />
        <span className='signUp-modal__error' id='avatar-error'></span>
      </label>
    </ModalWithForm>
  )
}

export default RegisterModal;