import React from 'react'
import Navbar from './Navbar.jsx'  
import Banner from './Banner.jsx';
import "./App.css";
import Apartmentgrid from '../Pages/Apartmentgrid.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx';
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
