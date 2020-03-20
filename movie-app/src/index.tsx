import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/app/App';
import { Provider } from 'react-redux';
import configureStore from './redux/rootStore';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={configureStore().store}>
    {/* <PersistGate loading={null} persistor={configureStore().persistor}> */}
      <Router>
        <Route path="/" component={App}></Route>
      </Router>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root'),
);
