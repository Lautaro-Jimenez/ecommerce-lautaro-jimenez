import React from 'react'
import { Text, Image, VStack, Button } from '@chakra-ui/react'
import styled from 'styled-components'
import { CardProduct } from './Item.styles'

// const FlexBox = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     align-items: center;
// `

const Item = ({ producto }) => {

    return (
        <VStack>
            <CardProduct>
                <Text fontSize='2xl' fontWeight={700} >{producto.nombreProd}</Text>
                <Image src={producto.imagenProd} w='350px' />
                <Text margin='10px' fontWeight={600}>${producto.precioProd}</Text>
                <Button colorScheme='blue'>Más detalles</Button>
            </CardProduct>
        </VStack>
    )
}

export default Item