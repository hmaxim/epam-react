import 'jsdom-global/register';
import React, { Component } from 'react';
import { render } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import SearchContainer from './SearchContainer';
import toJson from 'enzyme-to-json';

describe('SearchContainer', () => {
  let component: any;

  beforeEach(() => {
    component = render(<SearchContainer />);
  });

  test('to be render', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
