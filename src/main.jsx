import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Style.css"
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <ItemListContainer greeting={"aca ira mi section hero"}/>
  </StrictMode>,
)
