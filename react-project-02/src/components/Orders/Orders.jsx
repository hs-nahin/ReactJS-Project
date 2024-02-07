import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDB } from '../../utilities/fakedb.js';
import Cart from '../Cart/Cart.jsx';
import ReviewItem from '../ReviewItem/ReviewItem.jsx';
import './Orders.css';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    
    const handleRemoveFromCart = (id) => {
        const existingProductIndex = cart.findIndex(product => product.id === id);
        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            if (updatedCart[existingProductIndex].quantity > 1) {
                updatedCart[existingProductIndex].quantity -= 1;
            } else {
                updatedCart.splice(existingProductIndex, 1); // Remove the product if quantity is 1
            }
            setCart(updatedCart);
            removeFromDB(id);
        }
    }
    
    return (
        <>
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
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
