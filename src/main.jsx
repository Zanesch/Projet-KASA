import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Accueil",
    element: <h1>Accueil</h1>
  },
  {
   path: "/A Propos",
    element: <h1>A Propos</h1>
  },
{
   path: "/404",
    element: <h1>404</h1>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
