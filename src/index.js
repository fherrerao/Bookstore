import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import { getBook } from './redux/books/books';
// import 'bootstrap/dist/css/bootstrap.min.css';

store.dispatch(getBook);

ReactDOM.render(
  <Provider store={store}>
    <App key={1} />
  </Provider>,
  document.getElementById('root'),
);
