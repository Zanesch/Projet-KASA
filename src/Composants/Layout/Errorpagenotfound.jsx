import React from 'react'
import "./Errorpagenotfound.scss";
import Navbar from './Navbar';
import Main from './Main';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Errorpagenotfound() {
  return (
    <div>
      <Navbar/>
      <Main>
        <div className='Error-page'>
      <h3>404</h3>
      <h4>Oops! La page que vous demandez n'existe pas.</h4>
      <Link to="/">Retournez sur la page d'accueil</Link>
              </div>
              <Footer/>
        </Main>
       
      
      
    </div>
  )
}

export default Errorpagenotfound
