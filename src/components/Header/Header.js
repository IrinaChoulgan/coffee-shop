import React from 'react'
import logo from '../../assets/logo.png'

import s from './Header.module.css'

const Header = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
            <a href="#home">Home</a>
        </li>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#menu">Menu</a>
        </li>
        <li>
            <a href="#home">Reservation</a>
        </li>
        <li>
            <a href="/"><img src={logo} alt="logo"/></a>
        </li>
        <li>
            <a href="#pages">Pages</a>
        </li>
        <li>
            <a href="#shop">Shop</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
