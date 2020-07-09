import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import Computers from './pages/computers'
import Register from './pages/register'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/computers/main" component={Computers} />
                <Route path="/computers/register/new" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}