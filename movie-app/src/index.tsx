import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/app/App';
import { Provider } from 'react-redux';
import configureStore from './redux/rootStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={configureStore}>
    <Router>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
