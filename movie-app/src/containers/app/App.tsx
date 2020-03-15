import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { IMovie } from '../../interfaces/IMovie';
import {
  getMovieById,
  loadMovies,
  setSearchParams,
} from '../../redux/rootActions';
import EmptyState from '../../shared-components/empty-state/EmptyState';
import MovieItem from '../../shared-components/movie-item/MovieItem';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import HeaderContainer from '../header-container/HeaderContainer';
import ListHeaderContainer from '../list-header-container/ListHeaderContainer';
import MovieDetailsContainer from '../movie-details-container/MovieDetailsContainer';
import MoviesListWrapper from '../movies-list-container/MoviesListWrapper';
import SearchContainer from '../search-container/SearchContainer';
import AppWrapper from './AppWrapper';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from '../../constants/constants';

const App = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const query = useQuery(location.search);

  useEffect(() => {
    if (!history.location.pathname.includes('film')) {
      if (!props.movies.length) {
        props.setSearchParams({
          searchBy: query.get('searchBy'),
          search: query.get('search'),
          sortBy: query.get('sortBy'),
        });
      }
      props.loadMovies();
    }
  }, [location]);

  const navigate = (id: number) => {
    history.push(`/film/${id}`);
  };

  const renderMovies = (movies: IMovie[], loading: boolean) => {
    if (!loading) {
      if (movies.length) {
        return movies.map((item: IMovie) => {
          return (
            <MovieItem
              navigate={() => navigate(item.id)}
              {...item}
              key={item.id + Math.random()}
            ></MovieItem>
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

        <Switch>
          <Route path="/search">
            <SearchContainer></SearchContainer>
          </Route>

          <Route
            exact
            path="/film/:id"
            component={MovieDetailsContainer}
          ></Route>

          <Redirect
            from="/"
            to={`search?sortBy=${props.searchParams.sortBy}&searchBy=${props.searchParams.searchBy}`}
          ></Redirect>

          <Route path="*">
            <EmptyState>PAGE NOT FOUND</EmptyState>
          </Route>
        </Switch>

        <ListHeaderContainer
          listHeaderTitle={
            history.location.pathname.includes('search')
              ? `${props.movies.length} movies found`
              : `Movies by ${props.searchParams.searchBy}`
          }
        />
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
    selectedMovie: state.selectedMovie,
    searchParams: state.searchParams,
    route: state.route,
  };
};
const mapDispatchToProps = {
  loadMovies,
  getMovieById,
  setSearchParams,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
