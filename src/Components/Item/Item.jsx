import React from 'react'
import { Text, Image, Button, Flex } from '@chakra-ui/react'
import { CardProduct } from './Item.styles'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    return (
        <>
            <CardProduct>
                <Text fontSize='2xl' fontWeight={700} >{producto.nombreProd}</Text>
                <Image src={producto.imagenProd} w='350px' />
                <Text margin='10px' fontWeight={600}>${producto.precioProd}</Text>
                <Link to={`/detalles/${producto.id}`}><Button colorScheme='blue'>Más detalles</Button></Link>
            </CardProduct>
        </>
    )
}

export default Item