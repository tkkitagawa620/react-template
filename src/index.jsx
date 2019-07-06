import React from 'react';;
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
import App from './components/App';

const store = createStore(rootReducer);

console.log('store.getState()', store.getState())
store.subscribe(() => console.log('store.getState()', store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);