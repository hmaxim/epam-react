import React, { useCallback } from "react";
import MovieItemWrapper from "./MovieItemWrapper";
import posterLogo from "../../assets/images/netflix-streaming-vs-traditional-cable.jpg";
import { IMovie } from "../../interfaces/IMovie";

const MovieItem = (props: IMovie) => {
  const navigate = useCallback(() => {
    console.log(`navigated to details with + ${props.id}`);
  }, []);

  return (
    <MovieItemWrapper onClick={() => navigate}>
      <div className="movie-poster">
        <img src={props.poster_path} alt="poster"></img>
      </div>
      <div className="movie-info">
        <div>
          <div className="movie-title">{props.title}</div>
          <span>
            {props.genres.join(', ')}
          </span>
        </div>
        <div className="movie-year">{props.release_date}</div>
      </div>
    </MovieItemWrapper>
  );
};

export default MovieItem;
