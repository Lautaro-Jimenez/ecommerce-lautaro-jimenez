import React from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    const secciones = [
        {id: 0, nombre: 'seccion 1' },
        {id: 1, nombre: 'seccion 2' },
        {id: 2, nombre: 'seccion 3' }
    ]

    return (
        <header>
            <h1>JIMENEZ OUTLET</h1>
            <nav>
                {secciones.map((seccion) => {
                    return <a href='#'>{seccion.nombre}</a>
                })}
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar