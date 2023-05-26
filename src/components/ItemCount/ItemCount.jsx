import { useState } from "react";

const ItemCount = ( {stock, initial, onAdd} ) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock){
            setQuantity( quantity + 1 );
        }
    }

    const decrement = () => {
        if(quantity > 1 ){
            setQuantity( quantity - 1 );
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex m-3">
                <button className="btn btn-secondary m-2" onClick={decrement}>-</button>
                <h4 className="m-2">{quantity}</h4>
                <button className="btn btn-secondary m-2" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-primary mb-3" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>

    );

}

export default ItemCount;