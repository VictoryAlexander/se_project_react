import React, { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import './EditProfileModal.css';

function EditProfileModal({ handleProfileChange, onClose }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const name = currentUser.data.name;
    const avatar = currentUser.data.avatar;
    if (name && avatar) {
      setName(name);
      setAvatar(avatar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleNameChange(e) {
    setName(e.target.value);
  }
    
  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleProfileChange(name, avatar);
  }

  return (
    <ModalWithForm
      title='Change profile data'
      name='edit-profile'
      onClose={onClose}
      buttonText='Save changes'
      onSubmit={handleSubmit}
      redirectButtonText=''
      onButtonClick={null}
    >
      <label className='edit-modal__label'>
        Name*
        <input
          type="text"
          name="name"
          id="name"
          className="edit-modal__input edit-modal__input_type_name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
        <span className='edit-modal__error' id='name-error'></span>
      </label>
      <label className='edit-modal__label'>
        Avatar
        <input
          type="url"
          name="image-url"
          id="image-url"
          className="edit-modal__input edit-modal__input_type_name"
          placeholder="Avatar URL"
          required
          minLength="1"
          value={avatar}
          onChange={handleAvatarChange}
        />
        <span className='edit-modal__error' id='avatar-error'></span>
      </label>
    </ModalWithForm>
  )
}

export default EditProfileModal;