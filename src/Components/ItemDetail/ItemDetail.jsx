import { useState, useContext } from 'react'
import { Text, Image, VStack, Button } from '@chakra-ui/react'
import Swal from 'sweetalert2';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ id, nombreProd, imagenProd, seccion, precioProd, descProd, stockProd }) => {

    const [quantity, setQuantity] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)

    const quantityAdded = getProductQuantity(id)

    const onAdd = (quantity) => { //const msjAlert
        Swal.fire({
            text: `Agregaste ${quantity} productos al carrito.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });

        setQuantity(quantity)
        addItem({ id, nombreProd, precioProd, quantity })
    };


    return (
        <>
            <VStack>
                <div className='containerDetalleProd'>
                    <Link to={`/seccion/${seccion}`}><Button>Regresar</Button></Link>
                    <Text>Nombre: {nombreProd} </Text>
                    <Image src={imagenProd} w='350px' />
                    <Text>Seccion: {seccion} </Text>
                    <Text>Descripcion: {descProd} </Text>
                    <Text>Precio: ${precioProd} </Text>
                    {/* <ItemCount stock={producto.stock} initial={1} onAdd={msjAlert} /> */}
                    {quantity > 0 ? <Link to='/Carrito'>Ir al carrito</Link> : <ItemCount stock={stockProd} initial={quantityAdded} onAdd={onAdd} />}
                </div>
            </VStack>
        </>
    )
}

export default ItemDetail