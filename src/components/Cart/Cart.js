import React from 'react';
import './Cart.css'

const Cart = ({ products }) => {
    // console.log(props);
    return (
        <div>
            <h4>order summary</h4>
            <p>Selected Items: {products.length}</p>
            <p>Total Price: ${ } </p>
            <p>Total Shipping Charge: ${ }</p>
            <p>Tax: ${ } </p>
            <h5>Grand Total: ${ }</h5>
        </div>
    );
};

export default Cart;