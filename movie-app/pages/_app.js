import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from '../src/redux/rootStore';
import withRedux from 'next-redux-wrapper';
import './styles.css';
import ErrorBoundary from '../src/containers/error-boundary/ErrorBoundary';

// const myApp = props => {
//   const { Component, pageProps, store } = props;
//   console.log(pageProps)
//   return (
//     <Container>
//       <Provider store={store}>
//         <ErrorBoundary>
//           <Component {...pageProps} />
//         </ErrorBoundary>
//       </Provider>
//     </Container>
//   );
// };

// myApp.getInitialProps = async ({ component, ctx }) => {
//   const pageProps = component.getInitialProps ? await component.getInitialProps(ctx) : {};
//   return { pageProps: pageProps };
// };

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Provider>
      </Container>
    );
  }
}

const makeStore = () => configureStore().store;

export default withRedux(makeStore)(MyApp);

// const myAppNew = withRedux(makeStore, state => ({ ...state }))(myApp);

// export default myAppNew;
