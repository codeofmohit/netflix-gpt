import { addSearchedMoviesResults } from "../store/slices/gptSlice";

import { TMDB_API_OPTIONS, TMDB_MOIVE_SEARCH } from "../constants/constants";

const getGptSuggestedMoviesFromTmdb = (gptSuggestions, dispatch) => {
  const fetchingGptSuggestedMovies = (gptSuggestions) => {
    const movieSearch = async (movie) => {
      const response = await fetch(TMDB_MOIVE_SEARCH + movie, TMDB_API_OPTIONS);
      const data = await response.json();
      return data;
    };
    const moviePromiseArr = gptSuggestions.map((movie) => movieSearch(movie));
    const movieArr = Promise.all(moviePromiseArr);
    movieArr.then((data) => {
      dispatch(addSearchedMoviesResults(data));
    });
  };
  fetchingGptSuggestedMovies(gptSuggestions);
};
export default getGptSuggestedMoviesFromTmdb;
