import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import configureStore from '../src/redux/rootStore';
import withRedux from 'next-redux-wrapper';
import ErrorBoundary from '../src/containers/error-boundary/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import './styles.css';

const theme = {
  primary: 'green'
};

const StyledContainer = styled.div`
  .movie-poster {
    width: 100%;
    height: 450px;
    margin-bottom: 10px;
  }

  img {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
`;

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
          <ThemeProvider theme={theme}>
            <StyledContainer>
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
            </StyledContainer>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

const makeStore = () => configureStore().store;

export default withRedux(makeStore)(MyApp);

// const myAppNew = withRedux(makeStore, state => ({ ...state }))(myApp);

// export default myAppNew;
