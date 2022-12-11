import React from 'react';
import './Product.css'
const Product = (props) => {
    const {id, category, name, seller, price, stock, rattings, img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {rattings}</small></p>
                <button className='btn-cart'>
                    <p>Add To Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;