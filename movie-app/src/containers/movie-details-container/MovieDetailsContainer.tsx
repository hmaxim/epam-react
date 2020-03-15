import React, { useEffect } from 'react';
import MovieDetailsWrapper from './MovieDetailsWrapper';
import { connect } from 'react-redux';
import {
  getMovieById,
  loadMovies,
  setSearchParams,
} from '../../redux/rootActions';
import { useLocation, useParams } from 'react-router';
import EmptyState from '../../shared-components/empty-state/EmptyState';

const MovieDetailsContainer = (props: any) => {
  const location = useLocation();
  const params: any = useParams();

  useEffect(() => {
    if (props.history.location.pathname.includes('film')) {
      props.getMovieById(params.id);
      props.setSearchParams({ searchBy: 'genre' });
      props.loadMovies();
    }
  }, [location]);

  const genres = (genres: string[]) => <span>{genres.join(', ')}</span>;

  return props.selectedMovie && Object.keys(props.selectedMovie).length ? (
    <MovieDetailsWrapper score={props.selectedMovie.vote_average}>
      <div className="movie-poster">
        <img src={props.selectedMovie.poster_path} alt="poster" />
      </div>
      <div className="movie-details">
        <div className="movie-title-container">
          <h1 className="title">{props.selectedMovie.title}</h1>
          <div className="score">
            {+props.selectedMovie.vote_average.toFixed(1)}
          </div>
        </div>
        <div className="genre">{genres(props.selectedMovie.genres)}</div>
        <div className="year-time">
          <span>{props.selectedMovie.release_date} year</span>
          <span>{props.selectedMovie.runtime} min</span>
        </div>
        <div className="description">
          <span>{props.selectedMovie.overview}</span>
        </div>
      </div>
    </MovieDetailsWrapper>
  ) : <EmptyState>Film not found</EmptyState>;
};

const mapStateToProps = (state: any) => {
  return {
    movies: state.movies,
    loading: state.loading,
    error: state.error,
    selectedMovie: state.selectedMovie,
  };
};
const mapDispatchToProps = {
  loadMovies,
  getMovieById,
  setSearchParams,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetailsContainer);
