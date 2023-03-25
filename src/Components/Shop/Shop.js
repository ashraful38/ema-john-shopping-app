import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb , deleteShoppingCart, getStoredCart} from '../../utilities/fakedb.js'
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();

    const [cart , setCart] = useState([]);

    const clearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }


    useEffect(()=>{
        const storeCart = getStoredCart();
        const saveCart = [];

        for(const id in storeCart){
            const addedProduct = products.find(product =>product.id===id);
            if(addedProduct){
                const quantity = storeCart[id];
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);

    } ,[products])

    const handleAddToCart = (selectedProduct) =>{
        //console.log(selectedProduct);
        let newCart =[];

        const exists = cart.find(product => product.id=== selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart=[...rest , exists];
        }

       setCart(newCart);
       addToDb(selectedProduct.id);
       
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product =>
                        <Product
                         key={product.id}
                         product={product}
                         handleAddToCart={handleAddToCart}
                        
                        ></Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart}  cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;