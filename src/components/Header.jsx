import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import classes from "../scss/Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">Movex</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar" />

          <Navbar.Collapse id="responsive-navbar">
            <Nav className="m-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
              {/* <Nav>Features</Nav> */}
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search...</Button>
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
