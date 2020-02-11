import React, { useState } from "react";
import AppWrapper from "./AppWrapper";
import HeaderContainer from "../header-container/HeaderContainer";
import ListHeaderContainer from "../list-header-container/ListHeaderContainer";
import MoviesListWrapper from "../movies-list-container/MoviesListWrapper";
import MovieItem from "../../components/movie-item/MovieItem";
import MovieDetailsContainer from "../movie-details-container/MovieDetailsContainer";
import SearchContainer from "../search-container/SearchContainer";
import { IMovie } from "../../interfaces/Movie";

const App = () => {
  const [moviesList, getMoviesList] = useState();
  const movie: IMovie = {
    id: 0,
    title: "Titanic",
    tagline: null,
    vote_average: 4,
    vote_count: 0,
    release_date: "1997",
    poster_path:
      "../../assets/images/netflix-streaming-vs-traditional-cable.jpg",
    overview:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    budget: 0,
    revenue: 0,
    runtime: 150,
    genres: ["Action"]
  };

  const getMovies = () => {
    const arr: any = [];
    for (let index = 0; index <= 10; index++) {
      arr.push(movie);
    }
    if (arr.length) {
      return arr.map((item: IMovie) => {
        return <MovieItem {...item} key={item.id + Math.random()}></MovieItem>;
      });
    } else {
      return <h1>No films found</h1>;
    }
  };

  return (
    <AppWrapper>
      <HeaderContainer></HeaderContainer>
      <SearchContainer></SearchContainer>
      {/* <MovieDetailsContainer {...movie}></MovieDetailsContainer> */}
      <ListHeaderContainer
        listHeaderTitle={" movie found"}
      ></ListHeaderContainer>
      <MoviesListWrapper isEmptyList={false}>{getMovies()}</MoviesListWrapper>
    </AppWrapper>
  );
};

export default App;
