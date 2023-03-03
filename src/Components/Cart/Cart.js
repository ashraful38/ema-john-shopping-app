import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props;

    console.log(cart);
    
    let total = 0;
    for(const product of cart){
        total= total + product.price;
    };

    return (
        <div className='Cart'>
            <h3 style={{textAlign:'center'}}>Order Summary</h3>
            <p>selected items:{cart.length}</p>
            <p>Total Price:{total}</p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
            <h4>Grand Total:</h4>
        </div>
    );
};

export default Cart;