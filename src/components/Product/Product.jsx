import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} star</p>
            <button onClick={() => handleAddToCart(props.product)}>
                Add to cart <FontAwesomeIcon icon={faShoppingBasket} />
            </button>
        </div>
    );
};

export default Product;