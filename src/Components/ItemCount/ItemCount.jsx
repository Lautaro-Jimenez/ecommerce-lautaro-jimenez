import { useState } from 'react'
import { Button, ChakraProvider, Text, VStack } from '@chakra-ui/react'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [contador, setContador] = useState(initial);
    const [cantidad, setCantidad] = useState(0);

    const agregarUnidad = () => {
        if (contador < stock) {
            setContador(contador + 1)
        } else {
            toast.warn('Stock máximo alcanzado', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });
        }
    }

    const sacarUnidad = () => {
        if (contador > initial) {
            setContador(contador - 1)
        } else {
            toast.warn('El mínimo es 1 producto', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
            });
        }
    }

    // const resetear = () => {
    //     setContador(initial)
    // }

    const agregar = () => {
        let cant = cantidad + contador;
        if (cant <= stock) {
            setCantidad(cant)
            onAdd(contador)
        } else {
            Swal.fire({
                text: 'Temporalmente sin stock del producto seleccionado',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    }


    return (
        <VStack>
            <ChakraProvider>
                <Button colorScheme='red' disabled={contador === initial} onClick={sacarUnidad}><span>-</span></Button>
                <Text>{contador}</Text>
                <Button colorScheme='green' disabled={contador === stock} onClick={agregarUnidad}><span>+</span></Button>
                {/* <Button colorScheme='blue' disabled={contador === stock} onClick={resetear}><span>Vaciar carrito</span></Button> */}
                <Button colorScheme='purple' onClick={agregar}>Añadir al carrito</Button>
                <p className='msj-cant'>Actualmente tenes {cantidad} productos agregados</p>
                <ToastContainer />
            </ChakraProvider>

        </VStack>
    )
}

export default ItemCount