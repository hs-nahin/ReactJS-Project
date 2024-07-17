import moment from "moment";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Marquee from "react-fast-marquee";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Provider/AuthProvider";


const Header = () => {
  const {user} = useContext(AuthContext);

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalist Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee pauseOnHover speed={150}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
            
          </Nav>
          <Nav>
            {user && <Nav.Link href="#deets"><FaRegUserCircle className="mt-1" style={{fontSize: '2rem'}}/></Nav.Link>}
            <Nav.Link eventKey={2} href="#memes">
            {user ?
            <Button variant="secondary">LogOut</Button>
            :
            <Link to='/login'><Button variant="secondary">LogIn</Button></Link>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default Header;
