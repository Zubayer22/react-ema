import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const savedCart = useLoaderData();
    //For delete button in review component
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
         const remaining = cart.filter(product => product.id !== id);
         setCart(remaining);
         removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link to={"/checkout"}>
                        <button>Proceed to checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;