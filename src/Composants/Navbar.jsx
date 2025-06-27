import React from 'react'
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>
        <div className='Navbar-logo'>
            <img src="/Logo-kasa.png" alt="image du logo KASA" />
             </div>
             <div className='header-link'>
             <NavLink to="/">
             <div className='Navbar-link'>Accueil</div>
             </NavLink>
             <NavLink to="/A-Propos">
             <div className='Navbar-link'>A Propos</div>
             </NavLink>
             </div>
    </nav>
     
  )
}

export default Navbar
