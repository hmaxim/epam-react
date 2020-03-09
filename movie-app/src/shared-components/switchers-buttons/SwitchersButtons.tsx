import React, { useState, useCallback } from 'react';
import SwitchersButtonWrapper from './SwitchersButtonWrapper';


const SwitchersButtons = (props: any) => {
  const [buttons, updateSearchButtons] = useState(props.searchButtonsParams);
  //  console.log(props);


  const activateButton = useCallback(
    (index: number) => {
      const arr = buttons.map((item: any, i: number) => {
        i === index ? (item.active = true) : (item.active = false);
        return item;
      });

      if(props.click){
        props.click(arr[index].buttonValue);
      }
      
      updateSearchButtons(arr);
    },
    [buttons],
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
