import moment from "moment";
import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo.png";


const Header = () => {
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

      
    </Container>
  );
};

export default Header;
