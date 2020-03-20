import React, { useCallback, useEffect, useState, useMemo } from 'react';
import SearchWrapper from './SearchWrapper';
import Input from '../../shared-components/input/InputWrapper';
import ButtonWrapper from '../../shared-components/button/ButtonWrapper';
import SwitchersButtons from '../../shared-components/switchers-buttons/SwitchersButtons';
import { setSearchParams, loadMovies } from '../../redux/rootActions';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery, getNavUrl } from '../../constants/constants';

const SearchContainer = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const query = useQuery(location.search);
  const isActive = (val: string): boolean => val === query.get('searchBy');

  const searchButtonsParams = useMemo(
    () => [
      { label: 'Title', active: isActive('title'), buttonValue: 'title' },
      { label: 'Genre', active: isActive('genre'), buttonValue: 'genre' },
    ],
    [],
  );

  const [inputValue, updateValue] = useState(query.get('search') || '');

  const switcherBtnClick = useCallback(
    (buttonValue: string) => {
      props.setSearchParams({ searchBy: buttonValue });
    },
    [props.searchParams.searchBy],
  );

  const onInputChange = useCallback(
    (event: any) => {
      props.setSearchParams({ search: event.target.value });
      updateValue(event.target.value);
    },
    [inputValue],
  );

  const searchBtnClick = useCallback(() => {
    history.push({
      pathname: '/search',
      search: getNavUrl(props.searchParams),
    });
  }, [props.searchParams]);

  return (
    <SearchWrapper>
      <div className="search-container">
        <h1 className="search-title">FIND YOUR MOVIE</h1>
        <div>
          <Input
            onChange={onInputChange}
            value={inputValue}
          ></Input>
          <ButtonWrapper onClick={searchBtnClick}>SEARCH</ButtonWrapper>
          <SwitchersButtons
            switchersTitle={'SEARCH BY'}
            click={switcherBtnClick}
            activeBtnValue={props.searchParams.searchBy}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
