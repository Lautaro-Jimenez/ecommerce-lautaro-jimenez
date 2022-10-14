import styled from "styled-components";

export const SinProductos = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const VolverHaciaAtras = styled.button`
    text-align: center;
    background-color: #0e4d1c;
    border: none;
    border-radius: 5px;
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 37%);
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 700;
    margin: 10px;
    padding: 10px;
    width: auto;
`;

export const CarritoContenedor = styled.div`
    height: 100%;
    margin-bottom: 100px;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

export const ContenedorBotones = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BotonComprar = styled.button`
    width: auto;
    margin: 10px;
    padding: 0.25em 1em;
    font-size: 40px;
    font-weight: bold;
    background: linear-gradient(135deg,#212529,rgb(229 46 46));
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 37%);
    border-radius: 5px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 20vw;
    align-items: center;

    &:hover{
        color: red;
    }
`;

export const Total = styled.h3`
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: beige;
`;