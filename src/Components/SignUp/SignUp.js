import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState(null);

    const {createUser}=useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email= form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password , confirm);
         
        if(password.length < 6){
            setError('password should be 6 characters or more');
            return;
        }

        if(password !== confirm){
            setError('Your Password did not match');
            return;
        }

        createUser(email , password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            setError(error);
            form.reset();
            navigate('/login');
        })
        .catch(error =>console.error(error))


    }

    return (
        <div className='form-container signUp-container'>
            <h4 className='form-title'>SignUp</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"  required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm"  required />
                </div>
                <input className='btn-submit' type="submit" value="SignUP" />
            </form>
            <p style={{textAlign:'center'}}>Already Have an Account? <Link className='signUp-new' to='/login'>Login</Link> </p>
            <p className='text-error'>{error}</p>

     
        </div>
    );
};

export default SignUp;