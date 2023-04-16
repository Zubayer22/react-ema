import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart; //Option 1
    // const {cart} = props; //Option 2
    // console.log(cart);


    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item : {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <p>Bookmarked Products:</p>
            <button onClick={handleClearCart}>Clear Cart <FontAwesomeIcon icon={faTrashAlt}/></button>
            {/* <button>Proceed Checkout <FontAwesomeIcon icon={faCreditCard}/></button> */}
            {children}
        </div>
    );
};

export default Cart;