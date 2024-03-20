import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    moviePopUp: false,
    popUpMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addHeroMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    showMoviePopUp: (state) => {
      state.moviePopUp = true;
    },
    hideMoviePopUp: (state) => {
      state.moviePopUp = false;
    },
    addPopUpMovieData: (state, action) => {
      state.popUpMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addHeroMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  showMoviePopUp,
  hideMoviePopUp,
  addPopUpMovieData,
} = movies.actions;
export default movies.reducer;
