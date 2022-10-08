import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import { collection, addDoc, Timestamp, writeBatch, where, query, getDocs, documentId } from 'firebase/firestore';
import { db } from '../../Firebase/firebase'
import { Button } from '@chakra-ui/react';
import { ContenedorFormulario, Formulario, OrderNumber } from './Checkout.styled';

const Checkout = () => {

    const [estado, setEstado] = useState(0);
    const [orderNumber, setOrderNumber] = useState("");
    const [outStock, setOutStock] = useState([]);
    const { carrito, total, clearCart } = useContext(CartContext);
    const [name, setName] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState(0);
    const [phone, setPhone] = useState("");

    const { removeItem } = useContext(CartContext)

    const Remove = (id) => {
        removeItem(id);
    };

    if (estado === 1) {
        return (
            <div>
                <p>Compraste con exito!</p>
                <OrderNumber>
                    <p>Se emitió la orden exitosamente</p>
                    <p>Tu número de orden es {orderNumber}</p>
                    <Link to='/'>Seguir mirando</Link>
                </OrderNumber>
            </div>
        );
    }

    if (estado === 2) {
        return (
            <div>
                <p>Se produjo un error</p>
                <div>
                    <p>Los siguientes productos agotaron stock</p>
                    {outStock.map((prod) => {
                        return (
                            <div key={prod.id}>
                                <Link to={`/detalle/${prod.id}`}>
                                    <img src={prod.imagenProd} alt={prod.nombreProd} />
                                </Link>
                                <Link to={`/detalle/${prod.id}`}>
                                    {prod.nombreProd}
                                </Link>
                                <p>{prod.quantity}</p>
                                <Link to={"/carrito"} onClick={() => Remove(prod.id)}>Quitar</Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    const createOrder = async (evnt) => {
        try {
            evnt.preventDefault();

            if (!validate()) return;

            if (carrito.length === 0) return;

            const order = {
                buyer: {
                    name: name,
                    dni: dni,
                    email: email,
                    phone: phone,

                },
                products: carrito,
                date: Timestamp.fromDate(new Date()),
                total: `${total}`,
            };

            const identificadores = carrito.map((evnt) => evnt.id);
            const productReference = collection(db, 'products');
            const prodOnFirestore = await getDocs(
                query(productReference, where(documentId(), "in", identificadores))
            );

            const { docs } = prodOnFirestore;
            const outOfStock = [];
            const batch = writeBatch(db);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const dbStock = dataDoc.stockProd;
                const itemToAdd = carrito.find((prod) => prod.id === doc.id);
                const localQuantity = itemToAdd?.quantity;

                if (dbStock >= localQuantity) {
                    batch.update(doc.ref, { stockProd: dbStock - localQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }

            });

            if (outOfStock.length === 0) {
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, order);
                batch.commit();

                clearCart();
                setEstado(1);
                setOrderNumber(orderAdded.id);
            } else {
                setOutStock(outOfStock);
                setEstado(2);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const validate = () => {
        if (name.length <= 0) {
            alert('El campo del nombre debe ser completado');
            return false;
        }

        if (phone.length <= 0 || isNaN(parseInt(phone))) {
            alert("El número de teléfono no puede contener caracteres");
            return false;
        }
        if (email.length <= 0 || !String(email).includes("@")) {
            alert("Inserte un correo electrónico valido");
            return false;
        }
        return true;
    }

    return (
        <Formulario>
            <ContenedorFormulario>
                <h2>Falta poco</h2>
                <label>Nombre:
                    <input type='text' onChange={(evnt) => setName(evnt.target.value)} required placeholder='Introduzca su nombre' />
                </label>
                <label>Documento:
                    <input type='number' onChange={(evnt) => setDni(evnt.target.value)} required placeholder='Introduzca su numero de documento' />
                </label>
                <label>Email:
                    <input type='email' onChange={(evnt) => setEmail(evnt.target.value)} required placeholder='Introduzca su dirección de email' />
                </label>
                <label>Telefono:
                    <input type='number' onChange={(evnt) => setPhone(evnt.target.value)} required placeholder='Introduzca su numero de teléfono' />
                </label>
            </ContenedorFormulario>
            <Button type='submit' onClick={createOrder}>Comprar</Button>
        </Formulario>
    )
}

export default Checkout;