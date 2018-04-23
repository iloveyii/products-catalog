import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

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
import { UserUpdateAction } from './Actions/UserActions';

const allReducers = combineReducers({
    products: ProductsReducer,
    user: UserReducer
});


// # 02
/**
 * Create store with allReducers which are all called one by one when there is dispatch
 * Second param is initial state of store
 * Last param is for redux debug in chrome extension
 * @type {Store<S&StateExt>&Ext}
 */
const store = createStore(allReducers,
    {
        products: [{name: 'iPhone', price: 45}, {name: 'HP ProBook', price: 430}],
        user: 'Ali'
    },
    window.devToolsExtension && window.devToolsExtension()
);
/**
 * You can see the status of store - but only data and not reducers
 */
console.log(store.getState());

// # 03
/**
 * Dispatch action to store
 */
// store.dispatch(UserUpdateAction);
console.log(store.getState());

/**
 * Interestingly a newline before Provider, App causes errors
 */
ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
