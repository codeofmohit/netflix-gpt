import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default store;
