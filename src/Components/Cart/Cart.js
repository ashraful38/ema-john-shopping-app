import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart , clearCart , children } = props;

    //console.log(cart);

    let total = 0;
    let Shipping= 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        Shipping = Shipping+ product.shipping;
    };

    const tax =parseFloat((total * 0.1).toFixed(2)) ;
    const grandTotal = total + Shipping + tax; 

    return (
        <div className='Cart'>
            <h3 style={{ textAlign: 'center' }}>Order Summary</h3>
            <p>selected items:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${Shipping}</p>
            <p>Tax:${tax}</p>
            <h4>Grand Total:$ {grandTotal.toFixed(2)}</h4>
            <div className='btn-ctr'>
                <button className='clear-cart' onClick={clearCart}>Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                {children}
            </div>
           
        </div>
    );
};

export default Cart;