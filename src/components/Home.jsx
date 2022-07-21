import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/slices/movieSlice";
import { fetchSeries } from "../redux/slices/seriesSlice";
import { fetchEpisodes } from "../redux/slices/episodeSlice";

const Home = () => {
  // const movieTextKey = "harry";
  // const type = "movie";

  const dispatch = useDispatch();

  // const fetchData = async () => {
  //   return await movieApi
  //     .get(
  //       `?apiKey=${process.env.REACT_APP_API_KEY}&s=${movieTextKey}&type=${type}`
  //     )
  //     .then((res) => {
  //       // console.log(res);
  //       dispatch(addMovies(res.data));
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // useEffect(() => {
  //   // dispatch(addMovies(fetchData));
  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchSeries());
    dispatch(fetchEpisodes());
  }, [dispatch]);

  return (
    <div>
      <div className="bannerImg"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
