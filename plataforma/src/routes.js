import React, {Component} from 'react';
import Login from './components/Login';
import Register from './components/Register';
import {isAuthenticated} from './services/auth.js';
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
            <Route path="/cadastro" component={Register} />
            <PrivateRoute path="/sdg" component={Home}/>
            <Route path="*" component={() => <h1>Página não encontrada</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;