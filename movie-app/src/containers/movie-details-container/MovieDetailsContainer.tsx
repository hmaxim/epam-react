import React from "react";
import MovieDetailsWrapper from "./MovieDetailsWrapper";
import poster from "../../assets/images/netflix-streaming-vs-traditional-cable.jpg";
import { IMovie } from "../../interfaces/IMovie";

const MovieDetailsContainer = (props: IMovie) => {
  console.log(props)
  const genres = (genres: string[]) => <span>{genres.join(",")}</span>;

  return (
    <MovieDetailsWrapper score={props.vote_average}>
      <div className="movie-poster">
        <img src={poster} alt="poster" />
        {/* <img src={props.movie.poster_path} alt="poster" /> */}
      </div>
      <div className="movie-details">
        <div className="movie-title-container">
          <h1 className="title">{props.title}</h1>
          <div className="score">
            {/* {+props.vote_average.toFixed(1)} */}
          </div>
        </div>
        <div className="genre">{genres(props.genres)}</div>
        <div className="year-time">
          <span>{props.release_date} year</span>
          <span>{props.runtime} min</span>
        </div>
        <div className="description">
          <span>{props.overview}</span>
        </div>
      </div>
    </MovieDetailsWrapper>
  );
};

export default MovieDetailsContainer;
