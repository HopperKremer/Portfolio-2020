import React from 'react';
import '../home/style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';
import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import HamburgerMenu from '../../components/hamburger_menu';


//--Hopper Kremers Portfolio website Google analytics--
//--Replace with your own key !!
function Analytics(){
  ReactGa.initialize("UA-154721739-1")
  ReactGa.pageview('hopperkremer.com - Home Screen')
}
//--Hopper Kremers Portfolio website Google analytics--

function Home() {
  Analytics()
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | Hopper Kremer</title>
                  <link rel="canonical" href="http://hopperkremer.com/home" />
                  <meta name="description" content="Hopper Kremer | Home - Jr. Developer" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
            <HamburgerMenu />
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  xl={7}  className="App-left">
                <HomeLeft />
              </Col>
              <Col  xl={5} className="App-right">
                <HomeRight />
              </Col>
            </Row>
            <Row className="App-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default Home;
