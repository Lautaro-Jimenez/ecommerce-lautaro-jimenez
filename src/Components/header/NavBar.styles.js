import styled from "styled-components";

export const NormalizeSC = styled.body`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const HeaderSC = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgb(54, 91, 109);
    height: 10%;
    width: 100%;
`;

export const NavSC = styled.nav`

`;

export const LogoSC = styled.img`
    width: 200px;
    height: 120px;
`;
// export const H1StyledComponents = styled.h1`
//     font-size: 25px;
//     margin: 10px;
// `;

export const AStyledComponents = styled.a`
    font-size: 30px;
    padding: 25px;
    text-decoration: none;
    color: black;
`;