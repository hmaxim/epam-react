import React, { useEffect } from 'react';
import AppWrapper from '../src/containers/app/AppWrapper';
import HeaderContainer from '../src/containers/header-container/HeaderContainer';
import SearchContainer from '../src/containers/search-container/SearchContainerSSR';
import MoviesList from './movies-list.js';
import { connect } from 'react-redux';
import { getMovieById, loadMovies, setSearchParams, setMovies } from '../src/redux/rootActions';
import { useRouter } from 'next/router';

const Search = props => {
  const router = useRouter();

  useEffect(() => {
    if (!props.movies.length) {
      props.setSearchParams({
        searchBy: router.query.searchBy,
        search: router.query.search,
        sortBy: router.query.sortBy
      });
    }
    if (router.query.search) {
      props.loadMovies();
    } else {
      props.setMovies([]);
    }
  }, [router.asPath]);

  return (
    <AppWrapper>
      <HeaderContainer></HeaderContainer>
      <SearchContainer></SearchContainer>
      <MoviesList></MoviesList>
    </AppWrapper>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
    loading: state.loading,
    error: state.error,
    selectedMovie: state.selectedMovie,
    searchParams: state.searchParams,
    route: state.route
  };
};
const mapDispatchToProps = {
  loadMovies,
  setMovies,
  getMovieById,
  setSearchParams
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
