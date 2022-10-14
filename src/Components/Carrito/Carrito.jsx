import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem'
import { Button, Text } from '@chakra-ui/react';
import { BotonComprar, CarritoContenedor, ContenedorBotones, SinProductos, Total, VolverHaciaAtras } from './Carrito.styled';


const Carrito = () => {

    const { carrito, clearCart, getTotal, getQuantity } = useContext(CartContext)

    const totalQuantity = getQuantity()
    const total = getTotal()

    if (totalQuantity === 0) {
        return (
            <SinProductos>
                <Text fontSize='7xl'>No hay productos en el carrito</Text>
                <Link to='/'><VolverHaciaAtras>Ver productos</VolverHaciaAtras></Link>
            </SinProductos>
        )
    }

    return (
        <CarritoContenedor>
            <Text fontSize='6xl' textAlign='center'>Carrito</Text>
            {carrito.map(p => <CartItem key={p.id} {...p} />)}
            <Total>Total: ${total}</Total>
            <ContenedorBotones>
                <BotonComprar>
                    <Link to='/checkout' className='BotonComprar'>Comprar</Link>
                </BotonComprar>
                <BotonComprar>
                    <Link to='/' className='BotonComprar'>Seguir buscando</Link>
                </BotonComprar>
                <>
                    <Button onClick={() => clearCart()}>Vaciar carrito</Button>
                </>
            </ContenedorBotones>
        </CarritoContenedor>
    )
}

export default Carrito