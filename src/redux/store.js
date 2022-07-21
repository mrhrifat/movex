import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movieSlice";
import seriesReducer from "./slices/seriesSlice";
import episodeReducer from "./slices/episodeSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
    episodes: episodeReducer,
  },
});
export default store;
