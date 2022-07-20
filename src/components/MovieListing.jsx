import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../redux/slices/movieSlice";
import MovieCard from "./MovieCard";
import classes from "../scss/MovieListing.module.css";
import { getAllSeries } from "../redux/slices/seriesSlice";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  // console.log(movies);
  // console.log(series);

  const renderList =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className={classes.moviesError}>
        {/* <h3>{movies.Error}</h3> */}
        <h3>Error</h3>
      </div>
    );

  const renderSeriesList =
    series.Response === "True" ? (
      series.Search.map((series, index) => {
        return <MovieCard key={index} data={series} />;
      })
    ) : (
      <div className={classes.moviesError}>
        {/* <h3>{series.Error}</h3> */}
        <h3>Error</h3>
      </div>
    );

  return (
    <div className={classes.movieWrapper}>
      <div className={classes.movieList}>
        <h2>Movies</h2>
        <div className={classes.movieContainer}>{renderList}</div>
      </div>
      <div className={classes.showList}>
        <h2>Series</h2>
        <div className={classes.movieContainer}>{renderSeriesList}</div>
      </div>
    </div>
  );
};

export default MovieListing;
