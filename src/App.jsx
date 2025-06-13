import React from 'react'
import Navbar from './Composants/Navbar.jsx'  
import Banner from './Composants/Banner.jsx';
import "./App.css";
import Apartmentgrid from './Composants/Apartmentgrid.jsx'
import Main from './Composants/Main.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Main>
      <Banner/>
      <Apartmentgrid/>
      </Main>
    </div>
  )
}

export default App
