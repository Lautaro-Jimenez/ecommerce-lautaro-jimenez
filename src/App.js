import React from "react";
import NavBar from "./Components/header/NavBar"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemList from "./Components/ItemList/ItemList";

const App = () => {

  const mensajeInicio = 'Bienvenido al Outlet Jimenez'

  const onAdd = (contador) => {
    console.log('producto añadido con éxito al carrito!');
  }

  return (
    <>
    
    <NavBar />
    <ItemListContainer greeting={mensajeInicio} />
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    
    </>
  )
}

export default App;
