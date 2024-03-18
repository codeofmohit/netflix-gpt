import { addSearchedMoviesResults } from "../store/slices/gptSlice";

import {
  TMDB_API_OPTIONS,
  TMDB_MOIVE_SEARCH,
  // OMDB_API,
} from "../constants/constants";
// import getGptSuggestedMoviesFromOmdb from "./getGptSuggestedMoviesFromOmdb";

const getGptSuggestedMoviesFromTmdb = (gptSuggestions, dispatch) => {
  // test omdb call
  // getGptSuggestedMoviesFromOmdb();/

  const fetchingGptSuggestedMovies = (gptSuggestions) => {
    const movieSearch = async (movie) => {
      try {
        // const response = await fetch(`${OMDB_API}&t=${movie}&plot=full`);
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
        window.alert(
          "Your're likely on a JIO network, in this feature we make use of TMDB api(s) which are not stable on jio, try switching your network or connect via a VPN such as VeePN Chrome extension, Thanks!"
        );
        return;
      }
      dispatch(addSearchedMoviesResults(data));
      // console.log(data);
    });
  };

  fetchingGptSuggestedMovies(gptSuggestions);
};

// const getGptSuggestedMoviesFromTmdb = (gptSuggestions, dispatch) => {
//   // test omdb call
//   getGptSuggestedMoviesFromOmdb();

//   const fetchingGptSuggestedMovies = (gptSuggestions) => {
//     const movieSearch = async (movie) => {
//       try {
//         const response = await fetch(
//           TMDB_MOIVE_SEARCH + movie,
//           TMDB_API_OPTIONS
//         );
//         const data = await response.json();
//         return data;
//       } catch (error) {
//         console.log("error fetching gpt suggested movies from tmdb : " + error);
//       }
//     };

//     const moviePromiseArr = gptSuggestions.map((movie) => movieSearch(movie));
//     const movieArr = Promise.all(moviePromiseArr);
//     movieArr.then((data) => {
//       // data[0] means the array is of undefined(most likely), if yes return
//       if (!data[0]) {
//         window.alert(
//           "Your're likely on a JIO network, in this feature we make use of TMDB api(s) which are not stable on jio, try switching your network or connect via a VPN such as VeePN Chrome extension, Thanks!"
//         );
//         return;
//       }
//       dispatch(addSearchedMoviesResults(data));
//     });
//   };

//   fetchingGptSuggestedMovies(gptSuggestions);
// };
export default getGptSuggestedMoviesFromTmdb;
