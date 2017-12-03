require('react-hot-loader/patch');
require('babel-polyfill');

import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';
import React from 'react';

import Home from 'Views/Home/home';
import About from 'Views/About/About';
import Work from 'Views/Work/Work';
import Contact from 'Views/Contact/Contact';
import NoMatch from 'Views/NoMatch/404';

import {history} from './router';

export default () => {

    return (
        <Router history={ history }>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/work" component={Work}/>
                <Route component={NoMatch}/>
            </Switch>
		</Router>
    )
}