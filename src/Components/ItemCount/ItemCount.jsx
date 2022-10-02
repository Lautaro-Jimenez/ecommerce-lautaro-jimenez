import { useState } from 'react'
import { Button, ChakraProvider, Text, VStack } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

    const agregarUnidad = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const sacarUnidad = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    // const agregar = () => {
    //     let cant = cantidad + contador;
    //     if (cant <= stock) {
    //         setCantidad(cant)
    //         onAdd(contador)
    //     } else {
    //         Swal.fire({
    //             text: 'Temporalmente sin stock del producto seleccionado',
    //             icon: 'error',
    //             confirmButtonText: 'Ok'
    //         });
    //     }
    // }


    return (
        <VStack>
            <ChakraProvider>
                <Button colorScheme='red' disabled={quantity === initial} onClick={sacarUnidad}><span>-</span></Button>
                <Text>{quantity}</Text>
                <Button colorScheme='green' disabled={quantity === stock} onClick={agregarUnidad}><span>+</span></Button>
                <Button colorScheme='purple' onClick={()=> onAdd(quantity)}>Añadir al carrito</Button>
                <p className='msj-cant'>Actualmente tenes {quantity} productos agregados</p>
                <ToastContainer />
            </ChakraProvider>

        </VStack>
    )
}

export default ItemCount