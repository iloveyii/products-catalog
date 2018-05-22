import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';

// # 01
/**
 * A reducer is a function that operates on the state object and then returns it
 * Please note that this function is also called during initialization of store - so any code
 * without if stmt will be executed multiple times - internal operation of store !
 * @param state - this is a misleading name - here it is not the full state but just corresponding key value
 * @param action
 * @returns {Array} - every return value is assigned to the corresponding key in allReducers
 */
import ProductsReducer from './Reducers/ProductsReducer';
import UserReducer from './Reducers/UserReducer';
/**
 * Action is an object with format of type and payload
 * @type {{type: string, payload: {newState: string}}}
 */
const allReducers = combineReducers({
    products: ProductsReducer,
    user: UserReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk, logger),
    window.devToolsExtension && window.devToolsExtension()
);

let products = [
    {
        i: 0,
        name: 'iPad',
        price: 75
    },
    {
        i: 1,
        name: 'iPhone',
        price: 85
    },
    {
        i: 2,
        name: 'MacBook Pro',
        price: 550
    }
];

if(localStorage.products) {
    products = JSON.parse( localStorage.getItem('products') );
} else {
    localStorage.setItem('products', JSON.stringify(products));
}

// # 02
/**
 * Create store with allReducers which are all called one by one when there is dispatch
 * Second param is initial state of store
 * Last param is for redux debug in chrome extension
 * @type {Store<S&StateExt>&Ext}
 */
const store = createStore(allReducers,
    {
        products: [],
        user: 'Ali'
    },
    allStoreEnhancers
);

/**
 * You can see the status of store - but only data and not reducers
 */
// console.log(store.getState());

// # 03
/**
 * Dispatch action to store
 */
// store.dispatch(UserUpdateAction);

/**
 * Interestingly a newline before Provider, App causes errors
 */
ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
