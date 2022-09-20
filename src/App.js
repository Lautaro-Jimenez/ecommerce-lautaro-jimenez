import React from "react";
import NavBar from "./Components/header/NavBar";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";

const App = () => {

  const onAdd = (contador) => {
    console.log("producto añadido con éxito al carrito!");
  };

  return (
    <>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
      </ChakraProvider>
    </>
  );
};

export default App;
