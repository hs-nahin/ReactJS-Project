import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavigationBar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    LogOut()
    .then()
    .catch(error => console.log(error))
  }
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-3">
              <Link
                className="text-secondary text-decoration-none"
                to="/category/0"
              >
                Home
              </Link>
              <Link className="text-secondary text-decoration-none" to="/about">
                About
              </Link>
              <Link
                className="text-secondary text-decoration-none"
                to="/career"
              >
                Career
              </Link>
            </Nav>
            <Nav className="gap-3">
              {user && (
                <FaRegUserCircle
                  className="mt-1"
                  style={{ fontSize: "2rem" }}
                />
              )}
              {user ? (
                <Button onClick={handleLogOut} variant="secondary">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
