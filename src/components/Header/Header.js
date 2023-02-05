import React from "react";
import './Header.css';
import './Navigation.css';
import logoPath from "../../images/logo.png";
import avatarDefault from "../../images/Avatar.png";


function Header({ weatherData, handleAddClick }) {
  if (!weatherData) return null;
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const username = 'Victor Alexander';
  const avatar = '';

  return (
    <header className="header">
      <div className="header__container">
        <img 
          src={logoPath}
          alt="WTWR Logo"
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
              <button onClick={handleAddClick} className="navigation__button">
                + Add clothes
              </button>
            </li>
            <li>
              <div className="navigation__link">
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
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;