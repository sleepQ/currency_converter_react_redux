import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store'

import Main from './components/Main';
import List from './containers/List';
import NotFound from './components/NotFound';

const history = syncHistoryWithStore(browserHistory, store);

render(<Provider store={store}>
    <Router history={history}>
        <Route exact path='/' component={Main}></Route>
        <Route path='/list' component={List}></Route>
        <Route path='*' component={NotFound}></Route>
    </Router>
</Provider>
    , document.getElementById('root'));