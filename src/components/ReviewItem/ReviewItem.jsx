import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const {id, img, price, name, quantity} = product;
    return (
        <div className='review-item'>
            <div className='review-details'>
                <img src={img} alt="" />
                <div style={{marginLeft: '10px'}}>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                    <p>Product quantity: {quantity}</p>
                </div>
                
            </div>
            <div>
                <FontAwesomeIcon onClick={() => handleRemoveFromCart(id)} className='delete-icon' icon={faTrashAlt} />
            </div>

        </div>
    );
};

export default ReviewItem;