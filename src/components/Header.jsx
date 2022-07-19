import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import classes from "../scss/Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Movex</div>
      </Link>
      <div className={classes.userImage}>
        <img src={user} alt="User" />
      </div>
    </div>
  );
};

export default Header;
