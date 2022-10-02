import React from 'react'
import 'boxicons'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)
  const quantity = getQuantity()

  const LogoCarro = styled.span`

  ${({ iconoCarrito }) => iconoCarrito && css`
    width: 28px;
    margin: 15px;
  `}
`;

  return (
    <>
      <Link to='/Carrito'>
        <LogoCarro>
          <button>
            <box-icon iconoCarrito type='solid' name='cart'></box-icon>
            {quantity}
          </button>
        </LogoCarro>
      </Link>
    </>
  )
}

export default CartWidget