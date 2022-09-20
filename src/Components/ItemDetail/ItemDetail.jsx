import React from 'react'
import { Container, Text, Image, VStack, Button, Table, Thead, Tbody, Tr } from '@chakra-ui/react'

const ItemDetail = ({ producto }) => {

    return (
        <VStack>
                <Text>Detalle del producto</Text>
                <Image src={producto.image} w='350px' />
                <Text>Nombre: {producto.title} </Text>
                <Text>Seccion: {producto.category} </Text>
                <Text>Precio: ${producto.price} </Text>
        </VStack>
    )
}

export default ItemDetail