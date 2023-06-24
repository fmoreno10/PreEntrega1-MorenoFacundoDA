import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getItemData } from "../../services/firebase";
import DisplayMessage from "../DisplayMessage/DisplayMessage";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
    const [errors, setErrors] = useState(null);
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getItemData(itemId)
            .then(response => setProduct(response))
            .catch(error => setErrors(error.message));
    }, [itemId]);

    // Si no encuentra el producto, muestra el mensaje de error lanzado por getItemData
    if (errors)
        return (
            <DisplayMessage title={"Error"} message={`${errors}`} />
        );

    if (product) {
        return (
            <div className="ItemDetailContainer">
                <ItemDetail {...product} />
            </div>
        );
    } else {
        return (<Loader />);
    }
}

export default ItemDetailContainer;