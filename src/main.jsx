import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Style.css"
import NavBar from './components/NavBar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    
  </StrictMode>,
)
