import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getData, getCategoryData } from "../../services/firebase";

const ItemListContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getCategoryData : getData;
        asyncFunc(categoryId)
            .then(response => setProducts(response))
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false))
    }, [categoryId]);

    return (
        <main>
            <div className="album py-5 bg-light">
                <ItemList isLoading={isLoading} products={products} />
            </div>
        </main>
    );
}

export default ItemListContainer;