import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";

const initialState = {
  movies: {},
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const movieTextKey = "harry";
  const type = "movie";
  return await movieApi
    .get(
      `?apiKey=${process.env.REACT_APP_API_KEY}&s=${movieTextKey}&type=${type}`
    )
    .then((res) => {
      //   console.log(res);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
});

const movieSlice = createSlice({
  name: "movies",
  // initialState:initialState,
  initialState,
  //   reducers: {
  //     addMovies: (state, { payload }) => {
  //       state.movies = payload;
  //     },
  //   },
  extraReducers: {
    [fetchMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      console.log("Successful");
      return { ...state, movies: payload };
    },
    [fetchMovies.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export default movieSlice.reducer;
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
