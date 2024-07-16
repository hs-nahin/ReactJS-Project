import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import RightNav from "../Pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={3}>
          <LeftNav/>
          </Col>
          <Col lg={6}>
            <h1>Main Content</h1>
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
