# Proyecto final del curso de React

E-commerce de productos de electrónica desarrollado con Vite y estilos de Bootstrap

## Funcionalidades

AL iniciar la aplicación se cargan los productos desde Firebase. Luego el usuario puede seleccionar el producto que desee comprar, o puede filtrar por categorías. Después puede agregar la cantidad que desea al carrito y presiona agregar al carrito. Luego puede presionar el botón Finalizar Compra o clickear el carrito en la NavBar. En el carrito puede quitar productos o vaciar el carrito. Una vez que presiona pagar, debe completar el formulario con los datos del usuario, debe ingresar dos veces el mail para validar y continuar. Al finalizar, la orden de compra se almacena en Firebase y se informa al usuario el id de orden generada.

### Requisitos previos

Para poder ejecutar el proyecto se deben instalar las siguientes herramientas

* Node.js
* Git
* Vite
* Bootstrap
* Sass
* SweetAlert2 (se utiliza para indicar que se agregó un producto al carrito y para confirmar que desea vaciar el carrito)
* Firebase

### Instalación

Se deben ejecutar los siguientes comandos para ejecutar el proyecto

```
$ git clone <ruta a este repositorio>
$ npm create vite@latest
$ npm install bootstrap
$ npm install -g sass
$ npm install firebase
$ npm install --save sweetalert2 sweetalert2-react-content
```

## Deployment

El proyecto se desplegó en Vercel

## A seguir

* Proximamente el curso de BackEnd!!
