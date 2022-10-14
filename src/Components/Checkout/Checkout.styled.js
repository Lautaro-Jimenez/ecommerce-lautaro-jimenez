import styled from "styled-components";

export const Formulario = styled.form`
    min-height: auto;
    display: flex;
    margin-bottom: 120px;
`;

export const ContenedorFormulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 15px;
    padding-right: 180px;
`;

export const OrderNumber = styled.div`
    height: 100vh;
`;

export const Detalle = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DetalleCarrito = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
    padding: 8px;
    margin: 8px;
    font-size: 10px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 37%);
    border-radius: 10px;
    color: white;
    font-size: 16px;
`;

export const P = styled.p`
    margin: 0px;
    color: white;
`;

export const Label = styled.label`
    padding: 10px;
`;

export const Input = styled.input`
    margin-left: 10px;
`

// probando estilos diferentes 