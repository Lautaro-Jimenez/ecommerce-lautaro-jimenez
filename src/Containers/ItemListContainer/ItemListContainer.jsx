import { Spinner } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import { productos } from '../../assets/productos'
import { promesa } from '../../assets/utility/promesa';
import ItemList from '../../Components/ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {

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
      {cargando ? <Spinner /> : <ItemList listaProductos={listaProductos} /> }
    </>
  )
}


export default ItemListContainer