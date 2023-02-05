import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import ModalWithForm from '../ModalWithForm/ModalWithForm.js';
import ItemModal from '../ItemModal/ItemModal.js';
import './Modal.css';
import { location, secretKey } from '../../utils/constants.js';
import defaultClothingItems from '../../utils/clothingitems.js';
import { filterDataFromWeatherAPI, getForecastWeather } from '../../utils/weatherApi';

function App() {
  const [weatherData, setWeatherData] = React.useState({});
  const [clothingItems, setClothingItems] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
    setActiveModal('preview');
  }

  function closeAllModals() {
    setActiveModal();
  }

  React.useEffect(() => {
    if (location.latitude && location.longitude) {
      getForecastWeather(location, secretKey)
        .then((data) => {
          setWeatherData(filterDataFromWeatherAPI(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  React.useEffect(() => {
    setClothingItems(defaultClothingItems)
  },[]);

  return (
    <div className='page'>
      <div className='page__wrapper'>
        <Header
          weatherData={weatherData}
          handleAddClick={() => setActiveModal('create')}
        />
        <Main 
          weatherData={weatherData}
          cards={clothingItems}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      {activeModal === 'create' && (
        <ModalWithForm
          title="New garmet"
          name="new-card"
          onClose={closeAllModals}
        >
          <label className='modal__label'>
            <input
              type="text"
              name="name"
              id="place-name"
              className="modal__input modal__input_type_card-name"
              placeholder="Name"
              required
              minLength="1"
              maxLength="30"
            />
            <span className='modal__error' id='place-name-error'></span>
          </label>
          <label className='modal__label'>
            <input
              type='url'
              name='link'
              id='place-link'
              className='modal__input modal__input_type_url'
              placeholder='Image URL'
              required
            />
            <span className='modal__error' id='place-link-error'></span>
          </label>
          <p>Select the weather type:</p>
          <div className='modal__input modal__input_type_radio'>
            <div>
              <input type='radio' id='choiceHot' name='weatherType' value='hot' />
              <label className='modal__label_radio' htmlFor='choiceHot'>Hot</label>
            </div>
            <div>
              <input type='radio' id='choiceWarm' name='weatherType' value='warm' />
              <label className='modal__label_radio' htmlFor='choiceWarm'>Warm</label> 
            </div>
            <div>
              <input type='radio' id='choiceCold' name='weatherType' value='cold' />
              <label className='modal__label_radio' htmlFor='choiceCold'>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === 'preview' && (
        <ItemModal card={selectedCard} onClose={closeAllModals} />
      )}
    </div>
  );
}

export default App;
