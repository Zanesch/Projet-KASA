import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Composants/Layout/App/App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import Navbar from './Composants/Layout/Navbar/Navbar.jsx'
import Footer from './Composants/Layout/Footer/Footer.jsx'
import Errorpagenotfound from './Composants/Layout/Errorpage/Errorpagenotfound.jsx'
import About from './Composants/Pages/About/About.jsx'
import Apartmentpage from './Composants/Pages/Apartmentpage/Apartmentpage.jsx' // ✅ Le bon composant

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
        path: '/appartement/:id', //  Route dynamique vers un appartement
        element: <Apartmentpage />, //  Utilisation du bon composant
      },
    ],
  },
  {
    path: '/404',
     element: <Errorpagenotfound />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
