import React from 'react'
import { NavLink } from 'react-router-dom'

import './menu.styles.scss';

const Menu = () => {
  return (
    <nav>
      <div className="menu-container">
        <NavLink className="menu-item" activeClassName="menu-item--active" exact={true} to="/">
          Home
        </NavLink>
        <NavLink className="menu-item" activeClassName="menu-item--active" to="/advices">
          Advices
        </NavLink>
        <NavLink className="menu-item" activeClassName="menu-item--active" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default Menu
