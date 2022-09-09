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

const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState(0);

    const agregarUnidad = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const sacarUnidad = () => {
        if (contador > 0){
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
                <button class='botonRestar' onClick={sacarUnidad}><span>-</span></button>
                <h1>{contador}</h1>
                <button class='botonAgregar' onClick={agregarUnidad}><span>+</span></button>
                <button onClick={()=>onAdd(contador)}>Añadir al carrito</button>
            </EstiloContador>
        </>
    )
}

export default ItemCount