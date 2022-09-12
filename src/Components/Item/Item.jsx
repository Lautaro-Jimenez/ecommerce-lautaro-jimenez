import React from 'react'
import { Text, Image, VStack, Button } from '@chakra-ui/react'

const Item = ({producto}) => {
    
    return (
        <VStack>
            <Text fontSize='3xl'>{producto.nombreProd}</Text>
            <Image src={producto.imagenProd} w='350px' />
            <Text>${producto.precioProd}</Text>
            <Button colorScheme='red'>Más detalles</Button>
        </VStack>
    )
}

export default Item