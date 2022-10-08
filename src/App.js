import React from "react";
import NavBar from "./Components/header/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito";
import { CartContextProvider } from "./Context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";
import Checkout from "./Components/Checkout/Checkout";

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
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </ChakraProvider>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};

export default App;
