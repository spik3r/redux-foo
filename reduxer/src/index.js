import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import userReducer from "./reducers/userReducer";
import productsReducer from "./reducers/productReducer";


const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer
});

const store = createStore(
    rootReducer,
    {
        products: [{name: 'iPhone'}],
        user: 'Steve'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


console.log(store.getState());


const updateUserAction = {
    type: 'UPDATE_USER',
    payload: {
        user: 'John'
    }
};

store.dispatch(updateUserAction);

ReactDOM.render(
    <Provider store={store}>
        <App aRandomProp="whatever"/>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
