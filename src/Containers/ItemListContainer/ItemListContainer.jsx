import React from 'react'
import styled, {css} from 'styled-components'

const CentrarBienvenida = styled.h2`

    ${props => props.msjinicio && css`
        text-align: center;
        font-size: 35px;
        color: red;
    `};
`;

const ItemListContainer = ({greeting}) => {
  return (
    <>
        <CentrarBienvenida msjinicio>
            <h2>{greeting}</h2>
        </CentrarBienvenida>
    </>
  )
}


export default ItemListContainer