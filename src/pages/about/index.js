import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
// import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import CV from '../../components/cv';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/about_particle.js';
import Particles from 'react-particles-js';

class About extends Component {

  // componentDidMount() {
  //   //--Hopper Kremers Portfolio website Google analytics--
  //   //--Replace with your own key !!
  //   ReactGa.initialize("UA-154721739-1");
  //   ReactGa.pageview('motasimfoad.com - About Screen');
  //   //--Hopper Kremers Portfolio website Google analytics--
  // }
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>About | Hopper Kremer</title>
                <link rel="canonical" href="http://hopperkremer.com/about" />
                <meta name="description" content="Hopper Kremer | About - Web Developer || Mobile Developer || Python Programmer" />
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           <Particles
            params={particles}
            className="particle"
          />
           <Row className="About-main">
              <HamburgerMenu />
              <CV/>
           </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
           </Animate>
       </Container>
    );
  }
}

export default About;
