import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/NavigationBar/NavigationBar";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import RightNav from "../Pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header />
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={3}>
          <LeftNav/>
          </Col>
          <Col lg={6}>
            <Outlet/>
          </Col>
          <Col lg={3}>
          <RightNav/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
