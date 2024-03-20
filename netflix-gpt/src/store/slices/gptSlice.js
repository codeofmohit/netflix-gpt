import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gptSearch",
  initialState: {
    isClicked: true,
    movieNames: null,
    movieResults: null,
    isSearchBtnClicked: false,
  },
  reducers: {
    gptSearchBtnToggler: (state) => {
      state.isClicked = !state.isClicked;
    },
    addGptSuggestedMovies: (state, action) => {
      state.movieNames = action.payload;
    },
    addSearchedMoviesResults: (state, action) => {
      state.movieResults = action.payload;
    },
    searchBtnClicked: (state) => {
      state.isSearchBtnClicked = true;
    },
  },
});

export const {
  gptSearchBtnToggler,
  addGptSuggestedMovies,
  addSearchedMoviesResults,
  searchBtnClicked,
} = gptSearch.actions;
export default gptSearch.reducer;
