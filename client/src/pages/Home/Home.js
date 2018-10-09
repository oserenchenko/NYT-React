import React from "react";
import Search from "../../components/Search";
import { Col, Row, Container } from "../../components/Grid";

const Home = () => (
  <Container>
    <Row>
      <Col size="md-12">
        <Search/>
      </Col>
    </Row>
  </Container>
);

export default Home;
