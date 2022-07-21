import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movieSlice";
import seriesReducer from "./slices/seriesSlice";
import episodeReducer from "./slices/episodeSlice";
import detailsReducer from "./slices/detailsSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
    episodes: episodeReducer,
    details: detailsReducer,
  },
});
export default store;
