import React, { useCallback } from "react";
import MovieItemWrapper from "./MovieItemWrapper";
import posterLogo from "../../assets/images/netflix-streaming-vs-traditional-cable.jpg";
import { IMovie } from "../../interfaces/Movie";

const MovieItem = (props: IMovie) => {
  const navigate = useCallback(() => {
    console.log(`navigated to details with + ${props.id}`);
  }, []);

  return (
    <MovieItemWrapper onClick={() => navigate}>
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

MovieItem.displayName = "MovieItem";

export default MovieItem;
