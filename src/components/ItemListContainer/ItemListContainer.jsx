import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getData, getCategoryData } from "../../services/firebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getCategoryData : getData;

        asyncFunc(categoryId)
            .then(response => setProducts(response))
            .catch(error => console.error(error))
    }, [categoryId]);

    return (
        <main>
            <div className="album py-5 bg-light">
                <ItemList products={products} />
            </div>
        </main>
    );
}

export default ItemListContainer;