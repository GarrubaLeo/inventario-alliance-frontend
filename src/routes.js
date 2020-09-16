import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth'

import Login from './pages/login';
import Computers from './pages/computers'
import Register from './pages/register'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        }
    />
);

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/computers/main" component={Computers} />
                <PrivateRoute path="/computers/register/new" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}