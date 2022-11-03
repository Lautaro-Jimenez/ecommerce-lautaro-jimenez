# VENCIÓ FIREBASE, NO MUESTRA STOCK!

![JimenezLogo](./src/assets/jimenezLogo.png)

# JIMENEZ OUTLET - Proyecto React JS 

## Objetivos del proyecto:
- Desarrollar el front end de un E-commerce con carrito de compras, utilizando los componentes de React y Firebase como servidor en la nube.
- Afirmar y conectar todos los conceptos adquiridos a lo largo del curso actual y cursos previos (Desarrollo Web y JavaScript)
- Aprender mejores prácticas.
- Practicar el flujo de trabajo utilizando GIT
- Aprender a segmentar cada sección de la App, creando componentes reutilizables a futuro.

### Iniciando
1. Forkear el repositorio para tener una copia del mismo en su cuenta en caso de que lo deseen.

2. [Clonar el repositorio](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository) en su computadora para acceder al código del proyecto. 

_`IMPORTANTE:`_ Es necesario contar mínimamente con la última versión estable de [Node](https://nodejs.org/es/) y [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Asegurarse de contar con ella para poder instalar correctamente las dependencias necesarias para correr el proyecto.

Para verificar que versión tienen instalada:

```bash
node -v
npm -v
```

### Ejecución del proyecto
1. Lo primero que se debe hacer es ejecutar en la terminal el comando `npm i` para que se comiencen a instalar las dependencias necesarias.
2. Una vez realizado el paso anterior, ejecutaremos el comando `npm start` para dar comienzo de ejecución al script encargado de levantar el servidor.

## _Tecnologías utilizadas_
- Se implementó el uso de Firebase y Firestore, para el diseño de la capa de datos dinámicos enriqueciendo así la aplicación.

- Styled-Components
- CSS nativo
- Chakra UI
- React Router DOM para el enrutado dinámico.

## Componentes fundamentales del proyecto
1) `ItemListContainer`: Es el componente donde se crean las tarjetas (cards) de cada producto que está dentro de los componentes `ItemList` e `Item`.
2) `ItemDetailContainer`: En este componente contenedor se muestran los detalles de los productos dentro de _ItemDetail_ que a su vez contiene dentro suyo a _ItemCount_ el cual es el encargado de ser el contador para el posterior agregado de productos.
3. #### Array con los productos
 - Se encuentra dentro de la carpeta `assets` bajo el nombre de _productos.js_ (posteriormente cargados en la Firebase)
4) `Context`: Utilizado para la creación de funciones globales para su posterior aplicación en los demás componentes.
5. #### Componentes dedicados al carrito: 
- `Carrito`
- `CartItem`
- `CartWidget`

6) `Checkout`: Este es el componente encargado de la realización de cargar las ordenes de compra de los usuarios a la base de datos y de emitir el respectivo comprobante de compra. Además, también se encarga de generar el formulario para que cada usuario ingrese los correspondientes datos solicitados
