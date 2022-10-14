import styled from "styled-components";

export const CardCartItem = styled.article`
    display: flex;
    justify-content: space-between;
    width: auto;
    padding: 20px;
    margin: 30px;
    font-size: 10px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgb(0 0 0 / 37%);
    border-radius: 10px;
`;

export const InfoCartItem1 = styled.p`
    margin-right: 50px;
`;

export const ContainerItemCartItem = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const ItemHeaderCartItem = styled.h2`
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
`;

export const InfoCartItem2 = styled.p`
    font-size: 12px;
    display: flex;
    justify-content: space-between;
`;

export const ButtonCartItem = styled.button`
    width: auto;
    padding: 12px;
    font-size: 8px;
    background: #e71515;
    border-radius: 5px;
    flex: none;
    display: flex;
    order: 1;
    align-self: center;
    flex-grow: 0;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #FFFFFF;
    border: none;
    border-style: none;
    cursor: pointer;
    outline: inherit;

    &:hover{
        background-color: red;
    }
`;

export const ItemFooterCartItem = styled.footer`
    display: flex;
`;

export const imgCart = styled.img`
    height: 50px;
    margin-right: 10px;
    border-radius: 5px;
`;