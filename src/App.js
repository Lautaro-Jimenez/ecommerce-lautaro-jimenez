import React from "react";
import NavBar from "./Components/header/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
// import ItemCount from "./Components/ItemCount/ItemCount";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito";
import { CartContextProvider } from "./Context/CartContext";

const App = () => {


  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <ChakraProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/seccion/:id" element={<ItemListContainer />} />
              <Route path="/detalles/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Carrito />} />
              {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
            </Routes>
          </ChakraProvider>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};

export default App;
