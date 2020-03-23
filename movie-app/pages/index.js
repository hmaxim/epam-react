// const register = require('@babel/register').default;
// register({ extensions: ['.ts','.tsx', '.js', '.jsx'] });
// require('./express.js');

import React from 'react';
import Link from 'next/link';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from '../src/redux/rootStore';
import App from '../src/containers/app/App';
import withRedux from 'next-redux-wrapper';
import { NextPage } from 'next';
import { StaticRouter } from 'react-router';

const myApp = props => <App {...props} />;

myApp.getInitialProps = async ({ component, ctx }) => {
  console.log(component);
  const pageProps = component.getInitialProps ? await component.getInitialProps(ctx) : {};

  //Anything returned here can be access by the client
  return { pageProps: pageProps };
};

// class MyApp extends App {
//   static async getInitialProps({ component, ctx }) {
//     console.log(component);
//     const pageProps = component.getInitialProps ? await component.getInitialProps(ctx) : {};

//     //Anything returned here can be access by the client
//     return { pageProps: pageProps };
//   }

//   render() {
//     //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
//     const { Component, pageProps, store } = this.props;

//     return (
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     );
//   }
// }

const makeStore = () => createStore(reduxThunkReducer);

const myAppNew = withRedux(makeStore, state => ({ ...state }))(myApp);

export default myAppNew;
