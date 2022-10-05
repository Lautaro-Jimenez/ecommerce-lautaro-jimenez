import { useState, useEffect } from 'react'
import { Spinner } from '@chakra-ui/react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/firebase'
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams();

    useEffect(() => {

        getDoc(doc(db, 'products', id))
            .then(resp => {
                const values = resp.data()

                const product = { id: resp.id, ...values }
                setProducto(product)
            })
            .catch(err => {
                console.error("No se encontraron productos", err);
            })
            .finally(()=> {
                setCargando(false)
            })

    }, [id])

    return (
        <>
            {cargando ? <Spinner
                thickness='4px'
                speed='0.45s'
                emptyColor='gray.200'
                color='red.500'
                size='xl' /> : <ItemDetail {...producto} />}
        </>
    )
}

export default ItemDetailContainer
