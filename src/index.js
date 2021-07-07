import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/index';
import { Provider } from 'react-redux';
import store from './redux/index';

import 'font-awesome/css/font-awesome.min.css';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
