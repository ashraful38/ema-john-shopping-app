import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderReview = () => {
    //destructing korte hobe
    //cz 2ta return kora hoyese {products:products ,initialCart: initialCart};
    const {initialCart} = useLoaderData();

    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem =(id)=>{
       // console.log(id);
       const remaining = cart.filter(product=> product.id !== id);
       setCart(remaining);
       removeFromDb(id);
    }

    const clearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product =><ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2 style={{textAlign:'center'}}>No Items for review please shop <Link to='/'>Shop More</Link> </h2>
                }

                
                    
                

            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'>
                        <button className='clear-cart'>Shipping</button>
                    </Link>
                </Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;