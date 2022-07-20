import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../redux/movies/movieSlice";
import MovieCard from "./MovieCard";
import classes from "../scss/MovieListing.module.css";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  const renderList =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className={classes.moviesError}>
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className={classes.movieWrapper}>
      <div className={classes.movieList}>
        <h2>Movies</h2>
        <div className={classes.movieContainer}>{renderList}</div>
      </div>
    </div>
  );
};

export default MovieListing;
