import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
