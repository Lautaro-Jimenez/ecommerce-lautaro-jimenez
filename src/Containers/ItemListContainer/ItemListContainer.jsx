import { Spinner } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import ItemList from '../../Components/ItemList/ItemList';
import { db } from '../../Firebase/firebase'
import { collection, query, getDocs, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [listaProductos, setListaProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    const collectionReference = !id
      ? collection(db, 'products')
      : query(collection(db, 'products'), where('seccion', '==', id))

    getDocs(collectionReference).then(res => {
      const products = res.docs.map(doc => {
        const values = doc.data()
        return { id: doc.id, ...values }
      })
      setListaProductos(products)
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setCargando(false)
    })
  }, [id])

  return (
    <>
      {(cargando) ?
        (<Spinner
          thickness='4px'
          speed='0.45s'
          emptyColor='gray.200'
          color='red.500'
          size='xl' />)
        :
        (<ItemList listaProductos={listaProductos} />)}
    </>
  )
}


export default ItemListContainer