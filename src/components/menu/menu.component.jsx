import React from 'react'
import { NavLink } from 'react-router-dom'

import './menu.styles.scss';

const Menu = () => {
  return (
    <nav>
      <MenuContainer>
        <LogoContainer>
          <NavLink to="/">
            Sopator
          </NavLink>
        </LogoContainer>
        <OptionsContainer>
          <CustomNavLink to="/">
            Inicio
          </CustomNavLink>
          <CustomNavLink to="/advices">
            Consejos
          </CustomNavLink>
          <CustomNavLink to="/about">
            Acerca de
          </CustomNavLink>
        </OptionsContainer>
      </MenuContainer>
    </nav>
  )
}

const MenuContainer = ({ children }) => <div className="menu-container">{ children }</div>
const LogoContainer = ({ children }) => <div className="logo-container">{ children }</div>
const OptionsContainer = ({ children }) => <div className="options-container">{ children }</div>

const CustomNavLink = ({ children, ...props }) => (
  <NavLink {...props} className={({isActive}) => isActive ? 'menu-item menu-item--active' : 'menu-item'}>
    { children }
  </NavLink>
)

export default Menu
