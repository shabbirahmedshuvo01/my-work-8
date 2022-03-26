import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;