import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import { getBook } from './redux/books/books';

store.dispatch(getBook);

ReactDOM.render(
  <Provider store={store} key={1}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
