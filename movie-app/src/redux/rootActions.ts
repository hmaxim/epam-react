export const LOAD_MOVIES_LOADING = 'REDUX_THUNK_LOAD_MOVIES_LOADING';
export const LOAD_MOVIES_SUCCESS = 'REDUX_THUNK_LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_ERROR = 'REDUX_THUNK_LOAD_MOVIES_ERROR';

export const loadMovies = (sortBy: any) => (dispatch: any) => {
  dispatch({ type: LOAD_MOVIES_LOADING });
  fetch(
    `https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&sortBy=${sortBy}`,
  )
    .then(response => response.json())
    .then(
      data => dispatch({ type: LOAD_MOVIES_SUCCESS, movies: data.data }),
      error =>
        dispatch({
          type: LOAD_MOVIES_ERROR,
          error: error.message || 'Unexpected Error!!!',
        }),
    );
};
