import React from 'react';
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Copyright © 2020-{(new Date().getFullYear())} <strong>Hopper Kremer</strong>,  <small>V2.4</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
