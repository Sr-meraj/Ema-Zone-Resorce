// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './shop.css';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json').then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handelAddToCart = (id) => {
        const newCart = [...cart, id]
        setCart(newCart)
        console.log(newCart);
        console.log(products);
    }
    return (
        <div className='shop'>
            <div className="shop-container">
                {
                    products.map(product => <Product key={product.id} product={product} handelAddToCart={handelAddToCart} />)
                }
            </div>
            <div className="cart-sidebar">
                <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
                <p>Selected Product: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;