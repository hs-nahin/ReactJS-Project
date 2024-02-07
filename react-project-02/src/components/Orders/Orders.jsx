import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart.jsx';

const Orders = () => {
    const cart = useLoaderData();
    console.log (cart);
    return (
        <>
        <div className='shop-container'>
            <div className='products-container'>
                <h1>orders page {cart.length}</h1>
            </div>
            <div className='cart-container'>
                <Cart cart={cart} />
            </div>
        </div>    
        </>
    );
};

export default Orders;