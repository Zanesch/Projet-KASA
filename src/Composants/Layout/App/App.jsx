import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'  
import Banner from '../Banner/Banner.jsx';
import "./App.css";
import Apartmentgrid from '../../Pages/Apartmentgrid/Apartmentgrid.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx';
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
