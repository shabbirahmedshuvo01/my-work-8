import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    const myArray = [];
    console.log(...myArray);

    let total = 0;
    let brand;
    for (const product of cart) {
        total = total + product.price
        brand = product.name;
        myArray.push(...cart, brand);
    }


    return (
        <div className='cart'>
            <h4>order Wishlist</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total} </p>
            <h4>Laptop Name: {brand}</h4>
            <div>
                <h3>Name:{myArray}</h3>

            </div>
            <button className='btn-random'>Random</button>
            <br />
            <button className='btn-reset'>Reset</button>

            <br />
            <div>
                <h4>1. How react work.</h4>
                <p>A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state</p>
                <h4>2. different props vs state</h4>
                <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component</p>
            </div>
        </div>
    );
};

export default Cart;