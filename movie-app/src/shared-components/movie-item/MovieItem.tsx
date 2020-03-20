import React from 'react';
import MovieItemWrapper from './MovieItemWrapper';

const MovieItem = (props: any) => {
  return (
    <MovieItemWrapper onClick={props.navigate}>
      <div className="movie-poster">
        <img src={props.poster_path} alt="poster"></img>
      </div>
      <div className="movie-info">
        <div>
          <div className="movie-title">{props.title}</div>
          <span>{props.genres.join(', ')}</span>
        </div>
        <div className="movie-year">{props.release_date}</div>
      </div>
    </MovieItemWrapper>
  );
};

export default MovieItem;
