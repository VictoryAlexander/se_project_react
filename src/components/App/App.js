import { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import ItemModal from '../ItemModal/ItemModal';
import { location, secretKey } from '../../utils/constants';
import { filterDataFromWeatherAPI, getForecastWeather, filterWeatherType } from '../../utils/weatherApi';
import api from '../../utils/api';
import AddItemModal from '../AddItemModal/AddItemModal';

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [weatherData, setWeatherData] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [weatherType, setWeatherType] = useState('');

  function handleCardClick(card) {
    setSelectedCard(card);
    setActiveModal('preview');
  }

  function closeAllModals() {
    setActiveModal(null);
  }

  function handleToggleSwitchChange() {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  }

  function handleAddItemSubmit(item) {
    api.addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeAllModals();
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.removeItem(card.id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c.id !== card.id));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getForecastWeather(location, secretKey)
        .then((data) => {
          setWeatherData(filterDataFromWeatherAPI(data));
          setWeatherType(filterWeatherType(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    api.getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div className='page'>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, weatherData, handleToggleSwitchChange }}
      >
        <div className='page__wrapper'>
          <BrowserRouter>
            <Header
              handleAddClick={() => setActiveModal('create')}
            />
            <Switch>
              <Route exact path='/'>
                <Main 
                  cards={clothingItems}
                  onCardClick={handleCardClick}
                  onCardDelete={handleCardDelete}
                  weatherType={weatherType}
                />
              </Route>
              <Route exact path='/profile'>
                <Profile
                  cards={clothingItems}
                  onCardClick={handleCardClick}
                  onCardDelete={handleCardDelete}
                  onAddNewClick={() => setActiveModal('create')}
                  weatherType={weatherType}
                />
              </Route>
            </Switch>
          </BrowserRouter>
          <Footer />
      </div>
      {activeModal === 'create' && (
        <AddItemModal onAddItem={handleAddItemSubmit} onClose={closeAllModals} />
      )}
      {activeModal === 'preview' && (
        <ItemModal card={selectedCard} onClose={closeAllModals} onCardDelete={handleCardDelete} />
      )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
