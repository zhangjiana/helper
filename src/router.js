/**
 * Created by Administrator on 2017/11/9.
 */
import React, {Component} from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import {
    App,
    Counter,
    Welcome,
    Calculator,
    SearchBar,
    Login,
    NotFound,
    Index
} from 'views/index';

// need Login
const requireLogin = (nextState, replace, cb) => {
    console.log(nextState);
    console.log(replace);
    console.log(cb);
    cb();
    /* function checkAuth() {
     const {auth: {user}} = store.getState();
     if (!user) {
     // oops, not logged in, so can't be here!
     replace('/');
     }
     cb();
     }

     if (!isAuthLoaded(store.getState())) {
     store.dispatch(loadAuth()).then(checkAuth);
     } else {
     checkAuth();
     } */
};

export default class ROOT extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Router history={browserHistory}>
                    <Route path="/" component={ App }>
                        { /* Home (main) route */ }
                        <IndexRoute component={ Index }/>

                        { /* Routes requiring login */ }
                        <Route onEnter={requireLogin}>
                            <Route path="welcome" component={Welcome}/>
                        </Route>
                        <Route path="index" component={ Index }>
                            <Route path="counter" component={ Counter }></Route>
                        </Route>
                        { /* Routes */ }

                        <Route path="calculator" component={ Calculator }></Route>
                        <Route path="searchBar/:id" component={ SearchBar }></Route>
                        <Route onEnter={requireLogin} path="login" component={ Login }></Route>

                        { /* Catch all route */ }
                        <Route path="*" component={NotFound}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}