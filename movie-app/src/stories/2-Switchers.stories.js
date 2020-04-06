import React from 'react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import SwitchersButtons from '../shared-components/switchers-buttons/SwitchersButtons';

export default {
  title: 'SwitchersButtons',
  component: SwitchersButtons,
  decorators: [withInfo],
  parameters: {
    info: {
      text: `
    description or documentation about my component, supports markdown
 
    ~~~js
    <SwitchersButtons>Click Here</SwitchersButtons>
    ~~~
  `,
    },
  },
};

const sortButtons = [
  {
    label: 'Release Date',
    active: true,
    buttonValue: 'release_date',
  },
  {
    label: 'Rating',
    active: false,
    buttonValue: 'vote_count',
  },
];

export const Switchers = () => (
  <SwitchersButtons
    switchersTitle="Awesome Switchers "
    searchButtonsParams={sortButtons}
    click={action('active')}
  />
);

// searchButtonsParams: any[];
//   click: (buttonValue: string) => void;
//   switchersTitle: string;
//   activeBtnValue?: string;
