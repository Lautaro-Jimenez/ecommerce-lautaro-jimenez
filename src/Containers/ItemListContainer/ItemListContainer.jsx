import { Spinner } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import { productos } from '../../assets/productos'
import { promesa } from '../../assets/utility/promesa';
import ItemList from '../../Components/ItemList/ItemList';

const ItemListContainer = () => {

  const [listaProductos, setListaProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setCargando(true)
    promesa(productos)
      .then(res => {
        setCargando(false)
        setListaProductos(res)
      })

  }, [])

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