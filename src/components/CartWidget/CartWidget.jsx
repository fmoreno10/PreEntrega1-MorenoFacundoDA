import cart from './assets/carrito.jpg';

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="Carrito de Compras"/>
            <span>1</span>
        </div>
    );
}

export default CartWidget