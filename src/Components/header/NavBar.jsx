import React from "react";
import logo from '../../assets/jimenezLogo.png'
import CartWidget from "../CartWidget/CartWidget";
import { HeaderSC, NavSC, AStyledComponents, LogoSC } from "./NavBar.styles";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    //array con las secciones de la página
    const secciones = [
        { id: 0, nombre: 'Remeras', ruta: "/seccion/Remeras" },
        { id: 1, nombre: 'Pantalones', ruta: "/seccion/Pantalones" },
        { id: 2, nombre: 'Calzados', ruta: "/seccion/Calzados" }
    ]

    return (
        <HeaderSC>
            <Link to='/'>
                <LogoSC src={logo} alt="" />
            </Link>
            <NavSC>
                {secciones.map((seccion) => {
                    return <NavLink key={seccion.id} to={seccion.ruta} style={stylesAnchor.links}>{seccion.nombre}</NavLink>
                })}
            </NavSC>
            <CartWidget />
        </HeaderSC>
    )
}

const stylesAnchor = {
    links: {
        fontSize: 30,
        padding: 25,
        textDecoration: "none",
        color: "black"
    }
}

export default NavBar