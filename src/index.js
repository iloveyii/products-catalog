import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';

// # 01
/**
 * A reducer is a function that operates on the state object and then returns it
 * Please note that this function is also called during initialization of store - so any code
 * without if stmt will be executed multiple times - internal operation of store !
 * @param state - this is a misleading name - here it is not the full state but just corresponding key value
 * @param action
 * @returns {Array} - every return value is assigned to the corresponding key in allReducers
 */
const productsReducer = (state=[], action) => {
    return state;
};
const userReducer = (state = '', action) => {
    if(action.type === 'updateUser') {
        console.log('inside reducer user: ' , state);
        return action.payload.user;
    }
    return state;
};
const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
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

/**
 * Action is an object with format of type and payload
 * @type {{type: string, payload: {newState: string}}}
 */
const updateUserAction = {
    type: 'updateUser',
    payload: {
        user: 'Alex Kan'
    }
};

// # 03
/**
 * Dispatch action to store
 */
store.dispatch(updateUserAction);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
