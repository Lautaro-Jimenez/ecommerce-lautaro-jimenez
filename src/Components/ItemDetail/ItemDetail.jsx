import React from 'react'
import { Text, Image, VStack, Button } from '@chakra-ui/react'
import Swal from 'sweetalert2';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {

    const msjAlert = (count) => {
        Swal.fire({
            text: `Agregaste ${count} productos al carrito.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    }


    return (
        <>
            {producto ?
                <VStack>
                    <div className='containerDetalleProd'>
                        <Link to={`/seccion/${producto.seccion}`}><Button>Regresar</Button></Link>
                        <Button>Regresar</Button>
                        <Text>Nombre: {producto.nombreProd} </Text>
                        <Image src={producto.imagenProd} w='350px' />
                        <Text>Seccion: {producto.seccion} </Text>
                        <Text>Descripcion: {producto.descProd} </Text>
                        <Text>Precio: ${producto.precioProd} </Text>
                        <ItemCount stock={producto.stock} initial={1} onAdd={msjAlert} />
                    </div>
                </VStack>
                :
                ""}
        </>
    )
}

export default ItemDetail