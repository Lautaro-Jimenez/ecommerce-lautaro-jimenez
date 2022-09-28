import React from 'react'
import { Text, Image, Flex, Button, VStack } from '@chakra-ui/react'
import { CardProduct } from './Item.styles'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'


const Item = ({ producto }) => {

    const msjAlert = (count) => {
        Swal.fire({
            text: `Agregaste ${count} productos al carrito.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    }

    return (
        <VStack>
            <div className='contenedorItems'>
                <CardProduct>
                    <Text fontSize='2xl' fontWeight={700} >{producto.nombreProd}</Text>
                    <Image src={producto.imagenProd} w='350px' />
                    <Text margin='10px' fontWeight={600}>${producto.precioProd}</Text>
                    <Link to={`/detalles/${producto.id}`}><Button colorScheme='blue'>Más detalles</Button></Link>
                    <ItemCount stock={producto.stockProd} initial={1} onAdd={msjAlert} />
                </CardProduct>
            </div>
        </VStack>
    )
}

export default Item