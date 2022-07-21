import React, { useState } from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import classes from "../scss/Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/slices/movieSlice";
import { fetchSeries } from "../redux/slices/seriesSlice";
import { fetchEpisodes } from "../redux/slices/episodeSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(term);
    dispatch(fetchMovies(term));
    dispatch(fetchSeries(term));
    dispatch(fetchEpisodes(term));
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Movex</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar" />

          <Navbar.Collapse id="responsive-navbar">
            <Nav className="m-auto">
              <Form className="d-flex" onSubmit={submitHandler}>
                <Form.Control
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
                <Button variant="outline-success" type="submit">
                  Search
                </Button>
              </Form>
            </Nav>

            <Nav>
              <Nav className={classes.userImage}>
                <img src={user} alt="User" />
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
