import { IMovie } from './../interfaces/IMovie';
import API from '../api';

export const LOAD_MOVIES_LOADING = 'REDUX_THUNK_LOAD_MOVIES_LOADING';
export const LOAD_MOVIES_SUCCESS = 'REDUX_THUNK_LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_ERROR = 'REDUX_THUNK_LOAD_MOVIES_ERROR';
export const SET_SEARCH_PARAMS = 'REDUX_THUNK_SET_SEARCH_PARAMS';
export const SET_MOVIE_BY_ID = 'REDUX_THUNK_GET_MOVIE_BY_ID';
export const SET_ROUTE_STATE = 'REDUX_THUNK_SET_ROUTE_STATE';

export const loadMovies = () => (dispatch: any, getState: any) => {
  dispatch({ type: LOAD_MOVIES_LOADING });
  const searchByValue = getState().searchParams.searchBy || '';
  const searchValue = getState().searchParams.search || '';
  const sortBy = getState().searchParams.sortBy || '';

  API.get(
    `/movies?sortOrder=desc&sortBy=${sortBy}&searchBy=${searchByValue}&search=${searchValue}`,
  )
    .then(data => data.data)
    .then(
      (data: any) => {
        dispatch({ type: LOAD_MOVIES_SUCCESS, movies: data.data });
      },
      error =>
        dispatch({
          type: LOAD_MOVIES_ERROR,
          error: error || 'Unexpected Error!!!',
        }),
    );
};

export const setSearchParams = (searchParams: any) => (dispatch: any) => {
  dispatch({ type: SET_SEARCH_PARAMS, searchParams });
};

export const setRouteState = (url: string) => (dispatch: any) => {
  dispatch({ type: SET_ROUTE_STATE, route: url });
};

export const getMovieById = (movieId: number) => (
  dispatch: any,
  getState: any,
) => {
  const movies: IMovie[] = getState().movies;
  if (!movies.length) {
    API.get(`movies/${movieId}`)
      .then(data => data.data)
      .then(data => {
        dispatch({ type: SET_MOVIE_BY_ID, selectedMovie: data });
      });
  } else {
    const movie = movies.find((movie: IMovie) => movie.id === movieId);
    console.log(movieId)
    dispatch({ type: SET_MOVIE_BY_ID, selectedMovie: movie });
  }
};
