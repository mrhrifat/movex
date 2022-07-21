import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails, getDetails } from "../redux/slices/detailsSlice";
import classes from "../scss/MovieDetails.module.css";

const MovieDetails = () => {
  const { imdbID } = useParams();
  // console.log(imdbID);

  const dispatch = useDispatch();

  const details = useSelector(getDetails);

  const {
    Title,
    imdbRating,
    imdbVotes,
    Runtime,
    Year,
    Plot,
    Director,
    Actors,
    Genre,
    Poster,
    Language,
    Awards,
  } = details;

  console.log(details);

  useEffect(() => {
    dispatch(fetchDetails(imdbID));
  }, [dispatch, imdbID]);

  const renderDetails = (
    <div className={classes.movieSection}>
      {Object.keys(details).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className={classes.sectionLeft}>
            <div className={classes.movieTitle}>{Title}</div>
            <div className={classes.movieRating}>
              <span>
                IMDB Rating{" "}
                <i className="fa fa-star" style={{ color: "#ff9e00" }}></i> :{" "}
                {imdbRating}
              </span>
              <span>
                IMDB Votes{" "}
                <i className="fa fa-thumbs-up" style={{ color: "#fafafa" }}></i>{" "}
                : {imdbVotes}
              </span>
              <span>
                Runtime{" "}
                <i
                  className="fa fa-film"
                  style={{ color: "rgb(191, 213, 214)" }}
                ></i>{" "}
                : {Runtime}
              </span>
              <span>
                Year{" "}
                <i
                  className="fa fa-calendar"
                  style={{ color: "rgb(191, 213, 214)" }}
                ></i>{" "}
                : {Year}
              </span>
            </div>
            <div className={classes.moviePlot}>{Plot}</div>
            <div className={classes.movieInfo}>
              <div>
                <span>Director</span>
                <span>{Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{Awards}</span>
              </div>
            </div>
          </div>
          <div className={classes.sectionRight}>
            <img src={Poster} alt={Title} />
          </div>
        </>
      )}
    </div>
  );
  return <div>{renderDetails}</div>;
  // return <div>Movie Details</div>;
};

export default MovieDetails;
