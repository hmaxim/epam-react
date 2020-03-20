import React, { useState, useCallback, useEffect } from 'react';
import SwitchersButtonWrapper from './SwitchersButtonWrapper';

export interface ISwitchersButtons {
  searchButtonsParams: any[];
  click: (buttonValue: string) => void;
  switchersTitle: string;
  activeBtnValue?: string;
}

const SwitchersButtons = (props: ISwitchersButtons) => {
  const [buttons, updateSearchButtons] = useState(props.searchButtonsParams);

  const activateButton = useCallback(
    (index: number) => {
      const arr = buttons.map((item: any, i: number) => {
        i === index ? (item.active = true) : (item.active = false);
        return item;
      });

      if (props.click && props.activeBtnValue !== arr[index].buttonValue) {
        props.click(arr[index].buttonValue);
      }

      updateSearchButtons(arr);
    },
    [props.activeBtnValue],
  );

  return (
    <div className="search-buttons-container">
      <span>{props.switchersTitle}</span>
      {buttons.map((button: any, index: number) => {
        return (
          <SwitchersButtonWrapper
            onClick={() => {
              activateButton(index);
            }}
            key={button.label}
            id={button.label}
            active={button.active}
            firstElement={index === 0}
            lastElement={index === buttons.length - 1}
          >
            {button.label}
          </SwitchersButtonWrapper>
        );
      })}
    </div>
  );
};

export default SwitchersButtons;
