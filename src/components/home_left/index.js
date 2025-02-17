import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
   Link
  } from "react-router-dom";

  function Home_Left() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hello! 
         </h1>
         <h2 className="second_line">
           I am <strong>Hopper Kremer</strong>
         </h2>
         <h3>
         <ReactTypingEffect
           text="Web Developer / Mobile Developer / Python Programmer" //text=["Hello.", "World!"]
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
         </h3>
          
           <br />
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">About</Link></Button> &nbsp;
           {/* <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" className="home-left-aboutme">Contact Me</Link></Button> */}
           <Button variant="outline-light" size="lg" className="home-left-timeline-btn"><Link to="/timeline" style={{ textDecoration: 'none', color: 'white' }} className="home-left-timeline">Timeline</Link></Button> &nbsp;
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;
