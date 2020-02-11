import React from "react";
import MovieItemWrapper from "../../components/movie-item/MovieItemWrapper";
import posterLogo from "../../assets/images/netflix-streaming-vs-traditional-cable.jpg";
import { IMovie } from "../../interfaces/Movie";

const MovieItem = (props: IMovie) => {
  return (
    <MovieItemWrapper
      onClick={() =>
        console.log(`navigated to details with + ${props.id}`)
      }
    >
      <div className="movie-poster">
        <img src={posterLogo} alt="poster"></img>
      </div>
      <div className="movie-info">
        <div>
          <div className="movie-title">{props.title}</div>
          {props.genres.map((genre: string, index: number) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
        <div className="movie-year">{props.release_date}</div>
      </div>
    </MovieItemWrapper>
  );
};

export default MovieItem;
