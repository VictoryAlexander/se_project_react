import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import './AddItemModal.css';

function AddItemModal({ onAddItem, onClose }) {

  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [weather, setWeather] = useState('');

  useEffect(() => {
    setName('');
    setImageUrl('');
    setWeather('');
  }, [])

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleImageUrlChange(e) {
    setImageUrl(e.target.value);
  }

  function handleWeatherChange(e) {
    setWeather(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(name, weather, imageUrl);
  }

  return (
    <ModalWithForm
      title='New Garmet'
      name='new-card'
      onClose={onClose}
      buttonText='Add garmet'
      onSubmit={handleSubmit}
    >
      <label className='add-modal__label'>
        Name
        <input
          type="text"
          name="name"
          id="place-name"
          className="add-modal__input add-modal__input_type_card-name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
        <span className='add-modal__error' id='place-name-error'></span>
        </label>
      <label className='add-modal__label'>
        Image
        <input
          type='url'
          name='link'
          id='place-link'
          className='add-modal__input add-modal__input_type_url'
          placeholder='Image URL'
          required
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
        <span className='add-modal__error' id='place-link-error'></span>
      </label>
      <p className='add-modal__description'>Select the weather type:</p>
      <div className='add-modal__input add-modal__input_type_radio'>
        <div>
          <input type='radio' id='choiceHot' name='weatherType' value='hot' className='modal__radio' onChange={handleWeatherChange} />
          <label className='modal__label_radio' htmlFor='choiceHot'>Hot</label>
        </div>
        <div>
          <input type='radio' id='choiceWarm' name='weatherType' value='warm' className='modal__radio' onChange={handleWeatherChange} />
          <label className='modal__label_radio' htmlFor='choiceWarm'>Warm</label> 
        </div>
        <div>
          <input type='radio' id='choiceCold' name='weatherType' value='cold' className='modal__radio' onChange={handleWeatherChange}/>
          <label className='modal__label_radio' htmlFor='choiceCold'>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  )
}

export default AddItemModal;