import React from 'react';
import classes from './StartingPage.module.css';
import {Link} from 'react-router-dom'

const StartingPage = () => {

    return (
        <div className={classes.starting}>
            <div>
                <img src="/images/heading.png" alt="serbisio" />          
            </div>            
            <div>
                <button ><img src="/images/customer.png" alt="customer" /></button> 
                <button ><img src="/images/serviceprovider.png" alt="service provider" /></button>   
            </div>        
            <div>
                <Link to='/auth'>
                <button type="button"><img src="/images/signup-gray.png" alt="new sign up" /></button>
                </Link>
            </div>            
        </div>
    );
};

export default StartingPage;