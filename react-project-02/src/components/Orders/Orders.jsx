import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart.jsx';
import ReviewItem from '../ReviewItem/ReviewItem.jsx';
import './Orders.css';

const Orders = () => {
    const cart = useLoaderData();
    console.log (cart);
    return (
        <>
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map (product => <ReviewItem
                    key={product.id}
                    product={product}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} />
            </div>
        </div>    
        </>
    );
};

export default Orders;