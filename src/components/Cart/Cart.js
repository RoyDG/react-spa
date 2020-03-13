import React from 'react';
import './Cart.css'

//still working on calculation
const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, prd) => total + prd.price, 0);

    const allTotal = (total).toFixed(2);

    return (
        <div className = 'cart'>
            <h2>Connection</h2>
            <p> Following: {cart.length}</p>
            <h3 className = 'total'>Total income: {allTotal}</h3>
    
        </div>
    );

}

export default Cart;