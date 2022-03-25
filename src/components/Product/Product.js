import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, price, img } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>Buy this:{name}</p>
                <p>only for:${price}</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Product;