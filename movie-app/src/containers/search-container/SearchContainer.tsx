import React, { useState } from "react";
import SearchWrapper from "./SearchWrapper";
import Input from "../../components/input/InputWrapper";
import ButtonWrapper from "../../components/button/ButtonWrapper";
import SwitchersButtons from "../../components/switchers-buttons/SwitchersButtons";

const searchButtonsParams = [
  { label: "Title", active: true, buttonValue: "title" },
  { label: "Genre", active: false, buttonValue: "genre" }
];

const SearchContainer = () => {
  return (
    <SearchWrapper>
      <div className="search-container">
        <h1 className="search-title">FIND YOUR MOVIE</h1>
        <div>
          <Input></Input>
          <ButtonWrapper>SEARCH</ButtonWrapper>
          <SwitchersButtons switchersTitle={'SEARCH BY'}
          searchButtonsParams={searchButtonsParams}></SwitchersButtons>
        </div>
      </div>
    </SearchWrapper>
  );
};

export default SearchContainer;
