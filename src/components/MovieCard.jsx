import React from "react";
import classes from "../scss/MovieCard.module.css";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  // console.log(data);
  const { Poster, Title, Year, imdbID } = data;
  return (
    <Link to={`/movie/${imdbID}`}>
      <div className={`card ${classes.cards}`}>
        <img src={Poster} className="card-img-top" alt={Title} />
        <div className="card-body">
          <h6 className="card-title">
            {String(Title).length > 20 ? `${Title.substring(0, 20)}...` : Title}
          </h6>
          <p className="card-text">{Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
