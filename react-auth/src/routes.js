import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={() => <h1>Olá</h1>} />
        </Switch>
    </BrowserRouter>
);
