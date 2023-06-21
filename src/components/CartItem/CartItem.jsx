import './CartItem.css'
import trash from '../../assets/trash.jpg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartItem = ({ id, title, price, img, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (

        <li className="list-group-item d-flex justify-content-between lh-sm">
            <Link to={`/item/${id}`} className="imgMiniaturaContainer">
                <img src={img} alt={title} className="imgMiniatura" />
            </Link>
            <div className="flex-grow-1">
                <h6 className="my-0">{title}</h6>
                <div className="divCantidad">
                    <span className="text-muted spanMenos" title="Sacar">-</span>
                    <small className="text-muted smallCantidad">{quantity}</small>
                    <span className="text-muted spanMas" title="Agregar">+</span>
                </div>
                <img onClick={() => removeItem(id)} className="trashIcon rounded-circle" src={trash} alt="Quitar Producto" title="Quitar Producto" />
            </div>
            <span className="text-muted">${price}</span>
        </li>
    );
};

export default CartItem;