import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

const ItemDetail = ({ id, title, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    // Muestra un toast abajo a la derecha con el mensaje especificado, usando la libreria Sweet Alert
    async function renderToast(sMensaje) {

        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-right',
            iconColor: 'white',
            customClass: {
                popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        })
        await Toast.fire({
            icon: 'success',
            title: sMensaje
        })

    }
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = { id, title, price, img };

        addItem(item, quantity);

        renderToast(`Se agrego ${title} al carrito`);
    }
    return (
        <article className="CardItem d-flex flex-column">
            <header className="Header align-self-center">
                <h2 className="ItemHeader">{title}</h2>
            </header>
            <picture className="align-self-center">
                <img src={img} alt={title} className="img-thumbnail rounded" />
            </picture>
            <section className="align-self-center">
                <p className="Info">
                    Categoría: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter align-self-center">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='btn btn-primary mb-3'>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    );

};

export default ItemDetail;