import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";
import gptSearchReducer from "./slices/gptSlice";
import multiLangReducer from "./slices/multiLangSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptSearchReducer,
    multiLang: multiLangReducer,
  },
});

export default store;
