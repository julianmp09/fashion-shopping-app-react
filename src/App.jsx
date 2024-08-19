import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () =>{
    return(
        <>
            <NavBar/>
            <ItemListContainer greeting={"aca ira mi section hero"}/>
        </>

    )
}

export default App