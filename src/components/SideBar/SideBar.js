import React, { useContext } from "react";
import './SideBar.css';
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ onProfileChangeClick, onLogOut }) {
  const currentUser = useContext(CurrentUserContext);
  const username = currentUser.data.name;
  const avatar = currentUser.data.avatar;

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        {username}
        {avatar ? (
        <img 
          className="sidebar__user"
          src={avatar}
          alt="user avatar"
        />
        ) : (
        <span className="sidebar__user sidebar__user_type_none">
          {username?.toUpperCase().charAt(0) || ''}
        </span>
        )}
    </div>
      <div className="sidebar__buttons">
        <button type="button" className="sidebar__button" onClick={onProfileChangeClick}>Change profile data</button>
        <button type="button" className="sidebar__button" onClick={onLogOut}>Log out</button>
      </div>
    </div>
  )
}

export default SideBar;