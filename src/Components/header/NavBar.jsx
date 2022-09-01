import React from "react";
import 'boxicons'
import "./NavBar.css"

const NavBar = () => {
    return (
        <header>
            <h1>ADIDAS OUTLET</h1>
            <nav>
                <a href="#">seccion 1</a>
                <a href="#">seccion 2</a>
                <a href="#">seccion 3</a>
            </nav>
            <box-icon type='solid' name='cart'></box-icon>
        </header>
    )
}

export default NavBar