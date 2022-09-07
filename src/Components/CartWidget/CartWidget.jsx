import React from 'react'
import 'boxicons'
import styled, {css} from 'styled-components'

const LogoCarro = styled.div`
  // acá pongo las propiedades css del div

  ${props => props.principal && css`
    // aca pongo las propiedades css de la etiqueta con clase principal
    border: 3px solid black;
    border-radius: 40%;
    background-color: white;

  `};
`;

const CartWidget = () => {
  return (
    <>
        <LogoCarro principal>
          <box-icon type='solid' name='cart'></box-icon>
        </LogoCarro>
    </>
  )
}

export default CartWidget