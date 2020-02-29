import React from "react";
import ListHeaderWrapper from "./components/ListHeaderWrapper";
import ListHeaderTitle from "./components/ListHeaderTitle";
import ListHeaderSwitchersContainer from "./components/ListHeaderSwitchersContainer";
import SwitchersButtons from "../../shared-components/switchers-buttons/SwitchersButtons";

const sortButtons = [
  { label: "Release Date", active: true, buttonValue: "date" },
  { label: "Rating", active: false, buttonValue: "ratio" }
];

const ListHeaderContainer = (props: any) => {
  return (
    <ListHeaderWrapper>
      <ListHeaderTitle>{props.listHeaderTitle}</ListHeaderTitle>
      <ListHeaderSwitchersContainer>
        <SwitchersButtons
          switchersTitle={"SORT BY"}
          searchButtonsParams={sortButtons}
        ></SwitchersButtons>
      </ListHeaderSwitchersContainer>
    </ListHeaderWrapper>
  );
};

export default ListHeaderContainer;
