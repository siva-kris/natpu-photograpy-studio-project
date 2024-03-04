import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { IoCloseSharp } from "react-icons/io5";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { TfiMenu } from "react-icons/tfi";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function BasicExample() {
  const [open, setopen] = useState(true);
  const handleMenu = () => {
    setopen(!open);
  };
  const CloseSideDrawer = () => {
    setopen(false);
  };
  return (
    <nav className="sticky-top">
      <Navbar
        expand="lg"
        className="text-center   custom-bg-color
 border border-primary-subtle rounded-3"
      >
        <Container>
          <Navbar.Brand href="/" className="fw-medium text-white">
            NATPU PHOTOGRAPHY
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav basic-navbar-nav "
            className=" text-white"
          >
            {open ? (
              <TfiMenu onClick={handleMenu} />
            ) : (
              <IoCloseSharp onClick={handleMenu} />
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav " className="custom-toggler">
            <Nav className="me-auto view ">
              <Nav.Link>
                <Link
                  to="/"
                  className="text-white text-decoration-none"
                  onClick={CloseSideDrawer}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white" onClick={CloseSideDrawer}>
                <Link to="/About" className="text-white text-decoration-none">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white">
                <Link
                  to="/Bookus"
                  className="text-white text-decoration-none"
                  onClick={CloseSideDrawer}
                >
                  Bookus
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white">
                <Link
                  to="/Review"
                  className="text-white text-decoration-none"
                  onClick={CloseSideDrawer}
                >
                  Review
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white">
                <Link
                  to="/Films"
                  className="text-white text-decoration-none"
                  onClick={CloseSideDrawer}
                >
                  Films
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white">
                <Link
                  to="/Help"
                  className="text-white text-decoration-none"
                  onClick={CloseSideDrawer}
                >
                  Help
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex demo">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 demo "
                aria-label="Search"
              />
              <Button variant="">
                <FaSearch />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
export default BasicExample;
