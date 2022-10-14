import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './CartItem.css'


const CartItem = ({ id, nombreProd, quantity, precioProd, imagenProd }) => {
    const { removeItem } = useContext(CartContext)

    const handlerRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className="CardCartItem">
            <div>
                <img className="img-cart" src={imagenProd} alt="" />
            </div>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {nombreProd}
                </h2>
            </header>
            <section className="ContainerItemCartItem">
                <p className="InfoCartItem">
                    Cantidad: {quantity}
                </p>
                <p className="InfoCartItem">
                    Precio unitario: ${precioProd}
                </p>
            </section>
            <footer className="ItemFooterCartItem">
                <p className="InfoCartItem">
                    Subtotal: ${precioProd * quantity}
                </p>
                <Button onClick={() => handlerRemove(id)}>X</Button>
            </footer>
        </article>
    )
}

export default CartItem