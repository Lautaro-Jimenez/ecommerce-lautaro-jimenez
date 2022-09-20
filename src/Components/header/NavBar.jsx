import React from "react";
import logo from '../../assets/jimenezLogo.png'
import CartWidget from "../CartWidget/CartWidget";
import styled from "styled-components";
import { HeaderSC, NavSC, AStyledComponents, H1StyledComponents, NormalizeSC, LogoSC } from "./NavBar.styles";


const NavBar = () => {

    //array con las secciones de la página
    const secciones = [
        { id: 0, nombre: 'Remeras' },
        { id: 1, nombre: 'Pantalones' },
        { id: 2, nombre: 'Calzados' }
    ]

    return (
        <HeaderSC>
            <LogoSC src={logo} alt="" />
            <NavSC>
                {secciones.map((seccion) => {
                    return <AStyledComponents href='#'>{seccion.nombre}</AStyledComponents>
                })}
            </NavSC>
            <CartWidget />
        </HeaderSC>
    )
}

export default NavBar