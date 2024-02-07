import React from 'react';
import './Cart.css';

// Functional component named Cart that takes a prop called "cart"
const Cart = ({ cart }) => {
    // Initialize variables to keep track of total price, total shipping, and quantity of items
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    // Loop through each product in the cart
    for (const product of cart) {
        // Check if product quantity is 0, set it to 1 (alternative way of handling default quantity)
        if (product.quantity === 0){
            product.quantity = 1;
        }

        // Calculate total price by multiplying product price with its quantity
        totalPrice = totalPrice + product.price * product.quantity;

        // Accumulate total shipping charges
        totalShipping = totalShipping + product.shipping;

        // Accumulate total quantity of items
        quantity = quantity + product.quantity;
    }

    // Calculate tax as 7% of the total price
    const tax = totalPrice * 7 / 100;

    // Calculate grand total by adding total price, total shipping, and tax
    const grandTotal = totalPrice + totalShipping + tax;

    // Return JSX to be rendered
    return (
        <div className='cart'>
            <h4>Orders</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shipping Charge : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h3>Grand Total : ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

// Export the Cart component as the default export
export default Cart;
