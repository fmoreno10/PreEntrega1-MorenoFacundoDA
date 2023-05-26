import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="CardItem d-flex flex-column">
            <header className="Header align-self-center">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture className="align-self-center">
                <img src={img} alt={name} className="img-thumbnail rounded" />
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad Agregada: ", quantity)} />
            </footer>
        </article>
    );

};

export default ItemDetail;