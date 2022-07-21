import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../redux/slices/movieSlice";
import MovieCard from "./MovieCard";
import classes from "../scss/MovieListing.module.css";
import { getAllSeries } from "../redux/slices/seriesSlice";
import { getAllEpisodes } from "../redux/slices/episodeSlice";
import Slider from "react-slick";
import { Settings } from "../others/Setting";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  const episodes = useSelector(getAllEpisodes);

  // console.log(movies);
  // console.log(series);
  // console.log(episodes);

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

  const renderEpisodesList =
    episodes.Response === "True" ? (
      episodes.Search.map((episode, index) => {
        return <MovieCard key={index} data={episode} />;
      })
    ) : (
      <div className={classes.moviesError}>
        {/* <h3>{series.Error}</h3> */}
        <h3>Error</h3>
      </div>
    );

  return (
    <div className="container">
      <div className={classes.episodeList}>
        <h3>Episode</h3>
        <div>
          <Slider {...Settings}>{renderEpisodesList}</Slider>
        </div>
      </div>
      <div className={classes.movieList}>
        <h3>Movies</h3>
        <div>
          <Slider {...Settings}>{renderList}</Slider>
        </div>
      </div>
      <div className={classes.showList}>
        <h3>Series</h3>
        <div>
          <Slider {...Settings}>{renderSeriesList}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
