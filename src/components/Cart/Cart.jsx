import './Cart.css'
import trash from '../../assets/trash.jpg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import DisplayMessage from "../DisplayMessage/DisplayMessage";

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
            <DisplayMessage title={"Carrito Vacío"} message={"No hay ningún producto agregado al carrito"} />            
        );
    }

    return (
        <main>
            <div className="py-2 text-center">
                <h2>Confirmar Orden</h2>
                <p className="lead">Revise los artículos del carrito y proceda a completar la compra</p>
            </div>

            <div className="row g-1 justify-content-center">
                <div className="col-md-4 col-lg-6 order-md-last">
                    <h4 className="d-flex justify-content-center align-items-center mb-3">
                    <img onClick={handleClearCart} className="trashIcon rounded-circle mx-2" src={trash} alt="Vaciar Carrito" title="Vaciar Carrito" />
                        <span className="text-primary">Su carrito</span>
                        <span className="badge bg-primary rounded-pill mx-2">{totalItemsInCart()}</span>                        
                    </h4>

                    <ul className="list-group mb-3">

                        {cart.map(prod => <CartItem key={prod.id} {...prod} />)}

                        <li className="list-group-item d-flex justify-content-center align-items-center">
                            <h6 className="my-0 mx-2">Total (ARS)</h6>
                            <label className="my-0 text-muted">${totalPrice()}</label>
                        </li>
                    </ul>
                    <form className="p-2">
                        <div className="mt-2 d-flex align-items-center justify-content-center">
                            <Link to='/checkout' className='w-25 btn btn-primary align-self-center'>Finalizar Compra</Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );

}

export default Cart;