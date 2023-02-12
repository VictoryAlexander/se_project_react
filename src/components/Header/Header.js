import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import './Navigation.css';
import avatarDefault from "../../images/Avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";


function Header({ weatherData, handleAddClick }) {
  if (!weatherData) return null;
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const username = 'Victor Alexander';
  const avatar = '';

  return (
    <header className="header">
      <div className="header__container">
        <Link
          to='/'
          className="header__logo"
        />
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__nav">
        <nav className="navigation">
          <ul className="navigation__container">
            <li>
              <ToggleSwitch />
            </li>
            <li>
              <button onClick={handleAddClick} className="navigation__button">
                + Add clothes
              </button>
            </li>
            <li>
              <Link to='/profile' className="navigation__link">
                {username}
                {avatar ? (
                  <img 
                    className="navigation__user"
                    src={avatar || avatarDefault}
                    alt="user avatar"
                  />
                ) : (
                  <span className="navigation__user navigation__user_type_none">
                    {username?.toUpperCase().charAt(0) || ''}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;