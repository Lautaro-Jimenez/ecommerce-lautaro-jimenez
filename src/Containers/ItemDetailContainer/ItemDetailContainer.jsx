import { useState, useEffect } from 'react'
import { Spinner } from '@chakra-ui/react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { productos } from '../../assets/productos';
import { promesa } from '../../assets/utility/promesa'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const {id} = useParams();
    
    useEffect(() => {
        const getProducto = async () => {
            try {
                setCargando(true)
                let resp = await promesa(productos)
                if (id) {
                    setProducto(resp[parseInt(id)]);
                } else {
                    setProducto(resp)
                }
            }
            catch(err){
                console.error("No se encontraron productos", err);
            }
            finally{
                setCargando(false);
            }
        }
        getProducto();
    }, [id])

    return (
        <>
            {cargando ? <Spinner /> : <ItemDetail producto={producto} />}
        </>
    )
}

export default ItemDetailContainer
