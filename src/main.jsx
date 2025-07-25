import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import Navbar from './Composants/Navbar.jsx'
import Footer from './Composants/Footer.jsx'
import Errorpagenotfound from './Composants/Errorpagenotfound.jsx'
import About from './Composants/About.jsx'
import Apartmentpage from './Composants/Apartmentpage.jsx' // ✅ Le bon composant

const HeaderlayoutFooter = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderlayoutFooter />,
    errorElement: <Errorpagenotfound />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/A-Propos',
        element: <About />,
      },
      {
        path: '/appartement/:id', // ✅ Route dynamique vers un appartement
        element: <Apartmentpage />, // ✅ Utilisation du bon composant
      },
    ],
  },
  {
    path: '/404',
    element: <h1>404</h1>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
