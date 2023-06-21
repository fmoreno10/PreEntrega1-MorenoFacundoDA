import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);

    const addItem = (item, quantity) => {
        const newCart = [...cart];

        // Si el producto aún no está en el carrito, agregarlo con la cantidad
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}]);
        } else {
            // SI está en el carrito, sumarle la cantidad
            setCart( cart.map( cartItem => {
                if(cartItem.id === item.id)
                    // Para el producto que coinicida con el id, agregarle la cantidad
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                else
                    // Para cualquier otro producto, devolverlo como esta
                    return { ...cartItem };
            }
            ));
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);

    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    const totalItemsInCart = () => {
        return cart.reduce((accumulated, product) => accumulated + product.quantity, 0);
    }

    const totalPrice = () => {
        return cart.reduce((accumulated, product) => accumulated + (product.quantity * product.price), 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalItemsInCart, totalPrice}}>
            { children }
        </CartContext.Provider>
    )
}