import React from 'react';
import './Product.css'

const Product = ({ product, addToCart }) => {
    const { name, price, img } = product;
    // console.log(product, addToCart)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h3 className='product-name'>Brand: {name}</h3>
                <p>Discount Price: ${price}</p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-work'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;