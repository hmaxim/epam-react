import {
  LOAD_MOVIES_LOADING,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
} from './rootActions';
import { IMovie } from '../interfaces/IMovie';

export const initialState: any = {
  movies: [],
  loading: false,
  error: '',
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
    default: {
      return state;
    }
  }
};

export default reduxThunkReducer;
