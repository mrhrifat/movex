import React from "react";
import classes from "../scss/MovieCard.module.css";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  // console.log(data);
  const { Poster, Title, Year, imdbID } = data;
  return (
    <Link to={`/movie/${imdbID}`}>
      <div className={classes.cardItem}>
        <div className={classes.cardInner}>
          <div className={classes.cardTop}>
            <img src={Poster} alt={Title} />
          </div>
          <div className={classes.cardBottom}>
            <div className={classes.cardInfo}>
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
