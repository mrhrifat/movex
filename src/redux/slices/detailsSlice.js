import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";

const initialState = {
  details: {},
};

const fetchDetails = createAsyncThunk(
  "details/fetchDetails",
  async (imdbID) => {
    return await movieApi
      .get(`?apiKey=${process.env.REACT_APP_API_KEY}&i=${imdbID}&Plot=full`)
      .then((res) => {
        console.log(res);
        // console.log(res.data);
        return res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
);

const detailsSlice = createSlice({
  name: "detailsSlice",
  initialState,
  extraReducers: {
    [fetchDetails.pending]: () => {
      console.log("Pending");
    },
    [fetchDetails.fulfilled]: (state, { payload }) => {
      console.log("Successful");
      return { ...state, details: payload };
    },
    [fetchDetails.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export default detailsSlice.reducer;
export { fetchDetails };
export const getDetails = (state) => state.details.details;
