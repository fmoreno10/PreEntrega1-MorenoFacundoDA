import './CartWidget.css'
import cart from '../../assets/carrito.jpg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalItemsInCart } = useContext(CartContext);
    return (
        <Link to='/cart'>
            <img id="carrito" src={cart} title="Ver carrito" alt="Carrito"
                className="rounded-circle ms-3" />
            {
            (totalItemsInCart() > 0)
            &&
            <span id="agregadoCarrito" className="badge bg-danger rounded-pill">{totalItemsInCart()}</span> 
            }            
        </Link>
    );
}

export default CartWidget;