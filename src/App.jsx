import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { getAllProducts } from "./services/products";
import { productsData } from "./data/productsData";

const App = () =>{
    return(
        <>
            <NavBar/>
            <ItemListContainer greeting={"aca ira mi section hero"} products={productsData}/>
        </>

    )
}

export default App