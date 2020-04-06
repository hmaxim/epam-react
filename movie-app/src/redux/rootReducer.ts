import {
  LOAD_MOVIES_LOADING,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  SET_SEARCH_PARAMS,
  SET_MOVIE_BY_ID
} from './rootActions';
import { IMovie } from '../interfaces/IMovie';
import { List, Map } from 'immutable';

export const initialState: any = {
  movies: [],
  loading: false,
  error: '',
  searchParams: {
    sortBy: 'release_date',
    searchBy: 'title',
    search: ''
  },
  selectedMovie: null
};

const reduxThunkReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_MOVIES_LOADING: {
      return Map({
        ...state,
        loading: true,
        error: ''
      }).toJS();
    }
    case LOAD_MOVIES_SUCCESS: {
      return Map({
        ...state,
        movies: List(action.movies),
        loading: false
      }).toJS();
    }
    case LOAD_MOVIES_ERROR: {
      return Map({
        ...state,
        loading: false,
        error: action.error
      }).toJS();;
    }
    case SET_SEARCH_PARAMS: {
      return Map({
        ...state,
        searchParams: { ...state.searchParams, ...action.searchParams }
      }).toJS();;
    }
    case SET_MOVIE_BY_ID: {
      return Map({
        ...state,
        selectedMovie: action.selectedMovie
      }).toJS();;
    }
    default: {
      return state;
    }
  }
};

export default reduxThunkReducer;
