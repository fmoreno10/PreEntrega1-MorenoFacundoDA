import cart from '../../assets/carrito.jpg';

const CartWidget = () => {
    return (
        <div>
            <img id="carrito" src={cart} title="Ver carrito" alt="Carrito"
                className="rounded-circle ms-3" />
            <span id="agregadoCarrito" className="badge bg-danger rounded-pill">3</span>
        </div>
    );
}

export default CartWidget;