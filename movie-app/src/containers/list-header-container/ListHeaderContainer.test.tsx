import 'jsdom-global/register';
import React from 'react';
import { render } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import ListHeaderContainer from './ListHeaderContainer';
import toJson from 'enzyme-to-json';

describe('ListHeaderContainer component', () => {
  let component: any;

  beforeEach(() => {
    component = render(<ListHeaderContainer />);
  });

  test('should be rendered', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
