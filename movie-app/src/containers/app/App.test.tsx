import 'jsdom-global/register';
import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import App from './App';

describe('App component', () => {
  let component: any;

  beforeEach(() => {
    component = render(<App />);
  });

  test('to be render', () => {
    expect(component.find(App)).toMatchSnapshot();
  });
});
