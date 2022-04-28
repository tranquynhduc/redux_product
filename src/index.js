import React from 'react';
import ReactDOM from 'react-dom';
 import './bootstrap.min.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Store } from './redux/Store';
import { Provider } from 'react-redux';


ReactDOM.render(
  // <Provider >
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);
