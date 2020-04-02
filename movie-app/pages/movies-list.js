import React, { useCallback } from 'react';
import { StaticRouter } from 'react-router-dom';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import ListHeaderContainer from '../src/containers/list-header-container/ListHeaderContainerSSR';
import MoviesListWrapper from '../src/containers/movies-list-container/MoviesListWrapper';
import MovieItem from '../src/shared-components/movie-item/MovieItem';
import EmptyState from '../src/shared-components/empty-state/EmptyState';

const MoviesList = props => {
  const router = useRouter();

  const navigate = useCallback(id => {
    router.push(`/film/${id}`);
  }, []);

  const renderMovies = (movies, loading) => {
    if (!loading) {
      if (movies?.length) {
        return movies.map(item => {
          return <MovieItem navigate={() => navigate(item.id)} {...item} key={item.id}></MovieItem>;
        });
      } else {
        return <EmptyState>No films found</EmptyState>;
      }
    }
  };

  return (
    <div className="list-container">
      <ListHeaderContainer
        listHeaderTitle={
          router.pathname.includes('search')
            ? `${props.movies.length || 0} movies found`
            : `Movies by ${props.searchParams.searchBy}`
        }
      />

      <MoviesListWrapper id="movie-scroller" isEmptyList={false}>
        {renderMovies(props.movies, props.loading)}
      </MoviesListWrapper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
    searchParams: state.searchParams
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
