import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem'
import { Button, Text, VStack } from '@chakra-ui/react';
import './Carrito.css'


const Carrito = () => {

    const { carrito, clearCart, getTotal, getQuantity } = useContext(CartContext)

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <div className='SinProductos'>
                <Text fontSize='7xl'>No hay productos en el carrito</Text>
                <Link to='/' className='VolverHaciaAtras'>Ver productos</Link>
            </div>
        )
    }

    return (
        <VStack>
            <Text fontSize='6xl' textAlign='center'>Carrito</Text>
            { carrito.map(p => <CartItem key={p.id} {...p}/>) }
            <Text fontSize='4xl'>Total: ${total}</Text>
            <Button onClick={() => clearCart()}>Vaciar carrito</Button>
            <Button>Finalizar Compra</Button>
        </VStack>
    )
}

export default Carrito