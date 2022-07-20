import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
export default store;
