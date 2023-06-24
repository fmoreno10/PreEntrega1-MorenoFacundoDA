import './Item.css'
import { Link } from "react-router-dom";

const Item = ({ id, title, price, img, stock, discount }) => {
    return (
        <div className="col d-flex align-items-stretch">
            <div className="card shadow-sm">
                <header className="d-flex justify-content-center">
                    <h2 className="m-3">{title}</h2>
                </header>
                <picture>
                    <img src={img} alt={title} className="card-img-top img-thumbnail rounded" />
                </picture>
                <section className="d-flex flex-column align-items-center m-2">
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    { (discount>0) && <small>Descuento: %{discount} </small>}
                    <p className="Info">
                        Stock Disponible: {stock}
                    </p>
                </section>
                <footer className="d-flex justify-content-center m-3">
                    <Link to={`/item/${id}`} className="btnDetalle">Ver Producto</Link>
                </footer>
            </div>
        </div>
    );

};

export default Item;