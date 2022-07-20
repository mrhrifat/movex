import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import { useDispatch } from "react-redux";
import movieApi from "../api/movieApi";
import { addMovies } from "../redux/movies/movieSlice";

const Home = () => {
  const movieTextKey = "titanic";
  const type = "movie";

  const dispatch = useDispatch();

  const fetchData = async () => {
    return await movieApi
      .get(
        `?apiKey=${process.env.REACT_APP_API_KEY}&s=${movieTextKey}&type=${type}`
      )
      .then((res) => {
        // console.log(res);
        dispatch(addMovies(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    // dispatch(addMovies(fetchData));
    fetchData();
  }, []);

  return (
    <div>
      <div className="bannerImg"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
