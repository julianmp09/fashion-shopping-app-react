import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { getAllProducts } from "./services/products";
import { productsData } from "./data/productsData";
import { HeroSection } from "./components/Hero-Section/HeroSection";

const App = () =>{
    return(
        <>
            <NavBar/>
            <HeroSection/>
            <ItemListContainer products={productsData}/>
        </>

    )
}

export default App