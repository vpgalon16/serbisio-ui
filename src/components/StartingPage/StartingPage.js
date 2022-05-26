import React from 'react';
import classes from './StartingPage.module.css';
import {Link} from 'react-router-dom'

const StartingPage = () => {

    return (
        <div className={classes.starting}>
            <div>
                <button >Customer</button>   
                <button >Service Provider</button>          
            </div>        
            <div>
                <button >Cleaning Products</button>           
            </div>
            <div>
                <Link to='/auth'>
                <button type="button">Quick Booking</button>
                </Link>
            </div>            
        </div>
    );
};

export default StartingPage;