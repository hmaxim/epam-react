import React, { useCallback, useState, useEffect, useMemo } from 'react';
import ListHeaderWrapper from './components/ListHeaderWrapper';
import ListHeaderTitle from './components/ListHeaderTitle';
import ListHeaderSwitchersContainer from './components/ListHeaderSwitchersContainer';
import SwitchersButtons from '../../shared-components/switchers-buttons/SwitchersButtons';
import { setSearchParams } from '../../redux/rootActions';
import { connect } from 'react-redux';
import { useQuery, getNavUrl } from '../../constants/constants';
import { useHistory, useLocation } from 'react-router';
import { useRouter } from 'next/router';

const ListHeaderContainer = (props: any) => {
  const router = useRouter();

  const isActive = useCallback((val: string): boolean => val === router.query.sortBy, []);

  const sortButtons = useMemo(
    () => [
      {
        label: 'Release Date',
        active: isActive('release_date'),
        buttonValue: 'release_date'
      },
      {
        label: 'Rating',
        active: isActive('vote_count'),
        buttonValue: 'vote_count'
      }
    ],
    []
  );

  const navigate = useCallback(() => {
    const url = `/search${getNavUrl(props.searchParams)}`;
    router.push(url);
  }, [props.searchParams]);

  useEffect(() => {
    if (!router.pathname.includes('film')) {
      navigate();
    }
  }, [props.searchParams.sortBy]);

  const callback = useCallback((buttonValue: string) => {
    props.setSearchParams({ sortBy: buttonValue });
  }, []);

  return (
    <ListHeaderWrapper>
      <ListHeaderTitle>{props.listHeaderTitle}</ListHeaderTitle>
      <ListHeaderSwitchersContainer>
        {router.pathname.includes('search') ? (
          <SwitchersButtons
            switchersTitle={'SORT BY'}
            click={callback}
            activeBtnValue={props.searchParams.sortBy}
            searchButtonsParams={sortButtons}></SwitchersButtons>
        ) : null}
      </ListHeaderSwitchersContainer>
    </ListHeaderWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    searchParams: state.searchParams
  };
};
const mapDispatchToProps = {
  setSearchParams
};

export default connect(mapStateToProps, mapDispatchToProps)(ListHeaderContainer);
