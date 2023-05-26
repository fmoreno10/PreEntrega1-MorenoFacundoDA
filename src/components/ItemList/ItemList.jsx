import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {products.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        </div>
    );
};

export default ItemList;