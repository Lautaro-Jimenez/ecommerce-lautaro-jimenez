import { useState, useContext } from 'react'
import { Text, Image, VStack, Button } from '@chakra-ui/react'
import Swal from 'sweetalert2';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { CardProduct, Detalle, DetalleContador } from './ItemDetail.styled';

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
            <Link to={`/seccion/${seccion}`}><Button>Regresar</Button></Link>
            <VStack>
                <Text fontSize='5xl' justifyContent='center'>Nombre: {nombreProd} </Text>
                <CardProduct>
                    <Image src={imagenProd} w='350px' />
                </CardProduct>
                <Detalle>
                    <Text fontSize='3xl'>Seccion: {seccion} </Text>
                    <Text fontSize='4xl'>Descripcion: {descProd} </Text>
                    <Text fontSize='3xl'>Precio: ${precioProd} </Text>
                </Detalle>
                <DetalleContador>
                    {quantity > 0 ? <Button><Link to='/Carrito'>Ir al carrito</Link></Button> : <ItemCount stock={stockProd} initial={quantityAdded} onAdd={onAdd} />}
                </DetalleContador>
            </VStack>
        </>
    )
}

export default ItemDetail