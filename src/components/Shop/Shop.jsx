import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storeCart = getShoppingCart();
        const saveCart = [];
        
        // Step 1 - Get Id
        for (const id in storeCart) {
            //Step 2 - Get Product using Id
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                // Step 3 - Add quantity of product
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                //Step 4 - Add the added product to the saved cart
                saveCart.push(addedProduct);
            }
        }
        //Step 5 - Set the cart
        setCart(saveCart);
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        // console.log(product);
        // const newCart = [...cart, product];
        //if product doesn't exist in the cart, then set the quantity = 1
        //if exist update quantity by 1
        const exist = cart.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, product];
        }
        setCart(newCart);
        addToDb(product.id);
    };

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;