import {
  LOAD_MOVIES_LOADING,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  SET_SEARCH_PARAMS,
  setSearchParams,
} from './rootActions';
import { IMovie } from '../interfaces/IMovie';

export const initialState: any = {
  movies: [],
  loading: false,
  error: '',
  searchParams: {
    searchBy: 'title',
    searchText: '',
  },
};

const reduxThunkReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_MOVIES_LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case LOAD_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: action.movies,
        loading: false,
      };
    }
    case LOAD_MOVIES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case SET_SEARCH_PARAMS: {
      return {
        ...state,
        searchParams: { ...state.searchParams, ...action.searchParams },
      };
    }
    default: {
      return state;
    }
  }
};

export default reduxThunkReducer;
