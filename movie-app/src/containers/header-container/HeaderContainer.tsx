import React from "react";
import HeaderWrapper from "./components/HeaderWrapper";
import AppTitle from './components/AppTitle';
import SearchIcon from './components/SearchIcon';

const headerContainer = () => {
  return (
    <HeaderWrapper>

      <AppTitle>
      neflixRoulette
      </AppTitle>

     <SearchIcon/>

    </HeaderWrapper>
  );
};

export default headerContainer;
