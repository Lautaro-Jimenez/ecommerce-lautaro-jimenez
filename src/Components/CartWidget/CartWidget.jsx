import React from 'react'
import 'boxicons'
import styled, {css} from 'styled-components'

const CartWidget = () => {

  const LogoCarro = styled.span`

  ${({iconoCarrito}) => iconoCarrito && css`
    width: 28px;
    margin: 15px;
  `}
`;

  return (
    <>
        <LogoCarro>
          <button>
            <box-icon iconoCarrito type='solid' name='cart'><span>0</span> </box-icon>
          </button>
        </LogoCarro>
    </>
  )
}

export default CartWidget