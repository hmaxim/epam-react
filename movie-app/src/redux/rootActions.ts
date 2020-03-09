import API from '../api';

export const LOAD_MOVIES_LOADING = 'REDUX_THUNK_LOAD_MOVIES_LOADING';
export const LOAD_MOVIES_SUCCESS = 'REDUX_THUNK_LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_ERROR = 'REDUX_THUNK_LOAD_MOVIES_ERROR';
export const SET_SEARCH_PARAMS = 'REDUX_THUNK_SET_SEARCH_PARAMS';

export const loadMovies = (sortBy = 'release_date') => (
  dispatch: any,
  getState: any,
) => {
  dispatch({ type: LOAD_MOVIES_LOADING });
  const searchByValue = getState().searchParams.searchBy;
  const searchValue = getState().searchParams.searchText || '';

  API.get(
    `/movies?sortOrder=desc&sortBy=${sortBy}&searchBy=${searchByValue}&search=${searchValue}`,
  )
    .then(data => data.data)
    .then(
      data => {
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
