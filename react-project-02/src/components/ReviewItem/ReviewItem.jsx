import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id, img, name, price, quantity} = product;
    return (
        <>
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3 className='title'>{name}</h3>
                <p className='price'>Price: <span className='orange-text'>${price}</span></p>
                <p className='quantity'>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'> <FontAwesomeIcon className='delete-icon' icon={faTrash}/> </button>
        </div>
        </>
    );
};

export default ReviewItem;