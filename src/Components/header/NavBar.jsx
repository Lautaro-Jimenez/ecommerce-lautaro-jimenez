import React from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    const secciones = [
        {id: 0, nombre: 'Remeras' },
        {id: 1, nombre: 'Camisetas' },
        {id: 2, nombre: 'Pantalones' },
        {id: 2, nombre: 'Pantalones cortos' },
        {id: 2, nombre: 'Zapatillas' }
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