import React from "react";
import NavBar from "./Components/header/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
// import ItemCount from "./Components/ItemCount/ItemCount";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito";

const App = () => {

  // const onAdd = (contador) => {
  //   console.log("producto añadido con éxito al carrito!");
  // };

  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/seccion/:id" element={<ItemListContainer />}  />
            {/* <ItemListContainer /> */}
            <Route path="/detalles/:id" element={<ItemDetailContainer />}/>
            {/* <ItemDetailContainer /> */}
            <Route path="/carrito" element={<Carrito />}/>
            {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
