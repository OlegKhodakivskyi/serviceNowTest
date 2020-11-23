import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../constants';

const baseURL = 'https://api.themoviedb.org/3/discover/movie?';
const ApiKey = `203ff930413d2a188176d2ed824b39a9`;

export const fetchMovies = async (dispatch, sortBy, activePage = 1) => {
  try {
    const result = await fetch(
      `${baseURL}api_key=${ApiKey}&sort_by=${sortBy}&page=${activePage}`,
    );
    const movies = await result.json();
    dispatch(FETCH_MOVIES_SUCCESS, movies);
  } catch (error) {
    dispatch(FETCH_MOVIES_ERROR, error);
  }
};
