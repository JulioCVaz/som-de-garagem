import React, {Component} from 'react';
import Login from './components/Login';
import {isAuthenticated} from './auth';
import Home from './Home';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={ props => (
        isAuthenticated() ? (
            <Component {...props}/>
        ) : 
        (
            <Redirect to={{ pathname: '/', state:{from: props.location}}}/>
        )
    )}/>
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/sdg" component={Home}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;