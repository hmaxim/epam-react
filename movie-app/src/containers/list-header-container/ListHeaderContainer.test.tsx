import 'jsdom-global/register';
import React from 'react';
import { render } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import ListHeaderContainer from './ListHeaderContainer';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialState } from '../../redux/rootReducer';

describe('ListHeaderContainer component', () => {
  let component: any;
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);

    component = render(
      <Provider store={store}>
        <ListHeaderContainer />
      </Provider>,
    );
  });

  test('should be rendered', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
