import React, { useCallback, useState, useEffect } from 'react';
import ListHeaderWrapper from './components/ListHeaderWrapper';
import ListHeaderTitle from './components/ListHeaderTitle';
import ListHeaderSwitchersContainer from './components/ListHeaderSwitchersContainer';
import SwitchersButtons from '../../shared-components/switchers-buttons/SwitchersButtons';
import { setSearchParams } from '../../redux/rootActions';
import { connect } from 'react-redux';
import { useQuery, getNavUrl } from '../../constants/constants';
import { useHistory, useLocation } from 'react-router';

const ListHeaderContainer = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const query = useQuery(location.search);
  const isActive = (val: string): boolean => val === query.get('sortBy');

  const sortButtons = [
    {
      label: 'Release Date',
      active: isActive('release_date'),
      buttonValue: 'release_date',
    },
    {
      label: 'Rating',
      active: isActive('vote_count'),
      buttonValue: 'vote_count',
    },
  ];

  useEffect(() => {
    if (
      query.get('sortBy') &&
      props.searchParams.sortBy !== query.get('sortBy') &&
      !history.location.pathname.includes('film')
    ) {
      history.push({
        pathname: '/search',
        search: getNavUrl(props.searchParams),
      });
    }
  }, [props.searchParams.sortBy]);

  const callback = useCallback((buttonValue: string) => {
    props.setSearchParams({ sortBy: buttonValue });
  }, []);

  return (
    <ListHeaderWrapper>
      <ListHeaderTitle>{props.listHeaderTitle}</ListHeaderTitle>
      <ListHeaderSwitchersContainer>
        {history.location.pathname.includes('search') ? (
          <SwitchersButtons
            switchersTitle={'SORT BY'}
            click={callback}
            activeBtnValue={props.searchParams.sortBy}
            searchButtonsParams={sortButtons}
          ></SwitchersButtons>
        ) : null}
      </ListHeaderSwitchersContainer>
    </ListHeaderWrapper>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListHeaderContainer);
