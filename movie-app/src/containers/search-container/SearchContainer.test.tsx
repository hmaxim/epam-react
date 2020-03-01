import 'jsdom-global/register';
import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import SearchContainer from './SearchContainer';
import SearchWrapper from './SearchWrapper';

describe('SearchContainer', () => {
  let component: any;

  beforeEach(() => {
    component = render(<SearchContainer />);
  });

  test('to be render', () => {
      expect(component.find(SearchWrapper)).toMatchSnapshot()
  });
});
