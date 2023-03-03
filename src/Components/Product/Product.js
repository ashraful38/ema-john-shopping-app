import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';
//import addcart from '../../images/cart-plus.png'

const Product = (props) => {
    //console.log(props.product);
    const{handleAddToCart , product} = props;
    const { name, img, price, rating, seller }=product;

    //const { handleAddToCart} = props;


    return (
        <div className='product'>
            <img src={img} alt="img" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price:${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {rating} stars </small></p>

            </div>

            <button onClick={ () =>handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart </p>
                <FontAwesomeIcon className='add-cart' icon={faShoppingCart}></FontAwesomeIcon>
            </button>


        </div>
    );
};

export default Product;