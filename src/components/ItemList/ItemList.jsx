import DisplayMessage from "../DisplayMessage/DisplayMessage";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

const ItemList = ({ products, isLoading }) => {

    // Rendering condicional cuando la página está cargando
    if(isLoading) return <Loader/>

    // Si termina de cargar y el listado de productos sigue siendo 0
    if (products.length === 0) return <DisplayMessage title={"Error"} message={"No se encontraron productos."} />;

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {products.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        </div>
    );
};

export default ItemList;