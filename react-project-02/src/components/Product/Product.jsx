// Product.jsx
import React from 'react'; // Import the React module from 'react'
import './Product.css'; // Import the styles from 'Product.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => { // Define the functional component named Product and receive props as an argument
    const { img, name, seller, quantity, price, ratings } = props.product; // Destructure properties from the 'product' prop
    const handleAddToCart = props.AddToCart; // Assign the 'AddToCart' prop to 'handleAddToCart'

    return (
        <div className='product'>
            <img src={img} alt="" /> {/* Render an image with the source from the 'img' property */}
            <div className="card">
                <h5 className='product-name'>{name}</h5> {/* Render the product name */}
                <h6 className='product-price'>Price : ${price}</h6> {/* Render the product price */}
                <p className='made-by'>Manufacturer : {seller}</p> {/* Render the product manufacturer */}
                <p className='rating'>Rating : {ratings}</p> {/* Render the product rating */}
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button> {/* Render a button that calls 'handleAddToCart' on click */}
        </div>
    );
};

export default Product; // Export the Product component as the default export