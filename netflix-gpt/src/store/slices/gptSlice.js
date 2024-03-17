import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gptSearch",
  initialState: {
    isClicked: true,
    movieNames: null,
    movieResults: null,
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
  },
});

export const {
  gptSearchBtnToggler,
  addGptSuggestedMovies,
  addSearchedMoviesResults,
} = gptSearch.actions;
export default gptSearch.reducer;
