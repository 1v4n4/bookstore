import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Bookstore from './components/Bookstore';
import store from './reducers/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Bookstore />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
