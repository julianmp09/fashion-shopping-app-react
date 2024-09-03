import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Catalogue } from '../pages';
import NavBar from '../components/NavBar';


export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalogue' element={<Catalogue/>}/>
      </Routes>
    </BrowserRouter>
  )
}


