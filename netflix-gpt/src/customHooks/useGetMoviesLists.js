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

const useGetMoviesLists = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(API_URL_NOW_PLAYING, TMDB_API_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data?.results));
  };
  const getPopularMovies = async () => {
    const response = await fetch(API_URL_POPULAR, TMDB_API_OPTIONS);
    const data = await response.json();
    dispatch(addPopularMovies(data?.results));
  };
  const getTopRatedMovies = async () => {
    const response = await fetch(API_URL_TOP_RATED, TMDB_API_OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovies(data?.results));
  };
  const getUpcomingMovies = async () => {
    const response = await fetch(API_URL_UPCOMING, TMDB_API_OPTIONS);
    const data = await response.json();
    dispatch(addUpcomingMovies(data?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, []);
};
export default useGetMoviesLists;
