import React from 'react'
import Navbar from './Composants/Navbar.jsx'  
import Banner from './Composants/Banner.jsx';
import "./App.css";
import Apartmentgrid from './Composants/Apartmentgrid.jsx'
import Main from './Composants/Main.jsx'
import Footer from './Composants/Footer.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      <Main>
      <Banner/>
      <Apartmentgrid/>
      </Main>
    </div>
  )
}

export default App
