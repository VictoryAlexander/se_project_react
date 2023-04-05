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
import RegisterModal from '../RegisterModal/RegisterModal';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import auth from '../../utils/auth';
import LoginModal from '../LoginModal/LoginModal';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import EditProfileModal from '../EditProfileModal/EditProfileModal';

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [weatherData, setWeatherData] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [weatherType, setWeatherType] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const token = localStorage.getItem('jwt');

  function handleCardClick(card) {
    setSelectedCard(card);
    setActiveModal('preview');
  }

  function closeAllModals() {
    setActiveModal(null);
  }

  useEffect(() => {
    function closeByEscape(e) {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    }

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape)
  }, []);

  useEffect(() => {
    if (token) {
      auth.checkToken()
        .catch((err) => console.log(err));
    }
  })

  function handleToggleSwitchChange() {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  }

  function handleAddItemSubmit(name, weather, imageUrl) {
    api.addItem(name, weather, imageUrl)
      .then((item) => {
        setClothingItems([...clothingItems, item]);
        closeAllModals();
      })
      .catch((err) => console.log(err));
    getItems();
  }

  function handleCardDelete(card) {
    api.removeItem(card._id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c.id !== card.id));
        closeAllModals();
      })
      .catch((err) => console.log(err));
    getItems();
  }

  function handleRegister(name, avatar, email, password) {
    auth.register(name, avatar, email, password)
    .then(() => {
      closeAllModals();
      setActiveModal('signIn');
    })
    .catch((err) => console.log(err));
  }

  function handleLogIn(email, password) {
    auth.signIn(email, password)
    .then((res) => {
      localStorage.setItem("jwt", res.token);
      setIsLoggedIn(true);
    })
    .catch((err) => console.log(err));
    auth.checkToken()
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => console.log(err));
    closeAllModals();
  }

  function handleLogOut() {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('jwt');
  }

  function handleProfileChange(name, avatar) {
    auth.editProfile(name, avatar)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
    closeAllModals();
  }

  function handleLikeClick(id, isLiked) {
    isLiked
      ?
        api
          .removeCardLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) => 
              cards.map((card) => (card._id === id ? updatedCard : card))
            );
            getItems();
          })
          .catch((err) => console.log(err))
      :
        api
          .addCardLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) => 
              cards.map((card) => (card._id === id ? updatedCard : card))
            );
            getItems();
          })
          .catch((err) => console.log(err))
  };

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

  function getItems() {
    api.getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getItems();
    setInterval(() => {
      getItems();
    },900000)
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, weatherData, handleToggleSwitchChange }}
        >
          <div className='app__wrapper'>
            <BrowserRouter>
              <Header
                handleAddClick={() => setActiveModal('create')}
                handleRegisterClick={() => setActiveModal('signUp')}
                handleSignInClick={() => setActiveModal('signIn')}
                isLoggedIn={isLoggedIn}
              />
              <Switch>
                <Route exact path='/'>
                  <Main 
                    cards={clothingItems}
                    onCardClick={handleCardClick}
                    weatherType={weatherType}
                    onCardLike={handleLikeClick}
                  />
                </Route>
                <ProtectedRoute path='/profile' isLoggedIn={isLoggedIn}>
                  <Profile
                    cards={clothingItems}
                    onCardClick={handleCardClick}
                    onAddNewClick={() => setActiveModal('create')}
                    weatherType={weatherType}
                    onProfileChangeClick={() => setActiveModal('changeProfile')}
                    onLogOut={handleLogOut}
                    onCardLike={handleLikeClick}
                  />
                </ProtectedRoute>
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
        {activeModal === 'signUp' && (
          <RegisterModal handleRegister={handleRegister} onClose={closeAllModals} onButtonClick={() => {
            closeAllModals();
            setActiveModal('signIn');
          }} />
        )}
        {activeModal === 'signIn' && (
          <LoginModal handleLogIn={handleLogIn} onClose={closeAllModals} onButtonClick={() => {
            closeAllModals();
            setActiveModal('signUp');
          }}/>
        )}
        {activeModal === 'changeProfile' && (
          <EditProfileModal handleProfileChange={handleProfileChange} onClose={closeAllModals} />
        )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;