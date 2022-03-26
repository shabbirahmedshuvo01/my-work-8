import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let brand;
    for (const product of cart) {
        total = total + product.price
        brand = product.name;
    }

    return (
        <div className='cart'>
            <h4>order Wishlist</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total} </p>
            <h4>Laptop Name: {brand}</h4>
        </div>
    );
};

export default Cart;