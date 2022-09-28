import { useState } from 'react'
import { Text, Image, VStack, Button } from '@chakra-ui/react'
import Swal from 'sweetalert2';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {

    const [cantidad, setCantidad] = useState(0)

    const onAdd = (count) => { //const msjAlert
        Swal.fire({
            text: `Agregaste ${count} productos al carrito.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });

        setCantidad(count)
    };


    return (
        <>
            {producto ?
                <VStack>
                    <div className='containerDetalleProd'>
                        <Link to={`/seccion/${producto.seccion}`}><Button>Regresar</Button></Link>
                        <Text>Nombre: {producto.nombreProd} </Text>
                        <Image src={producto.imagenProd} w='350px' />
                        <Text>Seccion: {producto.seccion} </Text>
                        <Text>Descripcion: {producto.descProd} </Text>
                        <Text>Precio: ${producto.precioProd} </Text>
                        {/* <ItemCount stock={producto.stock} initial={1} onAdd={msjAlert} /> */}
                        {cantidad > 0 ? <Link to='/Carrito'>Ir al carrito</Link> : <ItemCount stock={producto.stockProd} initial={1} onAdd={onAdd}/>}
                    </div>
                </VStack>
                :
                ""}
        </>
    )
}

export default ItemDetail