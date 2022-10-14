import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import { collection, addDoc, Timestamp, writeBatch, where, query, getDocs, documentId } from 'firebase/firestore';
import { db } from '../../Firebase/firebase'
import { Button, Text } from '@chakra-ui/react';
import { Anuncio, ContenedorFormulario, Detalle, Formulario, Input, Label, OrderNumber, P, Span } from './Checkout.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardCartItem } from '../CartItem/CartItem.styled';

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
                <Anuncio>Compraste con exito!</Anuncio>
                <OrderNumber>
                    <p>Se emitió la orden exitosamente</p>
                    <br />
                    <p>Tu número de orden es <Span>{orderNumber}</Span></p>
                    <br />
                    <Link to='/'><Button>Seguir mirando</Button></Link>
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

                toast.success('Compraste con exito!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
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
            toast.error('Completar nombre!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        }

        if (dni.length <= 0) {
            toast.error('Completar DNI!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        }
        
        if (email.length <= 0 || !String(email).includes("@")) {
            toast.error('Inserte un correo electrónico valido!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            return false;
        }
        if (phone <= 0 || isNaN(parseInt(phone))) {
            toast.error('Completar con numero de telefono!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        }
        return true;
    }

    return (
        <Formulario>
            <ContenedorFormulario>
                <Text fontSize='5xl' textColor='beige'>Falta poco</Text>
                <Label>Nombre:
                    <Input type='text' onChange={(evnt) => setName(evnt.target.value)} required placeholder='Nombre' />
                </Label>
                <Label>DNI:
                    <Input type='number' onChange={(evnt) => setDni(evnt.target.value)} required placeholder='Número de documento' />
                </Label>
                <Label>Email:
                    <Input type='email' onChange={(evnt) => setEmail(evnt.target.value)} required placeholder='Dirección de e-mail' />
                </Label>
                <Label>Telefono:
                    <Input type='number' onChange={(evnt) => setPhone(evnt.target.value)} required placeholder='Número deeléfono' />
                </Label>
            </ContenedorFormulario>

            <Detalle>
                <Text fontSize='5xl' textAlign='center' textDecoration='underline' textColor='beige'>Detalle de tu compra</Text>
                {carrito.map((prod) => {
                    return (
                        <CardCartItem key={prod.id}>
                            <Link to={`/detalles/${prod.id}`}> <img className='img-cart' src={prod.imagenProd} alt={prod.nombreProd} /></Link>
                            <Text fontSize='2xl' textAlign='center' textColor='beige' justifyContent='center'> {prod.nombreProd} - </Text>
                            <Text fontSize='2xl' textAlign='center' alignItems='center'> {prod.quantity} </Text>
                            <Text fontSize='2xl' textAlign='center' alignItems='center'> <P> Precio: $ {prod.precioProd}</P> </Text>
                        </CardCartItem>
                    );
                })}
                <br />
                <Link to='/carrito'><Button>Volver al carrito</Button></Link>
                <br />
                <Button type='submit' onClick={createOrder}>Finalizar compra</Button>
                <ToastContainer />
            </Detalle>
        </Formulario>
    )
}

export default Checkout;