import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { fetchTodos } from './actions';
import reducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store
  .dispatch(fetchTodos())
  .then(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
