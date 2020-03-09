import React, { useCallback } from 'react';
import ListHeaderWrapper from './components/ListHeaderWrapper';
import ListHeaderTitle from './components/ListHeaderTitle';
import ListHeaderSwitchersContainer from './components/ListHeaderSwitchersContainer';
import SwitchersButtons from '../../shared-components/switchers-buttons/SwitchersButtons';
import configureStore from '../../redux/rootStore';
import { loadMovies } from '../../redux/rootActions';

const sortButtons = [
  { label: 'Release Date', active: true, buttonValue: 'release_date' },
  { label: 'Rating', active: false, buttonValue: 'vote_count' },
];

const ListHeaderContainer = (props: any) => {
  const callback = useCallback((buttonValue: string) => {
    configureStore.dispatch(loadMovies(buttonValue));
  }, []);

  return (
    <ListHeaderWrapper>
      <ListHeaderTitle>{props.listHeaderTitle}</ListHeaderTitle>
      <ListHeaderSwitchersContainer>
        <SwitchersButtons
          switchersTitle={'SORT BY'}
          click={callback}
          searchButtonsParams={sortButtons}
        ></SwitchersButtons>
      </ListHeaderSwitchersContainer>
    </ListHeaderWrapper>
  );
};

export default ListHeaderContainer;
