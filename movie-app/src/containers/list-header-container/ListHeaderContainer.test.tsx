import 'jsdom-global/register';
import React from 'react';
import { render } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import ListHeaderContainer from './ListHeaderContainer';
import ListHeaderWrapper from './components/ListHeaderWrapper';

describe('ListHeaderContainer component', () => {
  let component: any;

  beforeEach(() => {
    component = render(<ListHeaderContainer />);
  });

  test('should be rendered', () => {
    expect(component.find(ListHeaderWrapper)).toMatchSnapshot();
  });
});
