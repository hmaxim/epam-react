import React from "react";
import ListHeaderWrapper from "./ListHeaderWrapper";
import SwitchersButtons from "../../components/switchers-buttons/SwitchersButtons";

const sortButtons = [
  { label: "Release Date", active: true, buttonValue: "date" },
  { label: "Rating", active: false, buttonValue: "ratio" }
];

const ListHeaderContainer = (props: any) => {
  return (
    <ListHeaderWrapper>
      <div>{props.listHeaderTitle}</div>
      <div className='switchers-container'>
        <SwitchersButtons
          switchersTitle={"SORT BY"}
          searchButtonsParams={sortButtons}
        ></SwitchersButtons>
      </div>
    </ListHeaderWrapper>
  );
};

export default ListHeaderContainer;
