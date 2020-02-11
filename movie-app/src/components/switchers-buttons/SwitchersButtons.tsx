import React, { useState } from "react";
import SwitchersButtonWrapper from "./SwitchersButtonWrapper";

const SwitchersButtons = (props: any) => {
  const [buttons, updateSearchButtons] = useState(props.searchButtonsParams);

  const activateButton = (index: number) => {
    const newArr = [...buttons];
    newArr.forEach((item, i) =>
      i === index ? (item.active = true) : (item.active = false)
    );
    updateSearchButtons(newArr);
  };

  return (
    <div className="search-buttons-container">
      <span>{props.switchersTitle}</span>
      {buttons.map((button: any, index: number) => {
        return (
          <SwitchersButtonWrapper
            onClick={() => activateButton(index)}
            key={index}
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
