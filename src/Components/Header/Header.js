import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    const navigate = useNavigate()
    const {user , logOut}=useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then(()=>{
            navigate('/login');
        })

    }
    return (
        <nav className='header'>
            
            <img src={logo} alt="logo" />
            <span style={{color:'white'}}>{user?.email}</span>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="/manageInventory">Mange Inventory</Link>
                {
                    user?.uid ? 
                    <button className='btn-logOut' onClick={handleLogout}>Log Out</button>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signUp">SignUp</Link>
                    </>
                }
              

            </div>
        </nav>
    );
};

export default Header;