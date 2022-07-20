import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movieSlice";
import seriesReducer from "./slices/seriesSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
  },
});
export default store;
