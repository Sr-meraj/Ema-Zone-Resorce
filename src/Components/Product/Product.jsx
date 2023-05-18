/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, price, ratings, img, seller, category } = props.product;

    const handelAddToCart = props.handelAddToCart
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt='product' />
            </div>
            <div className='product-info'>
                <h6 className='title'>{name}</h6>
                <p> <b>Category:</b> {category}</p>
                <p> <b>Price:</b> ${price}</p>
                <p style={{ marginTop: '34px' }}> <b>Manufacturer:</b> {seller}</p>
                <p> <b>Rating:</b> {ratings} Star</p>
            </div>
            <button className="button" onClick={() => { handelAddToCart(props.product)}}>
                Add to cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;