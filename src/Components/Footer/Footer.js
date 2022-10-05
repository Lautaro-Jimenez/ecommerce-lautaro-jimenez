import React from 'react'
import styled from 'styled-components'

const SCFooter = styled.footer`
    height: 100px;
    width: 100%;
    color: #c2c2c2;
    font-size: 20px;
    background-color: rgb(25, 48, 60);
    align-items: center;
    display: flex;
    align-content: center;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 8px 30px 0 rgb(14 14 14);
    border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Footer = () => {
    return (
        <>
            <SCFooter>
                <div>
                    <h2>
                        Lautaro Jimenez &copy; 2022 todos los derechos reservados 
                    </h2>
                </div>
            </SCFooter>
        </>
    )
}

export default Footer