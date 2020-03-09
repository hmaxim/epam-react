import React, { useCallback } from 'react';
import SearchWrapper from './SearchWrapper';
import Input from '../../shared-components/input/InputWrapper';
import ButtonWrapper from '../../shared-components/button/ButtonWrapper';
import SwitchersButtons from '../../shared-components/switchers-buttons/SwitchersButtons';
import { setSearchParams, loadMovies } from '../../redux/rootActions';
import { connect } from 'react-redux';

const searchButtonsParams = [
  { label: 'Title', active: true, buttonValue: 'title' },
  { label: 'Genre', active: false, buttonValue: 'genre' },
];

const SearchContainer = (props: any) => {
  const switcherBtnClick = useCallback((buttonValue: string) => {
    props.setSearchParams({ searchBy: buttonValue });
  }, []);

  const onInputChange = useCallback((inputValue: string) => {
    props.setSearchParams({ searchText: inputValue });
  }, []);

  const searchBtnClick = useCallback(() => {
    props.loadMovies();
  }, []);

  return (
    <SearchWrapper>
      <div className="search-container">
        <h1 className="search-title">FIND YOUR MOVIE</h1>
        <div>
          <Input onChange={event => onInputChange(event.target.value)}></Input>
          <ButtonWrapper onClick={searchBtnClick }>SEARCH</ButtonWrapper>
          <SwitchersButtons
            switchersTitle={'SEARCH BY'}
            click={switcherBtnClick}
            searchButtonsParams={searchButtonsParams}
          ></SwitchersButtons>
        </div>
      </div>
    </SearchWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    searchParams: state.searchParams,
  };
};
const mapDispatchToProps = {
  setSearchParams,
  loadMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
