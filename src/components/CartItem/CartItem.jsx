import './CartItem.css'
import trash from '../../assets/trash.jpg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartItem = ({ id, title, price, img, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <li className="list-group-item d-flex justify-content-between">

            <img onClick={() => removeItem(id)} className="trashIcon rounded-circle align-self-center" src={trash} alt="Quitar Producto" title="Quitar Producto" />
            <Link to={`/item/${id}`} className="imgMiniaturaContainer">
                <img src={img} alt={title} className="imgMiniatura" />
            </Link>

            <div className='d-flex my-1 py-1 flex-column align-items-start'>
                <h6 className="my-0 mr-auto">{title}</h6>

                <small className="text-muted smallCantidad">Cantidad: {quantity}</small>

                <span className="text-muted">Precio: ${price}</span>
            </div>

            <div className="d-flex align-items-end justify-items-end">
                <h6 className="my-1 mx-2">Subtotal:</h6>
                <p className="my-0 text-muted">${(quantity * price).toFixed(2)}</p>
            </div>
        </li>
    );
};

export default CartItem;