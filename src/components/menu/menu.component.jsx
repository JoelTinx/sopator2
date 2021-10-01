import React from 'react'
import { NavLink } from 'react-router-dom'

// import styles from './menu.module.scss';
import './menu.styles.scss';

const Menu = () => {
  return (
    <nav>
      <NavLink className="menu-item" to="/">
        Home
      </NavLink>
      <NavLink className="menu-item" to="/advices">
        Advices
      </NavLink>
      {/* <NavLink className="menu-item" to="/about">
        Community
      </NavLink> */}
      <NavLink className="menu-item" to="/about">
        About
      </NavLink>
    </nav>
  )
}
// const Menu = () => {
//   return (
//     <nav className={styles.menu}>
//       <NavLink className={styles.menuItem} to="/">
//         Home
//       </NavLink>
//       <NavLink className={styles.menuItem} to="/about">
//         About
//       </NavLink>
//     </nav>
//   )
// }

export default Menu
