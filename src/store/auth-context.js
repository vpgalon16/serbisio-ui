import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer; 

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    email: '',
    login: (token) => {},
    logout: () => {}
})

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjustedExpirationTime = new Date(expirationTime).getTime();
    const remainingTime = adjustedExpirationTime - currentTime;

    return remainingTime;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('serbisio_token');
    const storedExpirationDate = localStorage.getItem('expiration_time');
    const email = localStorage.getItem('email');
    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 60000) {
        localStorage.removeItem('serbisio_token');
        localStorage.removeItem('expiration_time');
        localStorage.removeItem('email');
        return null;
    }

    return {
        token: storedToken,
        email: email,
        remainingTime: remainingTime
    };
};

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();
    let loginEmail;
    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token;
        loginEmail = tokenData.email;
    }
    const [ token, setToken ] = useState(initialToken);
    const [ email, setEmail ] = useState(loginEmail);
    
    const userIsLoggedIn = !!token;

    //const [ isLoggedIn, setIsLoggedIn ] = useState(userIsLoggedIn);

    const logoutHandler = useCallback(() => {
        setToken(null);
        setEmail('');
        //setIsLoggedIn(false);
        localStorage.removeItem('serbisio_token');
        localStorage.removeItem('expiration_time');
        localStorage.removeItem('email');

        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (token, expirationTime, email) => {
        setToken(token);
        localStorage.setItem('serbisio_token', token);
        localStorage.setItem('expiration_time', expirationTime);
        localStorage.setItem('email', email);

        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime);

        //setTimeout(logoutHandler, 3000);
    }

    useEffect(() => {
        if (tokenData) {
            //console.log(tokenData.remainingTime);
            logoutTimer = setTimeout(logoutHandler, tokenData.remainingTime);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        email: email,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};


export default AuthContext;