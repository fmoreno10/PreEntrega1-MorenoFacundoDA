import './Item.css'
import { Link } from "react-router-dom";

const Item = ({ id, name, price, img, stock }) => {
    return (
        <div className="col d-flex align-items-stretch">
            <div className="card shadow-sm">
                <header className="d-flex justify-content-center">
                    <h2 className="m-3">{name}</h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="card-img-top img-thumbnail rounded" />
                </picture>
                <section className="d-flex flex-column align-items-center m-2">
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock Disponible: {stock}
                    </p>
                </section>
                <footer className="d-flex justify-content-center m-3">
                    <Link to={`/item/${id}`} className="btnDetalle">Ver Detalle</Link>
                </footer>
            </div>
        </div>
    );

};

export default Item;