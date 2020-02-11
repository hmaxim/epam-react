import React from "react";
import HeaderWrapper from "./HeaderWrapper";

const headerContainer = () => {
  return (
    <HeaderWrapper>
      <div className="app-title">neflixRoulette</div>
      {/* <div className="search-icon" onClick={() => console.log('navigated to search')}>
        Go to search
      </div> */}
    </HeaderWrapper>
  );
};

export default headerContainer;
