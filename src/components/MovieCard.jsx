import React from "react";
import classes from "../scss/MovieCard.module.css";

const MovieCard = ({ data }) => {
  // console.log(data);
  const { Poster, Title, Year } = data;
  return (
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
  );
};

export default MovieCard;
