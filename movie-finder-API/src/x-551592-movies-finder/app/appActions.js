import { actionTypes } from '@servicenow/ui-core';
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  TO_NEXT_PAGE,
  TO_PREV_PAGE,
  TO_NUM_PAGE,
} from '../constants';
import { fetchMovies } from './getHttpEffects';

export default {
  actionHandlers: {
    [actionTypes.COMPONENT_BOOTSTRAPPED]: ({ dispatch }) => {
      dispatch(FETCH_MOVIES_REQUEST);
    },
    [FETCH_MOVIES_REQUEST]: ({ state: { sortBy, activePage }, dispatch }) => {
      fetchMovies(dispatch, sortBy, activePage);
    },
    [FETCH_MOVIES_SUCCESS]: ({ action, updateState }) => {
      const { results } = action.payload;
      if (results) {
        updateState({
          movies: results,
          totalPages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        });
      }
    },
    [FETCH_MOVIES_ERROR]: ({ action }) => {
      console.log(action.payload);
      alert(':( check your connection!');
    },
    'NOW_DROPDOWN#ITEM_CLICKED': ({ action, updateState, dispatch }) => {
      const {
        item: { sortby },
      } = action.payload;
      updateState({ sortBy: sortby });
      dispatch(FETCH_MOVIES_REQUEST);
    },
    [TO_NEXT_PAGE]: ({ state: { activePage }, updateState, dispatch }) => {
      updateState({ activePage: activePage < 9 ? activePage + 1 : 10 });
      dispatch(FETCH_MOVIES_REQUEST);
    },
    [TO_PREV_PAGE]: ({ state: { activePage }, updateState, dispatch }) => {
      updateState({ activePage: activePage > 1 ? activePage - 1 : 1 });
      dispatch(FETCH_MOVIES_REQUEST);
    },
    [TO_NUM_PAGE]: ({
      state: { activePage },
      action,
      updateState,
      dispatch,
    }) => {
      const { page } = action.payload;
      updateState({ activePage: activePage === page ? activePage : page });
      dispatch(FETCH_MOVIES_REQUEST);
    },
  },
};
