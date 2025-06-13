import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>
        <div className='Navbar-logo'>
            <img src="/Logo-kasa.png" alt="image du logo KASA" />
             </div>
             <div className='Navbar-link'>Accueil</div>
             <Link to="/A Propos">
             <div className='Navbar-link'>A Propos</div>
             </Link>
    </nav>
     
  )
}

export default Navbar
