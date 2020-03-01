import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import SwitchersButtons from './SwitchersButtons';
import SwitchersButtonWrapper from './SwitchersButtonWrapper';

const buttons = [
  {
    label: 'test1',
    active: false,
  },
  {
    label: 'test2',
    active: true,
  },
];

describe('SwitchersButtons component', () => {
  let component: any;

  beforeEach(() => {
    component = mount(<SwitchersButtons searchButtonsParams={buttons} />);
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
