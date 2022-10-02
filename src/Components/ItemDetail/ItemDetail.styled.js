import styled from "styled-components";

export const CardProduct = styled.div`
    max-width: 355px;
    width: 100%;
    border-radius: 25px;
    padding: 20px 30px 30px 30px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background-color: rgb(236, 239, 241);
    overflow: hidden;
    margin: 120px;
    text-align: center;
`;

export const CardProductTEST = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border:1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    margin: 1rem 1rem;
`;

export const ImgDetalle = styled.img`
    margin-bottom: 30px;
    margin-left: 40px;
    padding: 10px;
    width: 70%;
    object-fit: cover;
    margin-bottom: 10px;
    height: auto;
`;

export const Detalle = styled.div`
    margin-top: 10px;
    width: 100%;
    text-align: initial;
    font-size: 20px;
    padding: 0px;
`;

export const DetalleContador = styled.div`
    align-items: center;
    text-align: center;
`