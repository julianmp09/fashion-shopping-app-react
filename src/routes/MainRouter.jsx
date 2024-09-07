import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Catalogue, Item, Category} from '../pages';
import { NavBar } from '../components';


export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogue' element={<Catalogue/>}/>
        <Route path='/item/:id' element={<Item/>}/>
        <Route path='/category/:id' element={<Category/>}/>

      </Routes>
    </BrowserRouter>
  )
}


