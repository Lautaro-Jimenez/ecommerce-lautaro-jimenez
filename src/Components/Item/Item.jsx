import React from 'react'
import { Text, Image, VStack, Button } from '@chakra-ui/react'
import styled from 'styled-components'

// const FlexBox = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     align-items: center;
// `

const Item = ({ producto }) => {

    return (
        <VStack>
            <Text fontSize='3xl'>{producto.nombreProd}</Text>
            <Image src={producto.imagenProd} w='350px' />
            <Text>${producto.precioProd}</Text>
            <Button colorScheme='blue'>Más detalles</Button>
        </VStack>
    )
}

export default Item