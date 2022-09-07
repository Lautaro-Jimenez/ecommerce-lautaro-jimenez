import React from "react";
import NavBar from "./Components/header/NavBar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";

const App = () => {

  const mensajeInicio = 'Bienvenido al Outlet Jimenez'

  return (
    <>
    
    <NavBar />
    <ItemListContainer greeting={mensajeInicio} />
    
    </>
  )
}

export default App;
