/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, price, ratings, img, seller, id } = props.product;

    const handelAddToCart = props.handelAddToCart
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt='product' />
            </div>
            <div className='product-info'>
                <h6 className='title'>{name}</h6>
                <p>Price: ${price}</p>
                <p style={{marginTop: '34px'}}>Manufacturer: {seller}</p>
                <p>Manufacturer: {ratings}</p>
            </div>
            <button className="button" onClick={() => { handelAddToCart(id)}}>
                Add to cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;