import React from "react";
import './SideBar.css';

function SideBar() {
  const username = 'Victor Alexander';
  const avatar = '';

  return (
    <div className="sidebar">
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
  )
}

export default SideBar;