import { addSearchedMoviesResults } from "../store/slices/gptSlice";

import { TMDB_API_OPTIONS, TMDB_MOIVE_SEARCH } from "../constants/constants";

const getGptSuggestedMoviesFromTmdb = (gptSuggestions, dispatch) => {
  const fetchingGptSuggestedMovies = (gptSuggestions) => {
    const movieSearch = async (movie) => {
      try {
        const response = await fetch(
          TMDB_MOIVE_SEARCH + movie,
          TMDB_API_OPTIONS
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.log("error fetching gpt suggested movies from tmdb : " + error);
      }
    };

    const moviePromiseArr = gptSuggestions.map((movie) => movieSearch(movie));
    const movieArr = Promise.all(moviePromiseArr);
    movieArr.then((data) => {
      // data[0] means the array is of undefined(most likely), if yes return
      if (!data[0]) {
        return;
      }
      dispatch(addSearchedMoviesResults(data));
    });
  };

  fetchingGptSuggestedMovies(gptSuggestions);
};

export default getGptSuggestedMoviesFromTmdb;
