import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";

const initialState = {
  episodes: {},
};

const fetchEpisodes = createAsyncThunk(
  "episodes/fetchEpisodes",
  async (term) => {
    // const episodeTextKey = "hacker";
    //   const type = "episode";
    // Episode Type Not Working
    const type = "movie";

    return await movieApi
      .get(`?apiKey=${process.env.REACT_APP_API_KEY}&s=${term}&type=${type}`)
      .then((res) => {
        //   console.log(res);
        return res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
);

const episodeSlice = createSlice({
  name: "episodes",
  initialState,
  extraReducers: {
    [fetchEpisodes.pending]: () => {
      console.log("Pending");
    },
    [fetchEpisodes.fulfilled]: (state, { payload }) => {
      console.log("Successful");
      return { ...state, episodes: payload };
    },
    [fetchEpisodes.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export default episodeSlice.reducer;
export { fetchEpisodes };
export const getAllEpisodes = (state) => state.episodes.episodes;
