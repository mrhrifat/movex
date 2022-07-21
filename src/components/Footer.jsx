import React from "react";
import classes from "../scss/Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container text-center">
        <p className="m-0 pt-2">Movex Inc © 2022 || All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
