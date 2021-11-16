import React from 'react'
import { NavLink } from 'react-router-dom'

import './menu.styles.scss';

const Menu = () => {
  return (
    <nav>
      <MenuContainer>
        <CustomNavLink to="/">
          Inicio
        </CustomNavLink>
        <CustomNavLink to="/advices">
          Consejos
        </CustomNavLink>
        <CustomNavLink to="/about">
          Acerca de
        </CustomNavLink>
      </MenuContainer>
    </nav>
  )
}

const MenuContainer = ({ children }) => <div className="menu-container">{ children }</div>

const CustomNavLink = ({ children, ...props }) => (
  <NavLink {...props} className={({isActive}) => isActive ? 'menu-item menu-item--active' : 'menu-item'}>
    { children }
  </NavLink>
)

export default Menu
