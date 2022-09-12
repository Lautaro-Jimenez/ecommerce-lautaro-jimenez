import React, { useState } from 'react'
import { Button, ChakraProvider, Text, VStack } from '@chakra-ui/react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const agregarUnidad = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const sacarUnidad = () => {
        if (contador > initial){
            setContador(contador - 1)
        }
    }

    return (
        <VStack>
            <ChakraProvider>
                <Button colorScheme='red' disabled={contador === initial} onClick={sacarUnidad}><span>-</span></Button>
                <Text>{contador}</Text>
                <Button colorScheme='green' disabled={contador === stock} onClick={agregarUnidad}><span>+</span></Button>
                <Button colorScheme='purple' onClick={()=>onAdd(contador)}>Añadir al carrito</Button>
            </ChakraProvider>
            
        </VStack>
    )
}

export default ItemCount