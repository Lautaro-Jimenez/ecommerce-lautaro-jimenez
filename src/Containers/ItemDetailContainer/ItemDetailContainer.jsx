import { useState, useEffect } from 'react'
import { Spinner } from '@chakra-ui/react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        const getProd = async () => {
            try {
                const resp = await fetch('https://fakestoreapi.com/products/3');
                const data = await resp.json();
                setProducto(data);
            }

            catch (error) {
                console.error("error en: ", error);
            }

            finally {
                setCargando(false)
            }
        }
        getProd();
    }, [])

    return (
        <>
            {cargando ? <Spinner /> : <ItemDetail producto={producto} />}
        </>
    )
}

export default ItemDetailContainer
