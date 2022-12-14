import React from 'react'
import Item from '../Item/Item';

const ItemList = ( {listaProductos} ) => {

    return (
        <>
            {listaProductos.map((prod, ind) => <Item key={`{prod.nombreProd}-${ind}`} producto={prod} />)}
        </>
    )
}

export default ItemList