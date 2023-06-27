import React, { useState } from 'react'
import cartContext from './cartContext';

const CartState = ({children}) => {
    // const [cart, setCart] = useState([
    //     {
    //         "product_id": "6305e515e0683dca97dc5de8",
    //         "qty_option" : 1
    //     },
    //     {
    //         "product_id": "6305db8fe0683dca97dc5dd5",
    //         "qty_option" : 0
    //     }
    // ]);
    const [cart, setCart] = useState([]);

    const addToCart = (product_id, qty_option) => {
        setCart([...cart, {product_id, qty_option}]);
    }

    const removeFromCart = (product_id) => {
        console.log(cart);
        console.log(product_id);
        let newCart = cart.filter((item) => item.product_id !== product_id);
        console.log(newCart);
        setCart(newCart);
    }

    const updateCart = (product_id, qty_option) => {
        // let newArr = cart;
        setCart(cart.map(item => (item.product_id === product_id) ? {...item, qty_option} : item));
    }

    return (
        <cartContext.Provider value={{cart, setCart, addToCart, removeFromCart, updateCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartState;