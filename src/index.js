import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';

import store from './store';

import App from './App';
import Main from './components/Main';
import List from './containers/List';
import NotFound from './components/NotFound';

export const history = createBrowserHistory();

render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <App>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/list' component={List} />
                <Route path='*' component={NotFound} />
            </Switch>
        </App>
    </ConnectedRouter>
</Provider>
    , document.getElementById('root'));