import React from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import bg from '../../../assets/bg.png';
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <div className="mt-5">
      <h6>LogIn With</h6>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> LogIn With Google
      </Button>
      <Button className="mb-5" variant="outline-secondary">
        <FaGithub /> LogIn With GitHub
      </Button>
      <div className="mb-5">
        <h4 className="mb-2">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebookF
              style={{ cursor: "pointer" }}
              className="text-primary"
            />{" "}
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter
              style={{ cursor: "pointer" }}
              className="text-info"
            />{" "}
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram
              style={{ cursor: "pointer" }}
              className="text-danger"
            />{" "}
            Instagram
          </ListGroup.Item>
        </ListGroup>
        <QZone />
        <div>
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightNav;
