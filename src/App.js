import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import UserProfile from './components/Profile/UserProfile';
import AuthContext from './store/auth-context';
//import PostList from './SampleBlogs/blogs/PostList';
import Customer from './Customer/Customer';

const App = () => {
    const authCtx = useContext(AuthContext);
    //console.log("In App.js, authCtx = ", authCtx);
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                {!authCtx.isLoggedIn && (                    
                    <Route path='/auth'>
                        <AuthPage />
                    </Route>
                )}
                {/* {!authCtx.isLoggedIn && (
                    <Route path='/sampleblogs'>
                        <PostList />
                    </Route>
                )} */}
                {authCtx.isLoggedIn && (
                    <Route path='/customer'>
                        <Customer />
                    </Route>
                )}
                {authCtx.isLoggedIn && (
                    <Route path='/profile'>
                        <UserProfile />
                    </Route>
                )}
                <Route path='*'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
