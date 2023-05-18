/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './cart.css';

const Cart = ({ cart }) => {
    let total = 0, shipping = 0, tax, GrandTotal=0, quantity;
    for (const id in cart) {
         total += cart[id].price;
        shipping += cart[id].shipping;
        tax = total * 7 / 100;
        GrandTotal = total + tax + shipping;
        // quantity = cart[id].quantity || 1
    }
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
            <p>Selected Product: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Price: ${GrandTotal}</p>
        </div>
    );
};

export default Cart;