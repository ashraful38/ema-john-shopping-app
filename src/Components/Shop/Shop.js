import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb , getStoredCart} from '../../utilities/fakedb.js'

const Shop = () => {
    const [products , setProducts] = useState([]);

    const [cart , setCart] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    // useEffect( () =>{
    //     console.log('loacal storage first line',products);
    //     const storeCart = getStoredCart();
    //     const saveCart = [];
    //     //console.log(storeCart);
    //     for(const id in storeCart){
    //         const addedProduct = products.find(product => product.id === id);
    //         if(addedProduct){
    //             const quantity = storeCart[id];
    //             addedProduct.quantity=quantity;
    //             saveCart.push(addedProduct);
    //         }     
    //     }
    //     setCart(saveCart);
    //     // console.log('local storage finish');
    // },[products])

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
        console.log(selectedProduct);
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

       // cart.push(product);
      
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;