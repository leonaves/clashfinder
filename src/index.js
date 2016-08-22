import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import appReducer from './reducers/index'

import './index.css';

//noinspection JSUnresolvedVariable,JSUnresolvedFunction
let store = createStore(appReducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
