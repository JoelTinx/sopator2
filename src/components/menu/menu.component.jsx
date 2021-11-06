import React from 'react'
import { NavLink } from 'react-router-dom'

import './menu.styles.scss';

const Menu = () => {
  return (
    <nav>
      <MenuContainer>
        <NavLink className="menu-item" activeClassName="menu-item--active" to="/" exact>
          Inicio
        </NavLink>
        <NavLink className="menu-item" activeClassName="menu-item--active" to="/advices">
          Consejos
        </NavLink>
        <NavLink className="menu-item" activeClassName="menu-item--active" to="/about">
          Acerca de
        </NavLink>
      </MenuContainer>
    </nav>
  )
}

const MenuContainer = ({ children }) => <div className="menu-container">{ children }</div>

export default Menu
