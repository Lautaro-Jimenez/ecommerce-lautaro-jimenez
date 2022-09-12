import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import './ItemCount.css'

const EstiloContador = styled.div`

    ${props => props.count && css`
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-center;
    `};
`;

const ItemCount = ({initial, stock, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const agregarUnidad = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const sacarUnidad = () => {
        if (contador > initial){
            setContador(contador - 1)
        }
    }

    const vaciarCarrito = () => {
        setContador(0)
    }

    return (
        <>
            <EstiloContador count>
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
                <button class='botonRestar' disabled={contador === initial} onClick={sacarUnidad}><span>-</span></button>
                <h1>{contador}</h1>
                <button class='botonAgregar' disabled={contador === stock} onClick={agregarUnidad}><span>+</span></button>
                <button onClick={()=>onAdd(contador)}>Añadir al carrito</button>
            </EstiloContador>
        </>
    )
}

export default ItemCount