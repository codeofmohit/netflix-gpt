import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { TMDB_API_OPTIONS } from "../constants/constants";
import {
  API_URL_NOW_PLAYING,
  API_URL_POPULAR,
  API_URL_TOP_RATED,
  API_URL_UPCOMING,
} from "../constants/constants";

import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/slices/moviesSlice";

// importing hardcoded data
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from "../constants/hardCodedData";

const useGetMoviesLists = () => {
  const dispatch = useDispatch();

  const disPatchHardCodedDataFirst = () => {
    dispatch(addNowPlayingMovies(nowPlayingMovies));
    dispatch(addPopularMovies(popularMovies));
    dispatch(addTopRatedMovies(topRatedMovies));
    dispatch(addUpcomingMovies(upcomingMovies));
  };

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(API_URL_NOW_PLAYING, TMDB_API_OPTIONS);
      const data = await response.json();
      dispatch(addNowPlayingMovies(data?.results));
    } catch (error) {
      console.log("error fetching nowPlayingMoviesList from tmdb : " + error);
    }
  };

  const getPopularMovies = async () => {
    try {
      const response = await fetch(API_URL_POPULAR, TMDB_API_OPTIONS, {
        timeout: 5000,
      });
      const data = await response.json();
      dispatch(addPopularMovies(data?.results));
    } catch (error) {
      console.log("error fetching PopularMoviesLists from tmdb : " + error);
    }
  };

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(API_URL_TOP_RATED, TMDB_API_OPTIONS, {
        timeout: 5000,
      });
      const data = await response.json();
      dispatch(addTopRatedMovies(data?.results));
    } catch (error) {
      console.log("error fetching TopRatedMoviesLists from tmdb : " + error);
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(API_URL_UPCOMING, TMDB_API_OPTIONS, {
        timeout: 5000,
      });
      const data = await response.json();
      dispatch(addUpcomingMovies(data?.results));
    } catch (error) {
      console.log("error fetching UpcomingMoviesList from tmdb : " + error);
    }
  };

  useEffect(() => {
    disPatchHardCodedDataFirst();
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);
};
export default useGetMoviesLists;
