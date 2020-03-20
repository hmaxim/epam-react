import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import SwitchersButtons from './SwitchersButtons';
import SwitchersButtonWrapper from './SwitchersButtonWrapper';

const buttons = [
  { label: 'Title', active: false, buttonValue: 'title' },
  { label: 'Genre', active: false, buttonValue: 'genre' },
];

describe('SwitchersButtons component', () => {
  let component: any;

  beforeEach(() => {
    component = mount(
      <SwitchersButtons
        searchButtonsParams={buttons}
        click={() => null}
        switchersTitle="test"
      />,
    );
  });

  test('should call callBack and activate first button', () => {
    const notActiveButton = component.find('button');
    notActiveButton.first().simulate('click');
    expect(buttons[0].active).toBeTruthy();
  });

  test('should be rendered', () => {
    expect(component.find(SwitchersButtonWrapper)).toMatchSnapshot();
  });
});
