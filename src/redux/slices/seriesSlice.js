import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";

const initialState = {
  series: {},
};

const fetchSeries = createAsyncThunk("series/fetchSeries", async (term) => {
  // const seriesTextKey = "friends";
  const type = "series";

  return await movieApi
    .get(`?apiKey=${process.env.REACT_APP_API_KEY}&s=${term}&type=${type}`)
    .then((res) => {
      //   console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
});

const seriesSlice = createSlice({
  name: "series",
  initialState,
  extraReducers: {
    [fetchSeries.pending]: () => {
      console.log("Peding");
    },
    [fetchSeries.fulfilled]: (state, { payload }) => {
      //   console.log("Successful");
      return { ...state, series: payload };
    },
    [fetchSeries.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export default seriesSlice.reducer;
export { fetchSeries };
export const getAllSeries = (state) => state.series.series;
