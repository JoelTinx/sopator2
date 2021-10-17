import React from 'react'
import { NavLink } from 'react-router-dom'

import './menu.styles.scss';

const Menu = () => {
  return (
    <nav>
      <div className="menu-container">
        <NavLink className="menu-item" activeClassName="menu-item--active" exact={true} to="/">
          Inicio
        </NavLink>
        <NavLink className="menu-item" activeClassName="menu-item--active" to="/advices">
          Consejos
        </NavLink>
        <NavLink className="menu-item" activeClassName="menu-item--active" to="/about">
          Acerca de
        </NavLink>
      </div>
    </nav>
  )
}

export default Menu
