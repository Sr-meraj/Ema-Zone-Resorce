// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json())
            .then(data => setProducts(data)).catch(err => console.error(err))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart(),
            savedCart = [];
            // 1: get id 
        for (const id in storedCart) {
            // 2: Get product by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                // 3: add quantity 
                addedProduct.quantity = quantity
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    }, [products])

    const handelAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop'>
            <div className="shop-container">
                {
                    products.map(product => <Product key={product.id} product={product} handelAddToCart={handelAddToCart} />)
                }
            </div>
            <div className="cart-sidebar">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;