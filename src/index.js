import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'react-fastclick';

import App from './App';
import appReducer from './reducers/index';
import { saveState } from './localStorage';

import './index.css';

//noinspection JSUnresolvedVariable,JSUnresolvedFunction
let store = createStore(appReducer, window.devToolsExtension && window.devToolsExtension());

store.subscribe(() => {
  saveState({
    hiddenStages: store.getState().hiddenStages,
    favouriteSets: store.getState().favouriteSets
  });
});

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
