import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCarrito([...carrito, productToAdd])
        } else {
            const carritoActualizado = carrito.map( prod => {
                if (prod.id === productToAdd.id) {
                    const productoActualizado = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productoActualizado
                } else {
                    return prod
                }
            })

            setCarrito(carritoActualizado);
        }
    }

    const getQuantity = () => {
        let accu = 0
        carrito.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = carrito.filter(prod => prod.id !== id)
        setCarrito(cartWithoutItem)
    }

    const clearCart = () => {
        setCarrito([])
    }

    const getProductQuantity = (id) => {
        const product = carrito.find(prod => prod.id === id)
        return product?.quantity
    }

    const getTotal = () => {
        let accu = 0
        carrito.forEach(prod => {
            accu += prod.quantity * prod.precioProd
        })

        return accu

    }

    return (
        <CartContext.Provider value={{ carrito, addItem, isInCart, removeItem, clearCart, getQuantity, getProductQuantity, getTotal}} >
            {children}
        </CartContext.Provider>
    )
}