import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/app/App';
import { Provider } from 'react-redux';
import configureStore from './redux/rootStore';


ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
