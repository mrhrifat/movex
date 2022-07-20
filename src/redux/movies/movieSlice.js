import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  // initialState:initialState,
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export default movieSlice.reducer;
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
