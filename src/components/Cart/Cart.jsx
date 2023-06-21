import './Cart.css'
import trash from '../../assets/trash.jpg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
    const { cart, clearCart, totalItemsInCart, totalPrice } = useContext(CartContext);

    function handleClearCart() {

        Swal.fire({
            title: '¿Esta seguro que desea vaciar el carrito?',
            showDenyButton: true,
            confirmButtonText: 'Aceptar',
            denyButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
            }
        });
    }

    if (totalItemsInCart() === 0) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center mb-3">
                <h1>No hay productos en el carrito de compras</h1>
                <Link to="/" className='btn btn-primary'>Volver</Link>
            </div>
        );
    }

    return (
        <main>
            <div className="py-2 text-center">
                <h2>Confirmar Orden</h2>
                <p className="lead">Revise los artículos del carrito y proceda a completar la compra</p>
            </div>

            <div className="row g-5 justify-content-center">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-center align-items-center mb-3">
                        <span className="text-primary">Su carrito</span>
                        <span className="badge bg-primary rounded-pill">{totalItemsInCart()}</span>
                        <img onClick={handleClearCart} className="trashIcon rounded-circle" src={trash} alt="Vaciar Carrito" title="Vaciar Carrito" />
                    </h4>

                    <ul className="list-group mb-3">

                        {cart.map(prod => <CartItem key={prod.id} {...prod} />)}

                        <li className="list-group-item d-flex justify-content-between">
                            <span className="text-muted">Total (ARS)</span>
                            <label className="text-muted">${totalPrice()}</label>
                        </li>
                    </ul>
                    <form className="card p-2">
                        <div className="mt-2">
                            <Link to='/checkout' className='w-100 btn btn-primary btn-lg'>Comprar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );

}

export default Cart;