import React, { useEffect, useState } from 'react';
import AppWrapper from './AppWrapper';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import HeaderContainer from '../header-container/HeaderContainer';
import ListHeaderContainer from '../list-header-container/ListHeaderContainer';
import MoviesListWrapper from '../movies-list-container/MoviesListWrapper';
import MovieItem from '../../shared-components/movie-item/MovieItem';
import MovieDetailsContainer from '../movie-details-container/MovieDetailsContainer';
import SearchContainer from '../search-container/SearchContainer';
import EmptyState from '../../shared-components/empty-state/EmptyState';
import { IMovie } from '../../interfaces/IMovie';
import { connect } from 'react-redux';
import { loadMovies } from '../../redux/rootActions';
import configureStore from '../../redux/rootStore';

const App = (props: any) => {
  useEffect(() => {
    if (!props.movies.length) {
      props.loadMovies();
    }
  }, []);

  const renderMovies = (movies: IMovie[], loading: boolean) => {
    if (!loading) {
      if (movies.length) {
        return movies.map((item: IMovie) => {
          return (
            <MovieItem {...item} key={item.id + Math.random()}></MovieItem>
          );
        });
      } else {
        return <EmptyState>No films found</EmptyState>;
      }
    }
  };

  return (
    <ErrorBoundary>
      <AppWrapper>
        <HeaderContainer></HeaderContainer>
        <SearchContainer></SearchContainer>
        {/* <MovieDetailsContainer {...movie}></MovieDetailsContainer> */}

        <ListHeaderContainer listHeaderTitle={`${props.movies.length} movies found`} />
        <MoviesListWrapper id="movie-scroller" isEmptyList={false}>
          {renderMovies(props.movies, props.loading)}
        </MoviesListWrapper>
      </AppWrapper>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => {
  return {
    movies: state.movies,
    loading: state.loading,
    error: state.error,
  };
};
const mapDispatchToProps = {
  loadMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
