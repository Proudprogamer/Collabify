import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import Routing from './components/routing/routing.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
          <Routing/>    
    </StrictMode>
  </BrowserRouter>
)
