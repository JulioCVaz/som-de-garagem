import React, {Component} from 'react';
import Login from './components/Login';
import Register from './components/Register';
import {isAuthenticated} from './services/auth.js';
import Home from './Home';
import Landing from './components/Landing';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import MessageConfirme from './components/MessageConfirme';
import UploadMusicas from './components/UploadMusicas';

// animate : https://hackernoon.com/animated-page-transitions-with-react-router-4-reacttransitiongroup-and-animated-1ca17bd97a1a

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
            <Route path="/mensagem-confirmacao" component={MessageConfirme} />
            <Route path="/sdg/upload" component={UploadMusicas}/>
            <PrivateRoute path="/sdg" component={Home}/>
            <Route path="/landing" component={Landing}/>
            <Route path="*" component={() => <h1>Página não encontrada</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;